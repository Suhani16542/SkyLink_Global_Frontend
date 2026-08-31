import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getAllBlogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils/formatters';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Trade Intelligence & Global Logistics Insights | SkyLink Global Services',
  description:
    'Actionable regulatory updates, international trade compliance guidelines, customs brokerage best practices, and global supply chain strategies.',
  path: '/blog',
});

const blogImages: Record<string, string> = {
  'navigating-global-trade-compliance-2026': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop',
  'optimizing-cold-chain-pharmaceutical-shipments': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop',
  'reducing-export-logistics-costs-direct-carrier-contracting': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

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
            className="text-neutral-400"
          />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/30">
              Regulatory Intelligence &amp; Advisory
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Trade Intelligence &amp; Insights
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              In-depth analysis of DGFT policy reforms, international customs developments, cold-chain engineering, and strategic freight rate management.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Directory */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Featured Article Card */}
          {featuredPost && (
            <div className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-md hover-lift transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={blogImages[featuredPost.slug] || blogImages['navigating-global-trade-compliance-2026']}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-[#0284C7] border border-sky-200 uppercase">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readingTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featuredPost.publishedAt)}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#0284C7] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-700 font-semibold">
                    <User className="w-4 h-4 text-[#0284C7]" />
                    <span>{featuredPost.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                  >
                    <span>Read Complete Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Other Articles */}
          {regularPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-3xl border border-neutral-200 bg-white overflow-hidden hover-lift shadow-sm flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={blogImages[post.slug] || blogImages['optimizing-cold-chain-pharmaceutical-shipments']}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                        <span className="font-bold text-[#0284C7] uppercase">{post.category}</span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                        <Link href={`/blog/${post.slug}`} className="hover:text-[#0284C7] transition-colors">
                          {post.title}
                        </Link>
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div className="text-xs text-neutral-500">{formatDate(post.publishedAt)}</div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
