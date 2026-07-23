"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChapterHeader from "../components/ChapterHeader";
import { philosophyContent, fivePillars } from "@/src/shared/data/content";

/**
 * HighlightsSection — Chapter 05: Inside the Philosophy
 *
 * Architecture:
 *  - Chapter Header (CHAPTER 05 — INSIDE THE PHILOSOPHY)
 *  - Large opening philosophy quote
 *  - Vertical timeline with Roman numerals (I, II, III, IV, V) connected by thin vertical line
 *  - Expandable accordion chapters with smooth height animation and generous line height
 */
export default function HighlightsSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden px-5 py-16 select-none"
      style={{
        background: "#F7F1E8", // Warm paper background for Chapter 05
      }}
    >
      {/* Background accent glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,178,154,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full mb-4">
        <ChapterHeader
          chapterNum={philosophyContent.chapterNum}
          title={philosophyContent.chapterLabel}
        />
      </div>

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center">
        {/* Large Opening Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 p-5 rounded-2xl bg-[#FAF8F4]/80 border border-[#6E5A4E]/10 shadow-sm"
        >
          <span className="block text-3xl font-serif text-[#C4A882] leading-none mb-1">&ldquo;</span>
          <p
            id="highlights-heading"
            className="text-sm xs:text-base font-serif italic text-[#3A2C1E] leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {philosophyContent.quote}
          </p>
        </motion.div>

        {/* ── Roman Numeral Timeline with Expandable Accordion Chapters ── */}
        <div className="relative w-full py-2">
          {/* Vertical Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-6 w-[1.5px] bg-[#6E5A4E]/18 z-0 pointer-events-none"
          />

          <div className="flex flex-col gap-5 relative z-10">
            {fivePillars.map((pillar, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="w-full"
                >
                  <div
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F4] border border-[#6E5A4E]/10 shadow-sm cursor-pointer transition-all duration-300 active:scale-[0.99]"
                  >
                    {/* Roman Numeral Badge */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#A8B29A] text-[#FAF8F4] shadow-sm"
                          : "bg-[#EDE5D8] text-[#3A2C1E]"
                      }`}
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {pillar.num}
                    </div>

                    {/* Title + Toggle Arrow */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className="text-base xs:text-lg font-serif font-semibold text-[#3A2C1E] leading-snug"
                          style={{ fontFamily: "var(--font-cormorant), serif" }}
                        >
                          {pillar.title}
                        </h4>

                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-4 h-4 text-[#6E5A4E]/60 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>

                      {/* Expandable Chapter Details */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs font-sans text-[#6E5A4E] leading-relaxed pt-3 border-t border-[#6E5A4E]/10 mt-3">
                              {pillar.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#6E5A4E]/40 font-sans pt-10 border-t border-[#6E5A4E]/10 mt-8">
        <span>BOOK PHILOSOPHY</span>
        <span>CHAPTER 05</span>
      </div>
    </section>
  );
}
