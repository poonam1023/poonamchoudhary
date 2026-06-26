"use client";

import React, { useState } from "react";
import BookmarkItem from "./BookmarkItem";
import ChapterIndexPanel from "./ChapterIndexPanel";

// ─────────────────────────────────────────────────────────────────────────────
// Chapter Registry — single source of truth for navigation
// ─────────────────────────────────────────────────────────────────────────────
export interface ChapterEntry {
  id: string;
  label: string;
  page: number;
}

export const CHAPTERS: ChapterEntry[] = [
  { id: "cover",     label: "Cover",     page: 0 },
  { id: "chapter-1", label: "Chapter I", page: 1 },
];

interface BookmarkNavigationProps {
  currentPage: number;
  onNavigate: (page: number) => void;
}

/**
 * BookmarkNavigation — V4
 *
 * Renders a horizontal row of fabric ribbon bookmarks anchored at the
 * top of the book spread near the spine.
 *
 * Clicking any ribbon opens the ChapterIndexPanel — a printed chapter
 * index card that slides in. Clicking again or clicking outside closes it.
 *
 * The ribbons themselves hang vertically downward (200px) with fishtail cuts.
 */
export default function BookmarkNavigation({
  currentPage,
  onNavigate,
}: BookmarkNavigationProps) {
  const [panelOpen, setPanelOpen] = useState(false);

  const handleRibbonClick = (page: number) => {
    if (currentPage === page && page !== 0) {
      // Same chapter — toggle panel
      setPanelOpen((prev) => !prev);
    } else {
      // Different chapter — navigate directly
      onNavigate(page);
    }
  };

  return (
    <div
      className="relative pointer-events-auto"
      style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}
      role="navigation"
      aria-label="Chapter navigation"
    >
      {/* Ribbon row */}
      {CHAPTERS.map((chapter, index) => (
        <BookmarkItem
          key={chapter.id}
          label={chapter.label}
          isActive={currentPage === chapter.page}
          onClick={() => handleRibbonClick(chapter.page)}
          index={index}
          panelOpen={panelOpen && currentPage === chapter.page}
        />
      ))}

      {/* Chapter index panel — slides in near ribbons */}
      <ChapterIndexPanel
        isOpen={panelOpen}
        currentPage={currentPage}
        onNavigate={onNavigate}
        onClose={() => setPanelOpen(false)}
      />
    </div>
  );
}
