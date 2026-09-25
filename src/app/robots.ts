import type { MetadataRoute } from 'next';
import { env } from '@/config/env';

export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.siteUrl || 'https://www.skylinkglobal.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/admin', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
