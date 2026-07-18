"use client";

import React from "react";

interface SectionLabelProps {
  text: string;
  color?: string;
  className?: string;
}

/**
 * Small-caps editorial section label — matches reference design pattern.
 * e.g. "MY MISSION", "MY BOOK", "ABOUT THE AUTHOR"
 */
export default function SectionLabel({
  text,
  color = "#A8B29A",
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label={text}
    >
      {/* Left rule */}
      <div
        style={{
          width: "28px",
          height: "1px",
          background: `${color}80`,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          color,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
      {/* Right rule */}
      <div
        style={{
          height: "1px",
          background: `${color}40`,
          flex: 1,
          maxWidth: "40px",
        }}
      />
    </div>
  );
}
