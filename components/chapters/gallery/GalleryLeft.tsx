"use client";

import React from "react";
import {
  WatercolorSplash,
  EditorialLabel,
  DecorativeDivider,
  PortraitFrame,
  QuoteCard,
  PressedFlower,
} from "@/components/decorations";

/**
 * GalleryLeft — Voices of the Community Canvas
 *
 * Replaces the webpage-like flexbox container with a handcrafted editorial spread canvas.
 * Elements are placed with precise absolute values.
 */
export default function GalleryLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="rose"
        opacity={0.12}
        position={{ top: "12%", left: "10%" }}
        width={230}
        height={180}
      />
      <WatercolorSplash
        variant="lavender"
        opacity={0.14}
        position={{ bottom: "12%", right: "15%" }}
        width={180}
        height={140}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div
        className="absolute flex flex-col items-center pointer-events-none select-none"
        style={{ top: "10%", left: "10%", right: "10%", zIndex: 10 }}
      >
        <EditorialLabel text="Scrapbook Notes" />
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
          Voices of the Community
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.25} className="my-2 w-16" />
      </div>

      {/* ── 3. SCRAPBOOK COLLAGE (OVERLAPPING PORTRAIT AND CARD) ── */}
      {/* Underlay portrait frame */}
      <div
        className="absolute"
        style={{
          top: "32%",
          left: "10%",
          zIndex: 15,
        }}
      >
        <PortraitFrame
          src="/author-portrait.png"
          alt="Poonam Choudhary"
          width={130}
          height={160}
          variant="oval"
          watercolorVariant="sage"
          rotation={-3.5}
        />
      </div>

      {/* Overlay quote card */}
      <QuoteCard
        quote="Poonam's guides have brought a sense of peace and wonder into our daily routines. Her visual stories are magical."
        author="A Grateful Parent"
        variant="rose"
        rotation={3.5}
        scale={0.9}
        width={190}
        style={{ position: "absolute", bottom: "16%", right: "10%", zIndex: 20 }}
      />

      {/* Pressed Pansy overlapping the quote card */}
      <PressedFlower
        variant="pansy"
        scale={0.8}
        rotation={10}
        opacity={0.7}
        position={{ bottom: "12%", right: "6%" }}
        style={{ zIndex: 22 }}
      />

      {/* ── 4. PAGE NUMBER ── */}
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
          iv
        </span>
      </div>
    </div>
  );
}
