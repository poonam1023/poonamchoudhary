"use client";

import React from "react";
import MaskingTape from "./MaskingTape";
import PaperTexture from "./PaperTexture";

interface PaperNoteProps {
  text: string;
  rotation?: number;
  paperColor?: "cream" | "sage" | "rose" | "tan";
  shadow?: boolean;
  torn?: boolean;
  tape?: boolean;
  pin?: boolean;
  width?: number | string;
  /** When true, renders inline (relative) instead of absolute-positioned */
  inline?: boolean;
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  className?: string;
  style?: React.CSSProperties;
}

export default function PaperNote({
  text,
  rotation = 3,
  paperColor = "cream",
  shadow = true,
  torn = true,
  tape = true,
  pin = false,
  width = 150,
  inline = false,
  position = { bottom: "8%", right: "12%" },
  className = "",
  style = {},
}: PaperNoteProps) {
  const clipPath = torn
    ? "polygon(2% 0%, 95% 3%, 98% 28%, 95% 62%, 99% 95%, 4% 98%, 0% 64%, 2% 31%)"
    : "none";

  const getBackgroundColor = () => {
    switch (paperColor) {
      case "sage":   return "#E2E7DF";
      case "rose":   return "#E8DFDB";
      case "tan":    return "#ECDCC4";
      case "cream":
      default:       return "#FAF7ED";
    }
  };

  const getTapeVariant = (): "washi-cream" | "washi-sage" | "washi-tan" | "washi-rose" => {
    switch (paperColor) {
      case "sage":  return "washi-sage";
      case "rose":  return "washi-rose";
      case "tan":   return "washi-tan";
      case "cream":
      default:      return "washi-cream";
    }
  };

  return (
    <div
      className={`${inline ? "relative" : "absolute"} p-4 select-none ${className}`}
      style={{
        ...(inline ? {} : position),
        width,
        background: getBackgroundColor(),
        border: "0.5px solid rgba(110,90,78,0.18)",
        transform: `rotate(${rotation}deg)`,
        clipPath,
        boxShadow: shadow ? "2px 5px 12px rgba(58,44,30,0.04), 0 2px 4px rgba(58,44,30,0.03)" : "none",
        zIndex: 22,
        ...style,
      }}
    >
      {/* Tape on top center if enabled */}
      {tape && !pin && (
        <MaskingTape
          variant={getTapeVariant()}
          rotation={-2}
          width={50}
          height={11}
          style={{ top: "-6px", left: "50%", transform: "translateX(-50%) rotate(-2deg)" }}
        />
      )}

      {/* Pin: simple SVG dot on top */}
      {pin && !tape && (
        <div
          className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          style={{ filter: "drop-shadow(1px 2px 2px rgba(58,44,30,0.10))" }}
        >
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
            <circle cx="6" cy="5" r="4" fill="#B38A58" stroke="#7A5A35" strokeWidth="0.6" />
            <circle cx="4.5" cy="3.5" r="1.2" fill="#fff" opacity={0.4} />
            <line x1="6" y1="9" x2="6.5" y2="16" stroke="rgba(58,44,30,0.20)" strokeWidth="0.8" />
          </svg>
        </div>
      )}

      {/* Texture overlays */}
      <PaperTexture variant={paperColor === "cream" ? "antique" : paperColor === "tan" ? "parchment" : paperColor} opacity={0.6} />

      {/* Text */}
      <p
        className="relative z-10 text-center italic leading-relaxed text-[11.5px] text-[#4A392F]"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {text}
      </p>
    </div>
  );
}
