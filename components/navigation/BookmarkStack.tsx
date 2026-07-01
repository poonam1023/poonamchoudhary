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

// Spacing offsets from left of right page (spine)
// Home is close to the spine, and other tabs follow to the right
const TABS_CONFIG = [
  { label: "HOME",     page: 0, xOffset: 20,  rotation: -1.2, height: 84 },
  { label: "ABOUT",    page: 1, xOffset: 74,  rotation: 0.8,  height: 74 },
  { label: "BOOKS",    page: 2, xOffset: 128, rotation: -0.5, height: 75 },
  { label: "SPEAKING", page: 3, xOffset: 182, rotation: 1.1,  height: 73 },
  { label: "JOURNAL",  page: 4, xOffset: 236, rotation: -0.8, height: 76 },
  { label: "CONNECT",  page: 4, xOffset: 290, rotation: 0.6,  height: 74 },
];

export default function BookmarkStack({
  activeId,
  onNavigate,
}: BookmarkStackProps) {
  // Determine which tab is active based on the activeId
  const getActiveIndex = () => {
    switch (activeId) {
      case "cover":     return 0; // HOME
      case "chapter-1": return 1; // ABOUT
      case "chapter-2": return 2; // BOOKS
      case "library":   return 3; // SPEAKING
      case "gallery":   return 4; // JOURNAL / CONNECT
      default:          return 1;
    }
  };

  const activeIndex = getActiveIndex();

  return (
    <div className="relative w-0 h-0">
      {TABS_CONFIG.map((tab, index) => {
        // If we are on Gallery, both JOURNAL and CONNECT could be styled, but let's make CONNECT active if it's the last one, or just JOURNAL active. Let's make index === activeIndex active.
        // For CONNECT (index 5), if activeId is gallery, we could make JOURNAL (index 4) active.
        const isActive = index === activeIndex;

        return (
          <BookmarkTab
            key={tab.label}
            label={tab.label}
            isActive={isActive}
            onClick={() => onNavigate(tab.page)}
            index={index}
            xOffset={tab.xOffset}
            rotation={tab.rotation}
            height={tab.height}
          />
        );
      })}
    </div>
  );
}
