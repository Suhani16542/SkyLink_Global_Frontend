import { siteConfig } from '@/config/site';
import { getCanonicalUrl } from './metadata';
import type { Service, BlogPost, BreadcrumbItem } from '@/types';

/**
 * Builds Schema.org Organization JSON-LD
 */
export function generateOrganizationSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logos/logo.png`,
  };

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
 * Builds Schema.org LocalBusiness JSON-LD
 */
export function generateLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    priceRange: '$$',
  };

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
      url: siteConfig.url,
    },
    url: getCanonicalUrl(`/services/${service.slug}`),
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
        url: `${siteConfig.url}/logos/logo.png`,
      },
    },
    image: post.featuredImage || siteConfig.ogImage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getCanonicalUrl(`/blog/${post.slug}`),
    },
  };
}
