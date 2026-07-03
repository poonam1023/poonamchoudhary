"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeftPage from "@/components/book/LeftPage";
import RightPage from "@/components/book/RightPage";
import BookmarkNavigation from "@/components/navigation/BookmarkNavigation";
import ChapterOneLeft from "./ChapterOneLeft";
import ChapterOneRight from "./ChapterOneRight";
import ChapterTwoLeft from "../chapter-two/ChapterTwoLeft";
import ChapterTwoRight from "../chapter-two/ChapterTwoRight";
import LibraryLeft from "../library/LibraryLeft";
import LibraryRight from "../library/LibraryRight";
import GalleryLeft from "../gallery/GalleryLeft";
import GalleryRight from "../gallery/GalleryRight";

interface ChapterOneProps {
  /**
   * Closes the book and returns to the cover.
   * Wired from BookOpeningAnimation → setBookState("closed").
   * Same prop signature as the original component.
   */
  onClose: () => void;
}

/**
 * ChapterOne — Chapter orchestrator (V5 physical tabs update)
 *
 * Architecture:
 *  - Left page:  extends leftward via `position: absolute; right: 100%`
 *  - Right page: fills this container
 *
 * Bookmark Repositioning:
 *  - The bookmark navigation is positioned at the RIGHT EDGE of the book page
 *    (`left: "100%"`, `top: "30%"`), placed at `z-index: 5` so the tabs sit
 *    behind the right page contents (`z-index: 10`), appearing physically
 *    inserted between the sheets.
 *  - Hovering a tab translates it horizontally outward.
 *  - Clicking a tab triggers a simulated 3D page-flip animation before updating
 *    the active tab state.
 */
