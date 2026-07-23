"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ChapterHeader from "../components/ChapterHeader";
import { articlesContent, articles } from "@/src/shared/data/content";

/** Thumbnail placeholder gradient generator */
const ARTICLE_THUMBNAILS = [
  "linear-gradient(135deg, #A8B29A 0%, #6E5A4E 100%)",
  "linear-gradient(135deg, #C97C5D 0%, #3A2C1E 100%)",
  "linear-gradient(135deg, #C4A882 0%, #A8B29A 100%)",
  "linear-gradient(135deg, #6E5A4E 0%, #EDE5D8 100%)",
];

/**
 * ArticlesSection — Chapter 07: Articles
 *
 * Architecture:
 *  - Chapter Header (CHAPTER 07 — ARTICLES)
 *  - Featured Article: Large card with thumbnail, category, title, excerpt, read time, sliding arrow
 *  - 3 Secondary Articles: Compact cards with thumbnail, category, title, read time
 *  - Interactive micro-interactions: Image scale, arrow slide on press/hover
 */
export default function ArticlesSection() {
  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1);

  return (
    <section
      id="articles"
      aria-labelledby="articles-heading"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden px-5 py-16 select-none"
      style={{
        background: "#FAF7F2", // Paper background for Chapter 07
      }}
    >
      {/* Background accent wash */}
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-12 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,178,154,0.12) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      <div className="relative z-10 w-full mb-4">
        <ChapterHeader
          chapterNum={articlesContent.chapterNum}
          title={articlesContent.chapterLabel}
        />
      </div>

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col gap-6">
        {/* Section Intro */}
        <div className="text-center mb-2">
          <h3
            id="articles-heading"
            className="text-2xl font-serif text-[#3A2C1E] mb-1"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {articlesContent.headline}
          </h3>
          <p className="text-xs font-sans text-[#6E5A4E] leading-relaxed">
            {articlesContent.subline}
          </p>
        </div>

        {/* ── Featured Article Card ── */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/blog"
              className="group block relative w-full rounded-2xl overflow-hidden bg-[#FAF8F4] border border-[#6E5A4E]/12 shadow-md transition-all duration-300 active:scale-[0.99]"
            >
              {/* Large Thumbnail Header */}
              <div
                className="w-full h-40 relative overflow-hidden flex items-center justify-center p-4"
                style={{ background: ARTICLE_THUMBNAILS[0] }}
              >
                <div className="w-full h-full border border-white/20 rounded-xl flex items-center justify-center p-3 text-center">
                  <span
                    className="text-lg font-serif italic text-[#FAF8F4] leading-snug drop-shadow-sm"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    &ldquo;{featuredArticle.title}&rdquo;
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[9px] font-mono tracking-widest text-[#A8B29A] font-semibold uppercase">
                    {featuredArticle.category}
                  </span>
                  <span className="text-[10px] font-sans text-[#6E5A4E]/60">
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h4
                  className="text-lg font-serif font-semibold text-[#3A2C1E] leading-snug mb-2 group-hover:text-[#A8B29A] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {featuredArticle.title}
                </h4>

                <p className="text-xs font-sans text-[#6E5A4E] leading-relaxed mb-4">
                  {featuredArticle.excerpt}
                </p>

                {/* Read Full Article CTA with Sliding Arrow */}
                <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#3A2C1E] group-hover:text-[#A8B29A] transition-colors duration-200">
                  <span>READ ESSAY</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ── 3 Secondary Articles ── */}
        <div className="flex flex-col gap-3">
          {secondaryArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#6E5A4E]/10 shadow-sm transition-all duration-300 active:scale-[0.99]"
              >
                {/* Compact Thumbnail */}
                <div
                  className="w-16 h-16 rounded-xl shrink-0 overflow-hidden flex items-center justify-center p-1.5 text-center shadow-inner"
                  style={{ background: ARTICLE_THUMBNAILS[(idx + 1) % ARTICLE_THUMBNAILS.length] }}
                >
                  <span
                    className="text-[9px] font-serif italic text-[#FAF8F4] leading-none"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    ESSAY
                  </span>
                </div>

                {/* Article Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[8px] font-mono tracking-widest text-[#A8B29A] font-semibold uppercase">
                      {article.category}
                    </span>
                    <span className="text-[9px] font-sans text-[#6E5A4E]/50">• {article.readTime}</span>
                  </div>

                  <h5
                    className="text-sm font-serif font-semibold text-[#3A2C1E] leading-tight truncate group-hover:text-[#A8B29A] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {article.title}
                  </h5>

                  <p className="text-[11px] font-sans text-[#6E5A4E] leading-snug truncate mt-0.5">
                    {article.excerpt}
                  </p>
                </div>

                {/* Sliding Arrow */}
                <svg
                  className="w-4 h-4 text-[#6E5A4E]/60 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#3A2C1E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#6E5A4E]/40 font-sans pt-10 border-t border-[#6E5A4E]/10 mt-8">
        <span>ESSAYS & WRITINGS</span>
        <span>CHAPTER 07</span>
      </div>
    </section>
  );
}
