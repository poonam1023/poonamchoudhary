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

export default function LibraryRight() {
  return (
    <div className="relative w-full h-full overflow-hidden p-8 flex flex-col justify-between">
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="sage"
        opacity={0.15}
        position={{ top: "10%", right: "5%" }}
        width={260}
        height={200}
      />
      <WatercolorSplash
        variant="cream"
        opacity={0.10}
        position={{ bottom: "10%", left: "10%" }}
        width={180}
        height={150}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <EditorialLabel text="Specimen Catalog" />
        <h3 className="font-display text-[15px] font-bold text-[#3A2C1E] mt-2 tracking-wide text-center">
          Featured Publications
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.3} className="my-2 w-16" />
      </div>

      {/* ── 3. MATTED SPECIMEN ILLUSTRATION & DETAILS ── */}
      <div className="relative flex-1 w-full my-4 flex items-center justify-between px-6 z-10">
        
        {/* Left: Matted Cover specimen illustration */}
        <div className="w-[50%] flex items-center justify-center">
          <PortraitFrame
            src="/vintage-illustration.png"
            alt="Vintage Book Cover Specimen"
            width={140}
            height={180}
            variant="rectangular"
            watercolorVariant="cream"
            rotation={1.5}
          />
        </div>

        {/* Right: Specimen Label notes card */}
        <div className="w-[45%] flex flex-col justify-center gap-3">
          <div className="border border-[#6E5A4E]/15 bg-[#FAF7EE]/45 p-3.5 rounded-[1px] relative">
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
            width={130}
            inline={true}
            tape={true}
          />
        </div>

        {/* Vintage Postmark Stamp placed in the top right margin */}
        <VintageStamp
          text="SPECIMEN"
          scale={0.85}
          rotation={5}
          position={{ top: "5%", right: "5%" }}
        />
      </div>

      {/* ── 4. FOOTER PAGE NUMBER ── */}
      <div className="relative z-10 flex justify-center pb-2">
        <span className="font-display tracking-[0.3em] text-[#6E5A4E] text-[8px] opacity-25 select-none">
          3
        </span>
      </div>
    </div>
  );
}