export default function ChapterOne({ onClose }: ChapterOneProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [pendingPage, setPendingPage] = useState<number | null>(null);

  const handleNavigate = (page: number) => {
    if (page === 0) {
      // "Cover" tab clicked → close book, return to cover
      onClose();
      return;
    }
    if (page === currentPage || isFlipping) return;

    // Trigger simulated page turn animation
    setIsFlipping(true);
    setPendingPage(page);
  };

  // Sync state update with the mid-point of the page turn animation
  useEffect(() => {
    if (isFlipping && pendingPage !== null) {
      const timer = setTimeout(() => {
        setCurrentPage(pendingPage);
      }, 450); // 450ms represents the peak transition point of a 900ms flip

      const doneTimer = setTimeout(() => {
        setIsFlipping(false);
        setPendingPage(null);
      }, 900); // 900ms represents the full duration of the flip

      return () => {
        clearTimeout(timer);
        clearTimeout(doneTimer);
      };
    }
  }, [isFlipping, pendingPage]);

  const renderLeftPage = () => {
    switch (currentPage) {
      case 1:
        return <ChapterOneLeft />;
      case 2:
        return <ChapterTwoLeft />;
      case 3:
        return <LibraryLeft />;
      case 4:
        return <GalleryLeft />;
      default:
        return <ChapterOneLeft />;
    }
  };

  const renderRightPage = () => {
    switch (currentPage) {
      case 1:
        return <ChapterOneRight />;
      case 2:
        return <ChapterTwoRight />;
      case 3:
        return <LibraryRight />;
      case 4:
        return <GalleryRight />;
      default:
        return <ChapterOneRight />;
    }
  };

  return (
    <motion.div
      className="relative w-full h-full"
      style={{ transformStyle: "preserve-3d" }}
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
          {renderLeftPage()}
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
            "linear-gradient(to bottom, transparent 0%, rgba(110,90,78,0.06) 15%, rgba(110,90,78,0.10) 50%, rgba(110,90,78,0.06) 85%, transparent 100%)",
        }}
      />

      {/* ================================================================
          RIGHT PAGE
          Fills this container — the visible chapter content.
         ================================================================ */}
      <div className="w-full h-full relative z-10">
        <RightPage>
          {renderRightPage()}
        </RightPage>
      </div>

      {/* ================================================================
          PAGE EDGE — physical paper stack at the book's top boundary

          zIndex: 30 sits above:
            • page backgrounds (zIndex: 10)
            • bookmarks       (zIndex: 20)
          and below the 3D flip overlay (zIndex: 40).

          Purpose: masks the top 8px of every bookmark so the insertion
          point is never visible. The bookmark appears to emerge FROM
          between the pages, not to sit on top of them.

          left: "-100%" spans the full book width (left page + right page).
         ================================================================ */}
      <div
        className="hidden md:block absolute pointer-events-none"
        style={{
          top: 0,
          left: "-100%",
          right: 0,
          height: 8,
          zIndex: 30,
          // Multi-layer paper stack appearance:
          // darker at top (compressed edge), lighter toward page face
          background:
            "linear-gradient(to bottom, #EDE6DC 0%, #F0EAE0 20%, #F5F0E8 45%, #F7F3EC 70%, #FAF7F2 100%)",
          boxShadow: "0 3px 10px rgba(58,44,30,0.06), 0 1px 3px rgba(58,44,30,0.03)",
        }}
      >
        {/* Vertical page-count lines — dozens of thin paper sheets */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 2px, rgba(58,44,30,0.020) 2px, rgba(58,44,30,0.020) 3px)",
          }}
        />
      </div>

      {/* ================================================================
          BOOKMARK LAYER — physical page markers (desktop only)

          Anchored at top: 0, left: 0 (spine crease).
          zIndex: 20 means:
            • page backgrounds (zIndex: 10) cover the bookmark's lower body
            • PageEdge (zIndex: 30) covers the bookmark's top 8px
          Together these two layers create the insertion illusion.
         ================================================================ */}
      <div
        className="hidden md:block absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: 0,
          zIndex: 20,
          overflow: "visible",
        }}
      >
        <BookmarkNavigation
          currentPage={pendingPage !== null ? pendingPage : currentPage}
          onNavigate={handleNavigate}
        />
      </div>

      {/* ================================================================
          3D PAGE FLIP TRANSITION OVERLAY
          Triggers a realistic page flip from right to left around the spine
         ================================================================ */}
      <AnimatePresence>
        {isFlipping && (
          <motion.div
            className="absolute top-0 right-0 h-full origin-left z-40 pointer-events-none"
            style={{
              width: "100%",
              transformStyle: "preserve-3d",
            }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Front of the flipping page (facing right at start) */}
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-r-md border-y border-r border-[#6E5A4E]/10"
              style={{
                background: "linear-gradient(198deg, #FAF7F2 0%, #F7F3EC 42%, #F5F0E8 100%)",
                boxShadow: "inset 22px 0 38px -4px rgba(58,44,30,0.05), inset 4px 0 8px rgba(58,44,30,0.05)",
                transform: "rotateY(0deg)",
              }}
            >
              {/* Paper textures */}
              <div className="absolute inset-0 paper-grain-overlay opacity-[0.03] mix-blend-multiply" />
              <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-l from-rgba(110,90,78,0.10) to-rgba(110,90,78,0.03)" />
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-[#3A2C1E]/8 to-transparent filter blur-[1px]" />
            </div>

            {/* Back of the flipping page (facing left at end) */}
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-l-md border-y border-l border-[#6E5A4E]/10"
              style={{
                background: "linear-gradient(162deg, #FAF7F2 0%, #F7F3EC 38%, #F5F0E8 100%)",
                boxShadow: "inset -22px 0 38px -4px rgba(58,44,30,0.05), inset -4px 0 8px rgba(58,44,30,0.05)",
                transform: "rotateY(180deg)",
              }}
            >
              {/* Paper textures */}
              <div className="absolute inset-0 paper-grain-overlay opacity-[0.03] mix-blend-multiply" />
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-r from-rgba(110,90,78,0.10) to-rgba(110,90,78,0.03)" />
              <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-[#3A2C1E]/8 to-transparent filter blur-[1px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
