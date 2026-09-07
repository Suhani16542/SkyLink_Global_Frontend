/**
 * Centralized API endpoints mapping for SkyLink backend connection
 */
export const API_ENDPOINTS = {
  // Auth endpoints
  auth: {
    login: '/api/auth/login',
    me: '/api/auth/me',
  },
  // Forms endpoints
  forms: {
    submit: '/api/forms/submit',
  },
  // Public blog endpoints
  blogs: {
    list: '/api/blogs',
    bySlug: (slug: string) => `/api/blogs/${slug}`,
  },
  // Admin blog endpoints
  adminBlogs: {
    create: '/api/blogs',
    list: '/api/blogs/admin',
    byId: (id: string) => `/api/blogs/admin/${id}`,
    update: (id: string) => `/api/blogs/${id}`,
    updateStatus: (id: string) => `/api/blogs/${id}/status`,
    updateFeatured: (id: string) => `/api/blogs/${id}/featured`,
    delete: (id: string) => `/api/blogs/${id}`,
    uploadImage: '/api/blogs/upload-image',
  },
  // General public endpoints
  public: {
    services: '/api/services',
    serviceBySlug: (slug: string) => `/api/services/${slug}`,
    industries: '/api/industries',
    industryBySlug: (slug: string) => `/api/industries/${slug}`,
    submitConsultation: '/api/consultation-request',
    submitContact: '/api/contact',
  },
  // General admin endpoints
  admin: {
    leads: '/api/admin/leads',
    leadById: (id: string) => `/api/admin/leads/${id}`,
    customers: '/api/admin/customers',
    customerById: (id: string) => `/api/admin/customers/${id}`,
    quotations: '/api/admin/quotations',
    quotationById: (id: string) => `/api/admin/quotations/${id}`,
    shipments: '/api/admin/shipments',
    shipmentById: (id: string) => `/api/admin/shipments/${id}`,
    documents: '/api/admin/documents',
    services: '/api/admin/services',
    settings: '/api/admin/settings',
  },
} as const;
