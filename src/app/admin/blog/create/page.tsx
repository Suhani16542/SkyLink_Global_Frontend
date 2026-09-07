import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { CreateBlogView } from '@/components/admin/CreateBlogView';

export const metadata: Metadata = constructMetadata({
  title: 'Create New Blog | SkyLink Admin CMS',
  description: 'Create, format and publish a new Skylink article.',
  noIndex: true,
  path: '/admin/blog/create',
});

export default function AdminBlogCreatePage() {
  return <CreateBlogView />;
}
