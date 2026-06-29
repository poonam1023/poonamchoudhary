"use client";

import React from "react";

interface BotanicalDividerProps {
  width?: number | string;
  variant?: "vines" | "olives" | "leaves";
  opacity?: number;
  color?: string;
  className?: string;
}

export default function BotanicalDivider({
  width = "100%",
  variant = "leaves",
  opacity = 0.25,
  color = "#6E5A4E",
  className = "",
}: BotanicalDividerProps) {
  const getDividerSVG = () => {
    switch (variant) {
      case "vines":
        return (
          <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Elegant horizontal vine loop */}
            <path
              d="M10 10 Q50 4 100 10 T190 10"
              stroke={color}
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            {/* Vine leaves/scrolls */}
            <path d="M40 8 Q32 1 25 5 C32 8 38 9 40 8 Z" fill={color} />
            <path d="M70 12 Q78 19 85 15 C78 12 72 11 70 12 Z" fill={color} />
            <path d="M100 8 Q92 1 85 5 C92 8 98 9 100 8 Z" fill={color} />
            <path d="M130 12 Q138 19 145 15 C138 12 132 11 130 12 Z" fill={color} />
            <path d="M160 8 Q152 1 145 5 C152 8 158 9 160 8 Z" fill={color} />

            {/* Central bud */}
            <circle cx="100" cy="10" r="1.5" fill={color} />
            <path d="M96 10 Q100 5 104 10" stroke={color} strokeWidth="0.5" />
          </svg>
        );

      case "olives":
        return (
          <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Central spine */}
            <line x1="15" y1="10" x2="185" y2="10" stroke={color} strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="45" y1="10" x2="155" y2="10" stroke={color} strokeWidth="0.75" />

            {/* Olive leaves on branch */}
            <path d="M70 10 Q55 3 45 10 C55 17 70 10 70 10 Z" fill={color} />
            <path d="M130 10 Q145 3 155 10 C145 17 130 10 130 10 Z" fill={color} />

            <path d="M85 10 Q100 3 115 10 C100 17 85 10 85 10 Z" fill={color} />

            {/* Micro Olives */}
            <ellipse cx="78" cy="13" rx="2.5" ry="1.5" fill={color} transform="rotate(15 78 13)" />
            <ellipse cx="122" cy="7" rx="2.5" ry="1.5" fill={color} transform="rotate(-15 122 7)" />

            <circle cx="100" cy="10" r="2.5" fill="none" stroke={color} strokeWidth="0.75" />
            <circle cx="100" cy="10" r="0.75" fill={color} />
          </svg>
        );

      case "leaves":
      default:
        return (
          <svg viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Left branch */}
            <path d="M15 8 Q55 8 92 8" stroke={color} strokeWidth="0.75" strokeLinecap="round" />
            {/* Right branch */}
            <path d="M185 8 Q145 8 108 8" stroke={color} strokeWidth="0.75" strokeLinecap="round" />

            {/* Leaves pointing to center */}
            <path d="M40 8 C35 5 28 5 25 8 C28 11 35 11 40 8 Z" fill={color} />
            <path d="M65 8 C60 5 53 5 50 8 C53 11 60 11 65 8 Z" fill={color} />
            <path d="M90 8 C85 5 78 5 75 8 C78 11 85 11 90 8 Z" fill={color} />

            <path d="M160 8 C165 5 172 5 175 8 C172 11 165 11 160 8 Z" fill={color} />
            <path d="M135 8 C140 5 147 5 150 8 C147 11 140 11 135 8 Z" fill={color} />
            <path d="M110 8 C115 5 122 5 125 8 C122 11 115 11 110 8 Z" fill={color} />

            {/* Center diamond/flower */}
            <path d="M100 4 L104 8 L100 12 L96 8 Z" fill={color} />
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
