"use client";

import React from "react";
import {
  VintageBorder,
  WatercolorSplash,
  EditorialLabel,
  DecorativeDivider,
  HandwrittenNote,
} from "@/components/decorations";

export default function ChapterTwoLeft() {
  return (
    <div className="relative w-full h-full overflow-hidden p-8 flex flex-col justify-between">
      {/* ── 1. VINTAGE BORDER & WATERCOLOR WASHS ── */}
      <VintageBorder opacity={0.18} color="#5A4C40" />
      <WatercolorSplash
        variant="sage"
        opacity={0.14}
        position={{ top: "15%", left: "10%" }}
        width={220}
        height={180}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <EditorialLabel text="Creative Core" />
        <h3 className="font-display text-[15px] font-bold text-[#3A2C1E] mt-2 tracking-wide text-center">
          The Craft of Living Stories
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.3} className="my-2 w-16" />
      </div>

      {/* ── 3. CORE ESSAY BODY ── */}
      <div className="relative z-10 px-8 flex-1 flex flex-col justify-center my-4">
        <p className="font-display text-[#4A3728] text-[11px] leading-[1.8] text-justify hyphens-auto">
          <span className="font-display float-left text-[38px] font-bold text-[#8EA98C] leading-[0.8] mr-1.5 mt-1 select-none">
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
        rotation={-2}
        width={140}
        position={{ bottom: "12%", left: "12%" }}
      />

      {/* ── 5. PAGE NUMBER ── */}
      <div className="relative z-10 flex justify-center pb-2">
        <span className="font-display tracking-[0.3em] text-[#6E5A4E] text-[8px] opacity-25 select-none">
          ii
        </span>
      </div>
    </div>
  );
}
