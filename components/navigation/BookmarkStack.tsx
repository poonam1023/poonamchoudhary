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

// Vintage color palette matching muted book paper/fabric colors
const COLOR_PALETTE = [
  { light: "#A68E7E", main: "#8C7261", dark: "#705849", text: "#F7F1E8", textMuted: "rgba(247, 241, 232, 0.45)" }, // Warm Brown (Cover)
  { light: "#BDC7B1", main: "#A8B29A", dark: "#8D977F", text: "#3D4730", textMuted: "rgba(61, 71, 48, 0.45)" }, // Sage Green (Chapter I)
  { light: "#A2B5C4", main: "#8FA3B2", dark: "#758B9A", text: "#283742", textMuted: "rgba(40, 55, 66, 0.45)" }, // Faded Blue (Chapter II)
  { light: "#F5EAC6", main: "#E8DCCB", dark: "#CBA680", text: "#6E5A4E", textMuted: "rgba(110, 90, 78, 0.45)" }, // Warm Cream (Library)
  { light: "#D6B8B0", main: "#C29F95", dark: "#A88277", text: "#4D3630", textMuted: "rgba(77, 54, 48, 0.45)" }, // Terracotta / Rose (Gallery)
];

// Irregular rotation angles to give the ribbons a natural physical drape
const STACK_PRESETS = [
  { rotate: -0.6 },
  { rotate: 0.4 },
  { rotate: -0.2 },
  { rotate: 0.8 },
  { rotate: -0.5 },
];

/**
 * BookmarkStack
 *
 * Renders a row of physical ribbon bookmarks clustered around the spine.
 * Positions ribbons absolutely based on dynamic spacing to prevent overlap.
 */
export default function BookmarkStack({
  chapters,
  activeId,
  onNavigate,
}: BookmarkStackProps) {
  const total = chapters.length;
  // Calculate dynamic spacing so the entire ribbon cluster stays within a tight, readable area around the spine (max 220px wide)
  const spacing = Math.min(26, 220 / (total - 1 || 1));
  const startOffset = -((total - 1) * spacing) / 2;
  const halfRibbonWidth = 11; // Ribbon width is 22px

  return (
    <div className="relative w-full h-0 pointer-events-none select-none">
      {chapters.map((chapter, index) => {
        const isActive = activeId === chapter.id;
        const color = COLOR_PALETTE[index % COLOR_PALETTE.length];
        const preset = STACK_PRESETS[index % STACK_PRESETS.length];

        // Center-align the ribbon stack around the spine crease
        const xPos = startOffset + index * spacing - halfRibbonWidth;

        return (
          <BookmarkTab
            key={chapter.id}
            label={chapter.title}
            numeral={chapter.numeral}
            isActive={isActive}
            onClick={() => onNavigate(chapter.page)}
            index={index}
            color={color}
            customRotate={preset.rotate}
            xOffset={xPos}
          />
        );
      })}
    </div>
  );
}
