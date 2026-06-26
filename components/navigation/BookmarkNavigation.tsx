"use client";

import React from "react";
import BookmarkItem from "./BookmarkItem";

// ─────────────────────────────────────────────────────────────────────────────
// Chapter Registry
//
// This is the single source of truth for book navigation.
// Adding a new chapter requires ONLY adding a new entry here.
// No component changes required.
// ─────────────────────────────────────────────────────────────────────────────
export interface ChapterEntry {
  id: string;
  /** Short label printed on the bookmark tab. Max ~12 chars for readability. */
  label: string;
  /** Page index used to identify active state and trigger navigation. */
  page: number;
}

export const CHAPTERS: ChapterEntry[] = [
  { id: "cover",     label: "Cover",     page: 0 },
  { id: "chapter-1", label: "Chapter I", page: 1 },
  // { id: "chapter-2", label: "Chapter II",  page: 2 },
  // { id: "gallery",   label: "Gallery",     page: 3 },
  // { id: "contact",   label: "Contact",     page: 4 },
  // { id: "back",      label: "Back Cover",  page: 5 },
];

interface BookmarkNavigationProps {
  /** Page index the reader is currently on. Used to mark the active bookmark. */
  currentPage: number;
  /**
   * Called when the reader clicks a bookmark.
   * The page number is passed — the parent decides what happens
   * (close book, flip forward, flip backward, etc.).
   */
  onNavigate: (page: number) => void;
}

/**
 * BookmarkNavigation
 *
 * Renders the physical bookmark tabs attached to the outside right edge
 * of the open book. Fully data-driven from CHAPTERS registry above.
 *
 * Positioned via the parent ChapterOne component — this component is
 * purely a visual and interaction layer.
 */
export default function BookmarkNavigation({
  currentPage,
  onNavigate,
}: BookmarkNavigationProps) {
  return (
    <div
      className="flex flex-col items-start pointer-events-auto"
      style={{ gap: "7px", paddingTop: "76px" }}
      role="navigation"
      aria-label="Chapter navigation"
    >
      {CHAPTERS.map((chapter, index) => (
        <BookmarkItem
          key={chapter.id}
          label={chapter.label}
          isActive={currentPage === chapter.page}
          onClick={() => onNavigate(chapter.page)}
          index={index}
        />
      ))}
    </div>
  );
}
