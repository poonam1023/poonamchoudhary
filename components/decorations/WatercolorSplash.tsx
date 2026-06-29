"use client";

import React from "react";

interface WatercolorSplashProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  width?: number | string;
  height?: number | string;
  opacity?: number;
  variant?: "sage" | "olive" | "cream" | "lavender" | "terracotta" | "rose";
  className?: string;
  style?: React.CSSProperties;
}

export default function WatercolorSplash({
  position = { top: "10%", left: "10%" },
  width = 240,
  height = 180,
  opacity = 0.12,
  variant = "sage",
  className = "",
  style = {},
}: WatercolorSplashProps) {
  const getColor = () => {
    switch (variant) {
      case "olive":
        return "#7B8E67";
      case "cream":
        return "#ECD9B5";
      case "lavender":
        return "#A198AF";
      case "terracotta":
        return "#BA664A";
      case "rose":
        return "#C4867A";
      case "sage":
      default:
        return "#A3B599";
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        ...position,
        width,
        height,
        opacity,
        zIndex: 0,
        filter: "blur(24px)",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Overlapping highly organic asymmetrical watercolor bleed paths */}
        <path
          d="M 20 45 C 10 20, 45 5, 80 15 C 100 22, 115 50, 105 75 C 90 98, 55 90, 35 95 C 15 100, 5 70, 20 45 Z"
          fill={getColor()}
        />
        <path
          d="M 30 30 C 50 12, 75 10, 92 25 C 105 38, 100 68, 85 80 C 65 92, 45 78, 30 70 C 15 60, 10 48, 30 30 Z"
          fill={getColor()}
          opacity="0.5"
        />
        <path
          d="M 40 50 C 45 40, 65 42, 75 52 C 85 62, 80 80, 60 78 C 45 76, 35 60, 40 50 Z"
          fill={getColor()}
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
