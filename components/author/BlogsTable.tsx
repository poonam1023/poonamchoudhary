"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Edit,
  Trash2,
  Globe,
  Archive,
  Copy,
  EyeOff,
  Eye,
  Star,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  status: string;
  featured: boolean;
  views: number;
  readingTime: string;
  updatedAt: Date;
  publishedAt: Date | null;
};

const STATUS_OPTIONS = ["ALL", "PUBLISHED", "DRAFT", "SCHEDULED", "ARCHIVED"];
const CATEGORY_OPTIONS = ["ALL", "PARENTING", "MINDSET", "FAMILY", "LIFE", "GROWTH", "WELLNESS"];

const statusColors: Record<string, string> = {
  PUBLISHED: "bg-green-100 text-green-800",
  DRAFT: "bg-amber-100 text-amber-800",
  SCHEDULED: "bg-blue-100 text-blue-800",
  ARCHIVED: "bg-gray-100 text-gray-500",
};

export default function BlogsTable({ initialPosts }: { initialPosts: Post[] }) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [sortField, setSortField] = useState<keyof Post>("updatedAt");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const filtered = posts
    .filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "ALL" || p.status === statusFilter;
      const matchCategory = categoryFilter === "ALL" || p.category === categoryFilter;
      return matchSearch && matchStatus && matchCategory;
    })
    .sort((a, b) => {
      const av = a[sortField];
      const bv = b[sortField];
      const dir = sortDir === "asc" ? 1 : -1;
      if (av == null) return 1;
      if (bv == null) return -1;
      return av > bv ? dir : -dir;
    });

  const toggleSort = (field: keyof Post) => {
    if (sortField === field) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const handleAction = useCallback(async (action: string, postId: string) => {
    if (action === "delete") {
      if (!confirm("Delete this post permanently?")) return;
      await fetch(`/api/blogs/${postId}`, { method: "DELETE" });
      setPosts((ps) => ps.filter((p) => p.id !== postId));
      return;
    }

    if (action === "duplicate") {
      const post = posts.find((p) => p.id === postId);
      if (!post) return;
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${post.title} (Copy)`,
          slug: "",
          excerpt: post.excerpt,
          content: "",
          category: post.category,
          status: "DRAFT",
        }),
      });
      if (res.ok) {
        const { post: newPost } = await res.json();
        setPosts((ps) => [newPost, ...ps]);
      }
      return;
    }

    const statusMap: Record<string, string> = {
      publish: "PUBLISHED",
      unpublish: "DRAFT",
      archive: "ARCHIVED",
      restore: "DRAFT",
    };

    if (statusMap[action]) {
      const res = await fetch(`/api/blogs/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: statusMap[action] }),
      });
      if (res.ok) {
        const { post } = await res.json();
        setPosts((ps) => ps.map((p) => (p.id === postId ? { ...p, status: post.status } : p)));
      }
    }
  }, [posts]);

  const SortIcon = ({ field }: { field: keyof Post }) =>
    sortField === field ? (
      sortDir === "asc" ? <ChevronUp className="w-3 h-3 inline" /> : <ChevronDown className="w-3 h-3 inline" />
    ) : null;

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-48">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#6E5A4E]/50" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles…"
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#6E5A4E]/15 text-sm focus:outline-none focus:border-[#A8B29A] bg-[#FAF8F4]"
            style={{ color: "#3A2C1E" }}
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="text-xs px-3 py-2 rounded-xl border border-[#6E5A4E]/15 bg-[#FAF8F4] focus:outline-none focus:border-[#A8B29A]"
          style={{ color: "#3A2C1E" }}
        >
          {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s === "ALL" ? "All Statuses" : s}</option>)}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="text-xs px-3 py-2 rounded-xl border border-[#6E5A4E]/15 bg-[#FAF8F4] focus:outline-none focus:border-[#A8B29A]"
          style={{ color: "#3A2C1E" }}
        >
          {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c === "ALL" ? "All Categories" : c}</option>)}
        </select>
        <span className="text-xs text-[#6E5A4E]">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-[#6E5A4E]/10 overflow-hidden" style={{ backgroundColor: "#FAF8F4" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#6E5A4E]/10 bg-[#FAF7F2]">
                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-[#6E5A4E] cursor-pointer select-none" onClick={() => toggleSort("title")}>
                  Title <SortIcon field="title" />
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-[#6E5A4E]">Status</th>
                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-[#6E5A4E]">Category</th>
                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-[#6E5A4E] cursor-pointer select-none" onClick={() => toggleSort("views")}>
                  Views <SortIcon field="views" />
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-[#6E5A4E] cursor-pointer select-none" onClick={() => toggleSort("updatedAt")}>
                  Updated <SortIcon field="updatedAt" />
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-[#6E5A4E]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#6E5A4E]/8">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-sm text-[#6E5A4E]">
                    No posts found.{" "}
                    <Link href="/author/blogs/new" className="text-[#A8B29A] underline">
                      Create your first article
                    </Link>
                  </td>
                </tr>
              ) : (
                filtered.map((post) => (
                  <tr key={post.id} className="hover:bg-[#6E5A4E]/5 transition-colors">
                    <td className="px-4 py-3 max-w-xs">
                      <div className="flex items-start gap-2">
                        {post.featured && <Star className="w-3 h-3 text-[#C4A882] shrink-0 mt-0.5" />}
                        <div>
                          <p className="font-semibold text-[#3A2C1E] line-clamp-1">{post.title}</p>
                          <p className="text-xs text-[#6E5A4E]/70 font-mono mt-0.5">/blog/{post.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${statusColors[post.status] || "bg-gray-100 text-gray-600"}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs text-[#6E5A4E]">{post.category}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs text-[#6E5A4E] flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {post.views}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-[#6E5A4E]">
                      {new Date(post.updatedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {post.status === "PUBLISHED" && (
                          <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer"
                            className="p-1.5 rounded-lg hover:bg-[#6E5A4E]/10 text-[#6E5A4E] transition-colors" title="View public">
                            <Globe className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <Link href={`/author/blogs/${post.id}/edit`}
                          className="p-1.5 rounded-lg hover:bg-[#6E5A4E]/10 text-[#6E5A4E] transition-colors" title="Edit">
                          <Edit className="w-3.5 h-3.5" />
                        </Link>
                        {post.status !== "PUBLISHED" && (
                          <button onClick={() => handleAction("publish", post.id)}
                            className="p-1.5 rounded-lg hover:bg-green-50 text-green-600 transition-colors" title="Publish">
                            <Globe className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {post.status === "PUBLISHED" && (
                          <button onClick={() => handleAction("unpublish", post.id)}
                            className="p-1.5 rounded-lg hover:bg-amber-50 text-amber-600 transition-colors" title="Unpublish">
                            <EyeOff className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {post.status !== "ARCHIVED" && (
                          <button onClick={() => handleAction("archive", post.id)}
                            className="p-1.5 rounded-lg hover:bg-[#6E5A4E]/10 text-[#6E5A4E] transition-colors" title="Archive">
                            <Archive className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {post.status === "ARCHIVED" && (
                          <button onClick={() => handleAction("restore", post.id)}
                            className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" title="Restore">
                            <Globe className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button onClick={() => handleAction("duplicate", post.id)}
                          className="p-1.5 rounded-lg hover:bg-[#6E5A4E]/10 text-[#6E5A4E] transition-colors" title="Duplicate">
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => handleAction("delete", post.id)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Delete">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
