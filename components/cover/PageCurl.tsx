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

  // Cutout triangle (showing the background color #1A1412)
  const cutoutPaths = {
    normal: "M 132 160 L 160 160 L 160 132 Z",
    hovered: "M 127 160 L 160 160 L 160 127 Z",
    opening: "M 85 160 L 160 160 L 160 85 Z",
  };

  // Curled paper flap (showing the page underside)
  const flapPaths = {
    normal: "M 132 160 Q 126 136 160 132 C 148 132 132 148 132 160 Z",
    hovered: "M 127 160 Q 120 130 160 127 C 145 127 127 145 127 160 Z",
    opening: "M 85 160 Q 72 76 160 85 C 122 85 85 122 85 160 Z",
  };

  // Shadow underneath the curl
  const shadowPaths = {
    normal: "M 132 160 Q 120 128 160 132 Z",
    hovered: "M 127 160 Q 112 122 160 127 Z",
    opening: "M 85 160 Q 62 68 160 85 Z",
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
          fill="#1A1412"
        />

        {/* 2. Soft Ambient Shadow under the fold */}
        <motion.path
          animate={{ d: shadowPaths[state as keyof typeof shadowPaths] }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          fill="rgba(26, 20, 18, 0.55)"
          className="blur-[5px]"
        />

        {/* 3. Tighter, Darker Contact Shadow */}
        <motion.path
          animate={{ d: shadowPaths[state as keyof typeof shadowPaths] }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          fill="rgba(26, 20, 18, 0.35)"
          className="blur-[2px]"
        />

        {/* 4. The Curled Flap */}
        <defs>
          <linearGradient id="curlGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8DCCB" />
            <stop offset="35%" stopColor="#F2EAE0" />
            <stop offset="100%" stopColor="#F7F1E8" />
          </linearGradient>
        </defs>

        <motion.path
          animate={{ d: flapPaths[state as keyof typeof flapPaths] }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          fill="url(#curlGrad)"
          stroke="#6E5A4E"
          strokeWidth="0.3"
          className="drop-shadow-sm"
        />

        {/* 5. Paper edge highlight overlay (simulating cardboard thickness edge) */}
        <motion.path
          animate={{ d: flapPaths[state as keyof typeof flapPaths] }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="0.8"
          style={{ mixBlendMode: "overlay" }}
        />
      </svg>
    </div>
  );
}
