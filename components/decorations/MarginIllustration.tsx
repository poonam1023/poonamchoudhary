"use client";

import React from "react";

interface MarginIllustrationProps {
  side?: "left" | "right";
  variant?: "vine" | "quill" | "branch" | "feather";
  opacity?: number;
  scale?: number;
  className?: string;
  position?: { top?: number | string; bottom?: number | string; left?: number | string; right?: number | string };
}

export default function MarginIllustration({
  side = "left",
  variant = "vine",
  opacity = 0.06,
  scale = 1,
  className = "",
  position = { top: "10%" },
}: MarginIllustrationProps) {
  const isLeft = side === "left";

  const getSVG = () => {
    switch (variant) {
      case "quill":
        return (
          <svg viewBox="0 0 40 300" fill="none" stroke="#6E5A4E" strokeWidth="0.55" strokeLinecap="round">
            {/* Elegant quill feather drawing */}
            <path d="M20 280 C20 180 22 100 15 20" />
            {/* Feathery vanes */}
            {Array.from({ length: 24 }).map((_, i) => {
              const y = 30 + i * 10;
              return (
                <g key={i}>
                  <path d={`M 18 ${y} C 5 ${y - 12} 8 ${y - 20} 5 ${y - 25}`} />
                  <path d={`M 22 ${y} C 35 ${y - 12} 32 ${y - 20} 35 ${y - 25}`} />
                </g>
              );
            })}
          </svg>
        );

      case "branch":
        return (
          <svg viewBox="0 0 40 300" fill="none" stroke="#6E5A4E" strokeWidth="0.6" strokeLinecap="round">
            <path d="M15 290 Q25 200 20 100 T18 10" />
            {Array.from({ length: 8 }).map((_, i) => {
              const y = 40 + i * 32;
              const isSideLeft = i % 2 === 0;
              return (
                <path
                  key={i}
                  d={`M ${isSideLeft ? "20" : "19"} ${y} Q ${isSideLeft ? "5" : "35"} ${y - 10} ${isSideLeft ? "8" : "32"} ${y - 22}`}
                />
              );
            })}
          </svg>
        );

      case "feather":
        return (
          <svg viewBox="0 0 40 300" fill="none" stroke="#6E5A4E" strokeWidth="0.5" strokeLinecap="round">
            <path d="M20 290 C20 200 18 120 20 10" />
            {Array.from({ length: 15 }).map((_, i) => {
              const y = 20 + i * 18;
              return (
                <g key={i}>
                  <path d={`M19 ${y} Q5 ${y - 8} 8 ${y - 14}`} />
                  <path d={`M21 ${y} Q35 ${y - 8} 32 ${y - 14}`} />
                </g>
              );
            })}
          </svg>
        );

      case "vine":
      default:
        return (
          <svg viewBox="0 0 40 300" fill="none" stroke="#6E5A4E" strokeWidth="0.5" strokeLinecap="round">
            <path d="M20 10 Q12 70 24 140 T15 290" />
            {Array.from({ length: 10 }).map((_, i) => {
              const y = 25 + i * 26;
              const isSideLeft = i % 2 === 0;
              return (
                <path
                  key={i}
                  d={`M 20 ${y} Q ${isSideLeft ? "8" : "32"} ${y - 12} ${isSideLeft ? "10" : "30"} ${y - 18} C ${isSideLeft ? "16" : "24"} ${y - 15} 20 ${y}`}
                  fill="#6E5A4E"
                  fillOpacity="0.08"
                />
              );
            })}
          </svg>
        );
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        ...position,
        [isLeft ? "left" : "right"]: "8px",
        width: 32 * scale,
        height: 240 * scale,
        opacity,
        zIndex: 1,
      }}
    >
      {getSVG()}
    </div>
  );
}
