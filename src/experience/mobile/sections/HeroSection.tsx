"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ChapterHeader from "../components/ChapterHeader";
import { heroContent } from "@/src/shared/data/content";

/**
 * HeroSection — Chapter 01: Introduction
 *
 * Architecture:
 *  - Chapter header (CHAPTER 01 — INTRODUCTION)
 *  - Non-rectangular rounded paper frame portrait with 100%-101% breathing effect
 *  - Floating paper note quote card overlapping portrait with tape illustration
 *  - Controlled editorial typography overlap over portrait
 *  - Large full-width rounded buttons with soft compression micro-interactions
 *  - Parallax exit motion on scroll
 */
export default function HeroSection() {
  const { scrollY } = useScroll();

  // Gentle depth / parallax exit effect
  const portraitY = useTransform(scrollY, [0, 600], [0, -45]);
  const quoteY = useTransform(scrollY, [0, 600], [0, -20]);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden px-5 pt-16 pb-12 select-none"
      style={{
        background: "linear-gradient(175deg, #FAF8F4 0%, #F4EFE6 60%, #EDE5D8 100%)",
      }}
    >
      {/* Subtle Background Glow Wash */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,178,154,0.20) 0%, rgba(196,168,130,0.08) 50%, transparent 80%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 -left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,124,93,0.08) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      {/* ── Chapter 01 Label & Heading Header ── */}
      <div className="relative z-10 w-full mb-4">
        <ChapterHeader
          chapterNum={heroContent.chapterNum}
          title={heroContent.chapterLabel}
        />
      </div>

      {/* ── Visual Stage: Organic Portrait + Overlapping Floating Quote Card ── */}
      <div className="relative w-full max-w-sm mx-auto my-2 z-10">
        {/* Parallax Container for Portrait */}
        <motion.div
          style={{ y: portraitY }}
          className="relative w-full flex justify-center"
        >
          {/* Non-rectangular organic paper frame container */}
          <div
            className="relative w-[85%] aspect-[4/5] rounded-[36px] overflow-hidden p-2"
            style={{
              background: "linear-gradient(145deg, #FAF7F2 0%, #EDE5D8 100%)",
              boxShadow:
                "0 20px 45px -10px rgba(58,44,30,0.18), inset 0 0 0 1px rgba(255,255,255,0.6)",
              borderRadius: "42px 32px 48px 36px", // Handcrafted non-perfect rectangle shape
            }}
          >
            {/* Inner Portrait with 100% to 101% subtle breathing animation */}
            <motion.div
              className="w-full h-full rounded-[34px] overflow-hidden relative"
              animate={{ scale: [1, 1.012, 1] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/author-portrait.png?v=3"
                alt="Poonam Choudhary"
                className="w-full h-full object-cover object-[center_15%]"
                style={{
                  filter: "contrast(1.02) brightness(1.02) saturate(0.96)",
                }}
              />
              {/* Soft Inner Frame Shadow Overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[34px] pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Paper Note Quote Card (Overlapping Portrait like a pinned note) */}
        <motion.div
          style={{ y: quoteY }}
          initial={{ opacity: 0, rotate: -3, y: 20 }}
          animate={{ opacity: 1, rotate: -2, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="absolute -bottom-6 -left-1 w-[68%] z-20 p-4 rounded-2xl border border-[#6E5A4E]/12 bg-[#FAF8F4]/92 backdrop-blur-md shadow-xl"
        >
          {/* Tape Illustration */}
          <div
            aria-hidden="true"
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#C4A882]/40 rounded-sm rotate-1 shadow-sm pointer-events-none"
          />

          <span
            className="block text-2xl leading-none text-[#C4A882] mb-1 font-serif select-none"
          >
            &ldquo;
          </span>
          <p
            className="text-xs xs:text-sm font-serif italic text-[#3A2C1E] leading-snug"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {heroContent.quote}
          </p>
          <p
            className="text-[9px] font-sans font-medium text-[#6E5A4E]/70 uppercase tracking-wider mt-2"
          >
            {heroContent.quoteAuthor}
          </p>
        </motion.div>

        {/* Small Author Capsule Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -top-3 -right-2 z-20 px-3 py-1.5 rounded-full bg-[#FAF8F4]/90 border border-[#A8B29A]/30 backdrop-blur-sm shadow-md"
        >
          <span className="text-[9px] font-semibold tracking-widest text-[#6E5A4E] uppercase">
            {heroContent.tagline}
          </span>
        </motion.div>
      </div>

      {/* ── Editorial Content Block (Controlled Overlap) ── */}
      <div className="relative z-10 mt-8 mb-4 max-w-sm mx-auto text-center flex flex-col items-center">
        {/* Controlled Overlapping Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl xs:text-4xl font-serif text-[#3A2C1E] leading-[1.12] tracking-tight mb-3"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {heroContent.headline}
          <br />
          <em className="italic text-[#C4A882] font-normal">
            {heroContent.headlineItalic}
          </em>
        </motion.h1>

        {/* Warm Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-xs xs:text-sm font-sans text-[#6E5A4E] leading-relaxed max-w-xs mb-8"
        >
          {heroContent.subline}
        </motion.p>

        {/* Premium Full-Width Buttons with Soft Compression Micro-Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-full flex flex-col gap-3.5"
        >
          {/* Primary CTA: Explore Book */}
          <a
            href="#book"
            className="group relative w-full min-h-[54px] flex items-center justify-center gap-3 px-6 rounded-2xl bg-[#A8B29A] text-[#FAF8F4] font-sans text-xs font-semibold tracking-wider uppercase shadow-md transition-all duration-300 active:scale-[0.98] active:shadow-sm"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span>{heroContent.primaryCta}</span>
          </a>

          {/* Secondary CTA: Read Articles */}
          <a
            href="#articles"
            className="group relative w-full min-h-[52px] flex items-center justify-center gap-2.5 px-6 rounded-2xl border border-[#6E5A4E]/20 bg-transparent text-[#4A3728] font-sans text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#6E5A4E]/5 active:scale-[0.98]"
          >
            <span>{heroContent.secondaryCta}</span>
            <svg
              className="w-4 h-4 text-[#6E5A4E] transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Decorative Page Footer Indicator */}
      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#6E5A4E]/40 font-sans pt-4 border-t border-[#6E5A4E]/10">
        <span>PROJECT POONAM</span>
        <span>CHAPTER 01</span>
      </div>
    </section>
  );
}
