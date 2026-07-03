"use client";

import React from "react";
import { motion } from "framer-motion";

interface OpenBookButtonProps {
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}

export default function OpenBookButton({
  onHoverStart,
  onHoverEnd,
  onClick,
}: OpenBookButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      className="group relative cursor-pointer focus:outline-none select-none z-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
      whileHover={{ y: -2 }}
      aria-label="Begin Reading"
    >
      {/* Physical invitation card */}
      <div
        className="relative px-8 py-5 md:px-10 md:py-6 flex flex-col items-center"
        style={{
          background: "#FAF7F2",
          clipPath:
            "polygon(2% 4%, 4% 0%, 10% 3%, 16% 0%, 22% 4%, 28% 1%, 34% 4%, 40% 0%, 46% 3%, 52% 0%, 58% 4%, 64% 1%, 70% 3%, 76% 0%, 82% 4%, 88% 1%, 94% 3%, 98% 0%, 100% 4%, 97% 10%, 100% 16%, 97% 22%, 100% 28%, 97% 34%, 100% 40%, 97% 46%, 100% 52%, 97% 58%, 100% 64%, 97% 70%, 100% 76%, 97% 82%, 100% 88%, 97% 94%, 100% 100%, 94% 97%, 88% 100%, 82% 97%, 76% 100%, 70% 97%, 64% 100%, 58% 97%, 52% 100%, 46% 97%, 40% 100%, 34% 97%, 28% 100%, 22% 97%, 16% 100%, 10% 97%, 4% 100%, 0% 97%, 3% 94%, 0% 88%, 3% 82%, 0% 76%, 3% 70%, 0% 64%, 3% 58%, 0% 52%, 3% 46%, 0% 40%, 3% 34%, 0% 28%, 3% 22%, 0% 16%, 3% 10%, 0% 4%)",
          boxShadow:
            "0 2px 4px rgba(58,44,30,0.08), 0 4px 12px rgba(58,44,30,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
          border: "0.5px solid rgba(200,185,160,0.3)",
        }}
      >
        {/* Envelope icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 md:w-6 md:h-6 mb-3 text-ink-muted/50 group-hover:text-accent-sage/60 transition-colors duration-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="1" />
          <path d="M2 4l10 8 10-8" />
        </svg>

        {/* Script heading */}
        <span
          className="font-display text-sm md:text-[15px] tracking-[0.08em] text-ink-muted group-hover:text-ink transition-colors duration-700"
          style={{ fontStyle: "italic" }}
        >
          Begin Reading
        </span>

        {/* Handwritten-style subtext */}
        <span className="mt-2 font-sans text-[7px] md:text-[8px] tracking-[0.12em] text-ink-muted/40 group-hover:text-ink-muted/60 transition-colors duration-700">
          — a letter awaits —
        </span>

        {/* Card bottom decorative line */}
        <div className="mt-3 w-16 h-px bg-ink-muted/15 group-hover:bg-accent-sage/30 transition-colors duration-700" />
      </div>
    </motion.button>
  );
}
