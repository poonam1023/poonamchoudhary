"use client";

import React from "react";
import { motion } from "framer-motion";

interface PressedFlowerProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "pansy" | "fern-leaf" | "wildflower";
  animation?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function PressedFlower({
  position = { bottom: "10%", left: "5%" },
  rotation = 12,
  scale = 1,
  opacity = 0.45,
  variant = "wildflower",
  animation = false,
  className = "",
  style = {},
}: PressedFlowerProps) {
  // Delicate breathing float for organic feel
  const animateConfig = animation
    ? {
        animate: {
          y: [0, -3, 0],
          rotate: [rotation - 1, rotation + 1, rotation - 1],
        },
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      }
    : {};

  const getFlowerSVG = () => {
    switch (variant) {
      case "pansy":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Dried, pressed stem */}
            <path d="M50 70 Q51 82 53 95" stroke="#483E34" strokeWidth="0.8" strokeLinecap="round" />

            {/* Back petals (translucent, faded purple/mauve) */}
            <path d="M50 45 C32 40 28 20 50 25 C72 20 68 40 50 45 Z" fill="#907D8B" opacity="0.6" />
            <path d="M50 45 C45 28 25 28 35 15 C45 2 55 18 50 45 Z" fill="#7C6B77" opacity="0.65" />
            <path d="M50 45 C55 28 75 28 65 15 C55 2 45 18 50 45 Z" fill="#7C6B77" opacity="0.65" />

            {/* Front petals (faded yellow/violet center) */}
            <path d="M50 45 C28 50 24 70 45 65 C66 70 72 50 50 45 Z" fill="#C2AB5E" opacity="0.75" />
            <path d="M50 45 C32 60 50 78 50 45 Z" fill="#5A3A54" opacity="0.8" />
            <path d="M50 45 C68 60 50 78 50 45 Z" fill="#5A3A54" opacity="0.8" />

            {/* Delicate veins (oxidized brown lines) */}
            <path d="M50 45 Q44 54 38 58" stroke="#3D291F" strokeWidth="0.3" opacity="0.6" />
            <path d="M50 45 Q56 54 62 58" stroke="#3D291F" strokeWidth="0.3" opacity="0.6" />
            <path d="M50 45 Q50 35 50 24" stroke="#3D291F" strokeWidth="0.3" opacity="0.5" />

            {/* Center dried seed head */}
            <circle cx="50" cy="45" r="3.5" fill="#4B3D2B" stroke="#635440" strokeWidth="0.5" />
          </svg>
        );

      case "fern-leaf":
        return (
          <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Flattened frond leaf */}
            <path d="M40 110 Q38 60 40 10" stroke="#48543B" strokeWidth="0.8" />
            {/* Pressed leaflets (alternating, translucent olive/brown) */}
            <path d="M39 90 Q22 86 10 75 C20 80 32 86 39 90 Z" fill="#5D6A50" opacity="0.7" />
            <path d="M41 95 Q58 91 70 80 C60 85 48 91 41 95 Z" fill="#546247" opacity="0.7" />

            <path d="M39 70 Q20 66 8 55 C19 60 32 66 39 70 Z" fill="#5D6A50" opacity="0.7" />
            <path d="M41 75 Q58 71 70 60 C60 65 48 71 41 75 Z" fill="#546247" opacity="0.7" />

            <path d="M39 50 Q20 46 8 35 C19 40 32 46 39 50 Z" fill="#5D6A50" opacity="0.7" />
            <path d="M41 55 Q58 51 70 40 C60 45 48 51 41 55 Z" fill="#546247" opacity="0.7" />

            <path d="M40 30 Q24 26 14 15 C22 20 34 26 40 30 Z" fill="#5D6A50" opacity="0.6" />
            <path d="M40 33 Q56 29 66 18 C58 23 48 29 40 33 Z" fill="#546247" opacity="0.6" />
          </svg>
        );

      case "wildflower":
      default:
        return (
          <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stem */}
            <path d="M40 60 L40 115" stroke="#524436" strokeWidth="0.8" strokeLinecap="round" />

            {/* Dried, flattened leaves */}
            <path d="M40 85 Q25 80 18 70 Q30 78 40 85 Z" fill="#535A43" opacity="0.65" />
            <path d="M40 95 Q55 90 62 80 Q50 88 40 95 Z" fill="#4B523A" opacity="0.65" />

            {/* Golden wildflower head (translucent paper look) */}
            {/* Outer Petals */}
            <circle cx="40" cy="50" r="14" fill="#C4A35A" opacity="0.4" />

            {/* Individual petals */}
            <path d="M40 50 C24 50 20 40 40 50 Z" fill="#DDBB70" opacity="0.75" />
            <path d="M40 50 C56 50 60 60 40 50 Z" fill="#DDBB70" opacity="0.75" />
            <path d="M40 50 C40 34 30 30 40 50 Z" fill="#C4A35A" opacity="0.8" />
            <path d="M40 50 C40 66 50 70 40 50 Z" fill="#C4A35A" opacity="0.8" />
            <path d="M40 50 C28 38 32 30 40 50 Z" fill="#DDBB70" opacity="0.7" />
            <path d="M40 50 C52 62 48 70 40 50 Z" fill="#DDBB70" opacity="0.7" />

            {/* Dried center pistil */}
            <circle cx="40" cy="50" r="4.5" fill="#3D3224" />
            <circle cx="39" cy="49" r="1.5" fill="#5F4F3D" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        ...position,
        width: 80 * scale,
        height: 120 * scale,
        opacity,
        zIndex: 21,
        filter: "drop-shadow(1px 2px 2px rgba(110,90,78,0.12))",
        ...style,
      }}
      {...animateConfig}
    >
      {getFlowerSVG()}
    </motion.div>
  );
}

export default React.memo(PressedFlower);
