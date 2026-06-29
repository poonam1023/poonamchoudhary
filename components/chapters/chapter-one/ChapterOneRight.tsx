"use client";

import React from "react";
import Image from "next/image";

/**
 * ChapterOneRight — Chapter Opening / Hero Spread
 *
 * COMPOSITION FIRST — two large visual masses anchor the layout.
 *
 * HIERARCHY:
 *   HERO       (40%) — Large chapter headline. Takes up left column space.
 *   CO-HERO    (40%) — Large portrait image, right-aligned, overlapping watercolor.
 *   SECONDARY  (30%) — Visible sage watercolor behind portrait.
 *   SUPPORTING (15%) — Opening body paragraph beneath headline.
 *   MICRO      (10%) — Labels, dividers, page number.
 *
 * LAYOUT LOGIC:
 *   - The page is divided into two vertical bands, top and bottom.
 *   - Top half: Large headline (left) + Portrait (right) — they share the same row.
 *   - Portrait overlaps the watercolor and slightly overlaps the text zone.
 *   - Bottom half: Opening paragraph + editorial footer.
 *   - Nothing is stacked in equal isolation — elements overlap and relate.
 */
export default function ChapterOneRight() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          SECONDARY MASS — Sage watercolor behind right-side portrait.
          Large enough to be a real visual presence (not a hint of color).
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "5%",
          right: "-5%",
          width: "65%",
          height: "68%",
          background:
            "radial-gradient(ellipse 75% 85% at 55% 40%, rgba(163,181,153,0.42) 0%, rgba(142,169,140,0.20) 55%, transparent 78%)," +
            "radial-gradient(ellipse 45% 50% at 75% 70%, rgba(130,155,120,0.18) 0%, transparent 70%)",
          filter: "blur(22px)",
          zIndex: 0,
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          MICRO — Chapter label (top-left)
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute select-none pointer-events-none"
        style={{ top: "5%", left: "7%", zIndex: 20 }}
      >
        <span
          className="font-sans uppercase tracking-[0.32em] text-[#6E5A4E] opacity-35"
          style={{ fontSize: "6.5px" }}
        >
          Chapter I &ensp;—&ensp; Field Notes
        </span>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HERO ZONE — Upper 58% of the page.
          Left side: headline typography.
          Right side: portrait image.
          They share the same vertical zone — one composition, not two sections.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0"
        style={{ top: "10%", height: "55%", zIndex: 10 }}
      >

        {/* ── HERO: Chapter headline (left column) ── */}
        <div
          className="absolute top-0 bottom-0 flex flex-col justify-center"
          style={{
            left: "7%",
            width: "52%",        // Left column — headline territory
            paddingRight: "4%",
          }}
        >
          {/* Thin rule above chapter numeral */}
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "rgba(110,90,78,0.35)",
              marginBottom: "10px",
            }}
          />
          <span
            className="font-sans uppercase tracking-[0.28em] text-[#6E5A4E] opacity-40 select-none"
            style={{ fontSize: "7px", display: "block", marginBottom: "8px" }}
          >
            I
          </span>

          {/* Large headline — the biggest type on the page */}
          <h2
            className="font-display text-[#3A2C1E] select-text"
            style={{
              fontSize: "clamp(22px, 4.8vh, 38px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            The
            <br />
            Architect
            <br />
            <em
              className="font-display"
              style={{
                fontWeight: 400,
                fontSize: "0.72em",
                opacity: 0.65,
                letterSpacing: "0.01em",
              }}
            >
              of Imagined
              <br />
              Spaces.
            </em>
          </h2>

          {/* Thin rule below headline */}
          <div
            style={{
              width: "80px",
              height: "0.5px",
              background: "rgba(110,90,78,0.28)",
              marginTop: "14px",
            }}
          />
        </div>

        {/* ── CO-HERO: Portrait (right column, overlaps left slightly) ── */}
        <div
          className="absolute top-0 bottom-0 select-none"
          style={{
            right: "4%",
            width: "44%",        // Right column — portrait territory
            // slight top offset so portrait top aligns with headline mid
            top: "-4%",
            bottom: "-4%",
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.16)) drop-shadow(0 2px 6px rgba(0,0,0,0.10))",
            zIndex: 12,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "#F5F0E8",
              border: "1px solid rgba(110,90,78,0.14)",
              padding: "7px",
              // Slight rotation for natural placement
              transform: "rotate(1.5deg)",
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/author-portrait.png"
                alt="Poonam Choudhary"
                fill
                className="object-cover object-top"
                style={{
                  filter: "sepia(12%) contrast(1.04) brightness(0.97)",
                  mixBlendMode: "multiply",
                }}
                priority
              />
              {/* Inner vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 24px rgba(0,0,0,0.10)" }}
              />
            </div>
          </div>
        </div>

      </div>{/* end hero zone */}

      {/* ═══════════════════════════════════════════════════════════════
          SUPPORTING — Opening paragraph.
          Anchored beneath the headline, left-aligned.
          Visual weight: medium. Dense enough to feel like a block.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "67%",
          bottom: "12%",
          padding: "0 7%",
          zIndex: 15,
          overflowY: "hidden",
        }}
      >
        <p
          className="font-display text-[#4A3728] select-text"
          style={{
            fontSize: "clamp(10px, 1.8vh, 13px)",
            lineHeight: 1.85,
            textAlign: "justify",
            hyphens: "auto",
          }}
        >
          <span
            className="font-display float-left leading-none select-none"
            style={{
              fontSize: "clamp(38px, 6.5vh, 58px)",
              fontWeight: 700,
              color: "#8EA98C",
              lineHeight: 0.82,
              marginRight: "6px",
              marginTop: "3px",
            }}
          >
            E
          </span>
          very line of code is a sentence waiting to be written. To Poonam,
          the screen was paper, dried ink, and binding glue — a space where
          design and engineering did not merely function, but breathed.
          This is the ledger of her creations.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MICRO — Footer rule + page number
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0 bottom-[3.5%] flex flex-col items-center gap-1.5"
        style={{ zIndex: 20, padding: "0 7%" }}
      >
        <div
          style={{
            width: "100%",
            height: "0.5px",
            background: "linear-gradient(to right, transparent, rgba(110,90,78,0.22), transparent)",
          }}
        />
        <span
          className="font-display text-[8px] tracking-[0.3em] text-[#6E5A4E] opacity-25 select-none"
        >
          1
        </span>
      </div>

    </div>
  );
}
