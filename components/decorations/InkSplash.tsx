"use client";

import React from "react";

interface InkSplashProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "splash" | "droplet" | "smudge";
  color?: string;
  className?: string;
}

export default function InkSplash({
  position = { top: "40%", left: "80%" },
  rotation = 45,
  scale = 1,
  opacity = 0.12,
  variant = "splash",
  color = "#5A4C40", // Ink brown
  className = "",
}: InkSplashProps) {
  const getSplashSVG = () => {
    switch (variant) {
      case "droplet":
        return (
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ink teardrop with small satellites */}
            <path
              d="M20 5 C22 15 28 18 28 25 C28 32 20 35 20 35 C20 35 12 32 12 25 C12 18 18 15 20 5 Z"
              fill={color}
            />
            <circle cx="28" cy="12" r="1.2" fill={color} />
            <circle cx="10" cy="22" r="0.8" fill={color} />
          </svg>
        );

      case "smudge":
        return (
          <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wiped, smudged ink finger stain */}
            <path
              d="M10 20 Q25 10 40 18 T55 22 C45 28 30 25 10 20 Z"
              fill={color}
              style={{ filter: "blur(2px)" }}
            />
            <path
              d="M18 18 C30 14 42 16 48 20"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.3"
              style={{ filter: "blur(1px)" }}
            />
          </svg>
        );

      case "splash":
      default:
        return (
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Splattered ink pool with spikes */}
            <path
              d="M40 30 C45 15 48 25 55 22 C62 19 56 32 62 35 C68 38 72 45 64 47 C56 49 58 58 52 56 C46 54 44 65 38 60 C32 55 25 58 24 50 C23 42 12 40 18 36 C24 32 28 22 32 26 C36 30 35 45 40 30 Z"
              fill={color}
            />
            {/* Spattered dots around */}
            <circle cx="68" cy="25" r="1.5" fill={color} />
            <circle cx="58" cy="15" r="1" fill={color} />
            <circle cx="22" cy="20" r="1.2" fill={color} />
            <circle cx="15" cy="52" r="1.8" fill={color} />
            <circle cx="30" cy="68" r="1.2" fill={color} />
            <circle cx="50" cy="65" r="0.8" fill={color} />
          </svg>
        );
    }
  };

  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...position,
        width: 60 * scale,
        height: 60 * scale,
        transform: `rotate(${rotation}deg)`,
        opacity,
        zIndex: 2,
      }}
    >
      {getSplashSVG()}
    </div>
  );
}
