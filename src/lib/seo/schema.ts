import { siteConfig } from '@/config/site';
import { env } from '@/config/env';
import { getCanonicalUrl } from './metadata';
import type { Service, BlogPost, BreadcrumbItem, Industry } from '@/types';

/**
 * Builds Schema.org WebSite JSON-LD
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: env.siteUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: env.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${env.siteUrl}/logos/logo.png`,
      },
    },
  };
}

/**
 * Builds Schema.org Organization JSON-LD
 */
export function generateOrganizationSchema() {
  const sameAs = Object.values(siteConfig.socialLinks || {}).filter(Boolean);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: env.siteUrl,
    logo: `${env.siteUrl}/logos/logo.png`,
    description: siteConfig.description,
  };

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  if (siteConfig.contact.email) {
    schema.email = siteConfig.contact.email;
  }
  if (siteConfig.contact.phone) {
    schema.telephone = siteConfig.contact.phone;
  }
  if (siteConfig.contact.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressCountry: 'India',
    };
  }

  return schema;
}

/**
 * Builds Schema.org LocalBusiness / ProfessionalService JSON-LD
 */
export function generateLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: env.siteUrl,
    image: siteConfig.ogImage,
    priceRange: '$$',
    description: siteConfig.description,
  };

  if (siteConfig.contact.phone) {
    schema.telephone = siteConfig.contact.phone;
  }
  if (siteConfig.contact.email) {
    schema.email = siteConfig.contact.email;
  }
  if (siteConfig.contact.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressCountry: 'India',
    };
  }

  return schema;
}

/**
 * Builds Schema.org Service JSON-LD
 */
export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription || service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: env.siteUrl,
    },
    url: getCanonicalUrl(`/services/${service.slug}`),
  };
}

/**
 * Builds Schema.org Industry / WebPage JSON-LD
 */
export function generateIndustrySchema(industry: Industry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: industry.title,
    description: industry.description,
    url: getCanonicalUrl(`/industries/${industry.slug}`),
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: env.siteUrl,
    },
  };
}

/**
 * Builds Schema.org BreadcrumbList JSON-LD
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : getCanonicalUrl(item.item),
    })),
  };
}

/**
 * Builds Schema.org Article JSON-LD
 */
export function generateArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: getCanonicalUrl(`/blog/${post.slug}`),
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${env.siteUrl}/logos/logo.png`,
      },
    },
    image: post.featuredImage || siteConfig.ogImage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getCanonicalUrl(`/blog/${post.slug}`),
    },
  };
}
