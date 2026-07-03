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

const TABS_CONFIG = [
  { label: "HOME",     page: 0, xOffset: 10,  rotation: -0.9, height: 107, tintOffset: -1, notchOffset: 0 },
  { label: "ABOUT",    page: 1, xOffset: 69,  rotation: 0.6,  height: 104, tintOffset: 2,  notchOffset: -1 },
  { label: "BOOKS",    page: 2, xOffset: 128, rotation: -0.5, height: 102, tintOffset: -2, notchOffset: 2 },
  { label: "SPEAKING", page: 3, xOffset: 187, rotation: 0.9,  height: 105, tintOffset: 1,  notchOffset: -2 },
  { label: "JOURNAL",  page: 4, xOffset: 246, rotation: -0.7, height: 100, tintOffset: -1, notchOffset: 1 },
  { label: "CONNECT",  page: 4, xOffset: 305, rotation: 0.4,  height: 104, tintOffset: 2,  notchOffset: 0 },
];

export default function BookmarkStack({
  activeId,
  onNavigate,
}: BookmarkStackProps) {
  const getActiveIndex = () => {
    switch (activeId) {
      case "cover":     return 0;
      case "chapter-1": return 1;
      case "chapter-2": return 2;
      case "library":   return 3;
      case "gallery":   return 4;
      default:          return 1;
    }
  };

  const activeIndex = getActiveIndex();

  return (
    <div className="relative w-0 h-0">
      {TABS_CONFIG.map((tab, index) => {
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
            tintOffset={tab.tintOffset}
            notchOffset={tab.notchOffset}
          />
        );
      })}
    </div>
  );
}
