const PRODUCTION_SITE_URL = 'https://skylinkglobal.in';

const getSiteUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (process.env.NODE_ENV === 'production') {
    if (envUrl && !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1')) {
      return envUrl.replace(/\/+$/, '');
    }
    return PRODUCTION_SITE_URL;
  }

  return (envUrl || 'http://localhost:3000').replace(/\/+$/, '');
};

export const env = {
  siteUrl: getSiteUrl(),
  apiUrl: (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000').replace(/\/+$/, ''),
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  isProduction: process.env.NODE_ENV === 'production',
} as const;


