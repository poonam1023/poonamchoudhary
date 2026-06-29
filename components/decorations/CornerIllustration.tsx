"use client";

import React from "react";

interface CornerIllustrationProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  scale?: number;
  opacity?: number;
  className?: string;
}

export default function CornerIllustration({
  position = "top-left",
  scale = 1,
  opacity = 0.08,
  className = "",
}: CornerIllustrationProps) {
  const getRotation = () => {
    switch (position) {
      case "top-right":
        return "rotate(90deg)";
      case "bottom-right":
        return "rotate(180deg)";
      case "bottom-left":
        return "rotate(270deg)";
      case "top-left":
      default:
        return "rotate(0deg)";
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case "top-right":
        return { top: "10px", right: "10px" };
      case "bottom-right":
        return { bottom: "10px", right: "10px" };
      case "bottom-left":
        return { bottom: "10px", left: "10px" };
      case "top-left":
      default:
        return { top: "10px", left: "10px" };
    }
  };

  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...getPositionStyles(),
        transform: `${getRotation()} scale(${scale})`,
        opacity,
        zIndex: 2,
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#6E5A4E" strokeWidth="0.5" strokeLinecap="round">
        {/* Sketchy botanical branches emerging from corner corner */}
        <path d="M0 0 C15 15 30 20 48 24" />
        <path d="M0 0 C10 20 20 30 24 48" />
        {/* Tiny leaves */}
        <path d="M12 12 Q20 8 24 14 C18 16 14 14 12 12 Z" />
        <path d="M15 28 Q24 26 28 20 C22 22 18 26 15 28 Z" />
        <path d="M28 15 Q26 24 20 28 C22 22 26 18 28 15 Z" />
        <path d="M34 20 Q40 18 42 22 Q38 24 34 20" />
        <path d="M20 34 Q18 40 22 42 Q24 38 20 34" />
      </svg>
    </div>
  );
}
