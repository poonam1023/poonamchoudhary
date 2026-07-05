"use client";

import React from "react";
import { motion } from "framer-motion";

interface PressedFlowerProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "pansy" | "fern-leaf" | "wildflower" | "babys-breath" | "eucalyptus";
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

      case "babys-breath":
        return (
          // Delicate baby's breath — airy, cloud-like cluster of tiny white blooms
          // Stems branch outward in a naturalistic spray
          <svg viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main stem */}
            <path d="M90 255 Q88 200 86 155 Q84 105 90 60" stroke="#6B7A5E" strokeWidth="0.9" strokeLinecap="round" />

            {/* Branch stems */}
            <path d="M88 175 Q60 155 30 140" stroke="#6B7A5E" strokeWidth="0.65" strokeLinecap="round" />
            <path d="M88 160 Q115 140 145 128" stroke="#6B7A5E" strokeWidth="0.65" strokeLinecap="round" />
            <path d="M88 140 Q55 118 25 100" stroke="#6B7A5E" strokeWidth="0.55" strokeLinecap="round" />
            <path d="M88 125 Q120 105 150 90" stroke="#6B7A5E" strokeWidth="0.55" strokeLinecap="round" />
            <path d="M89 105 Q65 85 42 68" stroke="#6B7A5E" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M89 90 Q112 70 135 56" stroke="#6B7A5E" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M90 75 Q78 55 65 38" stroke="#6B7A5E" strokeWidth="0.45" strokeLinecap="round" />
            <path d="M90 70 Q102 50 118 36" stroke="#6B7A5E" strokeWidth="0.45" strokeLinecap="round" />

            {/* Tiny blooms — clusters of 3-5 dots at branch tips */}
            {/* Cluster at far left */}
            <circle cx="30" cy="140" r="2.2" fill="#E8E0D0" opacity="0.85" />
            <circle cx="25" cy="137" r="1.8" fill="#DDD5C4" opacity="0.78" />
            <circle cx="32" cy="135" r="1.5" fill="#EAE2D2" opacity="0.80" />

            {/* Cluster mid-left */}
            <circle cx="42" cy="68" r="2.0" fill="#E2D9C8" opacity="0.82" />
            <circle cx="38" cy="64" r="1.6" fill="#DDD5C4" opacity="0.75" />
            <circle cx="45" cy="63" r="1.4" fill="#E8E0D0" opacity="0.78" />

            {/* Cluster far right top */}
            <circle cx="145" cy="128" r="2.0" fill="#E8E0D0" opacity="0.82" />
            <circle cx="149" cy="124" r="1.6" fill="#DDD5C4" opacity="0.75" />
            <circle cx="143" cy="123" r="1.4" fill="#EAE2D2" opacity="0.78" />

            {/* Cluster mid right */}
            <circle cx="135" cy="56" r="2.0" fill="#E2D9C8" opacity="0.80" />
            <circle cx="139" cy="52" r="1.5" fill="#DDD5C4" opacity="0.72" />
            <circle cx="133" cy="51" r="1.4" fill="#EAE2D2" opacity="0.75" />

            {/* Upper left cluster */}
            <circle cx="65" cy="38" r="1.8" fill="#E8E0D0" opacity="0.80" />
            <circle cx="61" cy="35" r="1.4" fill="#DDD5C4" opacity="0.72" />
            <circle cx="67" cy="33" r="1.2" fill="#EAE2D2" opacity="0.75" />

            {/* Upper right cluster */}
            <circle cx="118" cy="36" r="1.8" fill="#E2D9C8" opacity="0.80" />
            <circle cx="122" cy="32" r="1.4" fill="#DDD5C4" opacity="0.72" />
            <circle cx="116" cy="31" r="1.2" fill="#EAE2D2" opacity="0.75" />

            {/* More scattered blooms for density */}
            <circle cx="25" cy="100" r="1.8" fill="#E8E0D0" opacity="0.75" />
            <circle cx="150" cy="90" r="1.8" fill="#E2D9C8" opacity="0.75" />
            <circle cx="55" cy="118" r="1.6" fill="#DDD5C4" opacity="0.70" />
            <circle cx="120" cy="105" r="1.6" fill="#EAE2D2" opacity="0.70" />

            {/* Delicate tiny leaf accents at branch forks */}
            <path d="M88 155 Q78 148 72 142" stroke="#7A8A6E" strokeWidth="0.4" opacity="0.6" />
            <path d="M88 140 Q82 132 78 126" stroke="#7A8A6E" strokeWidth="0.4" opacity="0.6" />
          </svg>
        );

      case "eucalyptus":
        return (
          // Elegant pressed eucalyptus — silvery-green round leaves on arching stem
          <svg viewBox="0 0 140 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Arching main stem */}
            <path
              d="M70 295 Q65 230 62 170 Q58 110 70 50 Q76 25 85 5"
              stroke="#7A8E7A"
              strokeWidth="1.0"
              strokeLinecap="round"
            />

            {/* Eucalyptus leaves — round, silvery, alternating on stem */}
            {/* Lower leaves */}
            <ellipse cx="52" cy="248" rx="14" ry="9" fill="#A0B09A" opacity="0.55" transform="rotate(-30 52 248)" />
            <ellipse cx="82" cy="235" rx="13" ry="8.5" fill="#90A090" opacity="0.52" transform="rotate(25 82 235)" />

            <ellipse cx="50" cy="208" rx="13" ry="8.5" fill="#A0B09A" opacity="0.55" transform="rotate(-35 50 208)" />
            <ellipse cx="80" cy="194" rx="12" ry="8" fill="#90A090" opacity="0.52" transform="rotate(28 80 194)" />

            <ellipse cx="48" cy="168" rx="13" ry="8" fill="#A0B09A" opacity="0.55" transform="rotate(-32 48 168)" />
            <ellipse cx="78" cy="155" rx="12" ry="7.5" fill="#90A090" opacity="0.52" transform="rotate(22 78 155)" />

            {/* Mid leaves */}
            <ellipse cx="50" cy="128" rx="12" ry="7.5" fill="#A0B09A" opacity="0.50" transform="rotate(-28 50 128)" />
            <ellipse cx="76" cy="115" rx="11" ry="7" fill="#90A090" opacity="0.48" transform="rotate(20 76 115)" />

            <ellipse cx="52" cy="90" rx="11" ry="7" fill="#A0B09A" opacity="0.48" transform="rotate(-25 52 90)" />
            <ellipse cx="74" cy="77" rx="10" ry="6.5" fill="#90A090" opacity="0.45" transform="rotate(18 74 77)" />

            {/* Upper leaves — more slender */}
            <ellipse cx="56" cy="55" rx="9" ry="5.5" fill="#A0B09A" opacity="0.42" transform="rotate(-22 56 55)" />
            <ellipse cx="76" cy="43" rx="8" ry="5" fill="#90A090" opacity="0.40" transform="rotate(15 76 43)" />
            <ellipse cx="62" cy="25" rx="7" ry="4.5" fill="#A0B09A" opacity="0.36" transform="rotate(-18 62 25)" />

            {/* Subtle midrib lines on larger leaves */}
            <path d="M44 244 Q52 248 60 244" stroke="#6A7A6A" strokeWidth="0.4" opacity="0.5" />
            <path d="M44 204 Q50 208 56 204" stroke="#6A7A6A" strokeWidth="0.4" opacity="0.5" />
            <path d="M43 164 Q49 168 55 164" stroke="#6A7A6A" strokeWidth="0.4" opacity="0.5" />
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
        filter: "drop-shadow(1px 3px 4px rgba(80,70,58,0.14))",
        ...style,
      }}
      {...animateConfig}
    >
      {getFlowerSVG()}
    </motion.div>
  );
}

export default React.memo(PressedFlower);
