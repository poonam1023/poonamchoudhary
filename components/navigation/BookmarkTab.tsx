"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookmarkTabProps {
  label: string;
  numeral: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  customWidth: number;   // Slight width variation
  customRadius: string;  // Hand-cut irregular rounded corners
  customOffset: number;  // Vertical staggering position
}

/**
 * BookmarkTab
 *
 * Renders a single physical paper index tab that appears inserted between pages.
 * Stretches out from the right edge of the book spread.
 *
 * Design features:
 *  - Thick paper feel with top highlight and bottom shadow
 *  - Dynamic, slightly irregular border-radius per tab to simulate hand cutting
 *  - Linear gradient reflecting organic lighting on paper
 *  - Inline SVG vintage botanical engraving on each tab
 *  - Editorial horizontal typography
 *  - Smooth horizontal slide out on hover (translateX)
 */
export default function BookmarkTab({
  label,
  numeral,
  isActive,
  onClick,
  index,
  customWidth,
  customRadius,
  customOffset,
}: BookmarkTabProps) {
  // Total width of the tab. 20px will sit inside the page boundary to look inserted.
  const totalWidth = customWidth + 20;

  // Active: Sage green, Inactive: Cream paper
  const tabBg = isActive
    ? "linear-gradient(135deg, #A8B29A 0%, #959F87 100%)" // Sage Green
    : "linear-gradient(135deg, #F5EAC6 0%, #E6D7B3 100%)"; // Warm Cream

  // Shadow configurations (Active is elevated and casts a stronger shadow)
  const tabShadow = isActive
    ? "3px 6px 16px rgba(26, 20, 18, 0.35), 0px 1px 3px rgba(26, 20, 18, 0.15)"
    : "1px 3px 8px rgba(26, 20, 18, 0.18), 0px 0.5px 1.5px rgba(26, 20, 18, 0.08)";

  return (
    <motion.div
      className="absolute right-0 pointer-events-auto"
      style={{
        top: `${customOffset}px`,
        width: `${totalWidth}px`,
        height: "52px",
        zIndex: isActive ? 20 : 10 - index,
        // The left 20px is hidden behind the book page because the container has a lower z-index than the page
        marginRight: `-${customWidth}px`,
      }}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.15 + index * 0.08,
        duration: 0.65,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{
          // Horizontal slide out of 8px
          x: 8,
          transition: { ease: "easeInOut", duration: 0.28 },
        }}
        className="relative w-full h-full text-left cursor-pointer focus:outline-none select-none overflow-hidden"
        style={{
          background: tabBg,
          borderRadius: customRadius,
          boxShadow: tabShadow,
          transition: "box-shadow 0.3s ease, background 0.3s ease",
        }}
        aria-label={isActive ? `Current Chapter: ${label}` : `Navigate to ${label}`}
        aria-pressed={isActive}
      >
        {/* ── 1. Top Edge Highlight (Paper thickness) ──────────────────── */}
        <div 
          className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none select-none" 
          style={{
            background: isActive ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.75)",
            mixBlendMode: "overlay"
          }}
        />

        {/* ── 2. Bottom Edge Shadow (Paper thickness) ─────────────────── */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[1.8px] pointer-events-none select-none" 
          style={{
            background: "rgba(110, 90, 78, 0.22)",
          }}
        />

        {/* ── 3. Page Crease Line (Where it emerges from under the page) ── */}
        <div 
          className="absolute left-[20px] top-0 bottom-0 w-[1.5px] pointer-events-none select-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* ── 4. Paper Texture & Grain Overlay ────────────────────────── */}
        <div className="absolute inset-0 paper-grain-overlay opacity-[0.10] mix-blend-multiply pointer-events-none select-none" />

        {/* ── 5. Organic Age Vignette ──────────────────────────────────── */}
        <div 
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            background: "radial-gradient(circle at 100% 50%, transparent 60%, rgba(110, 90, 78, 0.08) 100%)",
          }}
        />

        {/* ── 6. Vintage Botanical Engraving ───────────────────────────── */}
        <div 
          className="absolute top-[8px]"
          style={{
            left: "24px", // Positioned safely in the visible protruding section
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="w-[18px] h-[18px] opacity-[0.24] text-ink select-none pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elegant botanical branch with leaves */}
            <path d="M4 20C8 17 12 11 16 6" strokeLinecap="round" />
            <path d="M8 15.5C6.5 14 5.5 11 6.5 9.5C8 9.5 9.5 11 10 13Z" fill="currentColor" opacity="0.6" />
            <path d="M11 11.5C9.5 10 8.5 7 9.5 5.5C11 5.5 12.5 7 13 9Z" fill="currentColor" opacity="0.6" />
            <path d="M14 7.5C13 6.5 12 4.5 12.5 3.5C13.5 3.5 14.5 4.5 15 5.5Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>

        {/* ── 7. Horizontal Editorial Typography ───────────────────────── */}
        <div 
          className="absolute inset-y-0 right-0 flex flex-col justify-center select-none"
          style={{
            left: "48px", // Past the crease and botanical detail
            paddingRight: "8px",
          }}
        >
          {/* Numeral or Chapter Index */}
          <span 
            className="font-sans font-medium text-[8.5px] tracking-[0.16em] uppercase leading-none opacity-50"
            style={{ color: "#6E5A4E" }}
          >
            {numeral}
          </span>
          {/* Chapter Title */}
          <span 
            className="font-display italic text-[11px] font-semibold tracking-wide leading-tight mt-[2px]"
            style={{ color: "#6E5A4E", opacity: isActive ? 0.95 : 0.75 }}
          >
            {label}
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}
