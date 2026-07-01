"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookmarkTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  xOffset: number;
  rotation: number;
  height: number;
}

export default function BookmarkTab({
  label,
  isActive,
  onClick,
  index,
  xOffset,
  rotation,
  height,
}: BookmarkTabProps) {
  const [hovered, setHovered] = React.useState(false);

  // Active tab hangs lower (20px drop), hovered hangs 10px drop, inactive hangs at 0px drop.
  const targetY = isActive ? 20 : hovered ? 10 : 0;

  // Active color: soft sage green. Inactive: warm cream cardstock.
  const paperColor = isActive ? "#A8B29A" : "#F5EFEB";
  const textColor = isActive ? "#2E3B27" : "#5A4A3E";
  const iconColor = isActive ? "#2E3B27" : "#7D6B5D";

  // Individual shadow styling to give it realistic thickness and distance from the page
  const shadowFilter = isActive
    ? "drop-shadow(1px 6px 12px rgba(26,20,18,0.22)) drop-shadow(2px 12px 24px rgba(26,20,18,0.12))"
    : hovered
    ? "drop-shadow(0.5px 4px 8px rgba(26,20,18,0.16)) drop-shadow(1px 8px 16px rgba(26,20,18,0.08))"
    : "drop-shadow(0.5px 3px 6px rgba(26,20,18,0.12)) drop-shadow(1px 5px 10px rgba(26,20,18,0.06))";

  // Render outline SVG icons for each tab
  const getIcon = () => {
    const strokeWidth = 1.4;
    switch (label.toUpperCase()) {
      case "HOME":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case "ABOUT":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "BOOKS":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        );
      case "SPEAKING":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        );
      case "JOURNAL":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 6v12" />
            <path d="M8 10h8" />
            <path d="M8 14h8" />
          </svg>
        );
      case "CONNECT":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{
        top: -6, // Hangs slightly over the top page margin crease
        left: xOffset,
        width: 46,
        height: height,
        filter: shadowFilter,
        zIndex: isActive ? 28 : 26,
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: targetY, opacity: 1 }}
      transition={{
        y: { duration: 0.38, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.45, delay: 0.05 * index },
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full h-full focus:outline-none flex flex-col items-center justify-between"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
        aria-label={`Go to ${label}`}
        aria-pressed={isActive}
      >
        {/* ── CARDSTOCK TAB BODY ── */}
        <div
          className="absolute inset-0 transition-colors duration-300"
          style={{
            backgroundColor: paperColor,
            // Subtle rounded bottom and swallowtail design
            borderRadius: "0 0 4px 4px",
            clipPath: isActive
              ? "polygon(0 0, 100% 0, 100% 100%, 50% 92%, 0 100%)" // active swallowtail V-cut
              : "polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%)", // inactive V-cut
            boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(110,90,78,0.12)",
          }}
        >
          {/* Subtle paper grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 4px),
                repeating-linear-gradient(-45deg, #000, #000 1px, transparent 1px, transparent 4px)
              `,
            }}
          />

          {/* Stitched borders: fine dashed border along left, right and bottom edges */}
          <div
            className="absolute inset-[1.5px] pointer-events-none rounded-[3px] opacity-[0.35]"
            style={{
              borderLeft: `0.75px dashed ${isActive ? "#FAF7EE" : "#8E7252"}`,
              borderRight: `0.75px dashed ${isActive ? "#FAF7EE" : "#8E7252"}`,
              borderBottom: `0.75px dashed ${isActive ? "#FAF7EE" : "#8E7252"}`,
            }}
          />

          {/* 3D fold crease at the top: matches the top edge fold of wrapping over the page */}
          <div
            className="absolute top-0 left-0 right-0 h-[6px] pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.06) 60%, transparent 100%)",
              borderBottom: "0.5px solid rgba(255,255,255,0.15)",
            }}
          />
        </div>

        {/* ── CARD CONTENT ── */}
        <div
          className="relative z-10 flex flex-col items-center justify-center w-full mt-4 gap-1.5 select-none pointer-events-none"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Icon */}
          <div className="flex items-center justify-center h-[20px] w-[20px]">
            {getIcon()}
          </div>

          {/* Label text */}
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "7.5px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: textColor,
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
        </div>
      </button>
    </motion.div>
  );
}
