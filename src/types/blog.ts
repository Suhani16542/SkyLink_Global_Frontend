export interface BlogAuthor {
  name: string;
  avatar?: string;
  role?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: BlogAuthor;
  publishedAt: string;
  category: string;
  tags: string[];
  keywords?: string[];
  readingTime?: string;
  seoTitle?: string;
  seoDescription?: string;
  tableOfContents?: Array<{ id: string; title: string; level?: number }>;
}
