"use client";

import React from "react";

interface PaperCornerDecorationProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  variant?: "brass" | "paper" | "ornate";
  scale?: number;
  opacity?: number;
  className?: string;
}

export default function PaperCornerDecoration({
  position = "top-left",
  variant = "paper",
  scale = 1,
  opacity = 0.8,
  className = "",
}: PaperCornerDecorationProps) {
  const getPositionStyles = () => {
    switch (position) {
      case "top-right":
        return { top: 12, right: 12, transform: "rotate(90deg)" };
      case "bottom-left":
        return { bottom: 12, left: 12, transform: "rotate(-90deg)" };
      case "bottom-right":
        return { bottom: 12, right: 12, transform: "rotate(180deg)" };
      case "top-left":
      default:
        return { top: 12, left: 12, transform: "rotate(0deg)" };
    }
  };

  const posStyle = getPositionStyles();

  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        ...posStyle,
        transform: `${posStyle.transform} scale(${scale})`,
        opacity,
        zIndex: 22,
      }}
    >
      {variant === "paper" && (
        // Vintage scrapbook photo corner
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L45 0 L0 45 Z"
            fill="#EAD8B2"
            style={{ filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.15))" }}
          />
          {/* Internal diagonal slit */}
          <path d="M5 5 L35 5 L5 35 Z" fill="#D3C19C" opacity="0.3" />
          <line x1="2" y1="2" x2="38" y2="38" stroke="#6E5A4E" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
        </svg>
      )}

      {variant === "brass" && (
        // Antique brass corner protector
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 H35 L33 5 L5 33 L0 35 Z"
            fill="url(#brassGradient)"
            stroke="#4A3B32"
            strokeWidth="0.75"
            style={{ filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.25))" }}
          />
          {/* Rivet head */}
          <circle cx="9" cy="9" r="2.5" fill="#5C4D3C" stroke="#2D231A" strokeWidth="0.5" />
          <circle cx="9.5" cy="8.5" r="0.75" fill="#FFF" opacity="0.4" />
          <defs>
            <linearGradient id="brassGradient" x1="0" y1="0" x2="35" y2="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C2A370" />
              <stop offset="40%" stopColor="#A38350" />
              <stop offset="70%" stopColor="#7E6032" />
              <stop offset="100%" stopColor="#523F20" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {variant === "ornate" && (
        // Fine Victorian filigree corner print
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 2 H58 C50 10 40 10 35 15 C30 20 30 30 15 35 C10 40 10 50 2 58 Z"
            stroke="#6E5A4E"
            strokeWidth="0.75"
            opacity="0.35"
          />
          <path
            d="M5 5 H45 C35 12 25 15 15 25 C15 35 12 35 5 45 Z"
            stroke="#6E5A4E"
            strokeWidth="0.5"
            opacity="0.25"
          />
          <circle cx="12" cy="12" r="3" stroke="#6E5A4E" strokeWidth="0.75" opacity="0.3" fill="none" />
        </svg>
      )}
    </div>
  );
}
