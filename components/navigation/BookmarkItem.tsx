"use client";

import React from "react";
import { motion } from "framer-motion";

interface RibbonBookmarkProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  /** Whether the chapter index panel is currently open */
  panelOpen?: boolean;
}

/**
 * RibbonBookmark — V4
 *
 * A premium sewn fabric ribbon bookmark emerging from inside the book's binding.
 * The reader should believe they could physically pull it out.
 *
 * Material characteristics:
 *  - Woven linen texture (CSS repeating-linear-gradient crosshatch)
 *  - Slight fabric fold (diagonal gradient lighter top → darker bottom)
 *  - Thread edge (1px darker stripe along vertical sides)
 *  - Fishtail V-cut at bottom (clipPath polygon)
 *  - Realistic fabric shadow (drop-shadow)
 *  - Stitched top illusion (dashed line at very top)
 *
 * Active bookmark (current chapter): sage green #A8B29A
 * Inactive bookmark (other chapters): warm cream linen #E8DABE
 *
 * Interaction:
 *  - Hover: very slight x-translate + shadow deepen (fabric sway feel)
 *  - Click: triggers onNavigate / panel open
 */
export default function RibbonBookmark({
  label,
  isActive,
  onClick,
  index,
  panelOpen = false,
}: RibbonBookmarkProps) {
  const ribbonWidth = isActive ? 26 : 18;
  const ribbonHeight = 200;
  const fishtailDepth = 14;

  // Active: sage green; Inactive: warm linen cream
  const ribbonColor = isActive
    ? { base: "#A4B098", light: "#B4C0A8", dark: "#8E9C84", thread: "#7A8872" }
    : { base: "#E2D8B8", light: "#EDE3C5", dark: "#CCC0A0", thread: "#C0B090" };

  return (
    <motion.div
      className="relative"
      style={{
        // Each ribbon is spaced horizontally from the last
        marginLeft: index > 0 ? "8px" : "0",
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.5 + index * 0.18,
        duration: 0.70,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{
          y: isActive && panelOpen ? 0 : 4,
          filter: isActive
            ? "drop-shadow(2px 6px 14px rgba(0,0,0,0.30))"
            : "drop-shadow(1px 4px 8px rgba(0,0,0,0.18))",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="cursor-pointer focus:outline-none select-none"
        aria-label={isActive ? `Current: ${label}` : `Navigate to ${label}`}
        aria-pressed={isActive}
        style={{
          display: "block",
          filter: isActive
            ? "drop-shadow(1px 4px 12px rgba(0,0,0,0.26))"
            : "drop-shadow(0.5px 2px 6px rgba(0,0,0,0.14))",
          transition: "filter 0.25s ease",
        }}
      >
        {/* ── Ribbon body ─────────────────────────────────────────────── */}
        <div
          style={{
            width: `${ribbonWidth}px`,
            height: `${ribbonHeight}px`,
            position: "relative",
            overflow: "hidden",
            // Fishtail bottom cut — the identifying ribbon shape
            clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${fishtailDepth}px), 50% 100%, 0 calc(100% - ${fishtailDepth}px))`,
            // Base fabric color with slight gradient (fabric fold: lighter top-left → darker bottom-right)
            background: `linear-gradient(155deg, ${ribbonColor.light} 0%, ${ribbonColor.base} 50%, ${ribbonColor.dark} 100%)`,
            // Width transition when active state changes
            transition: "width 0.40s cubic-bezier(0.25,1,0.5,1)",
          }}
        >
          {/* ── Linen weave texture ────────────────────────────────────── */}
          <div
            className="absolute inset-0 pointer-events-none ribbon-weave"
            style={{ opacity: 1 }}
          />

          {/* ── Fabric fold highlight — diagonal ──────────────────────── */}
          {/* Simulates light catching the woven fabric at an angle */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                120deg,
                rgba(255,255,255,${isActive ? "0.18" : "0.22"}) 0%,
                transparent 45%,
                rgba(0,0,0,${isActive ? "0.06" : "0.04"}) 100%
              )`,
            }}
          />

          {/* ── Thread edge — left vertical ───────────────────────────── */}
          <div
            className="absolute left-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "1.5px",
              background: `linear-gradient(to bottom, ${ribbonColor.thread}, ${ribbonColor.dark})`,
              opacity: 0.70,
            }}
          />

          {/* ── Thread edge — right vertical ──────────────────────────── */}
          <div
            className="absolute right-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "1.5px",
              background: `linear-gradient(to bottom, ${ribbonColor.thread}, ${ribbonColor.dark})`,
              opacity: 0.60,
            }}
          />

          {/* ── Stitched top — sewn into binding ──────────────────────── */}
          {/* A few tiny stitches at the very top of the ribbon */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "8px",
              background: `linear-gradient(to bottom, rgba(0,0,0,${isActive ? "0.12" : "0.08"}) 0%, transparent 100%)`,
            }}
          />
          {/* Stitch line — dashed border illusion */}
          <div
            className="absolute top-[5px] pointer-events-none"
            style={{
              left: "3px",
              right: "3px",
              height: "0.5px",
              background: `repeating-linear-gradient(
                to right,
                ${ribbonColor.thread} 0px,
                ${ribbonColor.thread} 3px,
                transparent 3px,
                transparent 5px
              )`,
              opacity: 0.55,
            }}
          />

          {/* ── Bottom aged wear — fabric fray ────────────────────────── */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "28px",
              background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,${isActive ? "0.08" : "0.05"}) 100%)`,
            }}
          />

          {/* ── Label — printed onto ribbon ───────────────────────────── */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ paddingTop: "16px", paddingBottom: `${fishtailDepth + 4}px` }}
          >
            <span
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: isActive ? "8px" : "7px",
                fontWeight: 400,
                letterSpacing: "0.14em",
                color: isActive ? "rgba(44,36,28,0.65)" : "rgba(110,90,78,0.38)",
                userSelect: "none",
                lineHeight: 1.2,
                transition: "color 0.30s ease, font-size 0.30s ease",
              }}
            >
              {label}
            </span>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}
