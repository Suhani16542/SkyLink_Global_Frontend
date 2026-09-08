'use client';

import React, { useState, useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  getAdminBlogById,
  createBlog,
  updateBlog,
  uploadBlogImage,
  uploadBlogImages,
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
  Star,
  Trash2,
  Plus,
  Check,
} from 'lucide-react';

export interface BlogImageItem {
  id: string;
  url: string;
  alt: string;
  isFeatured: boolean;
  name?: string;
  size?: number;
}

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
  const [content, setContent] = useState('');

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
  const [uploadedImages, setUploadedImages] = useState<BlogImageItem[]>([]);

  // Editor State
  const [activeTab, setActiveTab] = useState<'visual' | 'html' | 'preview'>('visual');
  const [selectedHeading, setSelectedHeading] = useState('Paragraph');
  const [activeFormats, setActiveFormats] = useState<string[]>([]);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const [editorKey, setEditorKey] = useState<number>(0);

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

  // Completely reset every form field and editor DOM to a fresh blank state
  const resetFormToFresh = () => {
    setTitle('');
    setSlug('');
    setIsSlugManuallyEdited(false);
    setShortDescription('');
    setKeywords('');
    setContent('');
    setPublicationStatus('Draft');
    setCategory('EXIM Consultancy');
    setTechnology('Logistics Technology');
    setIsFeatured(false);
    setAuthorName('Skylink Team');
    setReadTime('5 Min Read');
    setTagsInput('');
    setFeaturedImageUrl('');
    setImageAltText('');
    setUploadedImages([]);
    setCoverImagePreview(null);
    setSelectedHeading('Paragraph');
    setActiveFormats([]);
    setErrorMessage(null);
    setIsUploadingImage(false);
    setIsSubmitting(false);
    setActiveTab('visual');
    setEditorKey((prev) => prev + 1);

    if (editorRef.current) {
      editorRef.current.innerHTML = '';
    }
  };

  // Load existing blog data if in edit mode, or reset to fresh blank state if in create mode
  useEffect(() => {
    if (!blogId) {
      resetFormToFresh();
      setIsFetchingBlog(false);
      return;
    }

    let isMounted = true;
    const fetchBlogData = async () => {
      setIsFetchingBlog(true);
      setErrorMessage(null);
      try {
        const res = await getAdminBlogById(blogId);
        if (res.success && res.data && isMounted) {
          const b = res.data;
          setTitle(b.title || '');
          const rawSlug =
            typeof b.slug === 'string'
              ? b.slug
              : typeof b.slug === 'object' && b.slug && (b.slug as any).current
              ? String((b.slug as any).current)
              : String(b.slug || '');
          setSlug(rawSlug);
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
          const rawFeatImg = b.featuredImage || (b as any).image || (b as any).coverImage;
          const cleanFeatImg =
            typeof rawFeatImg === 'string'
              ? rawFeatImg
              : typeof rawFeatImg === 'object' && rawFeatImg && rawFeatImg.url
              ? String(rawFeatImg.url)
              : typeof rawFeatImg === 'object' && rawFeatImg && rawFeatImg.secure_url
              ? String(rawFeatImg.secure_url)
              : '';

          // Parse existing images array or fallback to single featured image
          let loadedImages: BlogImageItem[] = [];

          if (Array.isArray(b.images) && b.images.length > 0) {
            loadedImages = b.images
              .map((img: any, idx: number) => {
                const imgUrl = typeof img === 'string' ? img : img?.url || img?.secure_url || '';
                const imgAlt = typeof img === 'object' && img?.alt ? img.alt : '';
                const isThisFeat = cleanFeatImg ? imgUrl === cleanFeatImg : idx === 0;
                return {
                  id: `existing-img-${idx}-${Date.now()}`,
                  url: imgUrl,
                  alt: imgAlt,
                  isFeatured: isThisFeat,
                };
              })
              .filter((item) => item.url && item.url.trim().length > 0);

            if (loadedImages.length > 0 && !loadedImages.some((i) => i.isFeatured)) {
              loadedImages[0].isFeatured = true;
            }
          } else if (cleanFeatImg) {
            loadedImages = [
              {
                id: `existing-feat-${Date.now()}`,
                url: cleanFeatImg,
                alt: b.imageAltText || '',
                isFeatured: true,
              },
            ];
          }

          setUploadedImages(loadedImages);

          const primaryFeat =
            loadedImages.find((i) => i.isFeatured)?.url || cleanFeatImg || '';
          if (primaryFeat) {
            setFeaturedImageUrl(primaryFeat);
            setCoverImagePreview(primaryFeat);
          }
          if (b.imageAltText) {
            setImageAltText(b.imageAltText);
          }

          setEditorKey((prev) => prev + 1);
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
      try {
        document.execCommand('defaultParagraphSeparator', false, 'p');
      } catch {}
    }
  }, [activeTab, content, editorKey]);

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

  // Inspect DOM under cursor to highlight active formatting toolbar controls
  const updateActiveToolbarState = () => {
    if (typeof window === 'undefined' || !editorRef.current) return;
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    let node: Node | null = selection.anchorNode;
    if (!node || !editorRef.current.contains(node)) return;

    let currentEl: HTMLElement | null =
      node.nodeType === Node.ELEMENT_NODE ? (node as HTMLElement) : node.parentElement;
    let foundHeading = 'Paragraph';

    while (currentEl && currentEl !== editorRef.current) {
      const tag = currentEl.tagName.toUpperCase();
      if (tag === 'H1') { foundHeading = 'H1'; break; }
      if (tag === 'H2') { foundHeading = 'H2'; break; }
      if (tag === 'H3') { foundHeading = 'H3'; break; }
      if (tag === 'H4') { foundHeading = 'H4'; break; }
      if (tag === 'H5') { foundHeading = 'H5'; break; }
      if (tag === 'H6') { foundHeading = 'H6'; break; }
      if (tag === 'P') { foundHeading = 'Paragraph'; break; }
      currentEl = currentEl.parentElement;
    }
    setSelectedHeading(foundHeading);

    const formats: string[] = [];
    try {
      if (document.queryCommandState('bold')) formats.push('bold');
      if (document.queryCommandState('italic')) formats.push('italic');
      if (document.queryCommandState('underline')) formats.push('underline');
      if (document.queryCommandState('insertOrderedList')) formats.push('insertOrderedList');
      if (document.queryCommandState('insertUnorderedList')) formats.push('insertUnorderedList');
    } catch {}
    setActiveFormats(formats);
  };

  const toggleFormat = (command: string, value: string | undefined = undefined) => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
    updateActiveToolbarState();
  };

  const applyHeading = (h: string) => {
    setSelectedHeading(h);
    if (!editorRef.current) return;
    editorRef.current.focus();

    const tag = h === 'Paragraph' ? 'p' : h.toLowerCase();
    try {
      document.execCommand('formatBlock', false, `<${tag}>`);
    } catch {
      document.execCommand('formatBlock', false, tag);
    }

    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  const handleInsertLink = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    const url = prompt('Enter destination website URL (e.g. https://example.com):');
    if (url && url.trim()) {
      document.execCommand('createLink', false, url.trim());
      if (editorRef.current) {
        setContent(editorRef.current.innerHTML);
      }
    }
  };

  const handleInsertImagePrompt = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    const url = prompt('Enter direct image URL (e.g. https://...):');
    if (url && url.trim()) {
      document.execCommand('insertImage', false, url.trim());
      if (editorRef.current) {
        setContent(editorRef.current.innerHTML);
      }
    }
  };

  const handleInsertVideoPrompt = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    const embedCode = prompt('Enter iframe embed code or video link:');
    if (embedCode && editorRef.current) {
      document.execCommand(
        'insertHTML',
        false,
        `\n<div class="video-embed-container my-4">${embedCode}</div>\n<p></p>`
      );
      setContent(editorRef.current.innerHTML);
    }
  };

  // Calculate words and characters
  const plainText = content.replace(/<[^>]+>/g, ' ').trim();
  const wordCount = plainText ? plainText.split(/\s+/).filter(Boolean).length : 0;
  const charCount = plainText.length;

  // Handle multiple image upload to backend POST /api/blogs/upload-image
  const handleMultipleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);

    // Reset input value so user can select the same file again if desired
    e.target.value = '';

    // 1. Check total count
    const currentCount = uploadedImages.length;
    if (currentCount + fileList.length > 10) {
      setErrorMessage(
        `Maximum 10 images allowed. You have ${currentCount} and selected ${fileList.length} more (total ${currentCount + fileList.length}).`
      );
      return;
    }

    // 2. Validate format and size for each file
    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

    for (const file of fileList) {
      const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
      const isTypeValid =
        allowedMimeTypes.includes(file.type.toLowerCase()) || allowedExtensions.includes(ext);

      if (!isTypeValid) {
        setErrorMessage(
          `Only JPG, JPEG, PNG and WEBP images are allowed. "${file.name}" is not supported.`
        );
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
        setErrorMessage(
          `Each image must be 10MB or smaller. "${file.name}" is ${sizeMb}MB.`
        );
        return;
      }
    }

    setIsUploadingImage(true);
    setErrorMessage(null);

    try {
      const res = await uploadBlogImages(fileList);

      if (res.success && res.data) {
        // Extract array of URLs from response
        const rawUrls: string[] = [];

        if (Array.isArray(res.data.images)) {
          rawUrls.push(...res.data.images);
        } else if (res.data.data && Array.isArray(res.data.data.images)) {
          rawUrls.push(...res.data.data.images);
        } else if ((res as any).images && Array.isArray((res as any).images)) {
          rawUrls.push(...(res as any).images);
        } else if (res.data.imageUrl || res.data.url || res.data.secure_url) {
          rawUrls.push(res.data.imageUrl || res.data.url || res.data.secure_url || '');
        } else if (typeof res.data === 'string') {
          rawUrls.push(res.data);
        }

        const validUrls = rawUrls.filter(
          (u) => typeof u === 'string' && u.trim().length > 0
        );

        if (validUrls.length > 0) {
          const hasExistingFeatured = uploadedImages.some((img) => img.isFeatured);

          const newItems: BlogImageItem[] = validUrls.map((url, idx) => {
            const correspondingFile = fileList[idx];
            const isFeatured = !hasExistingFeatured && idx === 0 && currentCount === 0;
            return {
              id: `img-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
              url,
              alt: imageAltText || '',
              name: correspondingFile?.name,
              size: correspondingFile?.size,
              isFeatured,
            };
          });

          const updated = [...uploadedImages, ...newItems];

          // Ensure at least one image is featured
          if (updated.length > 0 && !updated.some((img) => img.isFeatured)) {
            updated[0].isFeatured = true;
          }

          setUploadedImages(updated);

          const activeFeat =
            updated.find((img) => img.isFeatured)?.url || updated[0]?.url || '';
          setFeaturedImageUrl(activeFeat);
          setCoverImagePreview(activeFeat);

          showToast(
            `${validUrls.length} image${validUrls.length > 1 ? 's' : ''} uploaded successfully!`
          );
        } else {
          setErrorMessage('Server did not return uploaded image URLs. Please try again.');
        }
      } else {
        setErrorMessage(res.error || 'Failed to upload images. Please check backend logs.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Image upload failed due to a network error.');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleSetFeaturedImage = (id: string) => {
    setUploadedImages((prev) => {
      const updated = prev.map((img) => ({
        ...img,
        isFeatured: img.id === id,
      }));
      const newFeat = updated.find((img) => img.isFeatured);
      if (newFeat) {
        setFeaturedImageUrl(newFeat.url);
        setCoverImagePreview(newFeat.url);
        if (newFeat.alt) {
          setImageAltText(newFeat.alt);
        }
      }
      return updated;
    });
    showToast('Primary featured image updated');
  };

  const handleRemoveImage = (id: string) => {
    setUploadedImages((prev) => {
      const target = prev.find((img) => img.id === id);
      const filtered = prev.filter((img) => img.id !== id);

      if (target?.isFeatured && filtered.length > 0) {
        filtered[0].isFeatured = true;
        setFeaturedImageUrl(filtered[0].url);
        setCoverImagePreview(filtered[0].url);
      } else if (filtered.length === 0) {
        setFeaturedImageUrl('');
        setCoverImagePreview(null);
      }

      return filtered;
    });
    showToast('Image removed');
  };

  const handleImageAltChange = (id: string, altVal: string) => {
    setUploadedImages((prev) =>
      prev.map((img) => {
        if (img.id === id) {
          if (img.isFeatured) {
            setImageAltText(altVal);
          }
          return { ...img, alt: altVal };
        }
        return img;
      })
    );
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

    const imagesPayload = uploadedImages.map((img) => ({
      url: img.url,
      alt: img.alt || (img.isFeatured ? imageAltText || title.trim() : ''),
    }));

    const activeFeaturedUrl =
      uploadedImages.find((img) => img.isFeatured)?.url ||
      uploadedImages[0]?.url ||
      featuredImageUrl ||
      coverImagePreview ||
      undefined;

    const activeFeaturedAlt =
      uploadedImages.find((img) => img.isFeatured)?.alt ||
      imageAltText ||
      title.trim();

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
      featuredImage: activeFeaturedUrl,
      imageAltText: activeFeaturedAlt,
      images: imagesPayload.length > 0 ? imagesPayload : undefined,
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
          resetFormToFresh();
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
            disabled={isSubmitting || isUploadingImage}
            onClick={() => handleSubmitBlog('Draft')}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 shadow-2xs transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
            disabled={isSubmitting || isUploadingImage}
            onClick={() => handleSubmitBlog('Published')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs hover:shadow-md hover:shadow-sky-500/20 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
                <div className="p-6 sm:p-8">
                  <div
                    key={`visual-editor-${blogId || 'new'}-${editorKey}`}
                    ref={editorRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => {
                      setContent(e.currentTarget.innerHTML);
                      updateActiveToolbarState();
                    }}
                    onBlur={(e) => setContent(e.currentTarget.innerHTML)}
                    onKeyUp={updateActiveToolbarState}
                    onMouseUp={updateActiveToolbarState}
                    onSelect={updateActiveToolbarState}
                    className="min-h-[340px] outline-none text-neutral-800 text-base leading-relaxed blog-editor-content prose max-w-none focus:ring-0"
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
                    className="blog-preview-content prose max-w-none text-base text-neutral-800"
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

          {/* CARD 3: FEATURED & GALLERY IMAGES (MULTIPLE UPLOAD UP TO 10) */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#0284C7]" />
                <h2 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider">
                  Featured &amp; Gallery Images
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    uploadedImages.length >= 10
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                  }`}
                >
                  {uploadedImages.length} / 10 Images
                </span>
                {uploadedImages.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setUploadedImages([]);
                      setCoverImagePreview(null);
                      setFeaturedImageUrl('');
                    }}
                    className="text-[11px] text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {/* Multiple Image Upload Input */}
            <div className="space-y-3">
              {uploadedImages.length < 10 && (
                <label
                  className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group ${
                    isUploadingImage
                      ? 'opacity-60 pointer-events-none bg-neutral-50 border-neutral-200'
                      : 'border-neutral-200 hover:border-[#0284C7] bg-neutral-50/70 hover:bg-sky-50/30'
                  }`}
                >
                  <input
                    type="file"
                    multiple
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleMultipleImageUpload}
                    disabled={isUploadingImage || isSubmitting || uploadedImages.length >= 10}
                    className="sr-only"
                  />
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-neutral-200 text-[#0284C7] group-hover:scale-110 group-hover:border-sky-300 transition-all flex items-center justify-center">
                    {isUploadingImage ? (
                      <Loader2 className="w-5 h-5 animate-spin text-[#0284C7]" />
                    ) : (
                      <UploadCloud className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-800 group-hover:text-[#0284C7] transition-colors">
                      {isUploadingImage
                        ? 'Uploading Images to Server...'
                        : uploadedImages.length > 0
                        ? '+ Add More Images (Up to 10 total)'
                        : 'Upload Featured & Gallery Images'}
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      JPG, JPEG, PNG, WEBP • Max 10MB per image • Select multiple
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#0284C7] bg-white border border-neutral-200 group-hover:border-sky-200 px-3 py-1 rounded-lg shadow-2xs mt-0.5">
                    Browse Images (Multiple)
                  </span>
                </label>
              )}

              {/* Gallery Grid */}
              {uploadedImages.length > 0 && (
                <div className="space-y-3 pt-1">
                  <div className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider flex items-center justify-between">
                    <span>Uploaded Gallery ({uploadedImages.length})</span>
                    <span className="text-[10.5px] text-neutral-400 font-normal lowercase">
                      click star to switch featured
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {uploadedImages.map((img, index) => (
                      <div
                        key={img.id}
                        className={`relative rounded-xl border p-2.5 transition-all space-y-2 bg-white ${
                          img.isFeatured
                            ? 'border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-xs'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        {/* Image Thumbnail & Actions Bar */}
                        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200/70 group">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img.url}
                            alt={img.alt || `Blog Image ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                          />

                          {/* Featured Badge or Set Featured Overlay */}
                          <div className="absolute top-2 left-2 flex items-center gap-1 z-10">
                            {img.isFeatured ? (
                              <span className="inline-flex items-center gap-1 bg-[#0284C7] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                                <Star className="w-3 h-3 fill-white text-white" />
                                <span>★ Featured</span>
                              </span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleSetFeaturedImage(img.id)}
                                title="Set as Primary Featured Image"
                                className="inline-flex items-center gap-1 bg-neutral-900/85 hover:bg-[#0284C7] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm opacity-90 hover:opacity-100 transition-colors cursor-pointer"
                              >
                                <Star className="w-3 h-3" />
                                <span>Set Featured</span>
                              </button>
                            )}
                          </div>

                          {/* Delete / Remove Button */}
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(img.id)}
                            title="Remove this image"
                            className="absolute top-2 right-2 p-1.5 rounded-md bg-neutral-900/85 hover:bg-red-600 text-white shadow-sm transition-colors cursor-pointer z-10"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Alt Text Input per image */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[10px] text-neutral-500 font-semibold">
                            <span>Image #{index + 1} Alt Text</span>
                            {img.isFeatured && (
                              <span className="text-[#0284C7] font-bold">SEO Primary</span>
                            )}
                          </div>
                          <input
                            type="text"
                            value={img.alt}
                            onChange={(e) => handleImageAltChange(img.id, e.target.value)}
                            placeholder="Descriptive alt text for SEO..."
                            className="w-full px-2.5 py-1 text-[11px] text-neutral-800 placeholder:text-neutral-400 bg-neutral-50 hover:bg-white border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0284C7] focus:border-[#0284C7] transition-all"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Primary Featured Image Alt Text */}
              <div className="space-y-1 pt-2 border-t border-neutral-100">
                <label
                  htmlFor={`${compId}-image-alt`}
                  className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider"
                >
                  Primary Featured Image Alt Text
                </label>
                <input
                  id={`${compId}-image-alt`}
                  type="text"
                  value={imageAltText}
                  onChange={(e) => {
                    const val = e.target.value;
                    setImageAltText(val);
                    setUploadedImages((prev) =>
                      prev.map((img) => (img.isFeatured ? { ...img, alt: val } : img))
                    );
                  }}
                  placeholder="Descriptive text for accessibility & SEO"
                  className="w-full px-3 py-1.5 text-xs text-neutral-800 placeholder:text-neutral-400 bg-neutral-50/60 hover:bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] transition-all"
                />
              </div>

              {/* Info helper */}
              <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-100 flex items-start gap-2 text-[11px] text-neutral-500">
                <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>
                  Select up to 10 images. The designated <strong>★ Featured Image</strong> is used
                  for social share previews, cards, and top banner.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
