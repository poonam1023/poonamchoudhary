"use client";

import React from "react";
import Image from "next/image";
import WatercolorSplash from "./WatercolorSplash";
import PaperTexture from "./PaperTexture";

interface PortraitFrameProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  rotation?: number;
  opacity?: number;
  variant?: "oval" | "rectangular";
  watercolorVariant?: "sage" | "rose" | "lavender" | "terracotta" | "cream";
  className?: string;
  style?: React.CSSProperties;
}

export default function PortraitFrame({
  src,
  alt = "Portrait artwork",
  width = 160,
  height = 160,
  rotation = 0,
  opacity = 1,
  variant = "oval",
  watercolorVariant = "sage",
  className = "",
  style = {},
}: PortraitFrameProps) {
  const isOval = variant === "oval";

  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        width,
        height,
        opacity,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {/* ── 1. WATERCOLOR BACKGROUND BLEED ── */}
      <WatercolorSplash
        variant={watercolorVariant}
        opacity={0.16}
        position={{ top: "-18%", left: "-18%" }}
        width={width * 1.36}
        height={height * 1.36}
      />

      {/* ── 2. MATTE PAPER BACKING & FRAME LAYER ── */}
      <div
        className="relative w-full h-full p-2.5"
        style={{
          borderRadius: isOval ? "50%" : "2px",
          background: "#FAF7EE",
          border: "0.75px solid rgba(110,90,78,0.22)",
          boxShadow: "2px 5px 15px rgba(58,44,30,0.06), inset 0 1px 2px rgba(255,255,255,0.4)",
        }}
      >
        <PaperTexture variant="parchment" opacity={0.4} />

        {/* ── 3. INNER MATTE ACCENT BORDER ── */}
        <div
          className="w-full h-full overflow-hidden relative"
          style={{
            borderRadius: isOval ? "50%" : "0px",
            border: "0.5px solid rgba(110,90,78,0.12)",
          }}
        >
          {/* Portrait Image Layer with sepia & grain filters */}
          <div className="absolute inset-0 z-2 pointer-events-none" style={{ boxShadow: "inset 0 0 16px rgba(58,44,30,0.06)" }} />
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            style={{
              filter: "grayscale(60%) sepia(15%) contrast(0.95) brightness(1.04)",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
