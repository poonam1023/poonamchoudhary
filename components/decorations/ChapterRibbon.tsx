"use client";

import React from "react";

interface ChapterRibbonProps {
  label: string;
  variant?: "tan" | "sage" | "rose";
  scale?: number;
  opacity?: number;
  className?: string;
}

export default function ChapterRibbon({
  label,
  variant = "sage",
  scale = 1,
  opacity = 0.9,
  className = "",
}: ChapterRibbonProps) {
  const getColors = () => {
    switch (variant) {
      case "tan":
        return { bg: "#C4A882", border: "#A1845C", text: "#3C2A18" };
      case "rose":
        return { bg: "#B89482", border: "#9A7361", text: "#362518" };
      case "sage":
      default:
        return { bg: "#9EA88A", border: "#7E886B", text: "#272E1C" };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`relative inline-flex items-center justify-center px-4 py-1 select-none pointer-events-none ${className}`}
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: colors.bg,
        borderLeft: `3px solid ${colors.border}`,
        boxShadow: "0 2px 5px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      {/* V-notch ends via CSS clip-path or absolute elements */}
      <div
        className="absolute top-0 bottom-0 left-full w-2"
        style={{
          background: colors.bg,
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        }}
      />
      <span
        className="font-sans uppercase font-bold tracking-[0.2em] leading-none"
        style={{
          fontSize: "8.5px",
          color: colors.text,
          textShadow: "0.5px 0.5px 0px rgba(255,255,255,0.15)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
