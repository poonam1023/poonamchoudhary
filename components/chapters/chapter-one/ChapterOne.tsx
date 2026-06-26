"use client";

import React from "react";
import { motion } from "framer-motion";
import LeftPage from "@/components/book/LeftPage";
import RightPage from "@/components/book/RightPage";
import BookmarkNavigation from "@/components/navigation/BookmarkNavigation";
import ChapterOneLeft from "./ChapterOneLeft";
import ChapterOneRight from "./ChapterOneRight";

interface ChapterOneProps {
  /**
   * Closes the book and returns to the cover.
   * Wired from BookOpeningAnimation → setBookState("closed").
   * Same prop signature as the original component.
   */
  onClose: () => void;
}

/**
 * ChapterOne — Chapter orchestrator (V4 position update)
 *
 * Architecture:
 *  BookOpeningAnimation renders this inside the right-half page div
 *  (absolute, right-0, w-1/2 of the 920px book spread = ~460px wide).
 *
 *  Left page:  extends leftward via `position: absolute; right: 100%`
 *  Right page: fills this container
 *
 * V4 Bookmark repositioning:
 *  Ribbons now emerge from the TOP of the book near the spine, not the
 *  right edge. They are anchored at `top: "-8px", left: "8px"` — just
 *  inside the left edge of the right page (= near the spine/center of
 *  the full spread). They hang DOWN 200px, appearing to be sewn into
 *  the binding and draping over the pages.
 *
 *  This feels physically correct: luxury ribbons are sewn at the spine
 *  and hang through pages to mark your place.
 */
export default function ChapterOne({ onClose }: ChapterOneProps) {
  const handleNavigate = (page: number) => {
    if (page === 0) {
      // "Cover" ribbon clicked → close book, return to cover
      onClose();
    }
    // page === 1 → Chapter I, already here. No-op (panel handles UX).
  };

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeIn", delay: 0.08 }}
    >

      {/* ================================================================
          LEFT PAGE
          Extends leftward from this container's left edge.
          On desktop: occupies the left half of the 920px book spread.
          On mobile:  hidden.
         ================================================================ */}
      <div
        className="hidden md:block absolute top-0 bottom-0"
        style={{
          right: "100%",
          width: "100%",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <LeftPage>
          <ChapterOneLeft />
        </LeftPage>
      </div>

      {/* ================================================================
          CENTER GUTTER
          Thin vertical crease at the spine — where the pages are bound.
         ================================================================ */}
      <div
        className="hidden md:block absolute top-8 bottom-8 left-0 pointer-events-none"
        style={{
          width: "1px",
          zIndex: 25,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(110,90,78,0.10) 15%, rgba(110,90,78,0.18) 50%, rgba(110,90,78,0.10) 85%, transparent 100%)",
        }}
      />

      {/* ================================================================
          RIGHT PAGE
          Fills this container — the visible chapter content.
         ================================================================ */}
      <div className="w-full h-full">
        <RightPage>
          <ChapterOneRight />
        </RightPage>
      </div>

      {/* ================================================================
          RIBBON BOOKMARKS (desktop only)

          V4 position: top of book, near spine.
          `left: "8px"` = 8px from the left edge of the right page
                          = near the center-spine of the full 920px spread.
          `top: "-8px"`  = ribbons emerge from just above the book top edge,
                          as if sewn into the binding and hanging down.

          Ribbons hang 200px downward with fishtail cuts at the bottom.
         ================================================================ */}
      <div
        className="hidden md:flex absolute pointer-events-none"
        style={{
          top: "-8px",
          left: "8px",
          zIndex: 50,
        }}
      >
        <BookmarkNavigation
          currentPage={1}
          onNavigate={handleNavigate}
        />
      </div>

      {/* ================================================================
          MOBILE: Minimal return hint at bottom
         ================================================================ */}
      <motion.div
        className="block md:hidden absolute bottom-5 left-0 right-0 text-center pointer-events-auto"
        style={{ zIndex: 50 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <button
          onClick={onClose}
          className="font-sans uppercase tracking-[0.24em] transition-colors duration-300"
          style={{
            fontSize: "8.5px",
            color: "rgba(110,90,78,0.45)",
            letterSpacing: "0.24em",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "rgba(168,178,154,0.9)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(110,90,78,0.45)")
          }
          aria-label="Return to cover"
        >
          ← Close the Book
        </button>
      </motion.div>

    </motion.div>
  );
}
