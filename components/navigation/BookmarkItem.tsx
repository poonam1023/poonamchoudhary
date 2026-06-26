"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookmarkItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

/**
 * BookmarkItem — V2
 *
 * Redesigned to resemble handmade paper tabs tucked between book pages.
 * No longer resembles UI navigation. Looks like a physical object.
 *
 * Visual characteristics:
 *  - Paper texture background
 *  - Folded-corner illusion at the top (triangular shadow)
 *  - Slight edge notch at the bottom (bookmark identification cut)
 *  - Aged paper edges — darker along binding side and bottom
 *  - Paper thickness rendered as a right-side shadow gradient
 *  - Overlapping stack layout — each bookmark slightly overlaps the next
 *
 * Active:  sage green, +20–28px more exposed, deeper shadow, slight elevation
 * Inactive: cream parchment, partially tucked, subdued label
 *
 * Typography:
 *  - Roman numeral (Ⅰ, Ⅱ) for chapters
 *  - Small editorial label below
 *  - Cormorant Garamond, vertical
 */
export default function BookmarkItem({ label, isActive, onClick, index }: BookmarkItemProps) {
  // Active bookmark is meaningfully wider — 20–28px difference vs inactive
  const visibleWidth = isActive ? 46 : 26;
  const tabHeight = 60;

  return (
    <motion.div
      className="relative"
      style={{
        // Drop-shadow works correctly with clip-path and irregular shapes
        filter: isActive
          ? "drop-shadow(3px 4px 12px rgba(0,0,0,0.28)) drop-shadow(0px 1px 2px rgba(0,0,0,0.16))"
          : "drop-shadow(1px 2px 5px rgba(0,0,0,0.13))",
      }}
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.55 + index * 0.14,
        duration: 0.60,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ x: isActive ? 8 : 10 }}
        transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
        className="cursor-pointer focus:outline-none select-none"
        aria-label={isActive ? `Current page: ${label}` : `Open ${label}`}
        aria-current={isActive ? "page" : undefined}
        style={{ display: "block" }}
      >
        <div
          style={{
            width: `${visibleWidth}px`,
            height: `${tabHeight}px`,
            position: "relative",
            overflow: "hidden",
            // Notch at the bottom: clip to create a small V-cut identification mark
            clipPath: `polygon(0 0, 100% 0, 100% ${tabHeight - 8}px, 50% ${tabHeight}px, 0 ${tabHeight - 8}px)`,
            // Smooth width transition when active state changes
            transition: "width 0.35s cubic-bezier(0.25,1,0.5,1)",
            // Base paper color
            background: isActive
              ? "linear-gradient(148deg, #B8C4AC 0%, #A8B29A 48%, #98A889 100%)"
              : "linear-gradient(148deg, #F4ECD5 0%, #EDE3C5 48%, #E5D8B5 100%)",
          }}
        >
          {/* ── Paper grain — bookmark has its own grain ───────────────── */}
          <div
            className="absolute inset-0 paper-grain-overlay pointer-events-none"
            style={{ opacity: 0.20 }}
          />

          {/* ── Folded-corner shadow at top ────────────────────────────── */}
          {/* Triangular shadow in the top-left corner simulates a paper fold */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: 0,
              left: 0,
              width: "10px",
              height: "10px",
              background: `linear-gradient(135deg, rgba(0,0,0,${isActive ? "0.12" : "0.06"}) 0%, transparent 70%)`,
            }}
          />
          {/* Fold highlight — the fold edge catches light */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: 0,
              left: 0,
              width: "1px",
              height: "10px",
              background: `linear-gradient(to bottom, rgba(255,255,255,${isActive ? "0.30" : "0.40"}) 0%, transparent 100%)`,
              transform: "rotate(45deg) translateX(4px)",
              transformOrigin: "top left",
            }}
          />

          {/* ── Binding-side edge — left dark line ────────────────────── */}
          {/* The side inserted between pages; slightly darker from compression */}
          <div
            className="absolute left-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "3px",
              background: isActive
                ? "linear-gradient(to right, rgba(0,0,0,0.18), rgba(0,0,0,0.06) 70%, transparent)"
                : "linear-gradient(to right, rgba(110,90,78,0.18), rgba(110,90,78,0.06) 70%, transparent)",
            }}
          />

          {/* ── Top edge highlight — paper catching light ─────────────── */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "1px",
              background: `rgba(255,255,255,${isActive ? "0.45" : "0.55"})`,
            }}
          />

          {/* ── Right side — paper thickness shadow ───────────────────── */}
          <div
            className="absolute right-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "2px",
              background: isActive
                ? "linear-gradient(to left, rgba(0,0,0,0.10), transparent)"
                : "linear-gradient(to left, rgba(110,90,78,0.10), transparent)",
            }}
          />

          {/* ── Aged edge wear — bottom and sides darken slightly ─────── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isActive
                ? "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.06) 100%)"
                : "linear-gradient(to bottom, transparent 60%, rgba(110,90,78,0.05) 100%)",
            }}
          />

          {/* ── Label ─────────────────────────────────────────────────── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-[3px]"
            style={{ paddingTop: "6px" }}
          >
            <span
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                // Use the roman numeral character if label is "Chapter I" etc.
                // otherwise show the full label in compact form
                fontFamily: "var(--font-cormorant), serif",
                fontSize: isActive ? "9px" : "8px",
                fontWeight: 400,
                letterSpacing: "0.12em",
                color: isActive ? "rgba(44,34,24,0.72)" : "rgba(110,90,78,0.42)",
                transition: "color 0.30s ease, font-size 0.30s ease",
                userSelect: "none",
                lineHeight: 1.2,
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
