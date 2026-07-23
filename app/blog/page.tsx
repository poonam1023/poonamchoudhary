"use client";

import React from "react";
import Link from "next/link";
import { articles, newsletterContent, footerContent } from "@/src/shared/data/content";

export default function BlogPage() {
  return (
    <div
      className="min-h-screen w-full selection:bg-[#A8B29A]/30"
      style={{
        backgroundColor: "#FAF7F2",
        color: "#3A2C1E",
        fontFamily: "var(--font-sans), sans-serif",
      }}
    >
      {/* ── Top Navigation Bar ── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(250, 247, 242, 0.9)",
          borderBottom: "1px solid rgba(110, 90, 78, 0.1)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
            style={{ color: "#6E5A4E" }}
            aria-label="Return to Book"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Return to Book
          </Link>
          <div className="text-center">
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#3A2C1E",
                letterSpacing: "-0.01em",
              }}
            >
              Poonam Choudhary
            </span>
          </div>
          <Link
            href="/#book"
            className="text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-sm transition-all duration-200"
            style={{
              backgroundColor: "#A8B29A",
              color: "#FAF7F2",
            }}
          >
            Explore Book
          </Link>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#110907]/15 mb-6">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6E5A4E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#6E5A4E" }}
          >
            AUTHOR&apos;S JOURNAL & BLOG
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: "#3A2C1E",
            lineHeight: 1.1,
          }}
        >
          Words on Presence, Parenting &amp; Connection
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: "#6E5A4E",
          }}
        >
          Heartfelt essays, practical guidance, and quiet reflections for raising confident, kind, and emotionally grounded children.
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-12 h-[1px] bg-[#C4A882]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4A882]/60" />
          <div className="w-12 h-[1px] bg-[#C4A882]/40" />
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 border border-[#6E5A4E]/10 bg-[#FAF8F4]/80 hover:bg-[#FAF8F4] hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: "rgba(168, 178, 154, 0.18)",
                      color: "#4A5A3E",
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "#6E5A4E", opacity: 0.8 }}
                  >
                    {article.readTime}
                  </span>
                </div>

                <h2
                  className="text-2xl font-bold mb-3 transition-colors duration-200 group-hover:text-[#98A58B]"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "#3A2C1E",
                    lineHeight: 1.25,
                  }}
                >
                  {article.title}
                </h2>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.05rem",
                    color: "#5A4A38",
                  }}
                >
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#6E5A4E]/10 flex items-center justify-between">
                <span
                  className="text-xs font-semibold uppercase tracking-wider transition-colors duration-200 group-hover:text-[#4A3728]"
                  style={{ color: "#6E5A4E" }}
                >
                  Read Reflection
                </span>
                <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div
          className="p-10 md:p-14 rounded-3xl border border-[#6E5A4E]/15"
          style={{ backgroundColor: "#F4EFE6" }}
        >
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block"
            style={{ color: "#6E5A4E" }}
          >
            {newsletterContent.label}
          </span>
          <h3
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: "#3A2C1E",
            }}
          >
            {newsletterContent.headline}
          </h3>
          <p
            className="text-base mb-8 max-w-lg mx-auto"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.1rem",
              color: "#6E5A4E",
            }}
          >
            {newsletterContent.subline}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={newsletterContent.placeholder}
              className="w-full px-4 py-3 rounded-xl border border-[#6E5A4E]/20 text-sm focus:outline-none focus:border-[#A8B29A]"
              style={{ backgroundColor: "#FAF7F2", color: "#3A2C1E" }}
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#98A58B] whitespace-nowrap"
              style={{
                backgroundColor: "#A8B29A",
                color: "#FAF7F2",
              }}
            >
              {newsletterContent.cta}
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-10 border-t border-[#6E5A4E]/10 text-center"
        style={{ color: "#6E5A4E" }}
      >
        <p className="text-xs mb-2 font-medium">{footerContent.name} — {footerContent.role}</p>
        <p className="text-xs opacity-60">{footerContent.copyright}</p>
      </footer>
    </div>
  );
}
