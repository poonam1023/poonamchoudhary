"use client";

import React from "react";

interface BotanicalSketchProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "fern" | "rose-branch" | "wild-grass" | "leaf-pair";
  className?: string;
}

export default function BotanicalSketch({
  position = { top: "10%", left: "10%" },
  rotation = 0,
  scale = 1,
  opacity = 0.05,
  variant = "fern",
  className = "",
}: BotanicalSketchProps) {
  const getSketchSVG = () => {
    switch (variant) {
      case "rose-branch":
        return (
          <svg viewBox="0 0 120 220" fill="none" stroke="#6E5A4E" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
            {/* Thorny stem */}
            <path d="M40 210 Q45 150 50 90 T70 15" />
            <path d="M43 175 L38 178" />
            <path d="M45 145 L41 149" />
            <path d="M47 115 L43 118" />
            {/* Leaves and sketches */}
            <path d="M47 130 C30 115 15 130 35 145 Z" />
            <path d="M52 105 C75 90 90 105 70 120 Z" fill="none" />
            {/* Leaf veins */}
            <path d="M41 135 Q30 130 26 138" />
            <path d="M60 110 Q72 105 76 112" />
            {/* Top rose bud */}
            <path d="M70 15 C62 25 58 40 70 45 C82 40 78 25 70 15 Z" />
            <path d="M66 25 Q70 35 74 25" />
          </svg>
        );

      case "wild-grass":
        return (
          <svg viewBox="0 0 100 240" fill="none" stroke="#6E5A4E" strokeWidth="0.5" strokeLinecap="round">
            <path d="M50 230 C45 170 30 100 60 20" />
            <path d="M50 230 C55 180 70 120 40 40" />
            <path d="M50 230 C42 195 20 140 30 65" />
            <path d="M52 195 C68 165 80 130 70 90" />
          </svg>
        );

      case "leaf-pair":
        return (
          <svg viewBox="0 0 120 120" fill="none" stroke="#6E5A4E" strokeWidth="0.6" strokeLinecap="round">
            <path d="M10 110 C40 80 70 70 110 60" />
            <path d="M50 88 C40 60 55 45 75 62 Z" />
            <path d="M75 78 C80 50 95 35 105 52 Z" />
            {/* Internal veins */}
            <path d="M50 88 Q56 70 75 62" />
            <path d="M75 78 Q84 60 105 52" />
          </svg>
        );

      case "fern":
      default:
        return (
          <svg viewBox="0 0 140 260" fill="none" stroke="#6E5A4E" strokeWidth="0.55" strokeLinecap="round" strokeLinejoin="round">
            {/* Central stalk */}
            <path d="M70 250 Q66 170 60 100 T75 10" />
            {/* Faint frond lines */}
            {Array.from({ length: 9 }).map((_, i) => {
              const y = 30 + i * 22;
              const isLeft = i % 2 === 0;
              const xStart = isLeft ? 63 : 67;
              const xEnd = isLeft ? 20 : 120;
              return (
                <g key={i}>
                  <path d={`M ${xStart} ${y} Q ${isLeft ? 40 : 100} ${y - 12} ${xEnd} ${y - 4}`} />
                  <path d={`M ${isLeft ? 45 : 95} ${y - 8} Q ${isLeft ? 35 : 105} ${y - 20} ${isLeft ? 30 : 110} ${y - 16}`} />
                </g>
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
        width: 120 * scale,
        height: 220 * scale,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity,
        zIndex: 1,
      }}
    >
      {getSketchSVG()}
    </div>
  );
}
