"use client";

import React from "react";

interface WaxSealProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "terracotta" | "burgundy" | "bronze";
  className?: string;
  style?: React.CSSProperties;
}

export default function WaxSeal({
  position = { bottom: "15%", right: "8%" },
  rotation = -8,
  scale = 1,
  opacity = 0.95,
  variant = "terracotta",
  className = "",
  style = {},
}: WaxSealProps) {
  const getColors = () => {
    switch (variant) {
      case "burgundy":
        return {
          base: "#6B1D2F",
          shadow: "#3D0E19",
          highlight: "#8F3A4E",
          crest: "#521422",
        };
      case "bronze":
        return {
          base: "#967844",
          shadow: "#5E4924",
          highlight: "#BA9C6A",
          crest: "#775E31",
        };
      case "terracotta":
      default:
        return {
          base: "#9E5638",
          shadow: "#63321D",
          highlight: "#BD7556",
          crest: "#7E4025",
        };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...position,
        width: 52 * scale,
        height: 52 * scale,
        transform: `rotate(${rotation}deg)`,
        opacity,
        zIndex: 25,
        filter: "drop-shadow(1px 3px 5px rgba(0,0,0,0.22))",
        ...style,
      }}
    >
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Irregular outer wax pooling shape */}
        <path
          d="M30 4 C44 3 55 10 56 24 C57 38 52 50 38 56 C24 62 10 52 6 38 C2 24 16 5 30 4 Z"
          fill={colors.base}
        />
        {/* Soft inner stamp rim (sunken/depressed look) */}
        <circle cx="30" cy="30" r="19" fill={colors.base} stroke={colors.crest} strokeWidth="1" />
        <circle cx="30" cy="30" r="19" fill="none" stroke={colors.highlight} strokeWidth="0.75" strokeDasharray="10 100" />

        {/* 3D Emboss shading (light source from top-left) */}
        <path
          d="M13 25 C12 18 18 12 25 11"
          stroke={colors.highlight}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M35 49 C42 48 48 42 49 35"
          stroke={colors.shadow}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Monogram or Crest (floral olive sprig inside seal) */}
        <g stroke={colors.crest} strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
          {/* Central stem */}
          <path d="M30 41 C30 36 29 27 34 20" />
          {/* Leaves */}
          <path d="M30 36 Q25 34 23 35 Q26 38 30 36" fill={colors.crest} />
          <path d="M30 32 Q35 30 37 32 Q34 34 30 32" fill={colors.crest} />
          <path d="M29 28 Q24 26 22 28 Q26 30 29 28" fill={colors.crest} />
          <circle cx="34" cy="20" r="1.5" fill={colors.crest} />
        </g>

        {/* Gloss highlight dot */}
        <circle cx="21" cy="21" r="1.5" fill="#FFF" opacity="0.25" />
      </svg>
    </div>
  );
}
