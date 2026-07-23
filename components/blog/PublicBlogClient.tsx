"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  featuredImageAlt: string | null;
  category: string;
  readingTime: string;
  author: string;
  publishedAt: Date | null;
  featured: boolean;
};

export default function PublicBlogClient({
  posts,
  categories,
  featuredId,
}: {
  posts: Post[];
  categories: string[];
  featuredId?: string;
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered = posts.filter((p) => {
    if (p.id === featuredId) return false; // featured shown separately
    const matchCat = activeCategory === "ALL" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#6E5A4E]/50" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#6E5A4E]/15 text-sm focus:outline-none focus:border-[#A8B29A] transition-colors"
            style={{ backgroundColor: "#FAF8F4", color: "#3A2C1E" }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-3 text-[#6E5A4E]/50 hover:text-[#3A2C1E]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150"
              style={{
                backgroundColor: activeCategory === cat ? "#A8B29A" : "transparent",
                color: activeCategory === cat ? "#FAF7F2" : "#6E5A4E",
                border: `1px solid ${activeCategory === cat ? "#A8B29A" : "rgba(110,90,78,0.18)"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[#6E5A4E] text-sm">No articles found.</p>
          {(search || activeCategory !== "ALL") && (
            <button
              onClick={() => { setSearch(""); setActiveCategory("ALL"); }}
              className="mt-3 text-xs text-[#A8B29A] hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <article
                className="h-full flex flex-col rounded-2xl overflow-hidden border border-[#6E5A4E]/10 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                style={{ backgroundColor: "#FAF8F4" }}
              >
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.featuredImageAlt || post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: "rgba(168,178,154,0.18)", color: "#4A5A3E" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-[#6E5A4E]">{post.readingTime}</span>
                  </div>
                  <h2
                    className="font-bold mb-2 line-clamp-2 group-hover:text-[#6E5A4E] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.25rem", lineHeight: 1.25 }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed text-[#5A4A38] mb-4 line-clamp-2 flex-1"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-[#6E5A4E]/10 flex items-center justify-between">
                    <span className="text-xs text-[#6E5A4E]">
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
                        : ""}
                    </span>
                    <span className="text-xs font-semibold text-[#A8B29A] group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
