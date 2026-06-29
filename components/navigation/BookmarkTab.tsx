"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookmarkTabProps {
  label: string;
  numeral: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  color: { light: string; main: string; dark: string; text: string; textMuted: string };
  customRotate: number;
  xOffset: number;
}

/**
 * BookmarkTab
 *
 * Renders a single vertical ribbon bookmark that appears inserted between book pages.
 *
 * Design features:
 *  - Vertical fabric ribbon feel with cylindrical light sheen background gradient
 *  - Dashed side borders representing vintage thread stitching
 *  - Folded triangular tip at the bottom with 3D crease shading
 *  - Muted vintage paper/fabric colors
 *  - Vertical-oriented tracked chapter typography printed near the top of the ribbon
 *  - Spring vertical slide on hover and active states (translateY)
 */
export default function BookmarkTab({
  label,
  numeral,
  isActive,
  onClick,
  index,
  color,
  customRotate,
  xOffset,
}: BookmarkTabProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Shadow configurations (Active is elevated and casts a stronger shadow onto the page)
  const tabShadow = isActive
    ? "drop-shadow(3px 8px 12px rgba(26, 20, 18, 0.35)) drop-shadow(0px 1px 2px rgba(26, 20, 18, 0.15))"
    : "drop-shadow(1px 3px 6px rgba(26, 20, 18, 0.22)) drop-shadow(0px 0.5px 1px rgba(26, 20, 18, 0.1))";

  // Gradient for a cylindrical fabric ribbon sheen
  const ribbonBg = `linear-gradient(to right, ${color.dark} 0%, ${color.light} 28%, ${color.main} 72%, ${color.dark} 100%)`;

  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{
        left: `${xOffset}px`,
        width: "22px",
        height: "220px",
        zIndex: isActive ? 20 : 5, // Active sits on top of pages (20 > 10), inactive behind pages (5 < 10)
        filter: tabShadow,
      }}
      initial={{ y: -220, opacity: 0 }}
      animate={{
        // Active hangs lower (y: -20px), inactive is tucked in (y: -120px), hover raises inactive slightly (y: -130px)
        y: isActive ? -20 : isHovered ? -130 : -120,
        rotate: customRotate,
        opacity: 1,
      }}
      transition={{
        y: { type: "spring", stiffness: 220, damping: 20 },
        opacity: { duration: 0.5 },
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-full text-left cursor-pointer focus:outline-none select-none overflow-hidden"
        aria-label={isActive ? `Current Chapter: ${label}` : `Navigate to ${label}`}
        aria-pressed={isActive}
      >
        {/* ── 1. Ribbon Main Body (excluding the bottom 12px pointed tip) ──────────────── */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-[12px]" 
          style={{
            background: ribbonBg,
          }}
        >
          {/* Dashed stitches on left and right edges */}
          <div className="absolute top-0 bottom-0 left-[1.5px] w-[1px] border-l border-dashed pointer-events-none opacity-20" style={{ borderColor: color.text }} />
          <div className="absolute top-0 bottom-0 right-[1.5px] w-[1px] border-r border-dashed pointer-events-none opacity-25" style={{ borderColor: "#000000" }} />

          {/* Paper texture grain overlays */}
          <div className="absolute inset-0 paper-grain-overlay opacity-[0.08] mix-blend-multiply pointer-events-none" />

          {/* Muted organic vignette */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 0%, transparent 15%, transparent 85%, rgba(0, 0, 0, 0.12) 100%)",
            }}
          />

          {/* Vertical Editorial Typography (positioned in the upper visible area) */}
          <div 
            className="absolute top-[20px] inset-x-0 flex flex-col items-center gap-[6px] select-none"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            {/* Numeral or Chapter Index */}
            <span 
              className="font-sans font-bold text-[6.5px] tracking-[0.16em] uppercase leading-none"
              style={{ color: color.textMuted }}
            >
              {numeral}
            </span>
            <span className="text-[6px] leading-none opacity-30" style={{ color: color.text }}>·</span>
            {/* Chapter Title */}
            <span 
              className="font-display italic text-[9.5px] font-semibold tracking-[0.04em] leading-none"
              style={{ color: color.text }}
            >
              {label}
            </span>
          </div>
        </div>

        {/* ── 2. Folded Triangular End (at the bottom 12px of the ribbon) ──────────────── */}
        <div className="absolute bottom-0 left-0 right-0 h-[12px] flex pointer-events-none select-none">
          {/* Left half of pointed tip */}
          <div 
            className="w-1/2 h-full"
            style={{
              background: color.main,
              clipPath: "polygon(0 0, 100% 0, 100% 100%)",
            }}
          />
          {/* Right half of pointed tip (darker for 3D crease fold) */}
          <div 
            className="w-1/2 h-full"
            style={{
              background: color.dark,
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />
        </div>
      </button>
    </motion.div>
  );
}
