import { env } from '@/config/env';

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  success: boolean;
  status: number;
}

export interface ApiRequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

/**
 * Clean typed HTTP client wrapper prepared for future backend integration.
 */
export async function apiClient<T = unknown>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<ApiResponse<T>> {
  const { params, headers, ...restOptions } = options;

  let url = endpoint.startsWith('http') ? endpoint : `${env.apiUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += (url.includes('?') ? '&' : '?') + queryString;
    }
  }

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
      ...restOptions,
    });

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        error: typeof data === 'object' && data?.message ? data.message : 'An API error occurred',
      };
    }

    return {
      success: true,
      status: response.status,
      data: data as T,
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      error: error instanceof Error ? error.message : 'Network request failed',
    };
  }
}
