"use client";

import React from "react";

interface MaskingTapeProps {
  rotation?: number; // degrees
  width?: number | string;
  height?: number | string;
  opacity?: number;
  variant?: "washi-cream" | "washi-sage" | "washi-tan" | "washi-rose";
  className?: string;
  style?: React.CSSProperties;
}

export default function MaskingTape({
  rotation = -3,
  width = 75,
  height = 18,
  opacity = 0.65,
  variant = "washi-cream",
  className = "",
  style = {},
}: MaskingTapeProps) {
  const getColors = () => {
    switch (variant) {
      case "washi-sage":
        return { bg: "rgba(158,168,144,0.55)", fiber: "rgba(110,120,95,0.15)" };
      case "washi-tan":
        return { bg: "rgba(210,188,155,0.6)", fiber: "rgba(140,118,85,0.18)" };
      case "washi-rose":
        return { bg: "rgba(215,190,180,0.6)", fiber: "rgba(150,120,110,0.15)" };
      case "washi-cream":
      default:
        return { bg: "rgba(242,230,205,0.55)", fiber: "rgba(180,165,135,0.15)" };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
        opacity,
        background: colors.bg,
        boxShadow: "0 1px 2px rgba(0,0,0,0.06), inset 0 0 2px rgba(255,255,255,0.2)",
        // Jagged tape tear via CSS clipPath
        clipPath: "polygon(1% 0%, 99% 1%, 100% 30%, 99% 70%, 100% 100%, 98% 99%, 2% 100%, 0% 85%, 2% 50%, 0% 15%)",
        position: "absolute",
        zIndex: 25,
        ...style,
      }}
    >
      {/* Tape Paper Fiber Weave */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, ${colors.fiber} 0px, ${colors.fiber} 1px, transparent 1px, transparent 4px),
            repeating-linear-gradient(-45deg, ${colors.fiber} 0px, ${colors.fiber} 1px, transparent 1px, transparent 4px)
          `,
        }}
      />
      {/* Torn Edge Details */}
      <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-white/20 blur-[0.5px]" />
      <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-white/20 blur-[0.5px]" />
    </div>
  );
}
