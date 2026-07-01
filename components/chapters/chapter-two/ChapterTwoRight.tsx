"use client";

import React from "react";
import {
  WatercolorSplash,
  EditorialLabel,
  DecorativeDivider,
  PaperNote,
  PressedFlower,
  LibrarySeal,
  InkSplash,
} from "@/components/decorations";

/**
 * ChapterTwoRight — Methodology Canvas
 *
 * Replaces the webpage-like flexbox container with a handcrafted editorial spread canvas.
 * Elements are placed with precise absolute values.
 */
export default function ChapterTwoRight() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="rose"
        opacity={0.12}
        position={{ top: "12%", right: "8%" }}
        width={250}
        height={200}
      />
      <WatercolorSplash
        variant="cream"
        opacity={0.14}
        position={{ bottom: "14%", left: "5%" }}
        width={200}
        height={160}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div
        className="absolute flex flex-col items-center pointer-events-none select-none"
        style={{ top: "10%", left: "10%", right: "10%", zIndex: 10 }}
      >
        <EditorialLabel text="Methodology" />
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
          Pillars of the Practice
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.25} className="my-2 w-16" />
      </div>

      {/* ── 3. TACTILE LAYERED CARDS (OVERLAPPING COMPOSITION) ── */}
      {/* Card 1: Empathy & Intention (taped down) */}
      <PaperNote
        text="EMPATHY & INTENTION: Listening to the unspoken needs of the user, or the silent signals of a child. Design begins in silence."
        paperColor="cream"
        rotation={-2.2}
        width={155}
        position={{ top: "27%", left: "12%" }}
        tape={true}
        style={{ zIndex: 20 }}
      />

      {/* Card 2: Precision & Structure (pinned down, overlapping Card 1 slightly) */}
      <PaperNote
        text="PRECISION & STRUCTURE: The architectural grid of layout, the syntax of code, the clear boundaries of a home. Freedom thrives inside form."
        paperColor="sage"
        rotation={2.8}
        width={155}
        position={{ bottom: "16%", right: "12%" }}
        pin={true}
        tape={false}
        style={{ zIndex: 22 }}
      />

      {/* Pressed Fern leaf tucked under Card 2 */}
      <PressedFlower
        variant="fern-leaf"
        scale={0.75}
        rotation={15}
        opacity={0.45}
        position={{ bottom: "32%", right: "7%" }}
        style={{ zIndex: 21 }}
      />

      {/* Embossed Library Seal in the margins */}
      <LibrarySeal
        variant="emboss"
        scale={0.8}
        rotation={12}
        position={{ top: "36%", right: "44%" }}
        style={{ zIndex: 23 }}
      />

      {/* Subtle Ink Spot */}
      <InkSplash
        variant="droplet"
        scale={0.7}
        opacity={0.16}
        position={{ top: "20%", right: "22%" }}
        style={{ zIndex: 12 }}
      />

      {/* ── 4. FOOTER PAGE NUMBER ── */}
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
          2
        </span>
      </div>
    </div>
  );
}
