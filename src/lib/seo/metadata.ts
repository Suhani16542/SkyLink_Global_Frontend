import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { env } from '@/config/env';
import { SEO_DEFAULTS } from './constants';
import type { SEOMetadataParams, Service, BlogPost, Industry } from '@/types';

/**
 * Builds canonical URL from a path
 */
export function getCanonicalUrl(path = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${env.siteUrl}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Constructs standard Next.js Metadata object with full OpenGraph, Twitter, and canonical configuration.
 */
export function constructMetadata({
  title,
  description = SEO_DEFAULTS.description,
  path = '',
  image = siteConfig.ogImage,
  noIndex = false,
  type = 'website',
  publishedTime,
  authors,
}: SEOMetadataParams = {}): Metadata {
  const canonical = getCanonicalUrl(path);
  const formattedTitle = title ? title : SEO_DEFAULTS.defaultTitle;

  return {
    title: title
      ? {
          default: title,
          template: SEO_DEFAULTS.titleTemplate,
        }
      : {
          default: SEO_DEFAULTS.defaultTitle,
          template: SEO_DEFAULTS.titleTemplate,
        },
    description,
    keywords: [...SEO_DEFAULTS.keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: formattedTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: formattedTitle,
        },
      ],
      locale: SEO_DEFAULTS.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description,
      images: [image],
    },
    robots: noIndex ? SEO_DEFAULTS.robotsAdmin : SEO_DEFAULTS.robotsDefault,
    metadataBase: new URL(env.siteUrl),
  };
}

/**
 * Metadata builder for Service pages
 */
export function constructServiceMetadata(service: Service): Metadata {
  return constructMetadata({
    title: service.seoTitle || `${service.title} | Services`,
    description: service.seoDescription || service.shortDescription || service.description,
    path: `/services/${service.slug}`,
    image: service.image || siteConfig.ogImage,
  });
}

/**
 * Metadata builder for Blog posts
 */
export function constructBlogMetadata(post: BlogPost): Metadata {
  return constructMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.featuredImage || siteConfig.ogImage,
    type: 'article',
    publishedTime: post.publishedAt,
    authors: [post.author.name],
  });
}

/**
 * Metadata builder for Industry pages
 */
export function constructIndustryMetadata(industry: Industry): Metadata {
  return constructMetadata({
    title: industry.seoTitle || `${industry.title} | Industries`,
    description: industry.seoDescription || industry.description,
    path: `/industries/${industry.slug}`,
    image: industry.image || siteConfig.ogImage,
  });
}
