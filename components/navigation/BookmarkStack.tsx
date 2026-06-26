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

// Handcrafted, slightly irregular styling presets to ensure a "human cut" look.
// Deterministic so React renders it consistently on refresh.
const STACK_PRESETS = [
  { baseWidth: 76, radius: "2px 12px 14px 2px", offsetShift: -3 },
  { baseWidth: 79, radius: "3px 14px 10px 3px", offsetShift: 1 },
  { baseWidth: 75, radius: "2px 11px 15px 2px", offsetShift: -2 },
  { baseWidth: 81, radius: "4px 15px 12px 4px", offsetShift: 3 },
  { baseWidth: 77, radius: "3px 13px 13px 3px", offsetShift: 0 },
];

/**
 * BookmarkStack
 *
 * Renders a column of chapter index tabs.
 * Manages tab order, vertical offsets (staggering), width variations,
 * and z-indexing (active tab is physically on top).
 */
export default function BookmarkStack({
  chapters,
  activeId,
  onNavigate,
}: BookmarkStackProps) {
  // Height of each tab is 52px. With a base step of 42px, they overlap by 10px.
  const baseStep = 42;

  return (
    <div className="relative w-full" style={{ minHeight: `${chapters.length * baseStep + 20}px` }}>
      {chapters.map((chapter, index) => {
        const isActive = activeId === chapter.id;
        
        // Loop around presets in case chapters length exceeds presets length
        const preset = STACK_PRESETS[index % STACK_PRESETS.length];
        
        // Calculate vertical position (staggering + handcrafted offset)
        const customOffset = index * baseStep + preset.offsetShift;

        // Active tab protrudes 25px more than inactive
        const customWidth = isActive ? preset.baseWidth + 25 : preset.baseWidth;

        return (
          <BookmarkTab
            key={chapter.id}
            label={chapter.title}
            numeral={chapter.numeral}
            isActive={isActive}
            onClick={() => onNavigate(chapter.page)}
            index={index}
            customWidth={customWidth}
            customRadius={preset.radius}
            customOffset={customOffset}
          />
        );
      })}
    </div>
  );
}
