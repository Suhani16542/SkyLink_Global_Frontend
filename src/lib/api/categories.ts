import { apiClient, ApiResponse } from './client';
import { API_ENDPOINTS } from './endpoints';

export interface CategoryItem {
  _id?: string;
  id?: string;
  title: string;
  name?: string;
  slug: string;
  description?: string;
  count?: number;
  articleCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCategoryPayload {
  title: string;
  slug: string;
  description?: string;
}

export interface CategoryListResponse {
  categories?: CategoryItem[];
  data?: CategoryItem[];
  [key: string]: any;
}

/**
 * Fallback static categories list to ensure smooth UX before backend seeding
 */
export const DEFAULT_BLOG_CATEGORIES: CategoryItem[] = [
  { id: 'cat-1', title: 'EXIM Consultancy', slug: 'exim-consultancy', description: 'Expert guidance on foreign trade policies and customs compliance.' },
  { id: 'cat-2', title: 'Global Logistics', slug: 'global-logistics', description: 'Cross-border supply chain operations and multi-modal freight routes.' },
  { id: 'cat-3', title: 'Trade Compliance', slug: 'trade-compliance', description: 'Regulatory, tariff, and customs documentation standards.' },
  { id: 'cat-4', title: 'Import Export', slug: 'import-export', description: 'Practical operational insights for global shippers and trading houses.' },
  { id: 'cat-5', title: 'Shipping & Freight', slug: 'shipping-freight', description: 'Ocean FCL/LCL, air cargo, and multimodal forwarding strategies.' },
  { id: 'cat-6', title: 'Customs', slug: 'customs', description: 'Port clearance, ICEGATE filing, and customs duty valuation.' },
  { id: 'cat-7', title: 'Supply Chain', slug: 'supply-chain', description: 'End-to-end supply chain optimization and inventory tracking.' },
  { id: 'cat-8', title: 'Industry Insights', slug: 'industry-insights', description: 'Market intelligence, shipping index updates, and trade trends.' },
];

/**
 * Fetch all blog categories from backend API
 */
export async function getCategories(): Promise<ApiResponse<CategoryItem[] | { categories: CategoryItem[] }>> {
  return apiClient<CategoryItem[] | { categories: CategoryItem[] }>(API_ENDPOINTS.categories.list, {
    method: 'GET',
    timeoutMs: 8000,
  });
}

/**
 * Create a new blog category
 */
export async function createCategory(payload: CreateCategoryPayload): Promise<ApiResponse<CategoryItem>> {
  return apiClient<CategoryItem>(API_ENDPOINTS.categories.create, {
    method: 'POST',
    body: payload,
    timeoutMs: 15000,
  });
}
