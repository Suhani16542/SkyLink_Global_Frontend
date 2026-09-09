import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getAllBlogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils/formatters';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = getPageMetadata('blog');
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const blogImages: Record<string, string> = {
  'navigating-global-trade-compliance-2026': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop',
  'optimizing-cold-chain-pharmaceutical-shipments': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop',
  'reducing-export-logistics-costs-direct-carrier-contracting': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#0A2540] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', item: '/' },
              { name: 'Blog', item: '/blog' },
            ]}
            className="text-neutral-400 mb-6"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1 rounded-full border border-sky-400/30">
              Regulatory Intelligence &amp; Advisory
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight text-balance">
              Trade Intelligence &amp; Insights
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal text-pretty">
              In-depth analysis of DGFT policy reforms, international customs developments, cold-chain engineering, and strategic freight rate management.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Directory */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-3xl bg-white border border-neutral-200 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between overflow-hidden hover-lift"
                >
                  {/* Card Image Banner */}
                  <div className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                    <Image
                      src={
                        post.featuredImage ||
                        blogImages[post.slug] ||
                        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop'
                      }
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="rounded-full bg-[#07192D]/85 backdrop-blur-md px-3 py-1 text-[10.5px] font-bold text-sky-300 border border-white/20 uppercase tracking-wide shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      {/* Metadata row */}
                      <div className="flex items-center gap-2.5 text-[11.5px] text-neutral-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{post.readingTime || '5 min read'}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#0284C7] transition-colors line-clamp-2 leading-snug">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-[13px] text-neutral-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs mt-3">
                      <div className="flex items-center gap-2 text-neutral-700 font-semibold">
                        <div className="w-6 h-6 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 flex items-center justify-center text-[10px] font-bold">
                          {post.author.name
                            ? post.author.name.split(' ').map((n) => n[0]).slice(0, 2).join('')
                            : 'SL'}
                        </div>
                        <span className="text-[11.5px] text-neutral-600 line-clamp-1">{post.author.name}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] px-3 py-1.5 rounded-lg shadow-2xs transition-all group-hover:shadow-xs"
                      >
                        <span>View Post</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center text-neutral-500">
              <p className="text-sm">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
