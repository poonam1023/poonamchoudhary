"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Save,
  Globe,
  Archive,
  Trash2,
  Copy,
  Clock,
  Tag,
  ImageIcon,
  Star,
  X,
  ChevronDown,
  Upload,
  Eye,
  EyeOff,
} from "lucide-react";

const TiptapEditor = dynamic(() => import("@/components/editor/TiptapEditor"), {
  ssr: false,
  loading: () => (
    <div className="h-96 rounded-2xl border border-[#6E5A4E]/15 bg-[#FAF8F4] flex items-center justify-center text-sm text-[#6E5A4E] animate-pulse">
      Loading editor…
    </div>
  ),
});

const CATEGORIES = ["PARENTING", "MINDSET", "FAMILY", "LIFE", "GROWTH", "WELLNESS"];

interface BlogFormProps {
  postId?: string;
  initialData?: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    featuredImageAlt: string;
    category: string;
    tags: string[];
    featured: boolean;
    status: string;
    seoTitle: string;
    seoDescription: string;
  };
}

export default function BlogForm({ postId, initialData }: BlogFormProps) {
  const router = useRouter();
  const isEditing = Boolean(postId);

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || "");
  const [featuredImageAlt, setFeaturedImageAlt] = useState(initialData?.featuredImageAlt || "");
  const [category, setCategory] = useState(initialData?.category || "PARENTING");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [featured, setFeatured] = useState(initialData?.featured || false);
  const [status, setStatus] = useState(initialData?.status || "DRAFT");
  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(initialData?.seoDescription || "");

  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "error">("idle");
  const [showPreview, setShowPreview] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const autosaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing || !slug) {
      const generated = val
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(generated);
    }
  };

  // Autosave
  useEffect(() => {
    if (!title && !content) return;
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      handleSave("DRAFT", true);
    }, 10000);
    return () => {
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
  }, [title, content, excerpt]);

  const buildPayload = (targetStatus: string) => ({
    title,
    slug,
    excerpt,
    content,
    coverImage,
    featuredImageAlt,
    category,
    tags,
    featured,
    status: targetStatus,
    seoTitle: seoTitle || title,
    seoDescription: seoDescription || excerpt,
  });

  const handleSave = useCallback(
    async (targetStatus = status, silent = false) => {
      if (!title) return;
      if (!silent) setSaving(true);

      try {
        const method = isEditing ? "PUT" : "POST";
        const url = isEditing ? `/api/blogs/${postId}` : "/api/blogs";
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload(targetStatus)),
        });

        if (!res.ok) throw new Error("Save failed");
        const data = await res.json();

        if (!isEditing && data.post?.id) {
          router.replace(`/author/blogs/${data.post.id}/edit`);
        }
        setStatus(targetStatus);
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus("idle"), 3000);
      } catch {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 4000);
      } finally {
        if (!silent) setSaving(false);
      }
    },
    [title, slug, excerpt, content, coverImage, category, tags, featured, seoTitle, seoDescription, isEditing, postId, status]
  );

  const handleDelete = async () => {
    if (!postId) return;
    if (!confirm("Delete this article permanently? This cannot be undone.")) return;
    await fetch(`/api/blogs/${postId}`, { method: "DELETE" });
    router.push("/author/blogs");
  };

  const handleDuplicate = async () => {
    if (!postId) return;
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...buildPayload("DRAFT"), title: `${title} (Copy)`, slug: "" }),
    });
    router.push("/author/blogs");
  };

  const handleCoverUpload = async (file: File) => {
    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/media", { method: "POST", body: formData });
    if (res.ok) {
      const { url } = await res.json();
      setCoverImage(url);
    }
    setUploadingImage(false);
  };

  const addTag = () => {
    const t = tagInput.trim().toLowerCase();
    if (t && !tags.includes(t)) setTags([...tags, t]);
    setTagInput("");
  };

  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  const statusColors: Record<string, string> = {
    PUBLISHED: "text-green-700 bg-green-100",
    DRAFT: "text-amber-700 bg-amber-100",
    SCHEDULED: "text-blue-700 bg-blue-100",
    ARCHIVED: "text-gray-500 bg-gray-100",
  };

  return (
    <div className="flex flex-col h-full">
      {/* Top Bar */}
      <div
        className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-3 border-b border-[#6E5A4E]/15 flex-wrap"
        style={{ backgroundColor: "#FAF7F2" }}
      >
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-sm text-[#3A2C1E]">
            {isEditing ? "Edit Article" : "New Article"}
          </h1>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${statusColors[status]}`}>
            {status}
          </span>
          {saveStatus === "saved" && (
            <span className="text-[10px] text-green-600 font-medium">✓ Saved</span>
          )}
          {saveStatus === "error" && (
            <span className="text-[10px] text-red-500 font-medium">Save failed</span>
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#6E5A4E]/15 text-xs font-medium hover:bg-[#6E5A4E]/10 transition-colors"
            style={{ color: "#4A3728" }}
          >
            {showPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {showPreview ? "Editor" : "Preview"}
          </button>
          {isEditing && (
            <>
              <button
                type="button"
                onClick={handleDuplicate}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#6E5A4E]/15 text-xs font-medium hover:bg-[#6E5A4E]/10 transition-colors"
                style={{ color: "#4A3728" }}
              >
                <Copy className="w-3.5 h-3.5" />
                Duplicate
              </button>
              {status === "PUBLISHED" ? (
                <button
                  type="button"
                  onClick={() => handleSave("DRAFT")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#6E5A4E]/15 text-xs font-medium hover:bg-[#6E5A4E]/10 transition-colors"
                  style={{ color: "#4A3728" }}
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  Unpublish
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => handleSave("ARCHIVED")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#6E5A4E]/15 text-xs font-medium hover:bg-[#6E5A4E]/10 transition-colors"
                style={{ color: "#4A3728" }}
              >
                <Archive className="w-3.5 h-3.5" />
                Archive
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </button>
            </>
          )}
          <button
            type="button"
            onClick={() => handleSave("DRAFT")}
            disabled={saving || !title}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-[#6E5A4E]/20 text-xs font-bold uppercase tracking-wider hover:bg-[#6E5A4E]/10 transition-colors disabled:opacity-50"
            style={{ color: "#4A3728" }}
          >
            <Save className="w-3.5 h-3.5" />
            Save Draft
          </button>
          <button
            type="button"
            onClick={() => handleSave("PUBLISHED")}
            disabled={saving || !title}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:bg-[#98A58B] transition-colors disabled:opacity-50"
            style={{ backgroundColor: "#A8B29A" }}
          >
            <Globe className="w-3.5 h-3.5" />
            {saving ? "Saving…" : "Publish"}
          </button>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor / Preview */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ minWidth: 0 }}>
          <input
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Article Title…"
            className="w-full text-3xl font-bold bg-transparent border-none outline-none placeholder:text-[#6E5A4E]/30 resize-none"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: "#3A2C1E",
            }}
          />
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Write a brief excerpt or description for search results…"
            rows={2}
            className="w-full text-sm text-[#6E5A4E] bg-transparent border-none outline-none resize-none placeholder:text-[#6E5A4E]/30"
          />

          {showPreview ? (
            <div
              className="prose prose-stone max-w-none p-6 rounded-2xl border border-[#6E5A4E]/15"
              style={{ backgroundColor: "#FAF8F4" }}
              dangerouslySetInnerHTML={{ __html: content || "<p><em>No content yet.</em></p>" }}
            />
          ) : (
            <TiptapEditor content={content} onChange={setContent} />
          )}
        </div>

        {/* Sidebar */}
        <div
          className="hidden xl:flex flex-col w-72 shrink-0 overflow-y-auto border-l border-[#6E5A4E]/10 p-5 space-y-6"
          style={{ backgroundColor: "#FAF7F2" }}
        >
          {/* Cover Image */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E5A4E] mb-2">
              Cover Image
            </label>
            {coverImage ? (
              <div className="relative group">
                <img src={coverImage} alt="Cover" className="w-full aspect-video object-cover rounded-xl" />
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => coverInputRef.current?.click()}
                disabled={uploadingImage}
                className="w-full h-28 rounded-xl border-2 border-dashed border-[#6E5A4E]/20 flex flex-col items-center justify-center gap-1.5 hover:border-[#A8B29A] transition-colors group"
              >
                <Upload className="w-5 h-5 text-[#6E5A4E]/40 group-hover:text-[#A8B29A] transition-colors" />
                <span className="text-xs text-[#6E5A4E]/50">
                  {uploadingImage ? "Uploading…" : "Upload cover image"}
                </span>
              </button>
            )}
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleCoverUpload(f); }}
            />
            {coverImage && (
              <input
                value={featuredImageAlt}
                onChange={(e) => setFeaturedImageAlt(e.target.value)}
                placeholder="Image alt text…"
                className="mt-2 w-full text-xs px-3 py-2 rounded-lg border border-[#6E5A4E]/15 bg-[#FAF8F4] outline-none focus:border-[#A8B29A]"
                style={{ color: "#3A2C1E" }}
              />
            )}
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E5A4E] mb-2">
              URL Slug
            </label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="article-url-slug"
              className="w-full text-xs px-3 py-2 rounded-lg border border-[#6E5A4E]/15 bg-[#FAF8F4] outline-none focus:border-[#A8B29A] font-mono"
              style={{ color: "#3A2C1E" }}
            />
            {slug && (
              <p className="text-[10px] text-[#6E5A4E]/60 mt-1">/blog/{slug}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E5A4E] mb-2">
              Category
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs px-3 py-2 pr-8 rounded-lg border border-[#6E5A4E]/15 bg-[#FAF8F4] outline-none focus:border-[#A8B29A] appearance-none"
                style={{ color: "#3A2C1E" }}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-2.5 text-[#6E5A4E]/50 pointer-events-none" />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E5A4E] mb-2">
              <Tag className="w-3 h-3 inline mr-1" />Tags
            </label>
            <div className="flex gap-1.5 mb-2 flex-wrap">
              {tags.map((t) => (
                <span key={t} className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[#A8B29A]/20 text-[#4A3728] font-medium">
                  {t}
                  <button type="button" onClick={() => removeTag(t)} className="text-[#6E5A4E] hover:text-red-400">
                    <X className="w-2.5 h-2.5" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-1.5">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addTag(); } }}
                placeholder="Add tag…"
                className="flex-1 text-xs px-3 py-1.5 rounded-lg border border-[#6E5A4E]/15 bg-[#FAF8F4] outline-none focus:border-[#A8B29A]"
                style={{ color: "#3A2C1E" }}
              />
              <button type="button" onClick={addTag} className="px-2.5 py-1.5 rounded-lg bg-[#A8B29A]/20 text-xs font-bold text-[#4A3728] hover:bg-[#A8B29A]/30">
                +
              </button>
            </div>
          </div>

          {/* Featured */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setFeatured(!featured)}
                className={`relative w-10 h-5 rounded-full transition-colors ${featured ? "bg-[#A8B29A]" : "bg-[#6E5A4E]/20"}`}
              >
                <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${featured ? "translate-x-5" : "translate-x-0"}`} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6E5A4E]">
                <Star className="w-3 h-3 inline mr-1" />Featured Article
              </span>
            </label>
          </div>

          {/* SEO */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6E5A4E] mb-3">SEO Settings</h3>
            <div className="space-y-2">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#6E5A4E]/60 mb-1 block">Meta Title</label>
                <input
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder={title || "SEO title…"}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#6E5A4E]/15 bg-[#FAF8F4] outline-none focus:border-[#A8B29A]"
                  style={{ color: "#3A2C1E" }}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#6E5A4E]/60 mb-1 block">Meta Description</label>
                <textarea
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  placeholder={excerpt || "SEO description…"}
                  rows={3}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#6E5A4E]/15 bg-[#FAF8F4] outline-none focus:border-[#A8B29A] resize-none"
                  style={{ color: "#3A2C1E" }}
                />
                <p className="text-[10px] text-[#6E5A4E]/50 mt-0.5">{seoDescription.length}/160</p>
              </div>
            </div>
          </div>

          {/* Reading time info */}
          <div className="flex items-center gap-2 text-xs text-[#6E5A4E]/60">
            <Clock className="w-3.5 h-3.5" />
            <span>
              {Math.ceil(content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length / 200) || 0} min read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
