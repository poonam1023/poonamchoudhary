"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ChapterHeader from "../components/ChapterHeader";
import { bookContent } from "@/src/shared/data/content";

/**
 * BookSection — Chapter 04: The Book
 *
 * Architecture:
 *  - Chapter Header (CHAPTER 04 — THE BOOK)
 *  - Soft radial light behind book
 *  - 3D physical book with soft rotation (~2°), dynamic shadow, lifting on scroll
 *  - Title, Subtitle, Description
 *  - Premium feature pills (✓ Practical Advice, ✓ Emotional Intelligence, etc.)
 *  - Vertically stacked buttons: BUY BOOK, READ SAMPLE, LEARN MORE
 */
export default function BookSection() {
  const { scrollY } = useScroll();

  // Gentle physical book lift on scroll
  const bookLiftY = useTransform(scrollY, [600, 1400], [0, -18]);
  const shadowScale = useTransform(scrollY, [600, 1400], [1, 1.08]);

  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden px-5 py-16 select-none"
      style={{
        background: "#EDE5D8", // Soft beige background for Chapter 04
      }}
    >
      {/* Soft Radial Light Behind Book */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(250,248,244,0.70) 0%, rgba(168,178,154,0.18) 55%, transparent 75%)",
          filter: "blur(35px)",
        }}
      />

      <div className="relative z-10 w-full mb-4">
        <ChapterHeader
          chapterNum={bookContent.chapterNum}
          title={bookContent.chapterLabel}
        />
      </div>

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center">
        {/* ── 3D Physical Book Showcase ── */}
        <div className="relative w-full flex flex-col items-center my-4">
          <motion.div
            style={{ y: bookLiftY }}
            initial={{ opacity: 0, rotate: 3, y: 25 }}
            whileInView={{ opacity: 1, rotate: 2, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-56 xs:w-64 aspect-[1/1.4] z-10"
          >
            {/* Hardcover Book Frame */}
            <div
              className="w-full h-full rounded-r-xl rounded-l-sm overflow-hidden p-1 relative transition-transform duration-500 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #FAF8F4 0%, #F4EFE6 100%)",
                boxShadow:
                  "12px 18px 40px -8px rgba(58,44,30,0.28), 2px 4px 10px rgba(58,44,30,0.12)",
                borderLeft: "4px solid #6E5A4E", // Book spine binding simulation
              }}
            >
              <img
                src="/book-cover.png?v=3"
                alt={bookContent.title}
                className="w-full h-full object-cover rounded-r-lg"
              />

              {/* Spine Crease Overlay Motif */}
              <div
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-2 w-2 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(58,44,30,0.12) 0%, rgba(58,44,30,0.03) 50%, rgba(255,255,255,0.15) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Dynamic Dynamic Drop Shadow */}
          <motion.div
            style={{ scaleX: shadowScale }}
            className="w-48 h-5 rounded-full bg-[#3A2C1E]/20 blur-md -mt-2 z-0"
          />
        </div>

        {/* Book Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-3 mb-6"
        >
          <h3
            id="book-heading"
            className="text-2xl xs:text-3xl font-serif text-[#3A2C1E] font-semibold leading-tight mb-1"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {bookContent.title}
          </h3>
          <p className="text-[11px] font-sans font-medium tracking-widest text-[#A8B29A] uppercase mb-3">
            {bookContent.subtitle}
          </p>
          <p className="text-xs xs:text-sm font-sans text-[#6E5A4E] leading-relaxed max-w-xs mx-auto">
            {bookContent.description}
          </p>
        </motion.div>

        {/* ── Premium Feature Pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full flex flex-wrap justify-center gap-2 mb-8"
        >
          {bookContent.featurePills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-[#FAF8F4]/80 border border-[#6E5A4E]/12 text-[#4A3728] text-[11px] font-sans font-medium shadow-sm backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* ── Vertically Stacked Action Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full flex flex-col gap-3"
        >
          {/* Button 1: BUY BOOK */}
          <a
            href="#contact"
            className="group w-full min-h-[52px] flex items-center justify-center gap-2 px-6 rounded-2xl bg-[#3A2C1E] text-[#FAF8F4] font-sans text-xs font-semibold tracking-wider uppercase shadow-md transition-all duration-300 active:scale-[0.98]"
          >
            <span>{bookContent.primaryCta}</span>
            <svg className="w-4 h-4 text-[#C4A882] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Button 2: READ SAMPLE */}
          <a
            href="#highlights"
            className="w-full min-h-[50px] flex items-center justify-center gap-2 px-6 rounded-2xl bg-[#FAF8F4] border border-[#6E5A4E]/18 text-[#3A2C1E] font-sans text-xs font-semibold tracking-wider uppercase shadow-sm transition-all duration-300 hover:bg-[#FAF7F2] active:scale-[0.98]"
          >
            <span>{bookContent.secondaryCta}</span>
          </a>

          {/* Button 3: LEARN MORE */}
          <a
            href="#highlights"
            className="w-full min-h-[46px] flex items-center justify-center gap-1.5 px-6 rounded-2xl bg-transparent text-[#6E5A4E] font-sans text-[11px] font-medium tracking-wider uppercase transition-all duration-300 hover:text-[#3A2C1E]"
          >
            <span>{bookContent.tertiaryCta}</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#6E5A4E]/40 font-sans pt-10 border-t border-[#6E5A4E]/10 mt-8">
        <span>FEATURED PUBLICATION</span>
        <span>CHAPTER 04</span>
      </div>
    </section>
  );
}
