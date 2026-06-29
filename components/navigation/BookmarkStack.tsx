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
// MATTE VINTAGE PALETTE — flat cardstock tones
// 95% body / 5% edge shading only. No gloss. No satin. No large gradients.
// ─────────────────────────────────────────────────────────────────────────────
export const RIBBON_COLORS = [
  { main: "#C4A882", text: "#3C2A18" }, // aged tan       — Cover
  { main: "#9EA88A", text: "#272E1C" }, // dusty sage     — Chapter I
  { main: "#8EA0A8", text: "#1B2930" }, // faded steel    — Chapter II
  { main: "#B89482", text: "#362518" }, // warm umber     — Library
  { main: "#9E8698", text: "#2B1828" }, // dusty rose     — Gallery
  { main: "#A09468", text: "#2C2418" }, // faded olive    — (extra)
  { main: "#8E9EA2", text: "#19282E" }, // slate blue     — (extra)
];

// ─────────────────────────────────────────────────────────────────────────────
// SPINE OFFSETS — simulate page depth, not equal spacing
//
// Each offset represents how far into the book that chapter's pages are.
// Deeper chapters → bookmark sits further from the spine.
// Values are px from left: 0 (spine crease).
//
//   Cover      ~ page   5  →  18px
//   Chapter I  ~ page  40  →  38px
//   Chapter II ~ page  90  →  60px
//   Library    ~ page 180  →  84px
//   Gallery    ~ page 280  → 110px
// ─────────────────────────────────────────────────────────────────────────────
const SPINE_OFFSETS = [18, 38, 60, 84, 110, 138, 170];

export default function BookmarkStack({
  chapters,
  activeId,
  onNavigate,
}: BookmarkStackProps) {
  return (
    <div className="relative w-0 h-0">
      {chapters.map((chapter, index) => {
        const isActive = activeId === chapter.id;
        const color = RIBBON_COLORS[index % RIBBON_COLORS.length];
        const xOffset = SPINE_OFFSETS[index] ?? 18 + index * 24;

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
