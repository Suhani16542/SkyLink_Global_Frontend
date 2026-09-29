import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { CreateCategoryView } from '@/components/admin/CreateCategoryView';

export const metadata: Metadata = constructMetadata({
  title: 'Create Blog Category | SkyLink Admin CMS',
  description: 'Add and configure blog taxonomy and article categories.',
  noIndex: true,
  path: '/admin/blogs/categories/create',
});

export default function AdminCreateCategoryPage() {
  return <CreateCategoryView />;
}
