"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingLeavesProps {
  count?: number;
  opacity?: number;
  className?: string;
}

export default function FloatingLeaves({
  count = 3,
  opacity = 0.15,
  className = "",
}: FloatingLeavesProps) {
  // Generate random trajectories for the leaves
  const leaves = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      xStart: Math.random() * 80 + 10, // % from left
      yStart: -20, // start off-screen
      xEnd: Math.random() * 50 - 25, // drift
      yEnd: 320, // drift down
      size: Math.random() * 12 + 8,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 6,
      rotateStart: Math.random() * 360,
      rotateEnd: Math.random() * 360 + 180,
    }));
  }, [count]);

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden ${className}`}
      style={{ opacity, zIndex: 1 }}
    >
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.xStart}%`,
            width: leaf.size,
            height: leaf.size * 1.5,
          }}
          initial={{
            y: leaf.yStart,
            rotate: leaf.rotateStart,
            opacity: 0,
          }}
          animate={{
            y: leaf.yEnd,
            x: leaf.xEnd,
            rotate: leaf.rotateEnd,
            opacity: [0, 1, 1, 0.8, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear" as const,
          }}
        >
          <svg viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2 Q2 12 10 28 C18 12 10 2 Z"
              fill="#5A6D56"
            />
            {/* Center vein */}
            <path d="M10 2 Q10 15 10 28" stroke="#465442" strokeWidth="0.5" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
