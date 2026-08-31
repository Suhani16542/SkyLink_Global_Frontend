import React from 'react';
import type { BlogPost } from '@/types';
import { generateArticleSchema } from '@/lib/seo/schema';
import { JsonLd } from './JsonLd';

interface ArticleSchemaProps {
  post: BlogPost;
}

export function ArticleSchema({ post }: ArticleSchemaProps) {
  const schema = generateArticleSchema(post);
  return <JsonLd data={schema} />;
}
