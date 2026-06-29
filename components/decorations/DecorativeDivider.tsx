"use client";

import React from "react";

interface DecorativeDividerProps {
  width?: number | string;
  variant?: "star-rule" | "diamond-dots" | "scroll" | "fleuron";
  opacity?: number;
  color?: string;
  className?: string;
}

export default function DecorativeDivider({
  width = "60%",
  variant = "star-rule",
  opacity = 0.25,
  color = "#6E5A4E",
  className = "",
}: DecorativeDividerProps) {
  const getDividerSVG = () => {
    switch (variant) {
      case "diamond-dots":
        return (
          <svg viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <circle cx="20" cy="5" r="1" fill={color} />
            <circle cx="35" cy="5" r="1.5" fill={color} />
            <path d="M50 1 L54 5 L50 9 L46 5 Z" fill={color} />
            <circle cx="65" cy="5" r="1.5" fill={color} />
            <circle cx="80" cy="5" r="1" fill={color} />
          </svg>
        );

      case "scroll":
        return (
          <svg viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Elegant calligraphic scroll ornament */}
            <path
              d="M10 8 Q30 2 50 8 T90 8 T130 8 T150 8"
              stroke={color}
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            <path
              d="M30 8 Q50 14 70 8 T110 8 T130 8"
              stroke={color}
              strokeWidth="0.5"
              strokeLinecap="round"
            />
            {/* Tiny leaves / flourishes */}
            <circle cx="80" cy="8" r="2.5" fill={color} />
            <circle cx="80" cy="8" r="1" fill="#FFF" />
          </svg>
        );

      case "fleuron":
        return (
          <svg viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Heart/Leaf shaped center fleuron (❦) */}
            <path
              d="M40 18 C37 14 32 10 32 6 C32 2 36 0 40 4 C44 0 48 2 48 6 C48 10 43 14 40 18 Z"
              fill={color}
            />
            <path
              d="M40 18 C40 12 43 9 46 9"
              stroke="#FFF"
              strokeWidth="0.5"
            />
            {/* Horizontal line scrolls */}
            <path d="M5 10 H28" stroke={color} strokeWidth="0.5" />
            <path d="M75 10 H52" stroke={color} strokeWidth="0.5" />
            <circle cx="28" cy="10" r="1" fill={color} />
            <circle cx="52" cy="10" r="1" fill={color} />
          </svg>
        );

      case "star-rule":
      default:
        return (
          <svg viewBox="0 0 140 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Thin rules with center star */}
            <line x1="0" y1="6" x2="55" y2="6" stroke={color} strokeWidth="0.4" />
            <path d="M70 1 L72.5 4.5 L76 5 L73.5 7.5 L74 11 L70 9 L66 11 L66.5 7.5 L64 5 L67.5 4.5 Z" fill={color} />
            <line x1="85" y1="6" x2="140" y2="6" stroke={color} strokeWidth="0.4" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`mx-auto select-none pointer-events-none ${className}`}
      style={{
        width,
        opacity,
      }}
    >
      {getDividerSVG()}
    </div>
  );
}
