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

export default function GalleryLeft() {
  return (
    <div className="relative w-full h-full overflow-hidden p-8 flex flex-col justify-between">
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="rose"
        opacity={0.08}
        position={{ top: "10%", left: "10%" }}
        width={230}
        height={180}
      />
      <WatercolorSplash
        variant="lavender"
        opacity={0.10}
        position={{ bottom: "10%", right: "15%" }}
        width={180}
        height={140}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <EditorialLabel text="Scrapbook Notes" />
        <h3 className="font-display text-[15px] font-bold text-[#3A2C1E] mt-2 tracking-wide text-center">
          Voices of the Community
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.3} className="my-2 w-16" />
      </div>

      {/* ── 3. SCRAPBOOK COLLAGE (OVERLAPPING PORTRAIT AND CARD) ── */}
      <div className="relative flex-1 w-full my-4 flex items-center justify-center z-10">
        {/* Underlay portrait frame */}
        <div className="absolute top-[8%] left-[8%]">
          <PortraitFrame
            src="/author-portrait.png"
            alt="Poonam Choudhary"
            width={120}
            height={150}
            variant="oval"
            watercolorVariant="sage"
            rotation={-3}
          />
        </div>

        {/* Overlay quote card */}
        <QuoteCard
          quote="Poonam's guides have brought a sense of peace and wonder into our daily routines. Her visual stories are magical."
          author="A Grateful Parent"
          variant="rose"
          rotation={4}
          scale={0.9}
          width={180}
          style={{ position: "absolute", bottom: "12%", right: "10%", zIndex: 12 }}
        />

        {/* Pressed Pansy overlapping the quote card */}
        <PressedFlower
          variant="pansy"
          scale={0.8}
          rotation={10}
          opacity={0.65}
          position={{ bottom: "8%", right: "6%" }}
        />
      </div>

      {/* ── 4. PAGE NUMBER ── */}
      <div className="relative z-10 flex justify-center pb-2">
        <span className="font-display tracking-[0.3em] text-[#6E5A4E] text-[8px] opacity-25 select-none">
          iv
        </span>
      </div>
    </div>
  );
}
