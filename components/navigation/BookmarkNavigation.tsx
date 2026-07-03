"use client";

import React from "react";
import BookmarkStack, { ChapterEntry } from "./BookmarkStack";

// ─────────────────────────────────────────────────────────────────────────────
// CHAPTERS — Single source of truth for the chapter index navigation.
// Adding a chapter only requires appending an object here.
// ─────────────────────────────────────────────────────────────────────────────
export const CHAPTERS: ChapterEntry[] = [
  { id: "cover",     title: "Cover",      numeral: "0",  page: 0 },
  { id: "chapter-1", title: "Chapter I",  numeral: "Ⅰ",  page: 1 },
  { id: "chapter-2", title: "Chapter II", numeral: "Ⅱ",  page: 2 },
  { id: "library",   title: "Library",    numeral: "Ⅲ",  page: 3 },
  { id: "gallery",   title: "Gallery",    numeral: "Ⅳ",  page: 4 },
  { id: "connect",   title: "Connect",    numeral: "Ⅴ",  page: 5 },
];

interface BookmarkNavigationProps {
  currentPage: number;
  onNavigate: (page: number) => void;
}

/**
 * BookmarkNavigation
 *
 * Zero-size positional anchor at the spine crease.
 * BookmarkStack absolutely positions each ribbon relative to this anchor.
 */
export default function BookmarkNavigation({
  currentPage,
  onNavigate,
}: BookmarkNavigationProps) {
  const activeChapter =
    CHAPTERS.find((ch) => ch.page === currentPage) ?? CHAPTERS[1];

  return (
    <div
      className="relative w-0 h-0 pointer-events-none"
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
