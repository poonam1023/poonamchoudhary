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

export default function ChapterTwoRight() {
  return (
    <div className="relative w-full h-full overflow-hidden p-8 flex flex-col justify-between">
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="rose"
        opacity={0.10}
        position={{ top: "10%", right: "8%" }}
        width={250}
        height={200}
      />
      <WatercolorSplash
        variant="cream"
        opacity={0.12}
        position={{ bottom: "15%", left: "5%" }}
        width={200}
        height={160}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <EditorialLabel text="Methodology" />
        <h3 className="font-display text-[15px] font-bold text-[#3A2C1E] mt-2 tracking-wide text-center">
          Pillars of the Practice
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.3} className="my-2 w-16" />
      </div>

      {/* ── 3. TACTILE LAYERED CARDS (OVERLAPPING COMPOSITION) ── */}
      <div className="relative flex-1 w-full my-6 flex items-center justify-center">
        {/* Card 1: Empathy & Intention */}
        <PaperNote
          text="EMPATHY & INTENTION: Listening to the unspoken needs of the user, or the silent signals of a child. Design begins in silence."
          paperColor="cream"
          rotation={-1.5}
          width={155}
          position={{ top: "15%", left: "12%" }}
          tape={true}
        />

        {/* Card 2: Precision & Structure (overlapping card 1) */}
        <PaperNote
          text="PRECISION & STRUCTURE: The architectural grid of layout, the syntax of code, the clear boundaries of a home. Freedom thrives inside form."
          paperColor="sage"
          rotation={2.5}
          width={155}
          position={{ bottom: "18%", right: "12%" }}
          pin={true}
          tape={false}
        />

        {/* Pressed Fern leaf tucked under Card 2 */}
        <PressedFlower
          variant="fern-leaf"
          scale={0.75}
          rotation={15}
          opacity={0.4}
          position={{ bottom: "35%", right: "8%" }}
        />

        {/* Embossed Library Seal in the middle crease margin */}
        <LibrarySeal
          variant="emboss"
          scale={0.8}
          rotation={12}
          position={{ top: "35%", right: "45%" }}
        />
        
        {/* Subtle Ink Spot */}
        <InkSplash
          variant="droplet"
          scale={0.7}
          opacity={0.15}
          position={{ top: "15%", right: "20%" }}
        />
      </div>

      {/* ── 4. FOOTER PAGE NUMBER ── */}
      <div className="relative z-10 flex justify-center pb-2">
        <span className="font-display tracking-[0.3em] text-[#6E5A4E] text-[8px] opacity-25 select-none">
          2
        </span>
      </div>
    </div>
  );
}
