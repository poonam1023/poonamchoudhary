"use client";

import React from "react";
import Image from "next/image";
import {
  PaperTexture,
  CornerOrnament,
  BotanicalDivider,
  DecorativeDivider,
  WatercolorBlob,
  PressedFlower,
  LibrarySeal,
  FloatingLeaves,
  ChapterRibbon,
  SketchOverlay,
} from "@/components/decorations";

/**
 * ChapterOneRight — Handcrafted Illustrated Literary Spread (Right Page)
 *
 * Designed as a ceremonial chapter opening in a premium illustrated journal.
 * Lays out multiple botanical, sketch, watercolor, and papercraft layers.
 */
export default function ChapterOneRight() {
  return (
    <div className="relative w-full h-full flex flex-col py-9 px-10 overflow-hidden">
      
      {/* ── LAYER 1: Background & Stains ── */}
      <PaperTexture variant="sage" opacity={0.6} />
      <SketchOverlay variant="leaf" opacity={0.06} position={{ top: "8%", right: "8%" }} scale={1.2} />
      <WatercolorBlob variant="sage" opacity={0.12} position={{ top: "15%", left: "10%" }} width={220} height={180} />

      {/* ── LAYER 2: Page Corners & Margins ── */}
      <CornerOrnament position="top-right" scale={0.8} opacity={0.25} />
      <CornerOrnament position="bottom-right" scale={0.8} opacity={0.25} />

      {/* ── LAYER 3: Animated Floating Elements ── */}
      <FloatingLeaves count={2} opacity={0.18} />

      {/* ── LAYER 4: Marginal Notes & Stamps ── */}
      <div className="absolute hidden md:flex flex-col items-end select-none pointer-events-none" style={{ left: "12px", top: "50%", transform: "translateY(-110px)", gap: "6px" }}>
        <span className="font-sans uppercase text-[5.5px] tracking-[0.25em] text-[#6E5A4E]/30" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Journal Entry
        </span>
        <span style={{ width: "0.5px", height: "24px", background: "rgba(110,90,78,0.12)" }} />
        <span className="font-sans text-[5px] tracking-[0.2em] text-[#6E5A4E]/20" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Foliage No. I
        </span>
      </div>

      {/* ── LAYER 5: Ceremonial Chapter Content Column ── */}
      <div className="flex-1 flex flex-col justify-between mx-auto w-full relative z-10" style={{ maxWidth: "310px" }}>
        
        {/* 1. Header ribbon & metadata */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <ChapterRibbon label="First Edition" variant="sage" scale={0.9} opacity={0.85} />
          
          <span className="font-sans uppercase text-[6.5px] tracking-[0.45em] text-[#6E5A4E]/40 mt-1 select-none">
            Project Poonam
          </span>
        </div>

        {/* 2. Title block & botanical divider */}
        <div className="flex flex-col items-center gap-3 my-4">
          <span className="font-sans uppercase text-[9px] tracking-[0.4em] text-[#6E5A4E]/50 font-semibold select-none">
            Chapter I
          </span>

          <BotanicalDivider variant="leaves" opacity={0.4} width="120px" />

          <h2 className="font-display text-center" style={{ fontSize: "25px", letterSpacing: "0.01em", color: "rgba(110,90,78,0.92)", fontWeight: 400, lineHeight: 1.2 }}>
            The Architect
            <br />
            <span style={{ fontSize: "0.78em", fontStyle: "italic", opacity: 0.65, paddingLeft: "15px" }}>
              of
            </span>
            <br />
            Imagined Spaces
          </h2>
        </div>

        {/* 3. Drop-cap Paragraph & Body */}
        <div className="text-justify text-[#6E5A4E]/85 select-text" style={{ hyphens: "auto" }}>
          <p className="font-display text-[13px] leading-[1.95] letterSpacing-[0.005em] mb-4">
            <span className="drop-cap-letter" style={{ color: "#8EA98C" }}>E</span>
            very line of code is a sentence waiting to be written. For years,
            we treated the digital screen as a glowing dashboard — a canvas of
            cold glass and neon signals. But Poonam saw it differently. To her,
            the screen was paper, dried ink, and binding glue. A space where
            design and engineering did not merely function, but breathed.
          </p>

          <p className="font-display text-[13px] leading-[1.95] letterSpacing-[0.005em] text-[#6E5A4E]/70">
            This is the ledger of her creations — where logic meets literature,
            and every project begins as a page waiting to be turned. The cover
            is open. The narrative begins.
          </p>
        </div>

        {/* 4. Fine vintage divider & page number footer */}
        <div className="flex flex-col items-center gap-1.5 mt-4">
          <DecorativeDivider variant="diamond-dots" opacity={0.3} width="80px" />
          <div className="flex items-center gap-3 w-full max-w-[280px] justify-center text-[9px] text-[#6E5A4E]/40 font-display select-none">
            <span>✦</span>
            <span>1</span>
            <span>✦</span>
          </div>
        </div>

      </div>

      {/* ── Pressed botanical detail in the bottom right corner ── */}
      <PressedFlower variant="fern-leaf" opacity={0.35} position={{ bottom: "-8px", right: "-12px" }} scale={0.7} />

    </div>
  );
}
