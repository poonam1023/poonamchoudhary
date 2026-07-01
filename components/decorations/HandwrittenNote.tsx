"use client";

import React from "react";
import MaskingTape from "./MaskingTape";
import PaperTexture from "./PaperTexture";

interface HandwrittenNoteProps {
  text: string;
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HandwrittenNote({
  text,
  position = { bottom: "8%", right: "12%" },
  rotation = 3,
  scale = 1,
  width = 130,
  className = "",
  style = {},
}: HandwrittenNoteProps) {
  // Jagged scrap outline
  const scrapPath = `
    polygon(
      0% 4%, 100% 0%, 96% 25%, 98% 55%, 95% 85%, 100% 98%, 0% 100%, 3% 70%, 1% 40%
    )
  `;

  return (
    <div
      className={`absolute p-3.5 select-none ${className}`}
      style={{
        ...position,
        width,
        background: "#FAF7ED",
        border: "0.5px solid rgba(110,90,78,0.18)",
        transform: `rotate(${rotation}deg) scale(${scale})`,
        clipPath: scrapPath,
        boxShadow: "1px 2px 6px rgba(58,44,30,0.04)",
        zIndex: 22,
        ...style,
      }}
    >
      {/* Tape on top center */}
      <MaskingTape
        variant="washi-tan"
        rotation={2}
        width={40}
        height={9}
        style={{ top: "-4px", left: "50%", transform: "translateX(-50%) rotate(2deg)" }}
      />

      <PaperTexture variant="parchment" opacity={0.6} />

      <p
        className="text-center font-display italic leading-tight text-[11px] text-[#4A392F]"
        style={{
          fontFamily: "Georgia, serif", // Fallback for handwriting
          textShadow: "0.2px 0.2px 0px rgba(255,255,255,0.6)",
        }}
      >
        {text}
      </p>
    </div>
  );
}
