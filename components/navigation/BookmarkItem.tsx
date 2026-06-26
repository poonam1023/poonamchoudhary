"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookmarkItemProps {
  /** Display label — shown as vertical text on the tab. */
  label: string;
  /** Whether this is the reader's current location. */
  isActive: boolean;
  /** Called when the reader taps this bookmark. */
  onClick: () => void;
  /** Used to stagger the entry animation. */
  index: number;
}

/**
 * BookmarkItem
 *
 * A single physical bookmark tab attached to the outside edge of the book.
 * Designed to look like a thumb-index tab cut into a premium hardcover.
 *
 * Visual language:
 *   Active  — sage green, wider, deeper shadow, extends further from book
 *   Inactive — warm cream, narrower, subdued, mostly tucked behind the edge
 *   Hover   — slides 8–10px outward, ease-out, no bounce
 *
 * Shape: vertical rectangle, left edge straight (binding),
 *        right corners 3px rounded (exposed).
 *
 * The outer wrapper carries drop-shadow via `filter` so it works
 * correctly against the transparent background and clip path.
 */
export default function BookmarkItem({ label, isActive, onClick, index }: BookmarkItemProps) {
  const tabWidth  = isActive ? 42 : 32;
  const tabHeight = isActive ? 56 : 48;

  return (
    <motion.div
      className="relative"
      style={{
        filter: isActive
          ? "drop-shadow(2px 4px 10px rgba(0,0,0,0.24)) drop-shadow(0px 1px 2px rgba(0,0,0,0.14))"
          : "drop-shadow(1px 1px 4px rgba(0,0,0,0.12))",
      }}
      initial={{ x: 16, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.55 + index * 0.13,
        duration: 0.55,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ x: isActive ? 8 : 10 }}
        transition={{ type: "tween", duration: 0.26, ease: "easeOut" }}
        className="cursor-pointer focus:outline-none select-none"
        aria-label={isActive ? `Current page: ${label}` : `Open ${label}`}
        aria-current={isActive ? "page" : undefined}
      >
        {/* ── Tab Body ─────────────────────────────────────────────────── */}
        <div
          style={{
            width: `${tabWidth}px`,
            height: `${tabHeight}px`,
            borderRadius: "0 3px 3px 0",
            background: isActive
              ? "linear-gradient(155deg, #BAC4AD 0%, #A8B29A 55%, #9BAF89 100%)"
              : "linear-gradient(155deg, #F5EDD8 0%, #EEE4C8 55%, #E6D9B8 100%)",
            position: "relative",
            overflow: "hidden",
            transition: "width 0.30s cubic-bezier(0.25,1,0.5,1), height 0.30s cubic-bezier(0.25,1,0.5,1), background 0.30s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Paper grain texture */}
          <div
            className="absolute inset-0 paper-grain-overlay pointer-events-none"
            style={{ opacity: 0.18 }}
          />

          {/* Binding-side edge — left dark line simulating insertion into pages */}
          <div
            className="absolute left-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "2px",
              background: isActive
                ? "rgba(0,0,0,0.13)"
                : "rgba(110,90,78,0.14)",
            }}
          />

          {/* Top highlight — edge of paper catching light */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.50)",
            }}
          />

          {/* Bottom shadow line */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "1px",
              background: isActive ? "rgba(0,0,0,0.09)" : "rgba(110,90,78,0.08)",
            }}
          />

          {/* Vertical label */}
          <span
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              fontSize: "7.5px",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              letterSpacing: "0.19em",
              textTransform: "uppercase",
              color: isActive ? "rgba(44,34,24,0.68)" : "rgba(110,90,78,0.48)",
              transition: "color 0.30s ease",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            {label}
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}
