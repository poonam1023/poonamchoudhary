"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookmarkTabProps {
  label: string;
  numeral: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  color: { main: string; text: string };
  xOffset: number; // px right of spine crease
}

// ─────────────────────────────────────────────────────────────────────────────
// RIBBON DIMENSIONS
// ─────────────────────────────────────────────────────────────────────────────
const W = 17;         // ribbon width  (px)
const H = 78;         // ribbon total height — most is hidden inside the page
const NOTCH = 6;      // V-notch depth at bottom tip
const SHOW = 54;      // px that protrude above the page edge (inactive)
const SHOW_ACTIVE = 62; // px that protrude when active (+8)

/**
 * BookmarkTab — Physical Paper Bookmark
 *
 * Appearance
 *  • Rectangle with a small V-notch at the bottom tip
 *  • Matte, flat colour — no satin, no gloss, no fabric sheen
 *  • Very subtle left-edge highlight (paper thickness impression)
 *  • Insertion shadow at the bottom where the bookmark disappears into pages
 *  • Vertical uppercase numeral in the upper portion
 *
 * Positioning
 *  • Absolutely positioned at `top: 0` (the page top edge / spine crease)
 *  • Translated upward (negative Y) so only SHOW px are visible above the page
 *  • The page background at zIndex: 10 (parent chain) covers the lower portion
 *    naturally — no clip-path or overflow trickery needed
 *
 * Motion
 *  • Active:   translateY(-SHOW_ACTIVE)  →  62 px visible
 *  • Inactive: translateY(-SHOW)         →  54 px visible
 *  • Hover:    translateY(-SHOW - 4)     →  58 px visible (subtle lift)
 *  • Duration: 300 ms, ease: easeOut — paper, not springs
 */
export default function BookmarkTab({
  label,
  numeral,
  isActive,
  onClick,
  index,
  color,
  xOffset,
}: BookmarkTabProps) {
  const [hovered, setHovered] = React.useState(false);

  const translateY = isActive
    ? -SHOW_ACTIVE
    : hovered
    ? -(SHOW + 4)
    : -SHOW;

  // CSS clip-path for the V-notch bookmark shape
  // polygon: top-left → top-right → bottom-right → notch-tip → bottom-left
  const clipPath = `polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - ${NOTCH}px), 0 100%)`;

  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{
        top: 0,
        left: xOffset,
        width: W,
        height: H,
        // drop-shadow respects the clip-path shape — casts shadow on book page
        filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.11)) drop-shadow(1px 0 2px rgba(0,0,0,0.06))",
      }}
      initial={{ y: -H, opacity: 0 }}
      animate={{ y: translateY, opacity: 1 }}
      transition={{
        y: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.5, delay: 0.1 + index * 0.07 },
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={label}
        className="relative w-full h-full focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        aria-label={isActive ? `Current chapter: ${label}` : `Go to ${label}`}
        aria-pressed={isActive}
      >
        {/* ── 1. Ribbon body: flat matte colour + V-notch ── */}
        <div
          className="absolute inset-0"
          style={{
            clipPath,
            background: color.main,
          }}
        >
          {/* Very subtle paper grain — keeps it matte, adds micro-texture */}
          <div
            className="absolute inset-0 paper-grain-overlay pointer-events-none"
            style={{ opacity: 0.07, mixBlendMode: "multiply" }}
          />

          {/* Left-edge highlight — simulates paper thickness catching light */}
          <div
            className="absolute top-0 bottom-0 left-0 pointer-events-none"
            style={{
              width: 1,
              background: "rgba(255,255,255,0.22)",
            }}
          />

          {/* Right-edge darkening — depth on far side */}
          <div
            className="absolute top-0 bottom-0 right-0 pointer-events-none"
            style={{
              width: 1,
              background: "rgba(0,0,0,0.08)",
            }}
          />

          {/* Insertion shadow — bottom band, simulates ribbon disappearing into pages */}
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{
              height: 18,
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.06) 100%)",
            }}
          />
        </div>

        {/* ── 2. Vertical numeral — occupies upper half of ribbon ── */}
        <div
          className="absolute left-0 right-0 pointer-events-none select-none"
          style={{
            top: 8,
            height: Math.floor(H * 0.45),
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          <span
            className="font-sans uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.13em",
              color: color.text,
              opacity: isActive ? 0.88 : 0.52,
              fontWeight: 600,
              lineHeight: 1,
              transition: "opacity 0.25s ease",
            }}
          >
            {numeral}
          </span>
        </div>
      </button>
    </motion.div>
  );
}
