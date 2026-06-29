"use client";

import React from "react";

interface PaperClipProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "silver" | "bronze";
  className?: string;
}

export default function PaperClip({
  position = { top: "-10px", left: "20px" },
  rotation = -15,
  scale = 1,
  opacity = 0.9,
  variant = "bronze",
  className = "",
}: PaperClipProps) {
  const getColors = () => {
    switch (variant) {
      case "silver":
        return {
          stroke: "#A0A0A0",
          highlight: "#E0E0E0",
          shadow: "#606060",
        };
      case "bronze":
      default:
        return {
          stroke: "#8E7252",
          highlight: "#D0B08F",
          shadow: "#54422E",
        };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...position,
        width: 18 * scale,
        height: 45 * scale,
        transform: `rotate(${rotation}deg)`,
        opacity,
        zIndex: 26,
        filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.22))",
      }}
    >
      <svg viewBox="0 0 20 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Shadow trace (rendered slightly offset manually to align with 3D look) */}
        <path
          d="M6 44 L6 14 C6 8 14 8 14 14 L14 36 C14 40 10 40 10 36 L10 18 C10 15 8 15 8 18 L8 36 C8 42 16 42 16 36 L16 14 C16 6 4 6 4 14 L4 44 C4 49 11 49 11 44"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Metal Wire loop (Outer loop → inner loop) */}
        <path
          d="M6 44 L6 14 C6 8 14 8 14 14 L14 36 C14 40 10 40 10 36 L10 18 C10 15 8 15 8 18 L8 36 C8 42 16 42 16 36 L16 14 C16 6 4 6 4 14 L4 44 C4 49 11 49 11 44"
          stroke={colors.stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Metallic Highlight line */}
        <path
          d="M5.2 43 L5.2 14 C5.2 7.2 12.8 7.2 12.8 14 L12.8 35.2 M9.2 19 L9.2 35"
          stroke={colors.highlight}
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Metallic shadow line */}
        <path
          d="M6.8 45 L6.8 14 C6.8 8.8 15.2 8.8 15.2 14 L15.2 36.8 M10.8 17 L10.8 37"
          stroke={colors.shadow}
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
