import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { getAllBlogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils/formatters';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Newspaper,
  Tag,
  Search,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Global Trade & Logistics Blogs | SkyLink Insights',
  description:
    'Read the latest blogs on international trade compliance, customs brokerage, cold-chain logistics engineering, and direct carrier freight negotiation.',
  path: '/news/blogs',
});

const blogImages: Record<string, string> = {
  'navigating-global-trade-compliance-2026': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop',
  'optimizing-cold-chain-pharmaceutical-shipments': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop',
  'reducing-export-logistics-costs-direct-carrier-contracting': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
};

export default async function NewsBlogsPage() {
  const posts = await getAllBlogPosts();
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center">
            <ScrollReveal effect="fade-down" delay={0}>
              <Breadcrumbs
                items={[
                  { name: 'Home', item: '/' },
                  { name: 'News', item: '/news/blogs' },
                  { name: 'Blogs', item: '/news/blogs' },
                ]}
                className="text-neutral-400 mb-6 justify-center"
              />
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-5">
            <ScrollReveal effect="fade-up" delay={80}>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                <Newspaper className="w-3.5 h-3.5" />
                Industry Thought Leadership
              </span>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={140}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                SkyLink Trade &amp; Logistics Blogs
              </h1>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                Perspectives, tactical guidance, and field insights from our trade compliance officers, cold-chain engineers, and maritime freight analysts.
              </p>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={260}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/news/blogs"
                  className="rounded-full bg-sky-500 text-white text-xs font-bold px-4 py-2 shadow-sm"
                >
                  All Blog Posts
                </Link>
                <Link
                  href="/news/articles"
                  className="rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors text-xs font-bold px-4 py-2 border border-white/20 flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  View Regulatory Articles &amp; Reports &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. MAIN BLOG DIRECTORY */}
      <section className="py-16 sm:py-24 bg-neutral-50">
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
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-[#0284C7] border border-sky-200 uppercase">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    {featuredPost.readingTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
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
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                  >
                    Read Full Post
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                variant="bordered"
                className="rounded-3xl bg-white border-neutral-200 overflow-hidden shadow-xs hover-lift flex flex-col justify-between p-0"
              >
                <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={blogImages[post.slug] || 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop'}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-[#07192D]/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-sky-300 border border-white/20 uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
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

                    <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#0284C7] transition-colors">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-4">
                    <span className="text-xs font-semibold text-neutral-700">{post.author.name}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0369A1]"
                    >
                      Read Post &rarr;
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Looking for Formal Regulatory Whitepapers?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Explore our dedicated Articles section for technical circulars, policy assessments, and statutory compliance briefs.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/news/articles" variant="secondary" size="md">
              Browse Regulatory Articles
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/request-consultation" variant="outline-light" size="md">
              Request Trade Advisory
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
