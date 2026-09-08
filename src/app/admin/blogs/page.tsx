'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  getAdminBlogs,
  updateBlogStatus,
  updateBlogFeatured,
  deleteBlog,
  BlogItem,
} from '@/lib/api/blogs';
import { formatDate } from '@/lib/utils/formatters';
import {
  FileText,
  PlusCircle,
  ArrowRight,
  BookOpen,
  Layers,
  Search,
  Edit,
  Trash2,
  ExternalLink,
  Star,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  X,
  Loader2,
  Eye,
  Clock,
} from 'lucide-react';

export default function AdminBlogsDirectoryPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'Published' | 'Draft'>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Delete modal state
  const [blogToDelete, setBlogToDelete] = useState<BlogItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await getAdminBlogs();
      if (res.success && res.data) {
        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        } else if (res.data && typeof res.data === 'object' && Array.isArray((res.data as any).blogs)) {
          setBlogs((res.data as any).blogs);
        } else {
          setBlogs([]);
        }
      } else {
        setErrorMessage(res.error || 'Unable to fetch blogs from server.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Error communicating with server.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  // Toggle status
  const handleToggleStatus = async (blog: BlogItem) => {
    const blogId = blog._id || blog.id;
    if (!blogId) return;

    const currentStatus = (blog.status || '').toLowerCase();
    const newStatus = currentStatus === 'published' ? 'Draft' : 'Published';

    setActionLoadingId(blogId);
    try {
      const res = await updateBlogStatus(blogId, newStatus);
      if (res.success) {
        setBlogs((prev) =>
          prev.map((b) => ((b._id || b.id) === blogId ? { ...b, status: newStatus } : b))
        );
        showToast(`Article status updated to ${newStatus}`);
      } else {
        setErrorMessage(res.error || 'Failed to update status.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Error updating blog status.');
    } finally {
      setActionLoadingId(null);
    }
  };

  // Toggle featured
  const handleToggleFeatured = async (blog: BlogItem) => {
    const blogId = blog._id || blog.id;
    if (!blogId) return;

    const currentFeatured = !!(blog.featured ?? blog.isFeatured);
    const newFeatured = !currentFeatured;

    setActionLoadingId(blogId);
    try {
      const res = await updateBlogFeatured(blogId, newFeatured);
      if (res.success) {
        setBlogs((prev) =>
          prev.map((b) =>
            (b._id || b.id) === blogId ? { ...b, featured: newFeatured, isFeatured: newFeatured } : b
          )
        );
        showToast(newFeatured ? 'Marked as Featured Article' : 'Removed from Featured Articles');
      } else {
        setErrorMessage(res.error || 'Failed to update featured flag.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Error updating featured state.');
    } finally {
      setActionLoadingId(null);
    }
  };

  // Confirm delete
  const handleDeleteConfirm = async () => {
    if (!blogToDelete) return;
    const blogId = blogToDelete._id || blogToDelete.id;
    if (!blogId) return;

    setIsDeleting(true);
    try {
      const res = await deleteBlog(blogId);
      if (res.success) {
        setBlogs((prev) => prev.filter((b) => (b._id || b.id) !== blogId));
        showToast('Blog article deleted permanently.');
        setBlogToDelete(null);
      } else {
        setErrorMessage(res.error || 'Failed to delete blog article.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Error deleting blog post.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Filtered blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      (blog.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.slug || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.category || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.technology || '').toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'Published' && (blog.status || '').toLowerCase() === 'published') ||
      (statusFilter === 'Draft' && (blog.status || '').toLowerCase() !== 'published');

    const matchesCategory =
      categoryFilter === 'ALL' || (blog.category || '').toLowerCase() === categoryFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const categories = Array.from(
    new Set(blogs.map((b) => b.category).filter(Boolean))
  ) as string[];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
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

      {/* Delete Confirmation Modal */}
      {blogToDelete && (
        <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 space-y-4 animate-scale-up">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1.5">
              <h3 className="text-lg font-bold text-neutral-900">Delete Blog Article?</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Are you sure you want to delete{' '}
                <strong className="text-neutral-800">&quot;{blogToDelete.title}&quot;</strong>? This
                action is irreversible.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setBlogToDelete(null)}
                className="flex-1 px-4 py-2 text-xs font-bold rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDeleteConfirm}
                className="flex-1 px-4 py-2 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start justify-between gap-3 text-sm text-red-700">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold">Error Loading Blogs</div>
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

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Published &amp; Draft Articles
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Central repository for Skylink EXIM, trade compliance, and logistics publications.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            type="button"
            onClick={fetchBlogs}
            disabled={isLoading}
            title="Refresh list"
            className="p-2.5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600 transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          <Link
            href="/admin/blogs/create"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs hover:shadow-md hover:shadow-sky-500/20 transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create New Blog</span>
          </Link>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, topic, or category..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-neutral-200 bg-neutral-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] transition-all"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <div className="flex bg-neutral-100 p-1 rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setStatusFilter('ALL')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                statusFilter === 'ALL'
                  ? 'bg-white text-[#0A2540] shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All ({blogs.length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('Published')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                statusFilter === 'Published'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Published
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('Draft')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                statusFilter === 'Draft'
                  ? 'bg-white text-amber-700 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Drafts
            </button>
          </div>

          {/* Category Filter */}
          {categories.length > 0 && (
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-neutral-100 text-xs font-semibold text-neutral-800 rounded-xl px-3 py-2 border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#0284C7] cursor-pointer"
            >
              <option value="ALL">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Blogs List */}
      {isLoading ? (
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-12 text-center space-y-3">
          <Loader2 className="w-8 h-8 text-[#0284C7] animate-spin mx-auto" />
          <p className="text-xs font-semibold text-neutral-500">
            Fetching articles from Skylink backend...
          </p>
        </div>
      ) : filteredBlogs.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-8 sm:p-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0284C7] border border-sky-100 mx-auto flex items-center justify-center shadow-2xs">
            <FileText className="w-7 h-7" />
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-[#0A2540]">
              {blogs.length === 0 ? 'No Articles Found' : 'No Matching Articles'}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              {blogs.length === 0
                ? 'Your blog repository is empty. Create your first article to publish online.'
                : 'Try adjusting your search query or status filter.'}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-3">
            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Create First Blog</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  <th className="py-3 px-4">Article</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-center">Featured</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs">
                {filteredBlogs.map((blog, idx) => {
                  const blogId =
                    typeof blog._id === 'string' && blog._id.length > 0
                      ? blog._id
                      : typeof blog.id === 'string' && blog.id.length > 0
                      ? blog.id
                      : typeof blog._id === 'object' && blog._id && '$oid' in (blog._id as any)
                      ? String((blog._id as any).$oid)
                      : String(blog._id || blog.id || blog.slug || `blog-${idx}`);

                  const blogSlug =
                    typeof blog.slug === 'string' && blog.slug.length > 0
                      ? blog.slug
                      : typeof blog.slug === 'object' && blog.slug && (blog.slug as any).current
                      ? String((blog.slug as any).current)
                      : String(blog.slug || blogId);

                  const isPublished = (blog.status || '').toLowerCase() === 'published';
                  const isItemFeatured = !!(blog.featured ?? blog.isFeatured);
                  const isActionLoading = actionLoadingId === blogId;

                  return (
                    <tr key={blogId || idx} className="hover:bg-neutral-50/70 transition-colors">
                      {/* Title & Excerpt */}
                      <td className="py-4 px-4 max-w-sm">
                        <div className="font-bold text-neutral-900 text-sm leading-snug line-clamp-1">
                          {blog.title}
                        </div>
                        <div className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                          {blog.shortDescription || blog.excerpt || `/blog/${blogSlug}`}
                        </div>
                        <div className="text-[10px] font-mono text-sky-600 mt-1">
                          /blog/{blogSlug}
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200/70">
                          {blog.category || 'General'}
                        </span>
                        {blog.technology && (
                          <div className="text-[10px] text-neutral-400 mt-1">
                            {blog.technology}
                          </div>
                        )}
                      </td>

                      {/* Status Toggle */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <button
                          type="button"
                          disabled={isActionLoading}
                          onClick={() => handleToggleStatus(blog)}
                          title="Click to toggle status"
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                            isPublished
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                              : 'bg-neutral-100 text-neutral-600 border-neutral-300 hover:bg-neutral-200'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isPublished ? 'bg-emerald-500' : 'bg-neutral-400'
                            }`}
                          />
                          <span>{isPublished ? 'Published' : 'Draft'}</span>
                        </button>
                      </td>

                      {/* Featured Toggle */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <button
                          type="button"
                          disabled={isActionLoading}
                          onClick={() => handleToggleFeatured(blog)}
                          title="Click to toggle featured"
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isItemFeatured
                              ? 'bg-amber-50 text-amber-600 border-amber-300 hover:bg-amber-100'
                              : 'border-transparent text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100'
                          }`}
                        >
                          <Star
                            className={`w-4 h-4 ${
                              isItemFeatured ? 'fill-amber-400 text-amber-500' : ''
                            }`}
                          />
                        </button>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 whitespace-nowrap text-neutral-500 text-[11px]">
                        {formatDate(blog.publishedAt || blog.createdAt || new Date().toISOString())}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1">
                          {/* Public View */}
                          <Link
                            href={`/blog/${blogSlug}`}
                            target="_blank"
                            title="View on Public Site"
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0284C7] hover:bg-neutral-100 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>

                          {/* Edit */}
                          <Link
                            href={`/admin/blogs/${blogId}`}
                            title="Edit Blog"
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-emerald-600 hover:bg-neutral-100 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() => setBlogToDelete(blog)}
                            title="Delete Blog"
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-red-600 hover:bg-neutral-100 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Integration Roadmap Info Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs flex items-start gap-3.5">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              Public Portal Sync
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
              Published articles sync directly to the public website under{' '}
              <code className="text-[#0284C7] bg-sky-50 px-1.5 py-0.5 rounded text-[11px] font-mono">
                /blog/[slug]
              </code>
              .
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs flex items-start gap-3.5">
          <div className="p-2.5 rounded-lg bg-sky-50 text-[#0284C7] shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              Admin CMS Architecture
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
              Real-time synchronization with MongoDB schemas, Cloudinary asset uploads, and SEO indexing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
