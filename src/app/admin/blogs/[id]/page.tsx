import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { CreateBlogView } from '@/components/admin/CreateBlogView';

export const metadata: Metadata = constructMetadata({
  title: 'Edit Blog Post | SkyLink Admin CMS',
  description: 'Update article content, SEO metadata and publication status.',
  noIndex: true,
  path: '/admin/blogs',
});

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AdminEditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
  return <CreateBlogView blogId={id} />;
}
