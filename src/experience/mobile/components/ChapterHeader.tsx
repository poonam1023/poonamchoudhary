"use client";

import React from "react";
import { motion } from "framer-motion";

interface ChapterHeaderProps {
  chapterNum: string; // e.g. "01" or "04"
  title: string;      // e.g. "INTRODUCTION" or "THE BOOK"
  totalPages?: number; // default 8
  className?: string;
  lightMode?: boolean; // if true, uses lighter text on dark/tinted backgrounds
}

/**
  * ChapterHeader — Distinct luxury editorial chapter label component.
  * Formats headers like:
  * ────────────────────────
  * CHAPTER 04 · PAGE 04/08
  * THE BOOK
  * ────────────────────────
  */
export default function ChapterHeader({
  chapterNum,
  title,
  totalPages = 8,
  className = "",
  lightMode = false,
}: ChapterHeaderProps) {
  const pageStr = `PAGE ${chapterNum.padStart(2, "0")} / ${String(totalPages).padStart(2, "0")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className={`w-full pt-8 pb-6 text-center select-none ${className}`}
    >
      {/* Top Editorial Rule */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-[1px] w-12 bg-[#6E5A4E]/15" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#A8B29A]/40" />
        <div className="h-[1px] w-12 bg-[#6E5A4E]/15" />
      </div>

      {/* Meta Row: Chapter Number + Page Number */}
      <div className="flex items-center justify-center gap-2 mb-2.5">
        <span
          className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#A8B29A]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          CHAPTER {chapterNum.padStart(2, "0")}
        </span>
        <span className="text-[#6E5A4E]/30 text-[9px]">•</span>
        <span
          className="text-[9px] tracking-[0.18em] uppercase text-[#6E5A4E]/40"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {pageStr}
        </span>
      </div>

      {/* Main Chapter Title */}
      <h2
        className={`text-2xl xs:text-3xl sm:text-4xl font-normal tracking-[0.08em] uppercase ${
          lightMode ? "text-[#FAF8F4]" : "text-[#3A2C1E]"
        }`}
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {title}
      </h2>

      {/* Bottom Subtle Ornament */}
      <div className="mt-3 flex items-center justify-center">
        <div className="w-6 h-[1.5px] bg-[#A8B29A]/30 rounded-full" />
      </div>
    </motion.div>
  );
}
