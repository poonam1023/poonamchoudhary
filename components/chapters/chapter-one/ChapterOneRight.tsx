"use client";

import React from "react";
import {
  WatercolorSplash,
  WatercolorBlob,
  EditorialLabel,
  QuoteCard,
  PressedFlower,
  LibrarySeal,
  InkSplash,
  VintageStamp,
} from "@/components/decorations";

export default function ChapterOneRight() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none">
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="sage"
        opacity={0.15}
        position={{ top: "8%", right: "-8%" }}
        width={360}
        height={300}
      />
      <WatercolorBlob
        variant="cream"
        opacity={0.12}
        position={{ bottom: "12%", left: "-10%" }}
        width={240}
        height={200}
      />

      {/* ── 2. HUGE TYPOGRAPHIC HEADLINE CLUSTER ── */}
      <div 
        className="absolute top-[12%] left-[10%] z-10 w-[75%] pointer-events-none"
        style={{
          filter: "drop-shadow(0.5px 0.5px 0px rgba(255,255,255,0.6))"
        }}
      >
        <span className="font-sans uppercase text-[7px] md:text-[8px] tracking-[0.38em] font-semibold text-[#6E5A4E]/45 block mb-1">
          Chapter the First
        </span>
        <h2 className="font-display text-[44px] md:text-[52px] font-bold text-[#3A2C1E] leading-[0.95] tracking-tight">
          The Architect
        </h2>
        <h3 className="font-display italic text-[20px] md:text-[24px] text-[#4A3728]/60 mt-1">
          of Imagined Spaces.
        </h3>
        <div className="w-12 h-[0.75px] bg-[#6E5A4E]/30 mt-4" />
      </div>

      {/* ── 3. DETAILED BODY TEXT COLUMN (ABSOLUTE PLACEMENT) ── */}
      <div 
        className="absolute top-[52%] left-[10%] w-[48%] z-10"
      >
        <p className="font-display text-[#4A3728] text-[10.5px] leading-[1.8] text-justify hyphens-auto select-text">
          <span className="font-display float-left text-[38px] font-bold text-[#8EA98C] leading-[0.8] mr-2 mt-1 select-none">
            E
          </span>
          very line of code is a sentence waiting to be written. To Poonam, the screen
          was paper, dried ink, and binding glue—a space where design and engineering did
          not merely function, but breathed together. This is the ledger of her creations.
        </p>
      </div>

      {/* ── 4. TACTILE OVERLAPPING QUOTE COMPOSITION ── */}
      {/* Quote overlaps watercolor, flowers, and has tape edges */}
      <div 
        className="absolute top-[28%] right-[8%] w-[38%] z-15"
        style={{
          transform: "rotate(2deg)"
        }}
      >
        <QuoteCard
          quote="Design and engineering are not separate blocks; they are the thread and the needle. They must sew together."
          author="Poonam"
          variant="cream"
          rotation={0}
          scale={0.95}
          width="100%"
        />
        
        {/* Flower belonging to quote card */}
        <PressedFlower
          variant="wildflower"
          scale={0.8}
          opacity={0.6}
          position={{ top: "-28px", right: "-12px" }}
          rotation={12}
        />
      </div>

      {/* ── 5. STAMPS, SEALS & INK CANVASES ── */}
      <VintageStamp
        text="FOLIO NO. 01"
        scale={0.8}
        rotation={6}
        position={{ top: "8%", right: "12%" }}
        className="z-20"
      />
      <LibrarySeal
        variant="ink"
        scale={0.85}
        rotation={-8}
        position={{ bottom: "8%", right: "10%" }}
        className="z-20"
      />
      <InkSplash
        variant="smudge"
        scale={0.8}
        opacity={0.12}
        position={{ top: "35%", left: "42%" }}
        className="z-20"
      />

      {/* ── 6. PAGE NUMBER ── */}
      <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-20">
        <span className="font-display tracking-[0.3em] text-[#6E5A4E] text-[8px] opacity-25">
          1
        </span>
      </div>
    </div>
  );
}
