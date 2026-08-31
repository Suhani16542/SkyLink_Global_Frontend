import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blog';
import { constructBlogMetadata } from '@/lib/seo/metadata';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils/formatters';
import { Calendar, Clock } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
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
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white">
      <ArticleSchema post={post} />

      {/* Header Strip */}
      <section className="bg-[#0A2540] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', item: '/' },
              { name: 'Blog', item: '/blog' },
              { name: post.title, item: `/blog/${post.slug}` },
            ]}
            className="text-neutral-400"
          />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300">
              <span className="rounded-full bg-sky-400/20 border border-sky-400/30 px-3 py-0.5 text-sky-300 font-bold uppercase">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
              <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 flex items-center justify-center font-bold">
                SL
              </div>
              <div>
                <div className="font-semibold text-white">{post.author.name}</div>
                <div className="text-xs text-neutral-400">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <div className="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Table of Contents
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700 font-medium">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Text Content */}
        <article className="prose prose-neutral max-w-none text-neutral-800 leading-relaxed text-base space-y-6">
          <div className="rounded-xl border-l-4 border-[#0284C7] bg-sky-50/60 p-5 text-sm sm:text-base text-neutral-800 italic leading-relaxed">
            {post.excerpt}
          </div>

          <div className="pt-4 whitespace-pre-line text-neutral-800 leading-relaxed space-y-4">
            {post.content}
          </div>
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-neutral-500 uppercase mr-2">Topics:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700 border border-neutral-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Advisory Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0A2540] to-[#07192D] p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Need guidance on these trade regulations?</h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Our EXIM counsel can audit your documentation and ensure statutory compliance.
            </p>
          </div>
          <Button href="/request-consultation" variant="secondary" size="md" className="shrink-0">
            Request Trade Audit
          </Button>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-neutral-200">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Related Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Card key={rPost.id} variant="bordered" className="p-6 bg-white hoverEffect">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                    {rPost.category}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-neutral-900 leading-snug">
                    <Link href={`/blog/${rPost.slug}`} className="hover:text-[#0284C7] transition-colors">
                      {rPost.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 line-clamp-2">{rPost.excerpt}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
