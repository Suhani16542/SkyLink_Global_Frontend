import { env } from '@/config/env';

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  success: boolean;
  status: number;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiRequestOptions extends Omit<RequestInit, 'body'> {
  params?: Record<string, string | number | boolean | undefined | null>;
  body?: any;
  token?: string;
  skipAuth?: boolean;
}

export const AUTH_TOKEN_KEY = 'skylink_jwt_token';
export const AUTH_USER_KEY = 'skylink_admin_user';

export function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  } catch {}
}

export function removeStoredAuth(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  } catch {}
}

/**
 * Clean typed HTTP client wrapper with automatic token management and error handling.
 */
export async function apiClient<T = unknown>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<ApiResponse<T>> {
  const { params, headers = {}, body, token, skipAuth, ...restOptions } = options;

  // Build the full URL
  let fullUrl: string;
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    fullUrl = endpoint;
  } else {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    fullUrl = `${env.apiUrl}${cleanEndpoint}`;
  }

  // Append query params if provided
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      fullUrl += (fullUrl.includes('?') ? '&' : '?') + queryString;
    }
  }

  // Prepare request headers
  const reqHeaders: Record<string, string> = {};

  // Attach token if available and not skipped
  if (!skipAuth) {
    const authToken = token || getStoredToken();
    if (authToken) {
      reqHeaders['Authorization'] = `Bearer ${authToken}`;
    }
  }

  // Handle headers from options
  if (headers && typeof headers === 'object' && !(headers instanceof Headers)) {
    Object.assign(reqHeaders, headers);
  }

  // Prepare body
  let reqBody: BodyInit | null | undefined = undefined;
  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;

  if (body !== undefined && body !== null) {
    if (isFormData) {
      reqBody = body;
      // Do not set Content-Type for FormData; fetch will set multipart/form-data with boundary
      delete reqHeaders['Content-Type'];
    } else if (typeof body === 'string') {
      reqBody = body;
      if (!reqHeaders['Content-Type']) {
        reqHeaders['Content-Type'] = 'application/json';
      }
    } else {
      reqBody = JSON.stringify(body);
      if (!reqHeaders['Content-Type']) {
        reqHeaders['Content-Type'] = 'application/json';
      }
    }
  }

  if (!reqHeaders['Accept']) {
    reqHeaders['Accept'] = 'application/json';
  }

  try {
    const response = await fetch(fullUrl, {
      ...restOptions,
      headers: reqHeaders,
      body: reqBody,
    });

    const contentType = response.headers.get('content-type') || '';
    let parsedData: any = null;

    if (contentType.includes('application/json')) {
      try {
        parsedData = await response.json();
      } catch {
        parsedData = null;
      }
    } else {
      try {
        parsedData = await response.text();
      } catch {
        parsedData = null;
      }
    }

    // Handle 401 Unauthorized
    if (response.status === 401) {
      removeStoredAuth();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('skylink:unauthorized'));
        if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
          window.location.href = '/admin/login';
        }
      }
      return {
        success: false,
        status: 401,
        error: (parsedData && (parsedData.message || parsedData.error)) || 'Session expired or unauthorized. Please sign in again.',
      };
    }

    if (!response.ok) {
      let errorMessage = 'An unexpected API error occurred';
      if (parsedData && typeof parsedData === 'object') {
        errorMessage = parsedData.message || parsedData.error || errorMessage;
      } else if (typeof parsedData === 'string' && parsedData.trim().length > 0) {
        errorMessage = parsedData;
      }

      return {
        success: false,
        status: response.status,
        error: errorMessage,
      };
    }

    // Backend may return { success: true, data: ..., pagination: ... } or raw data
    if (parsedData && typeof parsedData === 'object' && 'data' in parsedData) {
      return {
        success: parsedData.success !== undefined ? parsedData.success : true,
        status: response.status,
        data: parsedData.data as T,
        pagination: parsedData.pagination,
      };
    }

    return {
      success: true,
      status: response.status,
      data: parsedData as T,
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      error: error instanceof Error ? error.message : 'Unable to connect to server. Please check your connection.',
    };
  }
}
