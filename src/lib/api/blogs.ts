import { apiClient, ApiResponse } from './client';
import { API_ENDPOINTS } from './endpoints';

export interface BlogItem {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  shortDescription?: string;
  content: string;
  status: 'Draft' | 'Published' | string;
  category: string;
  technology?: string;
  featured?: boolean;
  isFeatured?: boolean;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  } | string;
  authorName?: string;
  readingTime?: string;
  estimatedReadTime?: string;
  tags?: string[];
  keywords?: string | string[];
  featuredImage?: string;
  imageAltText?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogListResponse {
  blogs?: BlogItem[];
  data?: BlogItem[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface BlogPayload {
  title: string;
  slug: string;
  keywords?: string;
  shortDescription?: string;
  excerpt?: string;
  content: string;
  status: 'Draft' | 'Published' | string;
  category: string;
  technology?: string;
  featured?: boolean;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  } | string;
  authorName?: string;
  estimatedReadTime?: string;
  readingTime?: string;
  tags?: string[];
  featuredImage?: string;
  imageAltText?: string;
  publishedAt?: string;
}

export interface ImageUploadResponse {
  url?: string;
  imageUrl?: string;
  secure_url?: string;
  [key: string]: any;
}

/**
 * Fetch all public blogs
 */
export async function getPublicBlogs(params?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}): Promise<ApiResponse<BlogItem[] | { blogs: BlogItem[]; pagination?: any }>> {
  return apiClient<BlogItem[] | { blogs: BlogItem[]; pagination?: any }>(
    API_ENDPOINTS.blogs.list,
    {
      method: 'GET',
      params,
      skipAuth: true,
    }
  );
}

/**
 * Fetch a single public blog by slug
 */
export async function getPublicBlogBySlug(slug: string): Promise<ApiResponse<BlogItem>> {
  return apiClient<BlogItem>(API_ENDPOINTS.blogs.bySlug(slug), {
    method: 'GET',
    skipAuth: true,
  });
}

/**
 * Fetch all blogs for admin portal
 */
export async function getAdminBlogs(params?: {
  page?: number;
  limit?: number;
  status?: string;
  category?: string;
  search?: string;
}): Promise<ApiResponse<BlogItem[] | { blogs: BlogItem[]; pagination?: any }>> {
  return apiClient<BlogItem[] | { blogs: BlogItem[]; pagination?: any }>(
    API_ENDPOINTS.adminBlogs.list,
    {
      method: 'GET',
      params,
    }
  );
}

/**
 * Fetch a single blog for admin by ID
 */
export async function getAdminBlogById(id: string): Promise<ApiResponse<BlogItem>> {
  return apiClient<BlogItem>(API_ENDPOINTS.adminBlogs.byId(id), {
    method: 'GET',
  });
}

/**
 * Create a new blog post
 */
export async function createBlog(payload: BlogPayload): Promise<ApiResponse<BlogItem>> {
  return apiClient<BlogItem>(API_ENDPOINTS.adminBlogs.create, {
    method: 'POST',
    body: payload,
  });
}

/**
 * Update an existing blog post
 */
export async function updateBlog(id: string, payload: Partial<BlogPayload>): Promise<ApiResponse<BlogItem>> {
  return apiClient<BlogItem>(API_ENDPOINTS.adminBlogs.update(id), {
    method: 'PUT',
    body: payload,
  });
}

/**
 * Toggle or update blog status ('Draft' | 'Published')
 */
export async function updateBlogStatus(id: string, status?: string): Promise<ApiResponse<BlogItem>> {
  return apiClient<BlogItem>(API_ENDPOINTS.adminBlogs.updateStatus(id), {
    method: 'PATCH',
    body: status ? { status } : {},
  });
}

/**
 * Toggle or update blog featured state
 */
export async function updateBlogFeatured(id: string, featured?: boolean): Promise<ApiResponse<BlogItem>> {
  return apiClient<BlogItem>(API_ENDPOINTS.adminBlogs.updateFeatured(id), {
    method: 'PATCH',
    body: featured !== undefined ? { featured } : {},
  });
}

/**
 * Delete a blog post by ID
 */
export async function deleteBlog(id: string): Promise<ApiResponse<{ message?: string }>> {
  return apiClient<{ message?: string }>(API_ENDPOINTS.adminBlogs.delete(id), {
    method: 'DELETE',
  });
}

/**
 * Upload featured image for blog
 */
export async function uploadBlogImage(file: File): Promise<ApiResponse<ImageUploadResponse>> {
  const formData = new FormData();
  formData.append('image', file);

  return apiClient<ImageUploadResponse>(API_ENDPOINTS.adminBlogs.uploadImage, {
    method: 'POST',
    body: formData,
  });
}
