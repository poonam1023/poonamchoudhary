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
  xOffset: number; // px right of spine (left: 0 = spine crease)
}

// ─────────────────────────────────────────────────────────────────────────────
// DIMENSIONS
//
//  Total height  70px  — bookmark body
//  PageEdge      8px   — masks the top of the bookmark (insertion point)
//  Visible inactive     62px  (below PageEdge, above page content)
//  Visible active       70px  (bookmark slides down 8px, fully below PageEdge)
//
//  The bookmark hangs DOWNWARD from top: 0 (the page top edge).
//  PageEdge (zIndex 30) covers the first 8px.
//  Page background (zIndex 10) is behind the bookmark body (zIndex 20).
// ─────────────────────────────────────────────────────────────────────────────
const W = 17;      // width  (px) — narrow cardstock tab
const H = 70;      // total height (px)
const NOTCH = 5;   // V-notch depth — almost flat, just a hint

/**
 * BookmarkTab — Physical Cardstock Page Marker
 *
 * Positioning model:
 *   top: 0  →  hangs downward into the page face
 *   y: 0    →  inactive (8px masked by PageEdge, 62px visible)
 *   y: 8    →  active   (0px masked, 70px visible)
 *   y: 4    →  hover    (4px masked, 66px visible)
 *
 * The PageEdge parent element (zIndex 30) provides the clipping mask.
 * No overflow:hidden or clip-path is needed on the container.
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

  // Bookmark slides DOWN to become more visible.
  // Active: fully below PageEdge. Inactive: 8px hidden. Hover: 4px hidden.
  const targetY = isActive ? 8 : hovered ? 4 : 0;

  const clipPath = `polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - ${NOTCH}px), 0 100%)`;

  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{
        top: 0,
        left: xOffset,
        width: W,
        height: H,
        // drop-shadow respects clip-path shape; casts soft shadow onto page
        filter:
          "drop-shadow(0 2px 6px rgba(0,0,0,0.08)) drop-shadow(1px 0 2px rgba(0,0,0,0.04))",
      }}
      // Entrance: fade up from just inside the PageEdge, no large translation
      initial={{ y: -4, opacity: 0 }}
      animate={{ y: targetY, opacity: 1 }}
      transition={{
        y: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.45, delay: 0.12 + index * 0.06 },
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={label}
        className="relative w-full h-full focus:outline-none"
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        aria-label={isActive ? `Current chapter: ${label}` : `Go to ${label}`}
        aria-pressed={isActive}
      >
        {/* ── BODY: flat cardstock colour + V-notch ── */}
        <div
          className="absolute inset-0"
          style={{ clipPath, background: color.main }}
        >
          {/* Paper grain — matte micro-texture (very low opacity) */}
          <div
            className="absolute inset-0 paper-grain-overlay pointer-events-none"
            style={{ opacity: 0.06, mixBlendMode: "multiply" }}
          />

          {/* Left-edge highlight — simulates light catching the paper thickness */}
          <div
            className="absolute top-0 bottom-0 left-0 pointer-events-none"
            style={{ width: 1, background: "rgba(255,255,255,0.18)" }}
          />

          {/* Right-edge shadow — far side in shadow */}
          <div
            className="absolute top-0 bottom-0 right-0 pointer-events-none"
            style={{ width: 1, background: "rgba(0,0,0,0.07)" }}
          />

          {/* Bottom fade — bookmark disappearing between page sheets */}
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{
              height: 14,
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.07) 100%)",
            }}
          />
        </div>

        {/* ── NUMERAL: 10px, vertical, upper portion only ── */}
        <div
          className="absolute left-0 right-0 pointer-events-none select-none"
          style={{
            top: 10,
            height: "42%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: 10,
              letterSpacing: "0.12em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: color.text,
              opacity: isActive ? 0.9 : 0.5,
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
