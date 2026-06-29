"use client";

import React from "react";

interface DecorativeMarginProps {
  side?: "left" | "right";
  variant?: "floral" | "lines" | "ornamental";
  opacity?: number;
  color?: string;
  className?: string;
}

export default function DecorativeMargin({
  side = "left",
  variant = "floral",
  opacity = 0.15,
  color = "#6E5A4E",
  className = "",
}: DecorativeMarginProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute top-0 bottom-0 w-8 pointer-events-none select-none ${className}`}
      style={{
        [isLeft ? "left" : "right"]: "8px",
        opacity,
        zIndex: 11,
      }}
    >
      {variant === "floral" && (
        <svg viewBox="0 0 30 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Vertical floral vine winding down the margin */}
          <path
            d="M15 10 Q18 100 12 200 T18 350 T15 490"
            stroke={color}
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          {/* Winding leaves */}
          {Array.from({ length: 12 }).map((_, i) => {
            const y = 30 + i * 40;
            const isLeafLeft = i % 2 === 0;
            return (
              <path
                key={i}
                d={`M15 ${y} Q${isLeafLeft ? "5" : "25"} ${y - 8} ${isLeafLeft ? "3" : "27"} ${y - 15} C${isLeafLeft ? "9" : "21"} ${y - 12} 15 ${y - 2} 15 ${y}`}
                fill={color}
              />
            );
          })}
        </svg>
      )}

      {variant === "lines" && (
        <div className="w-full h-full flex items-center justify-center gap-1">
          {/* Double vertical ruling lines */}
          <div className="w-[0.5px] h-full" style={{ backgroundColor: color }} />
          <div className="w-[0.75px] h-full" style={{ backgroundColor: color }} />
        </div>
      )}

      {variant === "ornamental" && (
        <svg viewBox="0 0 30 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Typographic ornament repeating down margin */}
          {Array.from({ length: 8 }).map((_, i) => {
            const y = 40 + i * 60;
            return (
              <g key={i} transform={`translate(5, ${y})`} stroke={color} strokeWidth="0.5">
                <circle cx="10" cy="10" r="2.5" fill="none" />
                <line x1="10" y1="0" x2="10" y2="20" />
                <path d="M5 10 Q10 15 15 10" />
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}
