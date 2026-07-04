"use client";

import React from "react";
import { motion } from "framer-motion";

interface BotanicalIllustrationProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "fern" | "olive" | "lavender" | "branch";
  animation?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function BotanicalIllustration({
  position = { top: "10%", right: "5%" },
  rotation = 0,
  scale = 1,
  opacity = 0.12,
  variant = "olive",
  animation = false,
  className = "",
  style = {},
}: BotanicalIllustrationProps) {
  // Gentle wind sway animation
  const animateConfig = animation
    ? {
        animate: {
          rotate: [rotation - 2, rotation + 2, rotation - 2],
        },
        transition: {
          duration: 6 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      }
    : {};

  const getBotanicalSVG = () => {
    switch (variant) {
      case "fern":
        return (
          <svg viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M80 250 Q75 180 72 120 Q68 50 82 10"
              stroke="#4E5E4A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Fern Fronds Left */}
            <path d="M74 190 Q40 180 15 155 C35 170 65 180 74 190 Z" fill="#5A6D56" />
            <path d="M73 160 Q35 150 12 125 C33 140 63 150 73 160 Z" fill="#5A6D56" />
            <path d="M72 130 Q36 120 15 95 C33 110 62 120 72 130 Z" fill="#5A6D56" />
            <path d="M72 100 Q40 90 20 68 C36 80 62 90 72 100 Z" fill="#5A6D56" />
            <path d="M73 75 Q45 65 28 45 C42 55 64 68 73 75 Z" fill="#5A6D56" />
            <path d="M75 52 Q50 45 35 28 C48 38 66 46 75 52 Z" fill="#5A6D56" />

            {/* Fern Fronds Right */}
            <path d="M76 195 Q110 185 135 160 C115 175 85 185 76 195 Z" fill="#5A6D56" />
            <path d="M75 165 Q113 155 138 130 C117 145 87 155 75 165 Z" fill="#5A6D56" />
            <path d="M74 135 Q112 125 133 100 C115 115 86 125 74 135 Z" fill="#5A6D56" />
            <path d="M74 105 Q108 95 128 73 C112 85 86 95 74 105 Z" fill="#5A6D56" />
            <path d="M75 80 Q103 70 120 50 C106 60 84 73 75 80 Z" fill="#5A6D56" />
            <path d="M77 55 Q102 48 117 31 C104 41 86 49 77 55 Z" fill="#5A6D56" />

            {/* Lower Stem Details */}
            <path d="M78 220 Q60 215 45 200 C58 208 72 215 78 220 Z" fill="#4E5E4A" />
            <path d="M79 225 Q98 220 113 205 C100 213 86 220 79 225 Z" fill="#4E5E4A" />
          </svg>
        );

      case "lavender":
        return (
          <svg viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Lavender stalk */}
            <path d="M50 230 C49 170 48 100 50 30" stroke="#5D6D53" strokeWidth="1" />

            {/* Lavender flower buds (alternating clusters of dots) */}
            {/* Lower cluster */}
            <ellipse cx="50" cy="110" rx="3.5" ry="5.5" fill="#7D748E" opacity="0.8" />
            <ellipse cx="44" cy="112" rx="4" ry="2.5" fill="#695D7D" opacity="0.8" />
            <ellipse cx="56" cy="108" rx="4" ry="2.5" fill="#695D7D" opacity="0.8" />

            {/* Mid-lower cluster */}
            <ellipse cx="50" cy="95" rx="3.5" ry="5.5" fill="#7D748E" opacity="0.8" />
            <ellipse cx="43" cy="97" rx="4" ry="2.5" fill="#887E9C" opacity="0.8" />
            <ellipse cx="57" cy="93" rx="4" ry="2.5" fill="#695D7D" opacity="0.8" />
            <circle cx="50" cy="90" r="2.5" fill="#887E9C" />

            {/* Mid cluster */}
            <ellipse cx="50" cy="78" rx="3.5" ry="5.5" fill="#7D748E" opacity="0.9" />
            <ellipse cx="44" cy="80" rx="4" ry="2.5" fill="#887E9C" opacity="0.9" />
            <ellipse cx="56" cy="76" rx="4" ry="2.5" fill="#998EAE" opacity="0.9" />

            {/* Upper cluster */}
            <ellipse cx="50" cy="62" rx="3" ry="5" fill="#887E9C" />
            <ellipse cx="45" cy="63" rx="3.5" ry="2" fill="#998EAE" />
            <ellipse cx="55" cy="61" rx="3.5" ry="2" fill="#887E9C" />
            <circle cx="50" cy="56" r="2" fill="#998EAE" />

            {/* Top tip */}
            <circle cx="50" cy="45" r="2" fill="#998EAE" />
            <circle cx="50" cy="38" r="1.5" fill="#A89EBE" />

            {/* Leaves */}
            <path d="M49 160 Q30 148 20 120 C32 135 45 150 49 160 Z" fill="#5D6D53" />
            <path d="M51 175 Q70 162 80 135 C68 150 55 165 51 175 Z" fill="#5D6D53" />
            <path d="M49 195 Q35 190 25 170 C35 180 45 190 49 195 Z" fill="#5D6D53" />
          </svg>
        );

      case "branch":
        return (
          <svg viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 210 Q40 160 55 110 Q70 60 95 15" stroke="#6D5A4E" strokeWidth="1.2" />
            {/* Simple sketchy leaves */}
            <path d="M42 145 Q20 140 10 125 C22 130 38 140 42 145 Z" fill="#6A7A60" opacity="0.75" />
            <path d="M46 135 Q65 125 78 115 C62 125 50 132 46 135 Z" fill="#6A7A60" opacity="0.75" />
            <path d="M57 100 Q40 90 28 72 C42 85 52 95 57 100 Z" fill="#6A7A60" opacity="0.75" />
            <path d="M62 90 Q80 80 92 68 C78 78 68 85 62 90 Z" fill="#6A7A60" opacity="0.75" />
            <path d="M72 58 Q55 52 48 38 C60 46 68 53 72 58 Z" fill="#6A7A60" opacity="0.75" />
            <path d="M78 48 Q94 38 102 24 C88 34 82 42 78 48 Z" fill="#6A7A60" opacity="0.75" />
          </svg>
        );

      case "olive":
      default:
        return (
          <svg viewBox="0 0 140 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main stem */}
            <path
              d="M70 230 C68 180 62 120 74 35"
              stroke="#5C6652"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Alternating detailed olive leaves */}
            {/* Leaf 1 Left */}
            <path d="M68 185 Q35 180 18 158 C38 165 58 175 68 185 Z" fill="#6A7A5F" />
            <path d="M68 185 Q35 180 18 158 C38 165 58 175 68 185 Z" stroke="#4B5441" strokeWidth="0.5" />
            {/* Leaf 1 Right */}
            <path d="M69 165 Q102 160 119 138 C99 145 79 155 69 165 Z" fill="#738367" />
            <path d="M69 165 Q102 160 119 138 C99 145 79 155 69 165 Z" stroke="#4B5441" strokeWidth="0.5" />

            {/* Leaf 2 Left */}
            <path d="M67 135 Q40 125 25 105 C42 112 59 122 67 135 Z" fill="#6A7A5F" />
            <path d="M67 135 Q40 125 25 105 C42 112 59 122 67 135 Z" stroke="#4B5441" strokeWidth="0.5" />
            {/* Leaf 2 Right */}
            <path d="M68 115 Q95 105 110 85 C93 92 76 102 68 115 Z" fill="#738367" />
            <path d="M68 115 Q95 105 110 85 C93 92 76 102 68 115 Z" stroke="#4B5441" strokeWidth="0.5" />

            {/* Leaf 3 Left */}
            <path d="M70 85 Q48 75 35 55 C50 63 64 73 70 85 Z" fill="#6A7A5F" />
            {/* Leaf 3 Right */}
            <path d="M71 70 Q93 60 105 40 C90 48 78 58 71 70 Z" fill="#738367" />

            {/* Olive Fruit */}
            <ellipse cx="50" cy="150" rx="4.5" ry="6.5" fill="#423E2A" transform="rotate(-15 50 150)" />
            <circle cx="48.5" cy="147.5" r="1" fill="#FFF" opacity="0.3" />
            <path d="M58 143 Q54 148 50 150" stroke="#5C6652" strokeWidth="0.75" />

            {/* Olive Fruit 2 */}
            <ellipse cx="88" cy="98" rx="4" ry="6" fill="#423E2A" transform="rotate(20 88 98)" />
            <path d="M78 98 Q83 98 88 98" stroke="#5C6652" strokeWidth="0.75" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        ...position,
        width: 140 * scale,
        height: 240 * scale,
        opacity,
        zIndex: 1,
        ...style,
      }}
      {...animateConfig}
    >
      {getBotanicalSVG()}
    </motion.div>
  );
}

export default React.memo(BotanicalIllustration);
