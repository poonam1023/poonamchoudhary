"use client";

import React from "react";
import Image from "next/image";

/**
 * ChapterOneLeft — Author Frontispiece
 *
 * COMPOSITION FIRST — built around one hero, one visual mass.
 *
 * HIERARCHY:
 *   HERO       (45%) — Full portrait image, slightly off-center, tall
 *   SECONDARY  (30%) — Visible sage watercolor mass behind portrait
 *   SUPPORTING (15%) — Author name (large), role subtitle
 *   MICRO      (10%) — Editorial label, divider, quote, seal
 *
 * LAYOUT LOGIC:
 *   - Portrait is placed in the top-center of the page, large.
 *   - Watercolor bleeds BEHIND and AROUND the portrait (visible mass, not subtle).
 *   - Author name sits below portrait with visual breathing room.
 *   - Quote is a real rectangle, not a sticker.
 */
export default function ChapterOneLeft() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          SECONDARY MASS — Sage watercolor behind portrait.
          This is the largest COLOR shape on the page.
          It is visible, organic, and large (not a trace of color).
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "4%",
          left: "10%",
          width: "80%",
          height: "58%",
          // Visible watercolor mass — two overlapping organic blobs
          background:
            "radial-gradient(ellipse 70% 80% at 55% 40%, rgba(163,181,153,0.38) 0%, rgba(142,169,140,0.18) 55%, transparent 80%)," +
            "radial-gradient(ellipse 50% 60% at 30% 70%, rgba(168,178,154,0.22) 0%, transparent 70%)",
          filter: "blur(18px)",
          zIndex: 0,
        }}
      />
      {/* Darker concentrate spot — gives the watercolor depth and wetness */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "10%",
          left: "25%",
          width: "50%",
          height: "40%",
          background: "radial-gradient(ellipse 60% 70% at 50% 45%, rgba(130,155,120,0.18) 0%, transparent 70%)",
          filter: "blur(28px)",
          zIndex: 0,
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Portrait. Largest element. Takes up ~45% of page height.
          Positioned in upper half of the page, slightly left of center.
          Soft shadow creates depth. NOT a tiny oval.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute select-none"
        style={{
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "64%",         // wide portrait frame
          aspectRatio: "3/4",   // tall portrait proportion
          zIndex: 10,
          // Layered shadow: soft ambient + tight contact
          filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18)) drop-shadow(0 2px 6px rgba(0,0,0,0.12))",
        }}
      >
        {/* Outer paper matte frame */}
        <div
          className="absolute inset-0"
          style={{
            background: "#F5F0E8",
            border: "1px solid rgba(110,90,78,0.14)",
            padding: "8px",
          }}
        >
          {/* Inner image */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/author-portrait.png"
              alt="Poonam Choudhary"
              fill
              className="object-cover object-top"
              style={{
                filter: "sepia(15%) contrast(1.05) brightness(0.97)",
                mixBlendMode: "multiply",
              }}
              priority
            />
            {/* Vignette inside portrait */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 30px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SUPPORTING MASS — Author identity block.
          Sits below portrait. Anchored, not floating.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0 flex flex-col items-center"
        style={{
          bottom: "25%",
          zIndex: 15,
          padding: "0 10%",
        }}
      >
        {/* Thin rule above name — connects portrait to text */}
        <div
          className="w-[60%] mb-4"
          style={{
            height: "0.5px",
            background: "linear-gradient(to right, transparent, rgba(110,90,78,0.25), transparent)",
          }}
        />

        {/* Author name — large display type */}
        <h2
          className="font-display text-center text-[#4A3728] select-text"
          style={{
            fontSize: "clamp(18px, 3.5vh, 26px)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            lineHeight: 1.2,
          }}
        >
          Poonam Choudhary
        </h2>

        {/* Role line — tight below name */}
        <p
          className="mt-1.5 font-sans text-[#6E5A4E] opacity-50 tracking-[0.28em] uppercase text-center select-none"
          style={{ fontSize: "7px" }}
        >
          Author &thinsp;·&thinsp; Speaker &thinsp;·&thinsp; Parenting Guide
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MICRO — Editorial label at top
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute top-[3%] left-[6%] select-none pointer-events-none"
        style={{ zIndex: 20 }}
      >
        <span
          className="font-sans uppercase tracking-[0.32em] text-[#6E5A4E] opacity-35"
          style={{ fontSize: "6.5px" }}
        >
          Author Introduction
        </span>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MICRO — Quote block at bottom.
          A real rectangle with visual weight. Not a sticker.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: "6%",
          zIndex: 15,
          padding: "0 10%",
        }}
      >
        {/* Quote rule */}
        <div
          className="w-8 mb-3 mx-auto"
          style={{
            height: "1px",
            background: "rgba(110,90,78,0.3)",
          }}
        />
        <p
          className="font-display italic text-center text-[#4A3728] select-text"
          style={{
            fontSize: "clamp(10px, 1.8vh, 13px)",
            lineHeight: 1.7,
            opacity: 0.75,
          }}
        >
          "Every child deserves a story worth growing inside."
        </p>
        <p
          className="mt-2 font-sans text-center uppercase tracking-[0.24em] text-[#6E5A4E] opacity-35 select-none"
          style={{ fontSize: "6px" }}
        >
          — Poonam Choudhary
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MICRO — Tiny wax seal accent (bottom-right corner only)
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute select-none pointer-events-none"
        style={{ bottom: "3%", right: "5%", zIndex: 20, opacity: 0.55 }}
      >
        <svg width="28" height="28" viewBox="0 0 60 60" fill="none">
          <path d="M30 4 C44 3 55 10 56 24 C57 38 52 50 38 56 C24 62 10 52 6 38 C2 24 16 5 30 4 Z" fill="#9E5638" />
          <circle cx="30" cy="30" r="19" fill="#9E5638" stroke="#7E4025" strokeWidth="1" />
          <path d="M13 25 C12 18 18 12 25 11" stroke="#BD7556" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
          <g stroke="#7E4025" strokeWidth="1.5" strokeLinecap="round">
            <path d="M30 41 C30 36 29 27 34 20" />
            <path d="M30 36 Q25 34 23 35 Q26 38 30 36" fill="#7E4025" />
            <path d="M30 32 Q35 30 37 32 Q34 34 30 32" fill="#7E4025" />
          </g>
          <circle cx="21" cy="21" r="1.5" fill="#FFF" opacity="0.2" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MICRO — Page number
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute bottom-[1.5%] left-1/2 -translate-x-1/2 select-none pointer-events-none"
        style={{ zIndex: 20 }}
      >
        <span className="font-display text-[8px] tracking-[0.3em] text-[#6E5A4E] opacity-25">
          i
        </span>
      </div>

    </div>
  );
}
