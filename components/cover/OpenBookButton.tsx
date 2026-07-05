"use client";

import React from "react";
import { motion } from "framer-motion";

interface OpenBookButtonProps {
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}

/**
 * OpenBookButton — Minimal gold foil CTA on clothbound cover.
 *
 * No paper card, no wax seal, no torn edges.
 * Just elegant floating typography that belongs on a premium hardcover.
 * Inspired by Assouline invitation design.
 */
function OpenBookButton({ onHoverStart, onHoverEnd, onClick }: OpenBookButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      className="group relative cursor-pointer focus:outline-none select-none z-20 flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
      whileHover={{ y: -2 }}
      aria-label="Begin Reading"
    >
      {/* Small gold fleuron ornament */}
      <motion.div
        className="opacity-60 group-hover:opacity-90 transition-opacity duration-700"
        style={{ color: "#C8A56A" }}
      >
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simple 4-petal fleuron */}
          <path d="M10 2 Q12 6 10 10 Q8 6 10 2Z" fill="#C8A56A" opacity="0.8"/>
          <path d="M18 10 Q14 12 10 10 Q14 8 18 10Z" fill="#C8A56A" opacity="0.8"/>
          <path d="M10 18 Q8 14 10 10 Q12 14 10 18Z" fill="#C8A56A" opacity="0.8"/>
          <path d="M2 10 Q6 8 10 10 Q6 12 2 10Z" fill="#C8A56A" opacity="0.8"/>
          <circle cx="10" cy="10" r="1.5" fill="#C8A56A" opacity="0.6"/>
        </svg>
      </motion.div>

      {/* Main CTA text */}
      <span
        className="font-display transition-all duration-700"
        style={{
          fontStyle: "italic",
          fontSize: "clamp(0.75rem, 1.4vw, 1.0rem)",
          letterSpacing: "0.10em",
          color: "#C8A56A",
          textShadow:
            "0.4px 0.4px 0px rgba(240,215,160,0.60), " +
            "-0.4px -0.4px 0px rgba(80,60,20,0.35), " +
            "0.8px 1.5px 3px rgba(30,20,8,0.20)",
        }}
      >
        Begin Reading
      </span>

      {/* Thin dashed gold separator line */}
      <div
        className="transition-all duration-700 group-hover:w-10"
        style={{
          width: "24px",
          height: "0.5px",
          background: "rgba(200, 165, 106, 0.50)",
        }}
      />

      {/* Ultra-small invitation subtext */}
      <span
        className="font-sans uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          fontSize: "clamp(0.34rem, 0.6vw, 0.45rem)",
          letterSpacing: "0.26em",
          color: "rgba(200, 165, 106, 0.50)",
        }}
      >
        Open Cover
      </span>
    </motion.button>
  );
}

export default React.memo(OpenBookButton);
