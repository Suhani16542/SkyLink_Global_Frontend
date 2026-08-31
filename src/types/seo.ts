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

export interface SEOMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}
