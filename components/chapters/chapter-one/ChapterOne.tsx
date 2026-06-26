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
   * This is the same prop signature the original component used,
   * ensuring BookOpeningAnimation.tsx needs zero changes.
   */
  onClose: () => void;
}

/**
 * ChapterOne — Chapter orchestrator
 *
 * Architecture note:
 * BookOpeningAnimation renders this component inside the right-half page div
 * (absolute, right-0, w-1/2 of the 920px book spread = ~460px wide).
 *
 * To form a complete two-page spread, this component:
 *   - Extends the left page LEFTWARD via `position: absolute; right: 100%`
 *     (This extends it into the left half of the book. On desktop it sits
 *      behind the flip card's back face at z-30; it provides content for
 *      future navigation states.)
 *   - Fills the current container with the right page content
 *   - Extends the bookmark panel RIGHTWARD via `position: absolute; left: 100%`
 *     (This places bookmarks just outside the book's right edge)
 *
 * Mobile:
 *   Left page is hidden (display: none).
 *   Bookmarks are hidden and replaced by a minimal bottom return button.
 */
export default function ChapterOne({ onClose }: ChapterOneProps) {
  const handleNavigate = (page: number) => {
    if (page === 0) {
      // "Cover" bookmark clicked → close the book, return to cover
      onClose();
    }
    // page === 1 → Chapter I, already here. No-op.
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
          On mobile:  hidden (the flip card is full-width and opacity:0).
         ================================================================ */}
      <div
        className="hidden md:block absolute top-0 bottom-0"
        style={{
          right: "100%",        // pushes it leftward to the left half
          width: "100%",        // same width as this container (~460px)
          zIndex: 10,           // below the flip card's back face (z-30)
          pointerEvents: "none",
        }}
      >
        <LeftPage>
          <ChapterOneLeft />
        </LeftPage>
      </div>

      {/* ================================================================
          CENTER GUTTER
          Thin vertical line at the spine — printed books have this crease.
          Positioned at the left edge of this container (= center of book).
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
          BOOKMARK NAVIGATION (desktop only)
          Extends rightward from this container's right edge,
          appearing attached to the outside edge of the open book.
          Pointer events re-enabled on the inner component.
         ================================================================ */}
      <div
        className="hidden md:block absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: "100%",         // starts at right edge of this container = right edge of book
          width: "60px",
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
          The bookmark tabs are too small for touch; offer a text link.
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
