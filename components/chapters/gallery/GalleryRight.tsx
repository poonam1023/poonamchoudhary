"use client";

import React from "react";
import Image from "next/image";
import {
  WatercolorSplash,
  EditorialLabel,
  DecorativeDivider,
  WaxSeal,
  PressedFlower,
  InkSplash,
} from "@/components/decorations";

/**
 * CoffeeStain
 *
 * Renders an organic coffee cup stain ring using SVG pathing,
 * mimicking a coffee-table book surface.
 */
function CoffeeStain({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        width: 80,
        height: 80,
        opacity: 0.15,
        mixBlendMode: "multiply",
        filter: "blur(0.5px)",
        ...style,
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Main irregular ring */}
        <path
          d="M 50 12 C 73 10, 89 28, 88 50 C 87 72, 70 88, 50 88 C 28 88, 12 72, 12 50 C 12 28, 28 14, 50 12 Z M 50 16 C 30 18, 16 32, 16 50 C 16 68, 30 84, 50 84 C 68 84, 83 68, 84 50 C 85 32, 70 18, 50 16 Z"
          fill="#6E5A4E"
        />
        {/* Inner drips / splatters */}
        <circle cx="50" cy="50" r="1.5" fill="#6E5A4E" opacity="0.7" />
        <circle cx="62" cy="38" r="1" fill="#6E5A4E" opacity="0.6" />
        <path d="M 50 80 Q 52 83 55 81" stroke="#6E5A4E" strokeWidth="0.8" opacity="0.8" />
        <path d="M 22 45 Q 20 42 18 46" stroke="#6E5A4E" strokeWidth="0.6" opacity="0.5" />
      </svg>
    </div>
  );
}

/**
 * GalleryRight — Closing Signature Canvas
 *
 * Replaces the webpage-like flexbox container with a handcrafted editorial spread canvas.
 * Elements are placed with precise absolute values.
 */
export default function GalleryRight() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="cream"
        opacity={0.16}
        position={{ top: "12%", right: "10%" }}
        width={240}
        height={180}
      />
      <WatercolorSplash
        variant="sage"
        opacity={0.14}
        position={{ bottom: "14%", left: "5%" }}
        width={200}
        height={160}
      />

      {/* Coffee ring stain at the bottom left */}
      <CoffeeStain style={{ bottom: "8%", left: "8%", zIndex: 5 }} />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div
        className="absolute flex flex-col items-center pointer-events-none select-none"
        style={{ top: "10%", left: "10%", right: "10%", zIndex: 10 }}
      >
        <EditorialLabel text="Closing Signature" />
        <h3
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(16px, 2.8vh, 24px)",
            fontWeight: 700,
            color: "#2A1E16",
            letterSpacing: "0.02em",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          In Gratitude
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.25} className="my-2 w-16" />
      </div>

      {/* ── 3. LETTER & SIGNATURE ── */}
      <div
        className="absolute text-center select-text"
        style={{
          top: "34%",
          left: "12%",
          right: "12%",
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(11px, 1.8vh, 14px)",
            lineHeight: 1.88,
            color: "#4A3728",
            fontStyle: "italic",
            marginBottom: "16px",
          }}
        >
          "Every story is an architect of tomorrow. Thank you for joining me on this journey of
          design, code, and guiding the hearts of our next generation."
        </p>

        {/* Signature graphic from public/ */}
        <div className="relative w-36 h-14 mx-auto my-2 select-none pointer-events-none">
          <Image
            src="/signature.png"
            alt="Poonam Choudhary Signature"
            fill
            className="object-contain"
            style={{
              filter: "contrast(1.1) brightness(0.9) sepia(20%) opacity(0.75)",
              mixBlendMode: "multiply",
            }}
            priority
          />
        </div>

        <div className="flex flex-col items-center">
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "6.5px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#6E5A4E",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Poonam Choudhary
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "5px",
              letterSpacing: "0.16em",
              color: "#8E7A6C",
              textTransform: "uppercase",
              display: "block",
              marginTop: "4px",
            }}
          >
            New Delhi, India
          </span>
        </div>
      </div>

      {/* ── 4. TACTILE SEALS & PRESSED FLOWERS ── */}
      <WaxSeal
        variant="terracotta"
        scale={0.9}
        rotation={-12}
        position={{ bottom: "12%", right: "12%" }}
        style={{ zIndex: 25 }}
      />

      <PressedFlower
        variant="wildflower"
        scale={0.8}
        rotation={20}
        opacity={0.55}
        position={{ bottom: "14%", left: "15%" }}
        style={{ zIndex: 25 }}
      />

      <InkSplash
        variant="droplet"
        scale={0.8}
        opacity={0.14}
        position={{ top: "25%", right: "15%" }}
        style={{ zIndex: 12 }}
      />

      {/* ── 5. FOOTER PAGE NUMBER ── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "8px",
            letterSpacing: "0.3em",
            color: "#6E5A4E",
            opacity: 0.22,
          }}
        >
          4
        </span>
      </div>
    </div>
  );
}
