"use client";

import React from "react";
import PaperTexture from "./PaperTexture";

interface PageStampProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "botanical" | "portrait" | "crest";
  className?: string;
  style?: React.CSSProperties;
}

export default function PageStamp({
  position = { top: "15%", left: "10%" },
  rotation = 6,
  scale = 1,
  opacity = 0.8,
  variant = "botanical",
  className = "",
  style = {},
}: PageStampProps) {
  // SVG pattern for perforated stamp edges
  const stampWidth = 60 * scale;
  const stampHeight = 72 * scale;

  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...position,
        width: stampWidth,
        height: stampHeight,
        transform: `rotate(${rotation}deg)`,
        opacity,
        zIndex: 22,
        boxShadow: "1px 2px 5px rgba(0,0,0,0.12)",
        // Standard stamp perforations via CSS mask-image (using radial gradients)
        background: "#FAF7EE",
        border: "4px solid #FAF7EE",
        boxSizing: "content-box",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // fallback
        ...style,
      }}
    >
      {/* We can use CSS masks for stamp edge simulation */}
      <div
        className="absolute inset-0 border border-[#6E5A4E]/12 flex flex-col items-center justify-between p-1 overflow-hidden"
        style={{ background: "#F3ECE0" }}
      >
        <PaperTexture variant="parchment" opacity={0.4} />

        {/* Inner Border */}
        <div className="w-full h-full border border-dashed border-[#6E5A4E]/25 p-1 flex flex-col items-center justify-between">
          {/* Stamp Header */}
          <span className="font-sans uppercase text-[5px] tracking-[0.15em] text-[#6E5A4E]/60 select-none">
            Postage
          </span>

          {/* Central Artwork */}
          <div className="w-full flex-1 flex items-center justify-center relative my-0.5 opacity-60">
            {variant === "botanical" && (
              <svg viewBox="0 0 40 40" fill="none" className="w-[85%] h-[85%]">
                <path d="M20 36 C20 28 17 20 25 10" stroke="#4B5441" strokeWidth="0.8" />
                <path d="M20 28 Q15 26 12 28" stroke="#4B5441" strokeWidth="0.6" />
                <path d="M20 22 Q27 20 30 22" stroke="#4B5441" strokeWidth="0.6" />
              </svg>
            )}
            {variant === "portrait" && (
              <svg viewBox="0 0 40 40" fill="none" className="w-[80%] h-[80%]">
                <circle cx="20" cy="16" r="6" stroke="#6E5A4E" strokeWidth="0.8" />
                <path d="M10 32 C10 26 14 24 20 24 C26 24 30 26 30 32" stroke="#6E5A4E" strokeWidth="0.8" />
              </svg>
            )}
            {variant === "crest" && (
              <svg viewBox="0 0 40 40" fill="none" className="w-[80%] h-[80%]">
                <path d="M20 6 L32 14 L30 30 L20 36 L10 30 L8 14 Z" stroke="#6E5A4E" strokeWidth="0.8" />
                <circle cx="20" cy="20" r="4" fill="#6E5A4E" />
              </svg>
            )}
          </div>

          {/* Stamp Footer */}
          <span className="font-sans uppercase text-[6px] tracking-wider font-bold text-[#6E5A4E]/80">
            {variant === "botanical" ? "10 C" : "0.5 P"}
          </span>
        </div>
      </div>

      {/* Postmark cancellation stamp over the top of the stamp */}
      <div
        className="absolute -top-3 -right-3 w-12 h-12 rounded-full border border-dashed border-[#5A3A2C]/25 rotate-12 pointer-events-none flex items-center justify-center"
        style={{ transform: "rotate(-15deg)" }}
      >
        <div className="w-8 h-8 rounded-full border border-[#5A3A2C]/15 flex items-center justify-center">
          <span className="text-[4px] font-sans font-bold tracking-widest text-[#5A3A2C]/30 select-none">
            PAID
          </span>
        </div>
      </div>
      {/* Cancellation ink lines */}
      <div className="absolute top-4 -left-3 w-16 h-[0.5px] bg-[#5A3A2C]/15 rotate-12" />
      <div className="absolute top-6 -left-2 w-16 h-[0.5px] bg-[#5A3A2C]/15 rotate-12" />
    </div>
  );
}
