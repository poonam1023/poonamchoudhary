"use client";

import React from "react";
import { motion } from "framer-motion";
import ChapterHeader from "../components/ChapterHeader";
import { aboutContent } from "@/src/shared/data/content";

/**
 * AboutSection — Chapter 03: Meet the Author
 *
 * Architecture:
 *  - Chapter Header (CHAPTER 03 — MEET THE AUTHOR)
 *  - Portrait with rounded editorial frame & soft shadow
 *  - Floating capsule badge (AUTHOR · SPEAKER · PARENTING GUIDE)
 *  - Editorial biography in structured blocks: Paragraph -> Quote -> Paragraph -> Highlight
 *  - Centered personal quote with large breathing quotation marks
 *  - Zero fabricated stats (Authenticity Policy)
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden px-5 py-16 select-none"
      style={{
        background: "#FAF7F2", // Paper background for Chapter 03
      }}
    >
      {/* Background glow accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-12 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(196,168,130,0.12) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      <div className="relative z-10 w-full mb-6">
        <ChapterHeader
          chapterNum={aboutContent.chapterNum}
          title={aboutContent.chapterLabel}
        />
      </div>

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center">
        {/* ── Portrait with Rounded Editorial Frame ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-48 aspect-[3/4] mb-6"
        >
          <div
            className="w-full h-full rounded-3xl overflow-hidden p-1.5 shadow-xl"
            style={{
              background: "linear-gradient(145deg, #FAF8F4 0%, #EDE5D8 100%)",
              border: "1px solid rgba(110,90,78,0.12)",
            }}
          >
            <img
              src="/author-portrait.png?v=3"
              alt="Poonam Choudhary"
              className="w-full h-full object-cover object-center rounded-[20px]"
              style={{
                filter: "contrast(1.02) saturate(0.95)",
              }}
            />
          </div>

          {/* Floating Author Badge Capsule */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-max px-3.5 py-1.5 rounded-full bg-[#FAF8F4] border border-[#A8B29A]/30 shadow-md backdrop-blur-sm">
            <span className="text-[9px] font-semibold tracking-widest text-[#6E5A4E] uppercase">
              {aboutContent.role}
            </span>
          </div>
        </motion.div>

        {/* Author Name */}
        <motion.h3
          id="about-heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl xs:text-3xl font-serif text-[#3A2C1E] text-center mt-2 mb-6"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {aboutContent.headline}
        </motion.h3>

        {/* ── Structured Biography Blocks ── */}
        <div className="w-full space-y-5 text-left text-xs xs:text-sm font-sans text-[#6E5A4E] leading-relaxed">
          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {aboutContent.bioParagraph1}
          </motion.p>

          {/* Large Callout Quote */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="my-6 p-4 rounded-xl border-l-2 border-[#A8B29A] bg-[#F4EFE6]/60 italic font-serif text-base text-[#3A2C1E] leading-snug"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            &ldquo;{aboutContent.bioQuote}&rdquo;
          </motion.div>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {aboutContent.bioParagraph2}
          </motion.p>

          {/* Highlight Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-4 rounded-2xl bg-[#EDE5D8]/50 border border-[#6E5A4E]/10"
          >
            <p className="text-xs font-sans text-[#3A2C1E] font-medium leading-relaxed">
              {aboutContent.bioHighlight}
            </p>
          </motion.div>
        </div>

        {/* ── Large Centered Personal Quote with Breathing Animation ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-10 text-center relative px-6"
        >
          <motion.span
            animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="block text-6xl text-[#C4A882] font-serif leading-none -mb-6 select-none"
          >
            &ldquo;
          </motion.span>
          <p
            className="text-lg xs:text-xl font-serif italic text-[#3A2C1E] leading-snug"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {aboutContent.philosophy}
          </p>
          <p className="text-[10px] font-sans font-semibold tracking-widest text-[#A8B29A] uppercase mt-3">
            — POONAM CHOUDHARY
          </p>
        </motion.div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#6E5A4E]/40 font-sans pt-8 border-t border-[#6E5A4E]/10">
        <span>BIOGRAPHY & VISION</span>
        <span>CHAPTER 03</span>
      </div>
    </section>
  );
}
