import React from 'react';
import type { BreadcrumbItem } from '@/types';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';
import { JsonLd } from './JsonLd';

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = generateBreadcrumbSchema(items);
  return <JsonLd data={schema} />;
}
