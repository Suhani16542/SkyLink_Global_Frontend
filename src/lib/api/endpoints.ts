/**
 * Centralized API endpoints mapping for future backend connection
 */
export const API_ENDPOINTS = {
  // Public endpoints
  public: {
    services: '/services',
    serviceBySlug: (slug: string) => `/services/${slug}`,
    industries: '/industries',
    industryBySlug: (slug: string) => `/industries/${slug}`,
    blogPosts: '/blog',
    blogPostBySlug: (slug: string) => `/blog/${slug}`,
    submitConsultation: '/consultation-request',
    submitContact: '/contact',
  },
  // Admin endpoints
  admin: {
    auth: {
      login: '/admin/auth/login',
      logout: '/admin/auth/logout',
      me: '/admin/auth/me',
    },
    leads: '/admin/leads',
    leadById: (id: string) => `/admin/leads/${id}`,
    customers: '/admin/customers',
    customerById: (id: string) => `/admin/customers/${id}`,
    quotations: '/admin/quotations',
    quotationById: (id: string) => `/admin/quotations/${id}`,
    shipments: '/admin/shipments',
    shipmentById: (id: string) => `/admin/shipments/${id}`,
    documents: '/admin/documents',
    services: '/admin/services',
    settings: '/admin/settings',
  },
} as const;
