"use client";

import React from "react";
import BookmarkTab from "./BookmarkTab";

export interface ChapterEntry {
  id: string;
  title: string;
  numeral: string;
  page: number;
}

interface BookmarkStackProps {
  chapters: ChapterEntry[];
  activeId: string;
  onNavigate: (page: number) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// MATTE VINTAGE PALETTE
// Flat, muted paper/fabric tones — no saturation, no gloss.
// main  = ribbon body colour
// text  = printed numeral colour
// ─────────────────────────────────────────────────────────────────────────────
export const RIBBON_COLORS = [
  { main: "#C2A882", text: "#3D2B18" }, // Aged tan       (Cover)
  { main: "#9EA98C", text: "#282E1C" }, // Dusty sage     (Ch I)
  { main: "#8EA2AA", text: "#1C2A30" }, // Faded steel    (Ch II)
  { main: "#B89684", text: "#37261A" }, // Warm umber     (Library)
  { main: "#9E8898", text: "#2C1A28" }, // Dusty burgundy (Gallery)
  { main: "#A0956C", text: "#2E2618" }, // Faded olive    (extra)
  { main: "#8C9EA2", text: "#1A2A2E" }, // Slate blue     (extra)
];

// ─────────────────────────────────────────────────────────────────────────────
// SPINE OFFSETS
// Bookmarks start just right of the spine and step inward with slight variation.
// Values are px from left: 0 (spine crease).
// ─────────────────────────────────────────────────────────────────────────────
const SPINE_OFFSETS = [18, 38, 60, 84, 110, 138, 168];

/**
 * BookmarkStack
 *
 * Absolutely positions each ribbon relative to the spine crease anchor.
 * Derives x-position from SPINE_OFFSETS for a physical, depth-indexed look.
 */
export default function BookmarkStack({
  chapters,
  activeId,
  onNavigate,
}: BookmarkStackProps) {
  return (
    // Relative container — zero-size so it doesn't affect page layout.
    // Children use absolute positioning and may render outside (overflow: visible
    // on the parent chain allows the ribbons to appear above the page edge).
    <div className="relative w-0 h-0">
      {chapters.map((chapter, index) => {
        const isActive = activeId === chapter.id;
        const color = RIBBON_COLORS[index % RIBBON_COLORS.length];
        const xOffset = SPINE_OFFSETS[index] ?? 18 + index * 22;

        return (
          <BookmarkTab
            key={chapter.id}
            label={chapter.title}
            numeral={chapter.numeral}
            isActive={isActive}
            onClick={() => onNavigate(chapter.page)}
            index={index}
            color={color}
            xOffset={xOffset}
          />
        );
      })}
    </div>
  );
}
