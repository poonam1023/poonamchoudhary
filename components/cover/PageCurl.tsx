"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageCurlProps {
  isHovered: boolean;
  isOpening: boolean;
}

export default function PageCurl({ isHovered, isOpening }: PageCurlProps) {
  // Determine the current visual state
  let state = "normal";
  if (isOpening) {
    state = "opening";
  } else if (isHovered) {
    state = "hovered";
  }

  // Cutout triangle (showing the background color #2C221A)
  const cutoutPaths = {
    normal: "M 130 160 L 160 160 L 160 130 Z",
    hovered: "M 115 160 L 160 160 L 160 115 Z",
    opening: "M 90 160 L 160 160 L 160 90 Z",
  };

  // Curled paper flap (showing the page underside)
  const flapPaths = {
    normal: "M 130 160 Q 124 134 160 130 C 146 130 130 146 130 160 Z",
    hovered: "M 115 160 Q 106 116 160 115 C 138 115 115 138 115 160 Z",
    opening: "M 90 160 Q 78 88 160 90 C 128 90 90 128 90 160 Z",
  };

  // Shadow underneath the curl
  const shadowPaths = {
    normal: "M 130 160 Q 118 126 160 130 Z",
    hovered: "M 115 160 Q 98 104 160 115 Z",
    opening: "M 90 160 Q 68 76 160 90 Z",
  };

  return (
    <div className="absolute bottom-0 right-0 w-36 h-36 md:w-44 md:h-44 pointer-events-none select-none z-30 overflow-hidden">
      <svg
        className="w-full h-full translate-x-[0.5px] translate-y-[0.5px]"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 1. Cutout Triangle (Desk color underneath) */}
        <motion.path
          animate={{ d: cutoutPaths[state as keyof typeof cutoutPaths] }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          fill="#2C221A"
        />

        {/* 2. Soft Shadow under the fold */}
        <motion.path
          animate={{ d: shadowPaths[state as keyof typeof shadowPaths] }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          fill="rgba(44, 34, 26, 0.35)"
          className="blur-[4px]"
        />

        {/* 3. The Curled Flap */}
        <defs>
          <linearGradient id="curlGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#DCCBB3" />
            <stop offset="40%" stopColor="#EFE4D2" />
            <stop offset="100%" stopColor="#F8F3E8" />
          </linearGradient>
        </defs>

        <motion.path
          animate={{ d: flapPaths[state as keyof typeof flapPaths] }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          fill="url(#curlGrad)"
          stroke="#4A3B2A"
          strokeWidth="0.25"
          className="drop-shadow-sm"
        />
      </svg>
    </div>
  );
}
