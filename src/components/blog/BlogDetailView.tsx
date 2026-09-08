'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { EnrichedBlogPost } from '@/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { formatDate } from '@/lib/utils/formatters';
import {
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Sparkles,
  Tag,
  KeyRound,
  FileText,
  List,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageCircle,
  Image as ImageIcon,
} from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: 2 | 3 | 4;
}

interface BlogDetailViewProps {
  post: EnrichedBlogPost;
  relatedPosts: EnrichedBlogPost[];
}

/**
 * Slugify heading text to a stable, clean URL-friendly ID
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/g, '') // remove any inner HTML tags
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function BlogDetailView({ post, relatedPosts }: BlogDetailViewProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Dynamically extract Table of Contents from headings (H2, H3, H4) in the blog content
  const { processedHtml, tocItems } = useMemo(() => {
    const rawContent = post.content || '';
    const items: TocItem[] = [];
    const usedIds = new Set<string>();

    const processed = rawContent.replace(
      /<(h[234])(\s+[^>]*)?>(.*?)<\/\1>/gi,
      (match, tag, attrs = '', innerText) => {
        const level = parseInt(tag[1], 10) as 2 | 3 | 4;
        const cleanTitle = innerText.replace(/<[^>]+>/g, '').trim();
        let id = slugify(cleanTitle);

        if (!id) id = `section-${items.length + 1}`;
        if (usedIds.has(id)) {
          id = `${id}-${items.length + 1}`;
        }
        usedIds.add(id);

        items.push({
          id,
          title: cleanTitle,
          level,
        });

        // Retain existing attributes and inject ID with proper scroll margin
        const existingClass = (attrs.match(/class=["']([^"']*)["']/) || [])[1] || '';
        const cleanAttrs = attrs.replace(/id=["'][^"']*["']/i, '');

        return `<${tag} id="${id}" class="${existingClass} scroll-mt-36" ${cleanAttrs}>${innerText}</${tag}>`;
      }
    );

    return {
      processedHtml: processed,
      tocItems: items,
    };
  }, [post.content]);

  // Track active heading on scroll & calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }

      // Detect active TOC heading
      if (tocItems.length === 0) return;

      const headingElements = tocItems
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

      const scrollPosition = window.scrollY + 160;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSectionId(el.id);
          return;
        }
      }

      if (headingElements.length > 0 && window.scrollY < headingElements[0].offsetTop) {
        setActiveSectionId(headingElements[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tocItems]);

  const handleScrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 140; // Accounts for sticky navbar (110px) + 30px visual buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSectionId(id);
      setIsMobileTocOpen(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined') {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 3000);
      }
    } catch {}
  };

  const handleShareSocial = (platform: 'linkedin' | 'twitter' | 'whatsapp') => {
    if (typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);

    let shareUrl = '';
    if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=450');
    }
  };

  // Word count estimate
  const wordCount = useMemo(() => {
    const cleanText = (post.content || '').replace(/<[^>]+>/g, ' ').trim();
    return cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
  }, [post.content]);

  const allKeywords = post.keywords && post.keywords.length > 0 ? post.keywords : [];
  const allTags = post.tags && post.tags.length > 0 ? post.tags : [];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-neutral-900 pb-20">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#0284C7] to-[#0A2540] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Responsive 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Sticky Table of Contents & Back Link (3 Cols) */}
          {/* ============================================================ */}
          <aside className="lg:col-span-3 xl:col-span-3 hidden lg:block sticky top-[132px] max-h-[calc(100vh-145px)] overflow-y-auto pr-1 pb-6 space-y-4">
            {/* Table of Contents Card */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xs p-4.5 space-y-3.5">
              <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-100">
                <List className="w-4 h-4 text-[#0284C7]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                  Table of Contents
                </h3>
              </div>

              {tocItems.length > 0 ? (
                <nav className="space-y-0.5 pr-0.5">
                  {tocItems.map((item) => {
                    const isActive = activeSectionId === item.id;
                    const paddingLeft =
                      item.level === 4 ? 'pl-7 text-[11px]' : item.level === 3 ? 'pl-4 text-[11.5px]' : 'pl-2 text-xs font-medium';

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleScrollToHeading(item.id)}
                        className={`w-full text-left transition-all py-1.5 px-2.5 rounded-lg leading-snug flex items-start gap-2 group cursor-pointer ${paddingLeft} ${
                          isActive
                            ? 'bg-sky-50 text-[#0284C7] font-bold border-l-2 border-[#0284C7]'
                            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-l-2 border-transparent'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${
                            isActive
                              ? 'bg-[#0284C7]'
                              : 'bg-neutral-300 group-hover:bg-neutral-400'
                          }`}
                        />
                        <span className="line-clamp-2">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>
              ) : (
                <p className="text-xs text-neutral-400 italic">
                  Headings will automatically appear here dynamically.
                </p>
              )}
            </div>

            {/* Back to All Articles Navigation Button */}
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-bold text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl shadow-2xs hover:shadow-xs transition-all active:scale-[0.99] group"
            >
              <ArrowLeft className="w-4 h-4 text-[#0284C7] group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Articles</span>
            </Link>

            {/* Quick Share Widget in Left Sidebar */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-2xs space-y-3">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                Share Article
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleShareSocial('linkedin')}
                  title="Share on LinkedIn"
                  className="p-2 rounded-lg bg-neutral-50 hover:bg-sky-50 text-neutral-600 hover:text-[#0A66C2] border border-neutral-200 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleShareSocial('twitter')}
                  title="Share on X (Twitter)"
                  className="p-2 rounded-lg bg-neutral-50 hover:bg-sky-50 text-neutral-600 hover:text-neutral-900 border border-neutral-200 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleShareSocial('whatsapp')}
                  title="Share on WhatsApp"
                  className="p-2 rounded-lg bg-neutral-50 hover:bg-emerald-50 text-neutral-600 hover:text-emerald-600 border border-neutral-200 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  title="Copy Link"
                  className={`p-2 rounded-lg border transition-colors cursor-pointer flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold ${
                    copiedLink
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                  }`}
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </aside>

          {/* ============================================================ */}
          {/* CENTER COLUMN: Main Blog Post Content (6 Cols) */}
          {/* ============================================================ */}
          <main className="lg:col-span-6 xl:col-span-6 space-y-6">
            <article className="bg-white rounded-3xl border border-neutral-200 shadow-xs p-6 sm:p-10 space-y-7">
              {/* Top Breadcrumb Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-2 -mb-2">
                <Breadcrumbs
                  items={[
                    { name: 'Home', item: '/' },
                    { name: 'Blog', item: '/blog' },
                    { name: post.category || 'Article', item: `/blog?category=${encodeURIComponent(post.category || '')}` },
                  ]}
                  className="!mb-0 text-[11.5px] text-neutral-500 font-medium"
                />
                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200/60">
                  {post.category}
                </span>
              </div>

              {/* Main Article Title */}
              <h1 className="text-xl sm:text-2xl lg:text-[27px] font-bold text-[#0A2540] tracking-tight leading-[1.32]">
                {post.title}
              </h1>

              {/* Excerpt / Summary Callout Box */}
              {post.excerpt && (
                <div className="rounded-2xl border-l-4 border-[#0284C7] bg-gradient-to-r from-sky-50/70 via-sky-50/30 to-white p-5 sm:p-6 text-sm sm:text-base text-neutral-800 leading-relaxed font-normal shadow-2xs border-y border-r border-sky-100/70">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
                        Executive Summary
                      </span>
                      <p className="italic text-neutral-700 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-100 text-xs text-neutral-600">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A2540] text-sky-300 flex items-center justify-center font-bold text-xs shadow-xs border border-sky-400/30">
                    {post.author.name
                      ? post.author.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')
                      : 'SL'}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-sm">{post.author.name}</div>
                    <div className="text-[11px] text-neutral-500">
                      {post.author.role || 'EXIM & Trade Specialist'}
                    </div>
                  </div>
                </div>

                {/* Category, Date & Read Time */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-sky-50 text-[#0284C7] border border-sky-200/80 px-3 py-1 font-bold text-xs uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </span>
                  <span className="flex items-center gap-1 text-neutral-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{post.readingTime || '5 min read'}</span>
                  </span>
                </div>
              </div>

              {/* Mobile Table of Contents Dropdown (Visible on < lg screens) */}
              {tocItems.length > 0 && (
                <div className="lg:hidden rounded-2xl border border-neutral-200 bg-neutral-50/70 p-4 space-y-2">
                  <button
                    type="button"
                    onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#0A2540] cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <List className="w-4 h-4 text-[#0284C7]" />
                      <span>Table of Contents ({tocItems.length} Topics)</span>
                    </div>
                    {isMobileTocOpen ? (
                      <ChevronUp className="w-4 h-4 text-neutral-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-500" />
                    )}
                  </button>

                  {isMobileTocOpen && (
                    <div className="pt-2 border-t border-neutral-200 space-y-1 animate-fade-in">
                      {tocItems.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleScrollToHeading(item.id)}
                          className={`w-full text-left py-1.5 px-2 rounded text-xs transition-colors ${
                            item.level === 4
                              ? 'pl-6 text-[11px]'
                              : item.level === 3
                              ? 'pl-4 text-[11.5px]'
                              : 'font-medium'
                          } ${
                            activeSectionId === item.id
                              ? 'text-[#0284C7] font-bold bg-sky-50'
                              : 'text-neutral-600 hover:text-neutral-900'
                          }`}
                        >
                          • {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Featured Image */}
              {post.featuredImage && (
                <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm relative aspect-[16/9] w-full bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
                  />
                </div>
              )}

              {/* Rich Blog Body Content */}
              <div
                ref={contentRef}
                className="pt-2 text-neutral-800 leading-relaxed article-rich-content blog-preview-content prose max-w-none"
                dangerouslySetInnerHTML={{ __html: processedHtml }}
              />

              {/* Multiple Image Gallery Section (if blog contains additional imagery) */}
              {post.images && post.images.length > 1 && (
                <div className="pt-6 border-t border-neutral-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                    <ImageIcon className="w-4 h-4 text-[#0284C7]" />
                    <span>Article Media &amp; Field Gallery ({post.images.length} Images)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {post.images.map((imgItem, idx) => {
                      const url = typeof imgItem === 'string' ? imgItem : imgItem.url;
                      const alt =
                        typeof imgItem === 'object' && imgItem.alt
                          ? imgItem.alt
                          : `${post.title} Image ${idx + 1}`;
                      if (!url) return null;
                      return (
                        <div
                          key={idx}
                          className="rounded-2xl overflow-hidden border border-neutral-200 shadow-2xs relative aspect-[16/10] bg-neutral-100 group"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={url}
                            alt={alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {alt && (
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/40 to-transparent p-3 text-[11px] text-white font-medium line-clamp-1">
                              {alt}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* META KEYWORDS SECTION */}
              {/* ============================================================ */}
              {allKeywords.length > 0 && (
                <div className="pt-6 border-t border-neutral-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                    <KeyRound className="w-4 h-4 text-[#0284C7]" />
                    <span>Keywords</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-sky-50 text-[#0369A1] border border-sky-200/80 hover:bg-sky-100 transition-colors select-none"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* TAGS SECTION */}
              {/* ============================================================ */}
              {allTags.length > 0 && (
                <div className="pt-4 border-t border-neutral-100 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 uppercase tracking-wider">
                    <Tag className="w-4 h-4 text-neutral-500" />
                    <span>Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200/70 transition-colors select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio Box */}
              <div className="mt-8 rounded-2xl bg-neutral-50 border border-neutral-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0 border-2 border-sky-400">
                  {post.author.name
                    ? post.author.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')
                    : 'SL'}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-900">{post.author.name}</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Verified Author
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {post.author.role || 'Senior EXIM Counsel & Global Trade Specialist'} at SkyLink
                    Global Services. Specializing in statutory customs compliance, freight
                    procurement, and international cross-border multimodal routing.
                  </p>
                </div>
              </div>

              {/* Mobile Back Button */}
              <div className="pt-4 lg:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-all"
                >
                  <ArrowLeft className="w-4 h-4 text-[#0284C7]" />
                  <span>Return to All Articles</span>
                </Link>
              </div>
            </article>

            {/* Related Articles Bottom Grid */}
            {relatedPosts.length > 0 && (
              <div className="pt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#0A2540]">Related Insights</h3>
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                  >
                    <span>View all</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      href={`/blog/${rPost.slug}`}
                      className="group block bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs hover:shadow-md hover:border-[#0284C7]/40 transition-all"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded">
                        {rPost.category}
                      </span>
                      <h4 className="mt-2 text-sm font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors line-clamp-2 leading-snug">
                        {rPost.title}
                      </h4>
                      <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                        {rPost.excerpt}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400">
                        <span>{formatDate(rPost.publishedAt)}</span>
                        <span className="font-semibold text-[#0284C7] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                          Read &rarr;
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* RIGHT COLUMN: Sticky Article Overview & Insights (3 Cols) */}
          {/* ============================================================ */}
          <aside className="lg:col-span-3 xl:col-span-3 hidden lg:block sticky top-[132px] max-h-[calc(100vh-145px)] overflow-y-auto pr-1 pb-6 space-y-4">
            {/* Quick Facts Card */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-4.5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-100">
                <FileText className="w-4 h-4 text-[#0284C7]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                  Article Overview
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-0.5 border-b border-neutral-50">
                  <span className="text-neutral-500 font-medium">Category</span>
                  <span className="font-bold text-neutral-800">{post.category}</span>
                </div>
                <div className="flex items-center justify-between py-0.5 border-b border-neutral-50">
                  <span className="text-neutral-500 font-medium">Published</span>
                  <span className="font-semibold text-neutral-800">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-0.5 border-b border-neutral-50">
                  <span className="text-neutral-500 font-medium">Reading Time</span>
                  <span className="font-semibold text-neutral-800">
                    {post.readingTime || '5 min read'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-0.5 border-b border-neutral-50">
                  <span className="text-neutral-500 font-medium">Word Count</span>
                  <span className="font-mono text-neutral-800 font-semibold">{wordCount} words</span>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="text-neutral-500 font-medium">Status</span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified Insight
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Insights Quick List Card */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl border border-neutral-200 p-4.5 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#0284C7]" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                      Recent Insights
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {relatedPosts.slice(0, 2).map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/blog/${rp.slug}`}
                      className="group block space-y-0.5"
                    >
                      <span className="text-[9.5px] font-bold text-[#0284C7] uppercase">
                        {rp.category}
                      </span>
                      <h4 className="text-xs font-bold text-neutral-800 group-hover:text-[#0284C7] transition-colors line-clamp-2 leading-snug">
                        {rp.title}
                      </h4>
                      <div className="text-[10.5px] text-neutral-400">
                        {formatDate(rp.publishedAt)} • {rp.readingTime || '5 min read'}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Skylink Compliance & Advisory Brand Badge (No Form) */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#07192D] text-white p-4.5 space-y-2.5 shadow-md border border-sky-400/20">
              <div className="flex items-center gap-2 text-sky-300">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  SkyLink Advisory
                </span>
              </div>
              <p className="text-[11.5px] text-neutral-300 leading-relaxed">
                Authored by our certified EXIM customs counsel and freight logistics specialists to
                help cross-border enterprises maintain statutory compliance.
              </p>
              <div className="pt-0.5">
                <Link
                  href="/request-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-white transition-colors"
                >
                  <span>Explore Advisory Services</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
