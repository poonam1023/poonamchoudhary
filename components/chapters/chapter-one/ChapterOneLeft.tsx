"use client";

import React from "react";
import Image from "next/image";
import {
  WatercolorSplash,
  BotanicalIllustration,
  VintageStamp,
  InkSplash,
  PressedFlower,
  MaskingTape,
  PaperNote,
} from "@/components/decorations";

export default function ChapterOneLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none">
      {/* ── 1. BACKGROUND LAYER (WATERCOLOR & INK) ── */}
      <WatercolorSplash
        variant="sage"
        opacity={0.16}
        position={{ top: "8%", left: "-10%" }}
        width={380}
        height={320}
      />
      <WatercolorSplash
        variant="cream"
        opacity={0.15}
        position={{ bottom: "15%", right: "-8%" }}
        width={300}
        height={260}
      />
      
      {/* ── 2. HERO PORTRAIT COMPOSITION (DOMINATES LEFT PAGE) ── */}
      {/* Scale is dramatically larger to dominate the page canvas */}
      <div 
        className="absolute top-[10%] left-[14%] w-[72%] h-[72%] z-10"
        style={{
          transform: "rotate(-1.5deg)",
          filter: "drop-shadow(12px 24px 42px rgba(26, 20, 18, 0.22)) drop-shadow(0 4px 12px rgba(26, 20, 18, 0.12))"
        }}
      >
        {/* Matte Paper Backing & Frame */}
        <div className="relative w-full h-full p-4 bg-[#FAF7EE] border border-[#6E5A4E]/22 flex flex-col justify-between">
          <div className="w-full h-full border border-[#6E5A4E]/12 p-1.5 flex flex-col justify-between relative bg-[#FAF7EE]">
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ boxShadow: "inset 0 0 24px rgba(0,0,0,0.2)" }} />
              <Image
                src="/author-portrait.png"
                alt="Poonam Choudhary"
                fill
                className="object-cover object-top"
                style={{
                  filter: "grayscale(100%) sepia(35%) contrast(1.06) brightness(0.96)",
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Washi tape securing the portrait top center */}
        <MaskingTape
          variant="washi-sage"
          rotation={3}
          width={90}
          height={18}
          style={{ top: "-10px", left: "50%", transform: "translateX(-50%) rotate(3deg)", zIndex: 25 }}
        />
      </div>

      {/* ── 3. OVERLAPPING BOTANICAL & FLORAL COMPOSITION ── */}
      {/* Botanical leaves belong to the portrait frame and overlap it */}
      <BotanicalIllustration
        variant="olive"
        scale={1.3}
        opacity={0.4}
        position={{ bottom: "6%", left: "6%" }}
        rotation={32}
        animation={true}
        className="z-20 pointer-events-none"
      />
      <BotanicalIllustration
        variant="branch"
        scale={1.0}
        opacity={0.3}
        position={{ top: "4%", right: "8%" }}
        rotation={-18}
        animation={true}
        className="z-20 pointer-events-none"
      />
      <PressedFlower
        variant="pansy"
        scale={1.15}
        rotation={14}
        opacity={0.7}
        position={{ bottom: "12%", right: "8%" }}
        className="z-20"
      />

      {/* ── 4. TACTILE OVERLAPPING CARDS (MUSEUM TYPE CAPTION) ── */}
      <div 
        className="absolute bottom-[4%] left-[10%] z-20 bg-[#FAF7EE] border border-[#6E5A4E]/20 p-3 w-[210px]"
        style={{ 
          clipPath: "polygon(1% 0%, 99% 1.5%, 98% 97%, 1% 99%)",
          boxShadow: "2px 6px 16px rgba(0,0,0,0.06)"
        }}
      >
        <span className="font-sans uppercase text-[6px] tracking-widest text-[#6E5A4E]/45 font-bold block mb-1">Plate I.</span>
        <h4 className="font-display font-bold text-[13px] text-[#3A2C1E] leading-tight">
          Poonam Choudhary
        </h4>
        <span className="font-sans uppercase text-[6.5px] tracking-wider text-[#6E5A4E]/60 block mt-0.5">
          Author · Speaker · Parenting Guide
        </span>
      </div>

      <PaperNote
        text='"Every child deserves a story worth growing inside."'
        paperColor="rose"
        rotation={3.5}
        width={160}
        position={{ bottom: "8%", right: "10%" }}
        tape={true}
        className="z-20"
      />

      {/* ── 5. STAMPS & INK DETAILS ── */}
      <VintageStamp
        text="ARCHIVAL PRINT"
        scale={0.9}
        rotation={-15}
        position={{ top: "6%", left: "8%" }}
        className="z-20"
      />
      <InkSplash
        variant="droplet"
        scale={0.8}
        opacity={0.15}
        position={{ top: "45%", right: "8%" }}
        className="z-20"
      />

      {/* ── 6. PAGE NUMBER ── */}
      <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-20">
        <span className="font-display tracking-[0.3em] text-[#6E5A4E] text-[8px] opacity-25">
          i
        </span>
      </div>
    </div>
  );
}
