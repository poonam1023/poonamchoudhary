"use client";

import React from "react";
import { motion } from "framer-motion";

interface ChapterOneProps {
  onClose: () => void;
}

export default function ChapterOne({ onClose }: ChapterOneProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8 md:py-16 h-full flex items-center justify-center font-sans">
      {/* Bookmark Ribbon (Sage Green accent color) */}
      <motion.button
        onClick={onClose}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 80 }}
        whileHover={{ y: 5 }}
        className="absolute top-0 left-12 md:left-24 z-50 group flex flex-col items-center cursor-pointer focus:outline-none"
        aria-label="Return to Cover"
      >
        {/* Ribbon body */}
        <div className="w-6 md:w-8 h-24 bg-accent-sage relative flex items-end justify-center pb-4 shadow-[0_3px_6px_rgba(0,0,0,0.12)] group-hover:bg-[#99a38b] transition-colors duration-300">
          {/* Label on ribbon, rotated vertically */}
          <span 
            className="text-[8px] md:text-[9px] font-sans font-bold tracking-[0.25em] text-paper-primary uppercase select-none"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Cover
          </span>
          {/* Ribbon cut bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-0 border-l-[12px] md:border-l-[16px] border-l-transparent border-r-[12px] md:border-r-[16px] border-r-transparent border-b-[8px] md:border-b-[12px] border-b-paper-primary" />
        </div>
      </motion.button>

      {/* Book Spread Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-h-[85vh] items-stretch">
        
        {/* LEFT PAGE: Inside Cover / Colophon (Hidden on mobile) */}
        <div className="hidden md:flex flex-col justify-between p-8 border-r border-ink/5 bg-paper-primary/85 shadow-[inset_-15px_0_20px_rgba(0,0,0,0.02)] relative rounded-l-md">
          {/* Subtle page texture inside */}
          <div className="absolute inset-0 paper-grain-overlay opacity-10 rounded-l-md" />

          {/* Colophon content */}
          <div className="my-auto space-y-12 text-center text-ink/70 max-w-[320px] mx-auto z-10">
            <div className="font-display italic text-2xl text-ink/90">
              Project Poonam
            </div>
            
            <div className="w-12 h-[1px] bg-ink/20 mx-auto" />

            <div className="space-y-4 text-[11px] tracking-[0.15em] leading-relaxed uppercase">
              <p>First Edition</p>
              <p>Designed & Coded in the Ether</p>
              <p>Published Anno MMXXVI</p>
            </div>

            <div className="w-12 h-[1px] bg-ink/20 mx-auto" />

            <p className="font-display italic text-sm text-ink/50 leading-relaxed">
              "To build is to write a story in steel and sand, or in pixels and light."
            </p>
          </div>

          <div className="text-[10px] text-ink/40 text-center tracking-[0.2em] uppercase z-10">
            P. C. — 2026
          </div>
        </div>

        {/* RIGHT PAGE: Chapter One */}
        <div className="flex flex-col justify-between p-6 md:p-10 bg-paper-primary shadow-[inset_15px_0_20px_rgba(0,0,0,0.02)] relative rounded-r-md min-h-[450px] md:min-h-0 overflow-y-auto">
          {/* Subtle page texture inside */}
          <div className="absolute inset-0 paper-grain-overlay opacity-10 rounded-r-md" />

          <div className="my-auto space-y-6 md:space-y-8 z-10 max-w-[400px] mx-auto text-ink">
            {/* Chapter Header */}
            <div className="text-center space-y-2">
              <span className="font-sans text-[10px] md:text-[11px] font-semibold tracking-[0.3em] uppercase text-ink/50">
                Chapter I
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wide">
                The Architect of Imagined Spaces
              </h2>
              {/* Divider ornament */}
              <div className="flex items-center justify-center gap-2 mt-2 opacity-40">
                <span className="w-8 h-[1px] bg-ink" />
                <span className="text-[8px]">✦</span>
                <span className="w-8 h-[1px] bg-ink" />
              </div>
            </div>

            {/* Chapter Prose */}
            <p className="font-display text-sm md:text-base leading-relaxed md:leading-loose text-justify text-ink/80">
              <span className="float-left text-5xl md:text-6xl font-bold font-display line-height-none mr-2 mt-1 text-accent-sage">
                E
              </span>
              very line of code is a sentence waiting to be written. For years, we treated the digital screen as a glowing dashboard, a canvas of cold glass and neon signals. But Poonam saw it differently. To her, the screen was paper, dried ink, and binding glue. It was a space where design and engineering did not just function, but breathed. This is the ledger of her creations—where logic meets literature, and every project begins as a page waiting to be turned.
            </p>

            <p className="font-display text-sm md:text-base leading-relaxed md:leading-loose text-justify text-ink/85">
              As you read on, you will uncover the works crafted through design, code, and pure imagination. The cover is open. The narrative begins.
            </p>
          </div>

          {/* Simple return hint for mobile only */}
          <div className="block md:hidden mt-8 text-center z-10">
            <button
              onClick={onClose}
              className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-accent-sage hover:text-ink transition-colors duration-300 py-2 border-b border-accent-sage/30 hover:border-ink/30"
            >
              ← Close the Book
            </button>
          </div>

          <div className="hidden md:block text-right text-[10px] text-ink/40 tracking-widest uppercase z-10">
            1
          </div>
        </div>

      </div>
    </div>
  );
}
