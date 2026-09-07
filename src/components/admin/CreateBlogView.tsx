'use client';

import React, { useState, useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  getAdminBlogById,
  createBlog,
  updateBlog,
  uploadBlogImage,
  BlogPayload,
} from '@/lib/api/blogs';
import {
  ArrowLeft,
  Eye,
  Save,
  Send,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Link2,
  Image as ImageIcon,
  Video,
  RemoveFormatting,
  UploadCloud,
  Sparkles,
  Info,
  ChevronDown,
  Clock,
  Tag,
  User,
  Layers,
  X,
  FileCode,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const CATEGORIES = [
  'EXIM Consultancy',
  'Global Logistics',
  'Trade Compliance',
  'Import Export',
  'Shipping & Freight',
  'Customs',
  'Supply Chain',
  'Industry Insights',
];

const TECH_TOPICS = [
  'Logistics Technology',
  'Supply Chain Technology',
  'AI',
  'Digital Trade',
  'Automation',
  'IoT & Tracking',
  'Customs Automation',
  'Port Tech & Terminal OS',
];

const READ_TIME_OPTIONS = [
  '3 Min Read',
  '5 Min Read',
  '7 Min Read',
  '10 Min Read',
  '15 Min Read',
];

interface CreateBlogViewProps {
  blogId?: string;
}

export function CreateBlogView({ blogId }: CreateBlogViewProps) {
  const compId = useId();
  const router = useRouter();
  const isEditMode = !!blogId;
  const editorRef = useRef<HTMLDivElement>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [shortDescription, setShortDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [content, setContent] = useState(
    '<h3>Introduction</h3>\n<p>Start writing your article content here...</p>'
  );

  // Sidebar Form State
  const [publicationStatus, setPublicationStatus] = useState<'Draft' | 'Published'>('Draft');
  const [category, setCategory] = useState('EXIM Consultancy');
  const [technology, setTechnology] = useState('Logistics Technology');
  const [isFeatured, setIsFeatured] = useState(false);
  const [authorName, setAuthorName] = useState('Skylink Team');
  const [readTime, setReadTime] = useState('5 Min Read');
  const [tagsInput, setTagsInput] = useState('');
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string>('');
  const [imageAltText, setImageAltText] = useState('');

  // Editor State
  const [activeTab, setActiveTab] = useState<'visual' | 'html' | 'preview'>('visual');
  const [selectedHeading, setSelectedHeading] = useState('Paragraph');
  const [activeFormats, setActiveFormats] = useState<string[]>([]);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);

  // Async submission / loading states
  const [isFetchingBlog, setIsFetchingBlog] = useState(isEditMode);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Load existing blog data if in edit mode
  useEffect(() => {
    if (!blogId) return;

    let isMounted = true;
    const fetchBlogData = async () => {
      setIsFetchingBlog(true);
      try {
        const res = await getAdminBlogById(blogId);
        if (res.success && res.data && isMounted) {
          const b = res.data;
          setTitle(b.title || '');
          setSlug(b.slug || '');
          setIsSlugManuallyEdited(true);
          setShortDescription(b.shortDescription || b.excerpt || '');
          setKeywords(Array.isArray(b.keywords) ? b.keywords.join(', ') : (b.keywords || ''));
          setContent(b.content || '');
          setPublicationStatus(
            b.status && b.status.toLowerCase() === 'published' ? 'Published' : 'Draft'
          );
          if (b.category) setCategory(b.category);
          if (b.technology) setTechnology(b.technology);
          setIsFeatured(!!(b.featured ?? b.isFeatured));
          
          if (b.author) {
            if (typeof b.author === 'object') {
              setAuthorName(b.author.name || 'Skylink Team');
            } else {
              setAuthorName(b.author || 'Skylink Team');
            }
          } else if (b.authorName) {
            setAuthorName(b.authorName);
          }

          if (b.estimatedReadTime || b.readingTime) {
            setReadTime(b.estimatedReadTime || b.readingTime || '5 Min Read');
          }
          if (b.tags) {
            setTagsInput(Array.isArray(b.tags) ? b.tags.join(', ') : b.tags);
          }
          if (b.featuredImage) {
            setFeaturedImageUrl(b.featuredImage);
            setCoverImagePreview(b.featuredImage);
          }
          if (b.imageAltText) {
            setImageAltText(b.imageAltText);
          }
        } else if (isMounted) {
          setErrorMessage(res.error || 'Failed to load blog post details.');
        }
      } catch (err: any) {
        if (isMounted) {
          setErrorMessage(err.message || 'Error fetching blog post.');
        }
      } finally {
        if (isMounted) {
          setIsFetchingBlog(false);
        }
      }
    };

    fetchBlogData();

    return () => {
      isMounted = false;
    };
  }, [blogId]);

  // Sync content into editable div when switching to visual tab or when loaded
  useEffect(() => {
    if (activeTab === 'visual' && editorRef.current) {
      if (editorRef.current.innerHTML !== content) {
        editorRef.current.innerHTML = content;
      }
    }
  }, [activeTab, content]);

  // Auto-generate slug from title if not manually edited
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isSlugManuallyEdited) {
      const generated = val
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSlug(generated);
    }
  };

  const handleSlugChange = (val: string) => {
    setIsSlugManuallyEdited(true);
    setSlug(val);
  };

  const toggleFormat = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
    setActiveFormats((prev) =>
      prev.includes(command) ? prev.filter((f) => f !== command) : [...prev, command]
    );
  };

  const applyHeading = (h: string) => {
    setSelectedHeading(h);
    const tag = h === 'Paragraph' ? '<p>' : `<${h.toLowerCase()}>`;
    document.execCommand('formatBlock', false, tag);
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  const handleInsertLink = () => {
    const url = prompt('Enter website or destination URL (e.g. https://...):');
    if (url) {
      document.execCommand('createLink', false, url);
      if (editorRef.current) {
        setContent(editorRef.current.innerHTML);
      }
    }
  };

  const handleInsertImagePrompt = () => {
    const url = prompt('Enter direct image URL:');
    if (url) {
      document.execCommand('insertImage', false, url);
      if (editorRef.current) {
        setContent(editorRef.current.innerHTML);
      }
    }
  };

  const handleInsertVideoPrompt = () => {
    const embedCode = prompt('Enter iframe embed code or video link:');
    if (embedCode && editorRef.current) {
      document.execCommand('insertHTML', false, `\n<div class="video-embed-container my-4">${embedCode}</div>\n`);
      setContent(editorRef.current.innerHTML);
    }
  };

  // Calculate words and characters
  const plainText = content.replace(/<[^>]+>/g, ' ').trim();
  const wordCount = plainText ? plainText.split(/\s+/).filter(Boolean).length : 0;
  const charCount = plainText.length;

  // Handle image upload to backend POST /api/blogs/upload-image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('Image size exceeds 5MB limit. Please choose a smaller image.');
      return;
    }

    setIsUploadingImage(true);
    setErrorMessage(null);

    // Show local preview immediately for instant feedback
    const reader = new FileReader();
    reader.onload = (loadEvt) => {
      if (loadEvt.target?.result) {
        setCoverImagePreview(loadEvt.target.result as string);
      }
    };
    reader.readAsDataURL(file);

    try {
      const res = await uploadBlogImage(file);
      if (res.success && res.data) {
        const uploadedUrl =
          res.data.url ||
          res.data.imageUrl ||
          res.data.secure_url ||
          (typeof res.data === 'string' ? res.data : '');

        if (uploadedUrl) {
          setFeaturedImageUrl(uploadedUrl);
          setCoverImagePreview(uploadedUrl);
          showToast('Featured image uploaded successfully!');
        } else {
          showToast('Image uploaded successfully');
        }
      } else {
        setErrorMessage(res.error || 'Failed to upload image. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Image upload failed due to a network error.');
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Save / Publish Blog
  const handleSubmitBlog = async (targetStatus?: 'Draft' | 'Published') => {
    setErrorMessage(null);

    const effectiveStatus = targetStatus || publicationStatus;

    if (!title.trim()) {
      setErrorMessage('Please provide a blog title.');
      return;
    }
    if (!shortDescription.trim()) {
      setErrorMessage('Please provide a short description or excerpt.');
      return;
    }
    if (!content.trim() || content.trim() === '<p></p>') {
      setErrorMessage('Please provide blog content.');
      return;
    }

    const effectiveSlug =
      slug.trim() ||
      title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const tagsArray = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const payload: BlogPayload = {
      title: title.trim(),
      slug: effectiveSlug,
      keywords: keywords.trim(),
      shortDescription: shortDescription.trim(),
      excerpt: shortDescription.trim(),
      content: content,
      status: effectiveStatus,
      category,
      technology,
      featured: isFeatured,
      author: {
        name: authorName.trim() || 'Skylink Team',
        role: 'EXIM & Logistics Specialist',
      },
      authorName: authorName.trim() || 'Skylink Team',
      estimatedReadTime: readTime,
      readingTime: readTime,
      tags: tagsArray,
      featuredImage: featuredImageUrl || coverImagePreview || undefined,
      imageAltText: imageAltText || title.trim(),
      publishedAt: effectiveStatus === 'Published' ? new Date().toISOString() : undefined,
    };

    setIsSubmitting(true);

    try {
      if (isEditMode && blogId) {
        const res = await updateBlog(blogId, payload);
        if (res.success) {
          showToast(`Blog successfully updated as ${effectiveStatus}!`);
          setTimeout(() => {
            router.push('/admin/blogs');
          }, 1000);
        } else {
          setErrorMessage(res.error || 'Failed to update blog post.');
        }
      } else {
        const res = await createBlog(payload);
        if (res.success) {
          showToast(`Blog successfully created as ${effectiveStatus}!`);
          setTimeout(() => {
            router.push('/admin/blogs');
          }, 1000);
        } else {
          setErrorMessage(res.error || 'Failed to create blog post.');
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while saving the blog post.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tagsList = tagsInput
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  if (isFetchingBlog) {
    return (
      <div className="py-24 flex flex-col items-center justify-center space-y-4 text-center">
        <Loader2 className="w-8 h-8 text-[#0284C7] animate-spin" />
        <p className="text-sm font-semibold text-neutral-600">Loading blog details from server...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A2540] text-white px-4 py-3 rounded-xl shadow-xl border border-sky-400/30 flex items-center gap-3 animate-fade-in text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-sky-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-neutral-400 hover:text-white ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Error Alert Banner */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start justify-between gap-3 text-sm text-red-700 shadow-xs">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold">Error</div>
              <div className="mt-0.5 text-xs text-red-600 font-medium">{errorMessage}</div>
            </div>
          </div>
          <button
            onClick={() => setErrorMessage(null)}
            className="text-red-400 hover:text-red-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#0284C7] bg-white hover:bg-neutral-50 border border-neutral-200 px-2.5 py-1.5 rounded-lg transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Blogs</span>
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-medium text-neutral-500">Skylink CMS</span>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded">
              {isEditMode ? 'Edit Article' : 'New Article'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            {isEditMode ? 'Edit Blog Post' : 'Create New Blog'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            {isEditMode
              ? 'Update existing content, metadata, and publication status.'
              : 'Create, format and publish a new Skylink article.'}
          </p>
        </div>

        {/* Top-Right Action Buttons */}
        <div className="flex items-center flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => {
              setActiveTab(activeTab === 'preview' ? 'visual' : 'preview');
              showToast(
                activeTab === 'preview'
                  ? 'Switched back to Visual editor'
                  : 'Article preview mode active'
              );
            }}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 shadow-2xs transition-all active:scale-[0.98] cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-neutral-500" />
            <span>{activeTab === 'preview' ? 'Exit Preview' : 'Preview'}</span>
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSubmitBlog('Draft')}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 shadow-2xs transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 text-neutral-500 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5 text-neutral-500" />
            )}
            <span>Save Draft</span>
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSubmitBlog('Published')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs hover:shadow-md hover:shadow-sky-500/20 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )}
            <span>{isEditMode ? 'Update & Publish' : 'Publish Article'}</span>
          </button>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ============================================================ */}
        {/* LEFT / MAIN CONTENT AREA (8 Cols) */}
        {/* ============================================================ */}
        <div className="lg:col-span-8 space-y-6">
          {/* ARTICLE CONTENT DETAILS CARD */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#0A2540]">
                  Article Content Details
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Core metadata, search engine title, URL slug, and summary.
                </p>
              </div>
              <span className="text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-200/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#0284C7]" />
                Primary Content
              </span>
            </div>

            {/* Field: Blog Title */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-blog-title`}
                className="block text-xs font-bold text-neutral-800 uppercase tracking-wider"
              >
                Blog Title <span className="text-red-500">*</span>
              </label>
              <input
                id={`${compId}-blog-title`}
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Global Trade Compliance: A Complete Guide for Exporters"
                className="w-full px-4 py-3 text-sm sm:text-base font-semibold text-neutral-900 placeholder:text-neutral-400 placeholder:font-normal bg-neutral-50/50 hover:bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] focus:bg-white transition-all shadow-2xs"
              />
            </div>

            {/* Field: URL Slug */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-url-slug`}
                className="block text-xs font-bold text-neutral-800 uppercase tracking-wider"
              >
                URL Slug <span className="text-red-500">*</span>
              </label>
              <div className="flex rounded-xl overflow-hidden shadow-2xs border border-neutral-200 focus-within:ring-2 focus-within:ring-[#0284C7]/20 focus-within:border-[#0284C7] bg-white transition-all">
                <span className="inline-flex items-center px-3.5 bg-neutral-100 text-neutral-500 text-xs font-mono select-none border-r border-neutral-200 font-medium">
                  /blog/
                </span>
                <input
                  id={`${compId}-url-slug`}
                  type="text"
                  value={slug}
                  onChange={(e) => handleSlugChange(e.target.value)}
                  placeholder="global-trade-compliance-guide"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-mono text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-none"
                />
              </div>
              <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                <Info className="w-3 h-3 text-neutral-400 shrink-0" />
                <span>Automatically generated from the title, but editable.</span>
              </p>
            </div>

            {/* Field: Short Description */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`${compId}-short-description`}
                  className="block text-xs font-bold text-neutral-800 uppercase tracking-wider"
                >
                  Short Description <span className="text-red-500">*</span>
                </label>
                <span className="text-[11px] text-neutral-400 font-mono">
                  {shortDescription.length} chars
                </span>
              </div>
              <textarea
                id={`${compId}-short-description`}
                rows={3}
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Write a concise 1–2 sentence summary of the article..."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 bg-neutral-50/50 hover:bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] focus:bg-white transition-all resize-none shadow-2xs"
              />
            </div>

            {/* Field: Keywords */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-seo-keywords`}
                className="block text-xs font-bold text-neutral-800 uppercase tracking-wider"
              >
                Keywords
              </label>
              <input
                id={`${compId}-seo-keywords`}
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="EXIM consultancy, global logistics, trade compliance, import export"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 bg-neutral-50/50 hover:bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] focus:bg-white transition-all shadow-2xs"
              />
              <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                <Info className="w-3 h-3 text-neutral-400 shrink-0" />
                <span>Add relevant SEO keywords separated by commas.</span>
              </p>
            </div>
          </div>

          {/* BLOG CONTENT EDITOR CARD */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden flex flex-col">
            {/* Editor Header Bar with Tabs */}
            <div className="px-5 pt-4 pb-3 border-b border-neutral-200 bg-neutral-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-[#0A2540]">
                  Blog Content Editor <span className="text-red-500">*</span>
                </h3>
                <p className="text-[11px] text-neutral-500">
                  Rich formatting, headers, media links, and markdown structure.
                </p>
              </div>

              {/* View Switcher Tabs: Visual, HTML, Preview */}
              <div className="flex items-center bg-neutral-200/80 p-1 rounded-xl gap-1 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('visual')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'visual'
                      ? 'bg-white text-[#0A2540] shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Visual
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('html')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    activeTab === 'html'
                      ? 'bg-white text-[#0A2540] shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <FileCode className="w-3 h-3" />
                  <span>HTML</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-white text-[#0284C7] shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>Preview</span>
                </button>
              </div>
            </div>

            {/* CMS Toolbar (Shown in Visual mode) */}
            {activeTab === 'visual' && (
              <div className="px-4 py-2.5 border-b border-neutral-200 bg-white flex flex-wrap items-center gap-1 text-neutral-700">
                {/* Heading selector dropdown */}
                <div className="relative inline-block mr-1">
                  <select
                    value={selectedHeading}
                    onChange={(e) => applyHeading(e.target.value)}
                    className="appearance-none bg-neutral-100 hover:bg-neutral-200/70 border border-neutral-200 text-xs font-semibold text-neutral-800 rounded-lg pl-2.5 pr-7 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#0284C7] cursor-pointer"
                  >
                    <option value="Paragraph">Paragraph</option>
                    <option value="H1">H1 Heading</option>
                    <option value="H2">H2 Heading</option>
                    <option value="H3">H3 Heading</option>
                    <option value="H4">H4 Heading</option>
                    <option value="H5">H5 Heading</option>
                    <option value="H6">H6 Heading</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-neutral-500 absolute right-2 top-2.5 pointer-events-none" />
                </div>

                <div className="h-4 w-px bg-neutral-200 mx-1 hidden sm:block" />

                {/* Text style buttons */}
                <button
                  type="button"
                  title="Bold"
                  onClick={() => toggleFormat('bold')}
                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeFormats.includes('bold')
                      ? 'bg-sky-100 text-[#0284C7] border-sky-300'
                      : 'border-transparent hover:bg-neutral-100 text-neutral-700'
                  }`}
                >
                  <Bold className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  title="Italic"
                  onClick={() => toggleFormat('italic')}
                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeFormats.includes('italic')
                      ? 'bg-sky-100 text-[#0284C7] border-sky-300'
                      : 'border-transparent hover:bg-neutral-100 text-neutral-700'
                  }`}
                >
                  <Italic className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  title="Underline"
                  onClick={() => toggleFormat('underline')}
                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeFormats.includes('underline')
                      ? 'bg-sky-100 text-[#0284C7] border-sky-300'
                      : 'border-transparent hover:bg-neutral-100 text-neutral-700'
                  }`}
                >
                  <Underline className="w-3.5 h-3.5" />
                </button>

                <div className="h-4 w-px bg-neutral-200 mx-1" />

                {/* Lists */}
                <button
                  type="button"
                  title="Ordered list"
                  onClick={() => toggleFormat('insertOrderedList')}
                  className="p-1.5 rounded-lg border border-transparent hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                >
                  <ListOrdered className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  title="Unordered list"
                  onClick={() => toggleFormat('insertUnorderedList')}
                  className="p-1.5 rounded-lg border border-transparent hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                >
                  <List className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  title="Blockquote"
                  onClick={() => toggleFormat('formatBlock', '<blockquote>')}
                  className="p-1.5 rounded-lg border border-transparent hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                >
                  <Quote className="w-3.5 h-3.5" />
                </button>

                <div className="h-4 w-px bg-neutral-200 mx-1" />

                {/* Media and Links */}
                <button
                  type="button"
                  title="Insert Link"
                  onClick={handleInsertLink}
                  className="p-1.5 rounded-lg border border-transparent hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                >
                  <Link2 className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  title="Insert Image"
                  onClick={handleInsertImagePrompt}
                  className="p-1.5 rounded-lg border border-transparent hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  title="Embed Video"
                  onClick={handleInsertVideoPrompt}
                  className="p-1.5 rounded-lg border border-transparent hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                >
                  <Video className="w-3.5 h-3.5" />
                </button>

                <div className="h-4 w-px bg-neutral-200 mx-1" />

                {/* Clear formatting */}
                <button
                  type="button"
                  title="Clear formatting"
                  onClick={() => {
                    document.execCommand('removeFormat', false);
                    setActiveFormats([]);
                    setSelectedHeading('Paragraph');
                    if (editorRef.current) {
                      setContent(editorRef.current.innerHTML);
                    }
                    showToast('Formatting reset');
                  }}
                  className="p-1.5 rounded-lg border border-transparent hover:bg-neutral-100 text-neutral-500 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <RemoveFormatting className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Editor Canvas Area */}
            <div className="min-h-[360px] flex-1 relative bg-white">
              {activeTab === 'visual' && (
                <div className="p-6">
                  <div
                    ref={editorRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => setContent(e.currentTarget.innerHTML)}
                    onBlur={(e) => setContent(e.currentTarget.innerHTML)}
                    className="min-h-[300px] outline-none text-neutral-800 text-sm leading-relaxed prose max-w-none focus:ring-0"
                  />
                </div>
              )}

              {activeTab === 'html' && (
                <div className="p-4 bg-neutral-900 text-sky-300 font-mono text-xs min-h-[360px] overflow-auto">
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full h-[320px] bg-transparent text-emerald-400 font-mono outline-none resize-none"
                    spellCheck={false}
                  />
                </div>
              )}

              {activeTab === 'preview' && (
                <div className="p-6 sm:p-8 bg-neutral-50 min-h-[360px] space-y-4">
                  <div className="inline-block bg-[#0284C7] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {category}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                    {title || 'Untitled Skylink Article'}
                  </h1>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 pb-4 border-b border-neutral-200">
                    <span className="font-semibold text-neutral-800">{authorName}</span>
                    <span>•</span>
                    <span>{readTime}</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-medium">
                      Status: {publicationStatus}
                    </span>
                  </div>
                  {shortDescription && (
                    <p className="text-neutral-600 text-sm italic font-medium bg-white p-4 rounded-xl border border-neutral-200">
                      &ldquo;{shortDescription}&rdquo;
                    </p>
                  )}
                  <div
                    className="prose prose-neutral max-w-none text-sm text-neutral-800"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="px-5 py-2.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <div className="flex items-center gap-4">
                <span>
                  Words: <strong className="text-neutral-800 font-semibold">{wordCount}</strong>
                </span>
                <span className="text-neutral-300">|</span>
                <span>
                  Characters:{' '}
                  <strong className="text-neutral-800 font-semibold">{charCount}</strong>
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Backend Connected</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT / SIDEBAR AREA (4 Cols) */}
        {/* ============================================================ */}
        <div className="lg:col-span-4 space-y-6">
          {/* CARD 1: PUBLICATION SETTINGS */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-6 space-y-5">
            <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
              <Layers className="w-4 h-4 text-[#0284C7]" />
              <h2 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider">
                Publication Settings
              </h2>
            </div>

            {/* Publication Status */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-pub-status`}
                className="block text-xs font-bold text-neutral-700"
              >
                Publication Status
              </label>
              <div className="relative">
                <select
                  id={`${compId}-pub-status`}
                  value={publicationStatus}
                  onChange={(e) => setPublicationStatus(e.target.value as 'Draft' | 'Published')}
                  className="w-full appearance-none bg-neutral-50/60 hover:bg-white border border-neutral-200 text-xs font-semibold text-neutral-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] cursor-pointer shadow-2xs transition-all"
                >
                  <option value="Draft">Draft (Internal Only)</option>
                  <option value="Published">Published (Live Online)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Category * */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-category`}
                className="block text-xs font-bold text-neutral-700"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id={`${compId}-category`}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full appearance-none bg-neutral-50/60 hover:bg-white border border-neutral-200 text-xs font-semibold text-neutral-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] cursor-pointer shadow-2xs transition-all"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Technology */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-tech-topic`}
                className="block text-xs font-bold text-neutral-700"
              >
                Technology
              </label>
              <div className="relative">
                <select
                  id={`${compId}-tech-topic`}
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  className="w-full appearance-none bg-neutral-50/60 hover:bg-white border border-neutral-200 text-xs font-semibold text-neutral-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] cursor-pointer shadow-2xs transition-all"
                >
                  {TECH_TOPICS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Featured Article Toggle */}
            <div className="pt-2 border-t border-neutral-100">
              <label className="flex items-start gap-3 cursor-pointer select-none group">
                <div className="relative flex items-center mt-0.5">
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-9 h-5 rounded-full transition-colors ${
                      isFeatured ? 'bg-[#0284C7]' : 'bg-neutral-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform transform shadow-sm ${
                        isFeatured ? 'translate-x-4' : 'translate-x-0.5'
                      } mt-0.5`}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-800 group-hover:text-[#0284C7] transition-colors">
                    Featured Article
                  </div>
                  <p className="text-[11px] text-neutral-500">
                    Pin to homepage hero &amp; key insights slider
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* CARD 2: AUTHOR & METADATA */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-6 space-y-5">
            <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
              <User className="w-4 h-4 text-[#0284C7]" />
              <h2 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider">
                Author &amp; Metadata
              </h2>
            </div>

            {/* Author Name */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-author-name`}
                className="block text-xs font-bold text-neutral-700"
              >
                Author Name
              </label>
              <input
                id={`${compId}-author-name`}
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Skylink Team"
                className="w-full px-3.5 py-2.5 text-xs font-semibold text-neutral-900 bg-neutral-50/60 hover:bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] focus:bg-white transition-all shadow-2xs"
              />
            </div>

            {/* Estimated Read Time */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-read-time`}
                className="block text-xs font-bold text-neutral-700"
              >
                Estimated Read Time
              </label>
              <div className="relative">
                <select
                  id={`${compId}-read-time`}
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full appearance-none bg-neutral-50/60 hover:bg-white border border-neutral-200 text-xs font-semibold text-neutral-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] cursor-pointer shadow-2xs transition-all"
                >
                  {READ_TIME_OPTIONS.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <Clock className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-tags-input`}
                className="block text-xs font-bold text-neutral-700"
              >
                Tags
              </label>
              <input
                id={`${compId}-tags-input`}
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="EXIM, Logistics, Trade Compliance"
                className="w-full px-3.5 py-2.5 text-xs text-neutral-800 placeholder:text-neutral-400 bg-neutral-50/60 hover:bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] focus:bg-white transition-all shadow-2xs"
              />
              <p className="text-[11px] text-neutral-500">Add tags separated by commas.</p>

              {tagsList.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {tagsList.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200/60 px-2 py-0.5 rounded-md"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CARD 3: COVER / FEATURED IMAGE */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#0284C7]" />
                <h2 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider">
                  Cover / Featured Image
                </h2>
              </div>
              {coverImagePreview && (
                <button
                  type="button"
                  onClick={() => {
                    setCoverImagePreview(null);
                    setFeaturedImageUrl('');
                  }}
                  className="text-[11px] text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Upload Area / Image Preview */}
            {coverImagePreview ? (
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImagePreview}
                  alt={imageAltText || 'Featured Article Cover Preview'}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                  <span>Image Uploaded</span>
                </div>
              </div>
            ) : (
              <label className="border-2 border-dashed border-neutral-200 hover:border-[#0284C7] bg-neutral-50/70 hover:bg-sky-50/30 rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2.5 group">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={handleImageUpload}
                  disabled={isUploadingImage}
                  className="sr-only"
                />
                <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-neutral-200 text-[#0284C7] group-hover:scale-110 group-hover:border-sky-300 transition-all flex items-center justify-center">
                  {isUploadingImage ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <UploadCloud className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-800 group-hover:text-[#0284C7] transition-colors">
                    {isUploadingImage ? 'Uploading to Server...' : 'Upload Featured Image'}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    JPG, PNG or WEBP • Max 5MB
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#0284C7] bg-white border border-neutral-200 group-hover:border-sky-200 px-3 py-1 rounded-lg shadow-2xs mt-1">
                  Browse Files
                </span>
              </label>
            )}

            {/* Image Alt Text */}
            <div className="space-y-1">
              <label
                htmlFor={`${compId}-image-alt`}
                className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider"
              >
                Image Alt Text
              </label>
              <input
                id={`${compId}-image-alt`}
                type="text"
                value={imageAltText}
                onChange={(e) => setImageAltText(e.target.value)}
                placeholder="Descriptive text for accessibility & SEO"
                className="w-full px-3 py-1.5 text-xs text-neutral-800 placeholder:text-neutral-400 bg-neutral-50/60 hover:bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] transition-all"
              />
            </div>

            {/* Subtle placeholder helper */}
            <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-100 flex items-start gap-2 text-[11px] text-neutral-500">
              <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
              <span>
                Recommended banner aspect ratio 16:9 (1200x675px) for optimal social and feed
                rendering.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
