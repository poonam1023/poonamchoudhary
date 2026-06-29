"use client";

import React from "react";

interface SketchOverlayProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  width?: number | string;
  height?: number | string;
  opacity?: number;
  scale?: number;
  variant?: "leaf" | "butterfly" | "compass";
  className?: string;
  style?: React.CSSProperties;
}

export default function SketchOverlay({
  position = { bottom: "10%", left: "5%" },
  width = 160,
  height = 160,
  opacity = 0.04,
  scale = 1,
  variant = "leaf",
  className = "",
  style = {},
}: SketchOverlayProps) {
  const getSketchSVG = () => {
    switch (variant) {
      case "butterfly":
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke="#6E5A4E" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Center body */}
            <path d="M50 30 Q51 50 50 70 M50 30 C49 20 51 20 50 15" />
            {/* Left wings */}
            <path d="M50 40 C30 20 10 35 30 55 C40 65 48 55 50 50 Z" />
            <path d="M50 50 C40 55 25 55 32 70 C38 80 48 72 50 60 Z" />
            {/* Right wings */}
            <path d="M50 40 C70 20 90 35 70 55 C60 65 52 55 50 50 Z" />
            <path d="M50 50 C60 55 75 55 68 70 C62 80 52 72 50 60 Z" />
            {/* Fine sketch hatch marks */}
            <line x1="42" y1="42" x2="35" y2="48" />
            <line x1="44" y1="46" x2="38" y2="52" />
            <line x1="58" y1="42" x2="65" y2="48" />
            <line x1="56" y1="46" x2="62" y2="52" />
          </svg>
        );

      case "compass":
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke="#6E5A4E" strokeWidth="0.5" strokeLinecap="round">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="37" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="3" />
            {/* Compass points */}
            <path d="M50 10 L53 47 L50 50 L47 47 Z" fill="#6E5A4E" opacity="0.3" />
            <path d="M50 10 L47 47 L50 50 L53 47 Z" />
            <path d="M50 90 L53 53 L50 50 L47 53 Z" fill="#6E5A4E" opacity="0.3" />
            <path d="M50 90 L47 53 L50 50 L53 53 Z" />
            <path d="M90 50 L53 53 L50 50 L53 47 Z" fill="#6E5A4E" opacity="0.3" />
            <path d="M90 50 L53 47 L50 50 L53 53 Z" />
            <path d="M10 50 L47 53 L50 50 L47 47 Z" fill="#6E5A4E" opacity="0.3" />
            <path d="M10 50 L47 47 L50 50 L47 53 Z" />
            {/* Degree lines */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = i * 30;
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="14"
                  transform={`rotate(${angle} 50 50)`}
                  strokeDasharray="1 5"
                />
              );
            })}
          </svg>
        );

      case "leaf":
      default:
        return (
          <svg viewBox="0 0 100 120" fill="none" stroke="#6E5A4E" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round">
            {/* Sketched maple/grape leaf */}
            <path d="M50 110 L50 90 Q48 50 50 10" />
            {/* Left blade lobes */}
            <path d="M50 90 Q25 90 20 80 Q10 70 25 60 Q12 50 30 40 Q25 25 50 30" />
            {/* Right blade lobes */}
            <path d="M50 90 Q75 90 80 80 Q90 70 75 60 Q88 50 70 40 Q75 25 50 30" />
            {/* Veins */}
            <path d="M50 75 Q32 68 22 62 M50 75 Q68 68 78 62" />
            <path d="M50 55 Q35 48 26 40 M50 55 Q65 48 74 40" />
            <path d="M50 35 Q40 28 35 22 M50 35 Q60 28 65 22" />
            {/* Fine hatching */}
            <line x1="30" y1="65" x2="27" y2="70" />
            <line x1="33" y1="63" x2="30" y2="68" />
            <line x1="70" y1="65" x2="73" y2="70" />
            <line x1="67" y1="63" x2="70" y2="68" />
          </svg>
        );
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
        transform: `scale(${scale})`,
        zIndex: 0,
        ...style,
      }}
    >
      {getSketchSVG()}
    </div>
  );
}
