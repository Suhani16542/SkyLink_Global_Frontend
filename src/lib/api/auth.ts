import { apiClient, ApiResponse, setStoredToken, removeStoredAuth, AUTH_USER_KEY } from './client';
import { API_ENDPOINTS } from './endpoints';

export interface AdminUser {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  role?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponseData {
  token?: string;
  jwt?: string;
  user?: AdminUser;
  admin?: AdminUser;
  [key: string]: any;
}

/**
 * Authenticate admin user with email and password
 */
export async function loginAdmin(credentials: LoginCredentials): Promise<ApiResponse<LoginResponseData>> {
  const sanitizedCredentials: LoginCredentials = {
    email: (credentials.email || '').trim(),
    password: (credentials.password || '').trim(),
  };

  const response = await apiClient<LoginResponseData>(API_ENDPOINTS.auth.login, {
    method: 'POST',
    body: sanitizedCredentials,
    skipAuth: true,
  });

  if (response.success && response.data) {
    const token = response.data.token || response.data.jwt || (response.data as any).accessToken;
    const user = response.data.user || response.data.admin;

    if (token) {
      setStoredToken(token);
    }
    if (user && typeof window !== 'undefined') {
      try {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      } catch {}
    }
  }

  return response;
}

/**
 * Fetch current authenticated admin user profile
 */
export async function getAdminProfile(): Promise<ApiResponse<AdminUser>> {
  return apiClient<AdminUser>(API_ENDPOINTS.auth.me, {
    method: 'GET',
  });
}

/**
 * Sign out admin user
 */
export function logoutAdmin(): void {
  removeStoredAuth();
}
