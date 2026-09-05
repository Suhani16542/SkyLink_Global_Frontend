import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { env } from '@/config/env';
import { SEO_DEFAULTS } from './constants';
import { getPageSeo, getPageSeoByPath } from '@/config/pageSeo';
import type { SEOMetadataParams, Service, BlogPost, Industry } from '@/types';

/**
 * Builds canonical URL from a path, ensuring proper production baseUrl formatting
 */
export function getCanonicalUrl(path = ''): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const normalizedPath = cleanPath === '/' ? '' : cleanPath.replace(/\/$/, '');
  return `${env.siteUrl}${normalizedPath}`;
}

/**
 * Constructs standard Next.js Metadata object with full OpenGraph, Twitter, canonical, and robots configuration.
 */
export function constructMetadata(params: SEOMetadataParams = {}): Metadata {
  const {
    title,
    description = SEO_DEFAULTS.description,
    path = '',
    image = siteConfig.ogImage,
    keywords = [],
    primaryKeyword,
    secondaryKeywords = [],
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    twitterCard = 'summary_large_image',
    noIndex = false,
    type = 'website',
    publishedTime,
    authors,
  } = params;

  const canonical = getCanonicalUrl(path);
  const formattedTitle = title || SEO_DEFAULTS.defaultTitle;
  const metaDescription = description || SEO_DEFAULTS.description;
  const resolvedOgTitle = ogTitle || formattedTitle;
  const resolvedOgDescription = ogDescription || metaDescription;
  const resolvedTwitterTitle = twitterTitle || resolvedOgTitle;
  const resolvedTwitterDescription = twitterDescription || resolvedOgDescription;

  // Aggregate keywords safely without duplicates or empty values
  const keywordSet = new Set<string>();
  if (primaryKeyword?.trim()) {
    keywordSet.add(primaryKeyword.trim());
  }
  secondaryKeywords?.forEach((kw) => {
    if (kw?.trim()) keywordSet.add(kw.trim());
  });
  keywords?.forEach((kw) => {
    if (kw?.trim()) keywordSet.add(kw.trim());
  });
  // Add defaults if no page-specific keywords are yet assigned
  if (keywordSet.size === 0) {
    SEO_DEFAULTS.keywords.forEach((kw) => keywordSet.add(kw));
  }
  const resolvedKeywords = Array.from(keywordSet);

  const metadata: Metadata = {
    title: title
      ? {
          default: title,
          template: SEO_DEFAULTS.titleTemplate,
        }
      : {
          default: SEO_DEFAULTS.defaultTitle,
          template: SEO_DEFAULTS.titleTemplate,
        },
    description: metaDescription,
    keywords: resolvedKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: image.startsWith('http') ? image : `${env.siteUrl}${image.startsWith('/') ? '' : '/'}${image}`,
          width: 1200,
          height: 630,
          alt: resolvedOgTitle,
        },
      ],
      locale: SEO_DEFAULTS.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: twitterCard,
      title: resolvedTwitterTitle,
      description: resolvedTwitterDescription,
      images: [image.startsWith('http') ? image : `${env.siteUrl}${image.startsWith('/') ? '' : '/'}${image}`],
    },
    robots: noIndex ? SEO_DEFAULTS.robotsAdmin : SEO_DEFAULTS.robotsDefault,
    metadataBase: new URL(env.siteUrl),
  };

  if (env.googleSiteVerification) {
    metadata.verification = {
      google: env.googleSiteVerification,
    };
  }

  return metadata;
}

/**
 * Constructs Metadata using a registered page key from `pageSeoRegistry`
 */
export function getPageMetadata(
  keyOrPath: string,
  overrides: Partial<SEOMetadataParams> = {}
): Metadata {
  const entry = getPageSeo(keyOrPath) || getPageSeoByPath(keyOrPath);

  if (!entry) {
    return constructMetadata({
      path: keyOrPath,
      ...overrides,
    });
  }

  return constructMetadata({
    title: overrides.title || entry.title,
    description: overrides.description || entry.description,
    path: overrides.path || entry.path,
    image: overrides.image || entry.ogImage,
    primaryKeyword: overrides.primaryKeyword ?? entry.primaryKeyword,
    secondaryKeywords: overrides.secondaryKeywords ?? entry.secondaryKeywords,
    keywords: overrides.keywords ?? entry.keywords,
    ogTitle: overrides.ogTitle || entry.ogTitle,
    ogDescription: overrides.ogDescription || entry.ogDescription,
    twitterTitle: overrides.twitterTitle || entry.twitterTitle,
    twitterDescription: overrides.twitterDescription || entry.twitterDescription,
    twitterCard: overrides.twitterCard || entry.twitterCard,
    noIndex: overrides.noIndex ?? entry.noIndex,
    type: overrides.type || entry.type,
    publishedTime: overrides.publishedTime || entry.publishedTime,
    authors: overrides.authors || entry.authors,
    ...overrides,
  });
}

/**
 * Metadata builder for dynamic Service pages
 */
export function constructServiceMetadata(service: Service): Metadata {
  return constructMetadata({
    title: service.seoTitle || `${service.title} | SkyLink Global Services`,
    description: service.seoDescription || service.shortDescription || service.description,
    path: `/services/${service.slug}`,
    image: service.image || siteConfig.ogImage,
  });
}

/**
 * Metadata builder for dynamic Blog posts
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
 * Metadata builder for dynamic Industry pages
 */
export function constructIndustryMetadata(industry: Industry): Metadata {
  return constructMetadata({
    title: industry.seoTitle || `${industry.title} | SkyLink Global Services`,
    description: industry.seoDescription || industry.description,
    path: `/industries/${industry.slug}`,
    image: industry.image || siteConfig.ogImage,
  });
}
