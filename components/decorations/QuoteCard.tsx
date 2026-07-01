"use client";

import React from "react";
import MaskingTape from "./MaskingTape";
import PaperTexture from "./PaperTexture";

interface QuoteCardProps {
  quote: string;
  author?: string;
  variant?: "cream" | "sage" | "rose";
  rotation?: number;
  scale?: number;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export default function QuoteCard({
  quote,
  author,
  variant = "cream",
  rotation = 1,
  scale = 1,
  width = "90%",
  className = "",
  style = {},
}: QuoteCardProps) {
  const getCardStyles = () => {
    switch (variant) {
      case "sage":
        return {
          bg: "#E3E7DE",
          border: "rgba(142,169,140,0.2)",
          text: "#2C3527",
          tapeColor: "washi-sage" as const,
        };
      case "rose":
        return {
          bg: "#E8DFDB",
          border: "rgba(184,148,130,0.2)",
          text: "#36261F",
          tapeColor: "washi-rose" as const,
        };
      case "cream":
      default:
        return {
          bg: "#FAF6EE",
          border: "rgba(196,168,130,0.25)",
          text: "#4A3728",
          tapeColor: "washi-cream" as const,
        };
    }
  };

  const currentStyles = getCardStyles();

  // Torn paper look using clip-path
  // Jagged edges simulated on all 4 sides
  const tornPath = `
    polygon(
      0% 2%, 8% 0%, 15% 3%, 24% 1%, 32% 4%, 41% 1%, 49% 3%, 58% 0%, 68% 4%, 77% 1%, 86% 3%, 94% 0%, 100% 2%,
      98% 10%, 100% 20%, 97% 30%, 99% 41%, 97% 52%, 100% 64%, 98% 75%, 100% 86%, 97% 95%, 99% 98%,
      90% 97%, 81% 100%, 72% 97%, 62% 99%, 53% 96%, 44% 98%, 35% 96%, 26% 99%, 17% 96%, 8% 99%, 0% 97%,
      2% 88%, 0% 77%, 3% 66%, 1% 55%, 3% 44%, 0% 33%, 2% 22%, 0% 11%
    )
  `;

  return (
    <div
      className={`relative p-7 rounded-sm select-none ${className}`}
      style={{
        width,
        background: currentStyles.bg,
        boxShadow: "1px 4px 14px rgba(58,44,30,0.03), 0 2px 4px rgba(58,44,30,0.02)",
        transform: `rotate(${rotation}deg) scale(${scale})`,
        clipPath: tornPath,
        border: `1px solid ${currentStyles.border}`,
        ...style,
      }}
    >
      {/* Tape on top left corner */}
      <MaskingTape
        variant={currentStyles.tapeColor}
        rotation={-22}
        width={55}
        height={13}
        style={{ top: "-6px", left: "-15px" }}
      />

      {/* Tape on bottom right corner */}
      <MaskingTape
        variant={currentStyles.tapeColor}
        rotation={25}
        width={50}
        height={13}
        style={{ bottom: "-6px", right: "-12px" }}
      />

      {/* Paper micro-texture */}
      <PaperTexture variant={variant === "cream" ? "antique" : variant} opacity={0.65} />

      {/* Botanical Corner watermark inside the card */}
      <div className="absolute right-2 bottom-2 w-10 h-10 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 40 Q30 25 15 22 T0 10" stroke={currentStyles.text} strokeWidth="0.75" />
          <path d="M15 22 C13 18 10 18 8 20 C10 22 13 23 15 22 Z" fill={currentStyles.text} />
          <path d="M25 28 C23 24 20 24 18 26 C20 28 23 29 25 28 Z" fill={currentStyles.text} />
        </svg>
      </div>

      {/* Quote Text */}
      <div className="relative z-10 flex flex-col gap-3">
        <p
          className="italic leading-relaxed text-center font-display"
          style={{
            fontSize: "13.5px",
            color: currentStyles.text,
            textShadow: "0.25px 0.25px 0px rgba(255,255,255,0.4)",
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>

        {author && (
          <p
            className="font-sans font-medium uppercase tracking-[0.16em] text-center"
            style={{
              fontSize: "8px",
              color: "rgba(110,90,78,0.5)",
            }}
          >
            — {author}
          </p>
        )}
      </div>
    </div>
  );
}
