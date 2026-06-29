"use client";

import React from "react";

interface WatercolorBlobProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  width?: number | string;
  height?: number | string;
  opacity?: number;
  variant?: "sage" | "rose" | "lavender" | "cream" | "gold";
  className?: string;
  style?: React.CSSProperties;
}

export default function WatercolorBlob({
  position = { top: "10%", left: "10%" },
  width = 180,
  height = 140,
  opacity = 0.08,
  variant = "sage",
  className = "",
  style = {},
}: WatercolorBlobProps) {
  const getBlobColor = () => {
    switch (variant) {
      case "rose":
        return "#D9A0A0";
      case "lavender":
        return "#A39EA9";
      case "cream":
        return "#EAD8B2";
      case "gold":
        return "#C4A35A";
      case "sage":
      default:
        return "#A8B29A";
    }
  };

  const color = getBlobColor();

  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        ...position,
        width,
        height,
        opacity,
        zIndex: 0,
        filter: "blur(28px)",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Irregular watercolor bleed shape */}
        <path
          d="M25 22 C42 12 70 18 78 35 C86 52 75 80 55 84 C35 88 12 70 15 50 C18 30 8 32 25 22 Z"
          fill={color}
        />
        {/* Secondary overlapping layer for color depth */}
        <path
          d="M35 30 C50 20 68 28 72 45 C76 62 60 70 48 72 C36 74 25 60 28 45 C31 30 20 40 35 30 Z"
          fill={color}
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
