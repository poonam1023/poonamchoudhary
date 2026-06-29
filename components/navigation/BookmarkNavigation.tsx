"use client";

import React from "react";
import BookmarkStack, { ChapterEntry } from "./BookmarkStack";

// The single source of truth for the chapter index navigation structure
export const CHAPTERS: ChapterEntry[] = [
  { id: "cover",     title: "Cover",     numeral: "0",   page: 0 },
  { id: "chapter-1", title: "Chapter I",  numeral: "Ⅰ",   page: 1 },
  { id: "chapter-2", title: "Chapter II", numeral: "Ⅱ",   page: 2 },
  { id: "library",   title: "Library",   numeral: "Ⅲ",   page: 3 },
  { id: "gallery",   title: "Gallery",   numeral: "Ⅳ",   page: 4 },
];

interface BookmarkNavigationProps {
  currentPage: number;
  onNavigate: (page: number) => void;
}

/**
 * BookmarkNavigation
 *
 * Owns the data-driven chapters configuration and handles z-index stacking.
 * Positions the stack relatively, acting as the bridge between book pages and tabs.
 */
export default function BookmarkNavigation({
  currentPage,
  onNavigate,
}: BookmarkNavigationProps) {
  // Match current page state to the appropriate active chapter tab
  const activeChapter = CHAPTERS.find((ch) => ch.page === currentPage) || CHAPTERS[1];

  return (
    <div
      className="relative w-0 pointer-events-auto"
      role="navigation"
      aria-label="Chapter index ribbons"
    >
      <BookmarkStack
        chapters={CHAPTERS}
        activeId={activeChapter.id}
        onNavigate={onNavigate}
      />
    </div>
  );
}
