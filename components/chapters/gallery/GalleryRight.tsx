"use client";

import React from "react";
import Image from "next/image";
import {
  WatercolorSplash,
  EditorialLabel,
  DecorativeDivider,
  WaxSeal,
  PressedFlower,
  InkSplash,
} from "@/components/decorations";

export default function GalleryRight() {
  return (
    <div className="relative w-full h-full overflow-hidden p-8 flex flex-col justify-between">
      {/* ── 1. BACKGROUND WATERCOLOR WASHS ── */}
      <WatercolorSplash
        variant="cream"
        opacity={0.15}
        position={{ top: "15%", right: "10%" }}
        width={240}
        height={180}
      />
      <WatercolorSplash
        variant="sage"
        opacity={0.12}
        position={{ bottom: "10%", left: "5%" }}
        width={200}
        height={160}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <EditorialLabel text="Closing Signature" />
        <h3 className="font-display text-[15px] font-bold text-[#3A2C1E] mt-2 tracking-wide text-center">
          In Gratitude
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.3} className="my-2 w-16" />
      </div>

      {/* ── 3. LETTER & SIGNATURE ── */}
      <div className="relative z-10 px-8 flex-1 flex flex-col justify-center gap-3 my-2 text-center">
        <p className="font-display text-[#4A3728] text-[11px] leading-[1.8] italic">
          "Every story is an architect of tomorrow. Thank you for joining me on this journey of design, code, and guiding the hearts of our next generation."
        </p>

        {/* Signature graphic from public/ */}
        <div className="relative w-36 h-14 mx-auto my-2 select-none pointer-events-none">
          <Image
            src="/signature.png"
            alt="Poonam Choudhary Signature"
            fill
            className="object-contain"
            style={{
              filter: "contrast(1.1) brightness(0.9) sepia(20%) opacity(0.75)",
              mixBlendMode: "multiply",
            }}
            priority
          />
        </div>

        <div className="flex flex-col items-center">
          <span className="font-sans uppercase text-[6px] tracking-[0.22em] text-[#6E5A4E]/60 font-bold block">
            Poonam Choudhary
          </span>
          <span className="font-sans uppercase text-[5px] tracking-[0.16em] text-[#6E5A4E]/45 block mt-0.5">
            New Delhi, India
          </span>
        </div>
      </div>

      {/* ── 4. TACTILE SEALS & PRESSED FLOWERS ── */}
      <WaxSeal
        variant="terracotta"
        scale={0.9}
        rotation={-12}
        position={{ bottom: "12%", right: "12%" }}
      />

      <PressedFlower
        variant="wildflower"
        scale={0.8}
        rotation={20}
        opacity={0.5}
        position={{ bottom: "14%", left: "15%" }}
      />

      <InkSplash
        variant="droplet"
        scale={0.8}
        opacity={0.12}
        position={{ top: "25%", right: "15%" }}
      />

      {/* ── 5. FOOTER PAGE NUMBER ── */}
      <div className="relative z-10 flex justify-center pb-2">
        <span className="font-display tracking-[0.3em] text-[#6E5A4E] text-[8px] opacity-25 select-none">
          4
        </span>
      </div>
    </div>
  );
}
