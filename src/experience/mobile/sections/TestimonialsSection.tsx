"use client";

import React from "react";
import { motion } from "framer-motion";
import ChapterHeader from "../components/ChapterHeader";
import { authorLetterContent, realTestimonials } from "@/src/shared/data/content";

/**
 * TestimonialsSection — Chapter 06: Why I Wrote This Book (Authentic Letter & Excerpts)
 *
 * Compliance with Authenticity & Content Policy:
 *  - Replaces dummy testimonials with an authentic stationery letter from Poonam
 *  - Displays selected excerpts from the book pages
 *  - Future-Ready CMS architecture: If `realTestimonials.length > 0`, renders real reader stories;
 *    otherwise renders the author's letter and book excerpts.
 */
export default function TestimonialsSection() {
  const hasRealTestimonials = realTestimonials && realTestimonials.length > 0;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden px-5 py-16 select-none"
      style={{
        background: "#F4EFE6", // Warm cream background for Chapter 06
      }}
    >
      {/* Background paper wash */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,124,93,0.10) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      <div className="relative z-10 w-full mb-4">
        <ChapterHeader
          chapterNum={authorLetterContent.chapterNum}
          title={authorLetterContent.chapterLabel}
        />
      </div>

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center">
        {!hasRealTestimonials ? (
          /* ── OPTION 1: Personal Letter Stationery from Poonam ── */
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full p-6 xs:p-7 rounded-3xl bg-[#FAF8F4] border border-[#6E5A4E]/12 shadow-xl my-2"
          >
            {/* Corner Fold Motif */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-8 h-8 border-b border-l border-[#6E5A4E]/15 bg-[#EDE5D8] rounded-bl-xl pointer-events-none shadow-inner"
            />

            {/* Letter Title & Salutation */}
            <h3
              id="testimonials-heading"
              className="text-2xl font-serif text-[#3A2C1E] mb-2"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {authorLetterContent.title}
            </h3>

            <p
              className="text-sm font-serif italic text-[#C97C5D] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {authorLetterContent.salutation}
            </p>

            {/* Letter Body Paragraphs */}
            <div className="space-y-3.5 text-xs xs:text-sm font-sans text-[#6E5A4E] leading-relaxed mb-6">
              {authorLetterContent.letterBody.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Handwritten Sign-off Block */}
            <div className="pt-4 border-t border-[#6E5A4E]/10 flex flex-col items-end text-right">
              <span className="text-xs font-sans text-[#6E5A4E]/70 italic">
                {authorLetterContent.signoff}
              </span>
              <span
                className="text-xl font-serif font-bold text-[#3A2C1E] mt-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {authorLetterContent.authorName}
              </span>
              <span className="text-[9px] font-sans text-[#A8B29A] font-semibold tracking-widest uppercase mt-0.5">
                AUTHOR
              </span>
            </div>

            {/* Selected Book Excerpts Sub-block */}
            <div className="mt-8 pt-6 border-t border-dashed border-[#6E5A4E]/15">
              <h4 className="text-[10px] font-mono tracking-widest text-[#A8B29A] font-semibold uppercase mb-4 text-center">
                {authorLetterContent.excerptsTitle}
              </h4>

              <div className="space-y-3">
                {authorLetterContent.excerpts.map((excerpt, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F4EFE6]/70 border border-[#6E5A4E]/08"
                  >
                    <span className="text-[9px] font-mono text-[#C4A882] font-semibold tracking-wider uppercase block mb-1">
                      {excerpt.page}
                    </span>
                    <p
                      className="text-xs font-serif italic text-[#3A2C1E] leading-snug"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      &ldquo;{excerpt.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          /* Real Reader Stories (Shown dynamically when real feedback is populated) */
          <div className="w-full flex flex-col gap-4">
            {realTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#6E5A4E]/10 shadow-sm"
              >
                <p className="text-xs font-serif italic text-[#3A2C1E] leading-relaxed mb-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-[10px] font-sans font-semibold text-[#6E5A4E]">
                  — {testimonial.author}, {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#6E5A4E]/40 font-sans pt-10 border-t border-[#6E5A4E]/10 mt-8">
        <span>AUTHOR&apos;S LETTER & EXCERPTS</span>
        <span>CHAPTER 06</span>
      </div>
    </section>
  );
}
