'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  AdminUser,
  LoginCredentials,
  loginAdmin,
  getAdminProfile,
  logoutAdmin,
} from '@/lib/api/auth';
import {
  getStoredToken,
  removeStoredAuth,
  AUTH_USER_KEY,
} from '@/lib/api/client';

interface AuthContextType {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from storage on client mount
  const checkAuth = useCallback(async () => {
    setIsLoading(true);
    const storedToken = getStoredToken();

    if (!storedToken) {
      setUser(null);
      setToken(null);
      setIsLoading(false);
      return;
    }

    setToken(storedToken);

    // Try to restore user cached in localStorage first
    try {
      const cachedUser = localStorage.getItem(AUTH_USER_KEY);
      if (cachedUser) {
        setUser(JSON.parse(cachedUser));
      }
    } catch {}

    // Verify session with backend /api/auth/me
    try {
      const res = await getAdminProfile();
      if (res.success && res.data) {
        const adminData = (res.data as any).admin || res.data;
        setUser(adminData);
        try {
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(adminData));
        } catch {}
      } else if (res.status === 401) {
        removeStoredAuth();
        setUser(null);
        setToken(null);
      }
    } catch {
      // Keep cached state if offline/network hiccup, or clear if 401
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();

    // Listen for 401 events dispatched by apiClient
    const handleUnauthorized = () => {
      setUser(null);
      setToken(null);
    };

    window.addEventListener('skylink:unauthorized', handleUnauthorized);
    return () => {
      window.removeEventListener('skylink:unauthorized', handleUnauthorized);
    };
  }, [checkAuth]);

  // Login action
  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const cleanCredentials: LoginCredentials = {
        email: (credentials.email || '').trim(),
        password: (credentials.password || '').trim(),
      };
      const res = await loginAdmin(cleanCredentials);
      if (res.success && res.data) {
        const receivedToken = res.data.token || res.data.jwt || (res.data as any).accessToken;
        const receivedUser = (res.data as any).admin || res.data.user || {
          name: 'Admin Manager',
          email: cleanCredentials.email,
          role: 'Administrator',
        };

        if (receivedToken) {
          setToken(receivedToken);
        }
        setUser(receivedUser);
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return {
          success: false,
          error: res.error || 'Invalid credentials or login failed',
        };
      }
    } catch (err: any) {
      setIsLoading(false);
      return {
        success: false,
        error: err.message || 'An error occurred during sign in',
      };
    }
  };

  // Logout action
  const logout = () => {
    logoutAdmin();
    setUser(null);
    setToken(null);
    router.push('/admin/login');
  };

  const refreshProfile = async () => {
    const res = await getAdminProfile();
    if (res.success && res.data) {
      setUser(res.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        isLoading,
        login,
        logout,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
