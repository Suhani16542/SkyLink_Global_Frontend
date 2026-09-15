import React from 'react';
import type { BlogPost } from '@/types';
import { generateBlogListingSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';
import { JsonLd } from './JsonLd';

interface BlogListingSchemaProps {
  posts: BlogPost[];
  path?: string;
}

export function BlogListingSchema({ posts, path = '/blog' }: BlogListingSchemaProps) {
  const collectionSchema = generateBlogListingSchema(posts, path);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'News & Blogs', item: path },
  ]);

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
