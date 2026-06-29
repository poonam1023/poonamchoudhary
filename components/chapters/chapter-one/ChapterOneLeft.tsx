"use client";

import React from "react";
import Image from "next/image";
import {
  PaperTexture,
  CornerOrnament,
  DecorativeFrame,
  PressedFlower,
  QuoteCard,
  WaxSeal,
  LibrarySeal,
  PaperClip,
  WatercolorBlob,
  SketchOverlay,
  PageStamp,
} from "@/components/decorations";

/**
 * ChapterOneLeft — Handcrafted Illustrated frontispiece (Left Page)
 *
 * Designed as a scrapbooked author portrait with collectible paper artifacts:
 *  - Portrait inside a dual-border DecorativeFrame
 *  - Bronze PaperClip clamping the portrait
 *  - Translucent PressedFlower tucked behind the frame
 *  - QuoteCard styled as torn paper taped to the book
 *  - WaxSeal securing the author's signature
 *  - LibrarySeal ink stamp in the margin
 */
export default function ChapterOneLeft() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between py-8 px-9 overflow-hidden">

      {/* ── LAYER 1: Background Paper Wash & Sketches ── */}
      <PaperTexture variant="antique" opacity={0.65} />
      <SketchOverlay variant="butterfly" opacity={0.05} position={{ top: "6%", left: "8%" }} scale={1.1} />
      <WatercolorBlob variant="rose" opacity={0.09} position={{ top: "12%", right: "12%" }} width={190} height={150} />

      {/* ── LAYER 2: Page Corners ── */}
      <CornerOrnament position="top-left" scale={0.8} opacity={0.25} />
      <CornerOrnament position="bottom-left" scale={0.8} opacity={0.25} />

      {/* ── LAYER 3: Main Frontispiece Composition ── */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5 w-full relative z-10 my-1">
        
        {/* 1. Header label */}
        <div className="flex flex-col items-center gap-1 select-none">
          <span style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "rgba(110,90,78,0.25)", lineHeight: 1 }}>
            ❦
          </span>
          <span className="font-sans uppercase text-[6px] tracking-[0.44em] text-[#6E5A4E]/35">
            Author Introduction
          </span>
        </div>

        {/* 2. Framed Portrait with Paperclip & Botanical */}
        <div className="relative flex items-center justify-center my-1 select-none">
          {/* Botanical leaf tucked behind portrait frame */}
          <PressedFlower variant="wildflower" opacity={0.35} position={{ top: "-18px", left: "-22px" }} scale={0.8} />

          <DecorativeFrame variant="double-rule" padding="5px" opacity={0.4}>
            <div className="relative w-[130px] h-[130px]">
              {/* Vignette: blends edges of portrait into paper */}
              <div className="absolute inset-0 z-2 rounded-full" style={{ boxShadow: "inset 0 0 20px 8px rgba(241,228,194,0.7)" }} />
              <Image
                src="/author-portrait.png"
                alt="Poonam Choudhary"
                fill
                className="object-cover rounded-full"
                style={{
                  filter: "grayscale(100%) sepia(35%) contrast(1.05) brightness(0.95)",
                }}
                priority
              />
            </div>
          </DecorativeFrame>

          {/* Bronze Paperclip clamped onto the top-right corner of the frame */}
          <PaperClip position={{ top: "-12px", right: "2px" }} scale={0.9} variant="bronze" />
        </div>

        {/* 3. Name & Roles Stack */}
        <div className="flex flex-col items-center gap-2 select-text">
          <p className="font-display text-center leading-tight text-[19px] text-[#6E5A4E]/90 font-medium">
            Poonam Choudhary
          </p>

          <div style={{ width: "24px", height: "0.5px", background: "rgba(110,90,78,0.15)" }} />

          <div className="flex items-center gap-3 text-[7px] text-[#6E5A4E]/40 font-sans uppercase tracking-[0.2em] select-none">
            <span>Author</span>
            <span>•</span>
            <span>Parenting Mentor</span>
            <span>•</span>
            <span>Banker</span>
          </div>
        </div>

        {/* 4. Handcrafted Quote Card (looks like a torn card taped down) */}
        <QuoteCard
          quote="Every child deserves a story worth growing inside."
          author="Poonam Choudhary"
          variant="cream"
          rotation={-1.5}
          scale={0.95}
          width="240px"
        />

        {/* 5. Signature and Wax Seal */}
        <div className="relative flex items-center justify-center w-full h-[40px] my-1">
          {/* Handwritten Signature */}
          <div className="relative w-[110px] h-[34px] select-none pointer-events-none opacity-45">
            <Image
              src="/signature.png"
              alt="Signature"
              fill
              className="object-contain"
              style={{ filter: "sepia(20%) opacity(0.8)" }}
            />
          </div>

          {/* Red Terracotta Wax Seal placed offset to the signature */}
          <WaxSeal position={{ right: "12%", top: "-5px" }} scale={0.8} variant="terracotta" />
        </div>

      </div>

      {/* ── LAYER 4: Footer Page Info & Stamps ── */}
      <div className="relative z-10 w-full flex items-center justify-between mt-auto pt-2">
        {/* Ink stamp on bottom-left margin */}
        <LibrarySeal position={{ bottom: "-4px", left: "0px" }} scale={0.75} variant="ink" text1="FIRST EDITION" text2="POONAM PRESS" />

        {/* Page Number */}
        <span className="font-display select-none text-[9px] text-[#6E5A4E]/30 tracking-[0.25em] mx-auto">
          ✦&thinsp;i&thinsp;✦
        </span>

        {/* Faded Postage Stamp on bottom-right margin */}
        <PageStamp position={{ bottom: "-12px", right: "-10px" }} scale={0.65} variant="botanical" rotation={5} />
      </div>

    </div>
  );
}
