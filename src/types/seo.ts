export interface OpenGraphMetadata {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  locale?: string;
  type?: 'website' | 'article';
}

export interface TwitterMetadata {
  card?: 'summary' | 'summary_large_image';
  title?: string;
  description?: string;
  images?: string[];
  creator?: string;
}

export interface PageSeoEntry {
  title: string;
  description: string;
  path: string;
  /** Primary target keyword for the page (to be populated during keyword research) */
  primaryKeyword?: string;
  /** Secondary supporting keywords for the page (to be populated during keyword research) */
  secondaryKeywords?: string[];
  /** Combined or additional meta keywords */
  keywords?: string[];
  /** Custom OpenGraph title if different from meta title */
  ogTitle?: string;
  /** Custom OpenGraph description if different from meta description */
  ogDescription?: string;
  /** Custom OpenGraph image URL */
  ogImage?: string;
  /** Custom Twitter Card title */
  twitterTitle?: string;
  /** Custom Twitter Card description */
  twitterDescription?: string;
  /** Custom Twitter Card image */
  twitterImage?: string;
  /** Twitter card display mode */
  twitterCard?: 'summary' | 'summary_large_image';
  /** Flag to prevent search engines from indexing the page */
  noIndex?: boolean;
  /** OpenGraph entity type */
  type?: 'website' | 'article';
  /** Optional ISO publish timestamp for articles */
  publishedTime?: string;
  /** Optional authors list */
  authors?: string[];
}

export interface SEOMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}
