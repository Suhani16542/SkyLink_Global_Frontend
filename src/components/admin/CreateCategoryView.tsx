'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createCategory, CreateCategoryPayload } from '@/lib/api/categories';
import {
  ArrowLeft,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  AlertCircle,
  Loader2,
  X,
  PlusCircle,
  Hash,
  FileText,
  Tag,
} from 'lucide-react';

/**
 * Sanitizes a string into a clean, URL-safe slug
 */
function sanitizeSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function CreateCategoryView() {
  const compId = useId();
  const router = useRouter();

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [description, setDescription] = useState('');

  // Validation & Submission State
  const [fieldErrors, setFieldErrors] = useState<{ title?: string; slug?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Handle Title change with auto-slug generation
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (fieldErrors.title) {
      setFieldErrors((prev) => ({ ...prev, title: undefined }));
    }
    if (!isSlugManuallyEdited) {
      const generatedSlug = sanitizeSlug(val);
      setSlug(generatedSlug);
      if (fieldErrors.slug) {
        setFieldErrors((prev) => ({ ...prev, slug: undefined }));
      }
    }
  };

  // Handle manual Slug change
  const handleSlugChange = (val: string) => {
    setIsSlugManuallyEdited(true);
    // Allow typing, clean on the fly without breaking typing flow
    const clean = val
      .toLowerCase()
      .replace(/[^a-z0-9-_]/g, '')
      .replace(/[\s_]+/g, '-');
    setSlug(clean);
    if (fieldErrors.slug) {
      setFieldErrors((prev) => ({ ...prev, slug: undefined }));
    }
  };

  const handleSlugBlur = () => {
    setSlug(sanitizeSlug(slug));
  };

  // Validate Form Inputs
  const validateForm = (): boolean => {
    const errors: { title?: string; slug?: string } = {};
    const trimmedTitle = title.trim();
    const trimmedSlug = sanitizeSlug(slug);

    if (!trimmedTitle) {
      errors.title = 'Category Title is required.';
    } else if (trimmedTitle.length < 2) {
      errors.title = 'Category Title must be at least 2 characters long.';
    }

    if (!trimmedSlug) {
      errors.slug = 'Category Slug is required.';
    } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(trimmedSlug)) {
      errors.slug = 'Slug must be URL-safe (lowercase letters, numbers, and single hyphens only).';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    const payload: CreateCategoryPayload = {
      title: title.trim(),
      slug: sanitizeSlug(slug),
      description: description.trim() || undefined,
    };

    setIsSubmitting(true);

    try {
      const res = await createCategory(payload);

      if (res.success) {
        const createdName = payload.title;
        showToast(`Category "${createdName}" created successfully!`);

        // Redirect back to Create Blog with the new category pre-selected
        setTimeout(() => {
          router.push(`/admin/blogs/create?category=${encodeURIComponent(createdName)}`);
        }, 1200);
      } else {
        setErrorMessage(
          res.error || 'Failed to create category. Please verify input or try again.'
        );
      }
    } catch (err: any) {
      setErrorMessage(
        err?.message || 'An unexpected error occurred while saving the category.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A2540] text-white px-4 py-3 rounded-xl shadow-xl border border-sky-400/30 flex items-center gap-3 animate-fade-in text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-sky-400" />
          <span>{toastMessage}</span>
          <button
            type="button"
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
              <div className="font-bold">Creation Error</div>
              <div className="mt-0.5 text-xs text-red-600 font-medium">{errorMessage}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setErrorMessage(null)}
            className="text-red-400 hover:text-red-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#0284C7] bg-white hover:bg-neutral-50 border border-neutral-200 px-2.5 py-1.5 rounded-lg transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Create Blog</span>
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-medium text-neutral-500">Categories</span>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded">
              New Category
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Create Blog Category
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Define a new article classification taxonomy, topic label, and SEO URL slug.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <Link
            href="/admin/blogs/create"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 shadow-2xs transition-all cursor-pointer"
          >
            <span>Cancel</span>
          </Link>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs hover:shadow-md hover:shadow-sky-500/20 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
            ) : (
              <PlusCircle className="w-3.5 h-3.5" />
            )}
            <span>{isSubmitting ? 'Creating Category...' : 'Save Category'}</span>
          </button>
        </div>
      </div>

      {/* TWO COLUMN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* MAIN FORM CARD (8 Cols) */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-7 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#0A2540]">
                  Category Specifications
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Enter the canonical display name, search engine slug, and summary description.
                </p>
              </div>
              <span className="text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-200/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#0284C7]" />
                Taxonomy
              </span>
            </div>

            {/* Field 1: Category Title */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-cat-title`}
                className="block text-xs font-bold text-neutral-800 uppercase tracking-wider"
              >
                Category Title <span className="text-red-500">*</span>
              </label>
              <input
                id={`${compId}-cat-title`}
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Air Freight & Aviation Logistics"
                className={`w-full px-4 py-3 text-sm sm:text-base font-semibold text-neutral-900 placeholder:text-neutral-400 placeholder:font-normal bg-neutral-50/50 hover:bg-white border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all shadow-2xs ${
                  fieldErrors.title
                    ? 'border-red-400 focus:ring-red-200 focus:border-red-500'
                    : 'border-neutral-200 focus:ring-[#0284C7]/20 focus:border-[#0284C7]'
                }`}
              />
              {fieldErrors.title ? (
                <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{fieldErrors.title}</span>
                </p>
              ) : (
                <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                  <Info className="w-3 h-3 text-neutral-400 shrink-0" />
                  <span>The official display name shown in blog headers and category filters.</span>
                </p>
              )}
            </div>

            {/* Field 2: Slug */}
            <div className="space-y-1.5">
              <label
                htmlFor={`${compId}-cat-slug`}
                className="block text-xs font-bold text-neutral-800 uppercase tracking-wider"
              >
                Slug (URL Identifier) <span className="text-red-500">*</span>
              </label>
              <div
                className={`flex rounded-xl overflow-hidden shadow-2xs border bg-white transition-all focus-within:ring-2 ${
                  fieldErrors.slug
                    ? 'border-red-400 focus-within:ring-red-200 focus-within:border-red-500'
                    : 'border-neutral-200 focus-within:ring-[#0284C7]/20 focus-within:border-[#0284C7]'
                }`}
              >
                <span className="inline-flex items-center px-3.5 bg-neutral-100 text-neutral-500 text-xs font-mono select-none border-r border-neutral-200 font-medium">
                  /blog/category/
                </span>
                <input
                  id={`${compId}-cat-slug`}
                  type="text"
                  value={slug}
                  onChange={(e) => handleSlugChange(e.target.value)}
                  onBlur={handleSlugBlur}
                  placeholder="air-freight-aviation-logistics"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-mono text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-none"
                />
              </div>
              {fieldErrors.slug ? (
                <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{fieldErrors.slug}</span>
                </p>
              ) : (
                <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                  <Hash className="w-3 h-3 text-neutral-400 shrink-0" />
                  <span>Auto-generated from title. URL-safe with hyphens (e.g. logistics-technology).</span>
                </p>
              )}
            </div>

            {/* Field 3: Description */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`${compId}-cat-desc`}
                  className="block text-xs font-bold text-neutral-800 uppercase tracking-wider"
                >
                  Description <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                </label>
                <span className="text-[11px] text-neutral-400 font-mono">
                  {description.length} chars
                </span>
              </div>
              <textarea
                id={`${compId}-cat-desc`}
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what trade, logistics, or compliance topics this category covers..."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 bg-neutral-50/50 hover:bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] focus:bg-white transition-all resize-none shadow-2xs"
              />
              <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                <FileText className="w-3 h-3 text-neutral-400 shrink-0" />
                <span>Provides context for editorial staff and meta summary for category listing pages.</span>
              </p>
            </div>

            {/* Form Actions */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
              <Link
                href="/admin/blogs/create"
                className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs hover:shadow-md hover:shadow-sky-500/20 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <PlusCircle className="w-4 h-4" />
                )}
                <span>{isSubmitting ? 'Saving Category...' : 'Create Category'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* SIDEBAR PREVIEW CARD (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card: Live Preview */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
              <Tag className="w-4 h-4 text-[#0284C7]" />
              <h2 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                Category Preview
              </h2>
            </div>

            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200/80 space-y-3">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                  Tag Badge
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#0284C7] text-white shadow-2xs">
                  <Layers className="w-3 h-3 text-sky-200" />
                  <span>{title.trim() || 'New Category'}</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block mb-0.5">
                  URL Route
                </span>
                <span className="font-mono text-xs text-neutral-700 bg-white px-2.5 py-1 rounded border border-neutral-200 block truncate">
                  /blog/category/{sanitizeSlug(slug) || 'slug-preview'}
                </span>
              </div>

              {description.trim() && (
                <div>
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block mb-0.5">
                    Description
                  </span>
                  <p className="text-xs text-neutral-600 line-clamp-3 bg-white p-2.5 rounded border border-neutral-200">
                    {description.trim()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card: Help & Guidelines */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-6 space-y-3.5">
            <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
              <Info className="w-4 h-4 text-[#0284C7]" />
              <h2 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                Taxonomy Rules
              </h2>
            </div>

            <ul className="text-xs text-neutral-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0 mt-1.5" />
                <span>Keep titles concise, clear, and focused on core trade or logistics topics.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0 mt-1.5" />
                <span>Slugs should be short and descriptive for optimal Google search indexing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0 mt-1.5" />
                <span>After creation, this category will immediately appear in the Create Blog category selector.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
