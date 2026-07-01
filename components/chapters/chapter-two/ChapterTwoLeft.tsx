"use client";

import React from "react";
import {
  VintageBorder,
  WatercolorSplash,
  EditorialLabel,
  DecorativeDivider,
  HandwrittenNote,
  BotanicalIllustration,
} from "@/components/decorations";

/**
 * ChapterTwoLeft — Creative Core Canvas
 *
 * Replaces the webpage-like flexbox container with a handcrafted editorial spread canvas.
 * Elements are placed with precise absolute values.
 */
export default function ChapterTwoLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      {/* ── 1. VINTAGE FRAME & WASHS ── */}
      <VintageBorder opacity={0.16} color="#5A4C40" />
      <WatercolorSplash
        variant="sage"
        opacity={0.15}
        position={{ top: "18%", left: "8%" }}
        width={220}
        height={180}
      />

      {/* Decorative leaf decoration framing the top left */}
      <BotanicalIllustration
        variant="olive"
        scale={0.8}
        opacity={0.18}
        position={{ top: "4%", left: "4%" }}
        rotation={-30}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div
        className="absolute flex flex-col items-center pointer-events-none select-none"
        style={{ top: "10%", left: "10%", right: "10%", zIndex: 10 }}
      >
        <EditorialLabel text="Creative Core" />
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
          The Craft of Living Stories
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.25} className="my-2 w-16" />
      </div>

      {/* ── 3. CORE ESSAY BODY ── */}
      <div
        className="absolute select-text"
        style={{
          top: "34%",
          left: "12%",
          right: "12%",
          zIndex: 10,
        }}
      >
        {/* Top rule */}
        <div
          style={{
            width: "24px",
            height: "0.5px",
            background: "rgba(110,90,78,0.22)",
            marginBottom: "12px",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(10px, 1.65vh, 12.5px)",
            lineHeight: 1.88,
            color: "#4A3728",
            textAlign: "justify",
            hyphens: "auto",
          }}
        >
          <span className="drop-cap-letter" style={{ color: "#9EA88A" }}>
            T
          </span>
          o design is to listen. Whether laying out a page of typography or guiding
          a parent through the developmental thresholds of childhood, the medium remains
          collaborative. We construct scaffolding—grid lines, rules, routines—not to lock
          the story in place, but to give it a stage upon which to unfold. In this
          synthesized space, visual beauty and architectural logic serve a single mandate:
          creating containers that hold meaning.
        </p>
      </div>

      {/* ── 4. TACTILE LAYERED HANDWRITTEN SCRAP ── */}
      <HandwrittenNote
        text="A line of code, like a boundary for a child, is an act of deep care."
        rotation={-3.5}
        width={142}
        position={{ bottom: "11%", left: "14%" }}
      />

      {/* ── 5. PAGE NUMBER ── */}
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
          ii
        </span>
      </div>
    </div>
  );
}
