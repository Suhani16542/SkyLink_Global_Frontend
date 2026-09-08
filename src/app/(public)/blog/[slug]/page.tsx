import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blog';
import { constructBlogMetadata } from '@/lib/seo/metadata';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BlogDetailView } from '@/components/blog/BlogDetailView';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug || slug === '[object Object]') {
    return {
      title: 'Article Not Found | SkyLink Global Services',
    };
  }
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | SkyLink Global Services',
    };
  }

  return constructBlogMetadata(post);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  if (!slug || slug === '[object Object]') {
    notFound();
  }
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#F8FAFC]">
      <ArticleSchema post={post} />
      <BlogDetailView post={post} relatedPosts={relatedPosts} />
    </div>
  );
}
