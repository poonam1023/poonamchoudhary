"use client";

import React from "react";

interface CornerOrnamentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  scale?: number;
  opacity?: number;
  color?: string;
  className?: string;
}

export default function CornerOrnament({
  position = "top-left",
  scale = 1,
  opacity = 0.25,
  color = "#6E5A4E",
  className = "",
}: CornerOrnamentProps) {
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
        return { top: "12px", right: "12px" };
      case "bottom-right":
        return { bottom: "12px", right: "12px" };
      case "bottom-left":
        return { bottom: "12px", left: "12px" };
      case "top-left":
      default:
        return { top: "12px", left: "12px" };
    }
  };

  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...getPositionStyles(),
        transform: `${getRotation()} scale(${scale})`,
        opacity,
        zIndex: 12,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Beautiful floral corner accent lines */}
        <path
          d="M2 38 V2 H38"
          stroke={color}
          strokeWidth="0.75"
          strokeLinecap="round"
        />
        <path
          d="M6 34 V6 H34"
          stroke={color}
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        {/* Swirling vine */}
        <path
          d="M6 6 Q16 16 16 26"
          stroke={color}
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="26" r="1.5" fill={color} />
        {/* Small leaves */}
        <path d="M10 10 Q14 7 17 8 C14 11 11 12 10 10 Z" fill={color} />
        <path d="M12 18 Q16 17 17 14 C14 15 13 18 12 18 Z" fill={color} />
      </svg>
    </div>
  );
}
