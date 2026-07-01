"use client";

import React from "react";
import {
  WatercolorSplash,
  EditorialLabel,
  DecorativeDivider,
  PortraitFrame,
  VintageStamp,
  PaperNote,
} from "@/components/decorations";

/**
 * LibraryRight — Specimen Catalog Canvas
 *
 * Replaces the webpage-like flexbox container with a handcrafted editorial spread canvas.
 * Elements are placed with precise absolute values.
 */
export default function LibraryRight() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="sage"
        opacity={0.16}
        position={{ top: "12%", right: "5%" }}
        width={260}
        height={200}
      />
      <WatercolorSplash
        variant="cream"
        opacity={0.12}
        position={{ bottom: "12%", left: "10%" }}
        width={180}
        height={150}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div
        className="absolute flex flex-col items-center pointer-events-none select-none"
        style={{ top: "10%", left: "10%", right: "10%", zIndex: 10 }}
      >
        <EditorialLabel text="Specimen Catalog" />
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
          Featured Publications
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.25} className="my-2 w-16" />
      </div>

      {/* ── 3. MATTED SPECIMEN ILLUSTRATION ── */}
      <div
        className="absolute"
        style={{
          top: "32%",
          left: "8%",
          zIndex: 10,
        }}
      >
        <PortraitFrame
          src="/vintage-illustration.png"
          alt="Vintage Book Cover Specimen"
          width={150}
          height={190}
          variant="rectangular"
          watercolorVariant="cream"
          rotation={1.8}
        />
      </div>

      {/* ── 4. SPECIMEN LABEL NOTES & CARD ── */}
      <div
        className="absolute"
        style={{
          top: "32%",
          right: "8%",
          width: "42%",
          zIndex: 10,
        }}
      >
        <div className="border border-[#6E5A4E]/15 bg-[#FAF7EE]/45 p-3.5 rounded-[1px] relative mb-4">
          <h4 className="font-display font-bold text-[12px] text-[#3A2C1E]">
            SPECIMEN I
          </h4>
          <span className="font-sans uppercase text-[5.5px] tracking-wider text-[#6E5A4E]/50 font-bold block mt-0.5">
            Plate No. 12 / Floral Engraving
          </span>
          <p className="font-display text-[#4A3728] text-[9.5px] leading-relaxed mt-2 italic">
            "The design of the book cover represents the entry threshold—an invitation to sit, breathe, and turn pages in quiet reflection."
          </p>
        </div>

        <PaperNote
          text="Catalogued MMXXVI. Printed on cotton-blend linen paper."
          paperColor="sage"
          rotation={-1.5}
          width="100%"
          inline={true}
          tape={true}
        />
      </div>

      {/* Vintage Postmark Stamp placed in the top right margin */}
      <VintageStamp
        text="SPECIMEN"
        scale={0.85}
        rotation={5}
        position={{ top: "6%", right: "8%" }}
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
          3
        </span>
      </div>
    </div>
  );
}
