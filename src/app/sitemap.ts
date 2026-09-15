import type { MetadataRoute } from 'next';
import { env } from '@/config/env';
import { getAllServices } from '@/data/services';
import { getPublishedBlogPostsForSitemap } from '@/data/blog';
import { getAllIndustries, getOtherIndustries } from '@/data/industries';

/**
 * Revalidate sitemap at most once every hour (3600 seconds).
 * Enables fast Edge Caching on Vercel while automatically incorporating new blog posts in the background.
 */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.siteUrl || 'https://skylinkglobal.in';
  const staticContentDate = new Date('2026-03-01T00:00:00.000Z');

  // Base public static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: staticContentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/overview`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-choose-us/skylink-advantage`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-choose-us/traditional-vs-skylink`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: staticContentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news/blogs`,
      lastModified: staticContentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news/articles`,
      lastModified: staticContentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sustainability/eco-route`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sustainability/aeo-green`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/collaborate/freight-forwarders`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/collaborate/enquiry`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/request-consultation`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticContentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brand`,
      lastModified: staticContentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Canonical service routes (6 core services)
  const services = await getAllServices();
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: staticContentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Dynamic industry routes (Top 3 highlighted USP industries)
  const industries = await getAllIndustries();
  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: staticContentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Dynamic sector industry routes (14 comprehensive industry sectors)
  const otherIndustries = await getOtherIndustries();
  const otherIndustryRoutes: MetadataRoute.Sitemap = otherIndustries.map((item) => ({
    url: `${baseUrl}/industries/${item.id}`,
    lastModified: staticContentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Published blog routes from backend database with resilient timeout & fallback
  const publishedBlogPosts = await getPublishedBlogPostsForSitemap();
  const blogRoutes: MetadataRoute.Sitemap = publishedBlogPosts.map((post) => {
    let postDate = staticContentDate;
    if (post.publishedAt) {
      const parsed = new Date(post.publishedAt);
      if (!isNaN(parsed.getTime())) {
        postDate = parsed;
      }
    }
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  const combined = [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...otherIndustryRoutes,
    ...blogRoutes,
  ];

  // Deduplicate by URL to ensure pristine sitemap structure
  const uniqueMap = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const route of combined) {
    if (!uniqueMap.has(route.url)) {
      uniqueMap.set(route.url, route);
    }
  }

  return Array.from(uniqueMap.values());
}
