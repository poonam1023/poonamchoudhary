"use client";

import React from "react";
import Image from "next/image";

/**
 * ChapterOneRight — Chapter Hero Page (Right side of spread)
 *
 * PURPOSE: Immediate visual dominance. Attracts 65-70% of attention on the spread.
 * ONE hero composition — portrait + headline as a unified visual mass.
 *
 * RULES:
 *  - Portrait is 48% wide — the largest image in the entire spread.
 *  - Watercolor is a genuine large color mass (opacity 0.40+), not a hint.
 *  - Headline and portrait share the SAME visual zone (upper page).
 *  - They overlap the same watercolor — they belong together.
 *  - Eye enters top-right (portrait), reads headline left, drops to paragraph.
 *
 * RECTANGLE SKELETON:
 *   [watercolor — top 62%, full width, visible sage mass]
 *   [portrait — 48% wide, right column, upper zone, overlaps watercolor]
 *   [headline — left column, upper zone, same height as portrait]
 *   [paragraph — lower half, full width]
 *   [footer rule + page number]
 */
export default function ChapterOneRight() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          WATERCOLOR MASS
          The second-largest shape on the right page.
          Fills the entire top zone behind both the portrait and headline.
          Visible, warm, organic — a real color presence.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: 0,
          left: "-5%",
          right: "-5%",
          height: "64%",
          // Primary mass: wide sage ellipse
          background:
            "radial-gradient(ellipse 80% 75% at 60% 38%, rgba(163,181,153,0.44) 0%, rgba(142,169,140,0.22) 52%, transparent 78%)," +
            // Secondary pocket: darker concentrate on the right (behind portrait)
            "radial-gradient(ellipse 45% 55% at 80% 30%, rgba(120,148,112,0.24) 0%, transparent 65%)," +
            // Soft left bleed — connects to left page across the spine
            "radial-gradient(ellipse 30% 40% at 5% 50%, rgba(163,181,153,0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />
      {/* Wet edge — slight darkening at the peak of the watercolor (simulates pooling) */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "15%",
          right: "8%",
          width: "55%",
          height: "35%",
          background:
            "radial-gradient(ellipse 60% 65% at 55% 40%, rgba(100,130,95,0.16) 0%, transparent 70%)",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          CHAPTER LABEL — minimal, top of page
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute select-none pointer-events-none"
        style={{ top: "4.5%", left: "7%", zIndex: 20 }}
      >
        <span
          className="font-sans uppercase tracking-[0.32em] text-[#4A3728]"
          style={{ fontSize: "6px", opacity: 0.32 }}
        >
          Chapter I
        </span>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          UPPER ZONE — headline (left) + portrait (right) share this space.
          They are one composition, not two sections.
          The spine between them is 0 — they are adjacent in one zone.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0"
        style={{ top: "9%", height: "56%", zIndex: 10 }}
      >

        {/* ── LEFT COLUMN: Chapter Headline ── */}
        {/* Occupies left 50% of the right page, vertically centered in the zone */}
        <div
          className="absolute top-0 bottom-0 flex flex-col justify-center"
          style={{ left: "7%", width: "48%", paddingRight: "3%" }}
        >
          {/* Thin rule — marks the top of the text block */}
          <div
            style={{
              width: "28px",
              height: "0.75px",
              background: "rgba(74,55,40,0.35)",
              marginBottom: "12px",
            }}
          />

          {/* Large chapter headline — the typographic hero */}
          <h2
            className="font-display text-[#3A2C1E] select-text"
            style={{
              fontSize: "clamp(24px, 5.2vh, 42px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            The
            <br />
            Architect
          </h2>

          {/* Subtitle — smaller, gives typographic rhythm */}
          <h3
            className="font-display text-[#3A2C1E] select-text mt-1"
            style={{
              fontSize: "clamp(14px, 2.8vh, 22px)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.2,
              opacity: 0.6,
              letterSpacing: "0.01em",
            }}
          >
            of Imagined
            <br />
            Spaces.
          </h3>

          {/* Rule below headline */}
          <div
            style={{
              width: "52px",
              height: "0.5px",
              background: "rgba(74,55,40,0.25)",
              marginTop: "14px",
            }}
          />
        </div>

        {/* ── RIGHT COLUMN: Portrait — HERO of the spread ── */}
        {/*
          48% of page width. This is the largest image in the entire spread.
          The left page portrait (38%) deliberately stays smaller.
          Drop shadow gives depth — portrait lifts off the watercolor.
          Slight clockwise rotation: feels placed by hand, not pasted.
        */}
        <div
          className="absolute select-none"
          style={{
            top: "-2%",        // starts slightly above the zone — bleeds upward
            bottom: "-8%",     // bleeds downward — connects to paragraph zone
            right: "4%",
            width: "47%",
            zIndex: 12,
            filter:
              "drop-shadow(0 10px 28px rgba(0,0,0,0.18)) drop-shadow(0 3px 8px rgba(0,0,0,0.12))",
            transform: "rotate(1.2deg)",
          }}
        >
          {/* Paper matte border */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#F5F0E8",
              border: "1px solid rgba(110,90,78,0.16)",
              padding: "7px",
              boxSizing: "border-box",
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src="/author-portrait.png"
                alt="Poonam Choudhary"
                fill
                className="object-cover object-top"
                style={{
                  filter: "sepia(10%) contrast(1.06) brightness(0.96)",
                  mixBlendMode: "multiply",
                }}
                priority
              />
              {/* Inner vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 28px rgba(0,0,0,0.12)" }}
              />
            </div>
          </div>
        </div>

      </div>{/* end upper zone */}

      {/* ═══════════════════════════════════════════════════════════════
          OPENING PARAGRAPH — lower half of the page
          Dense enough to be a visual block.
          Drop cap anchors the entry point.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "67%",
          bottom: "11%",
          padding: "0 7%",
          zIndex: 15,
          overflow: "hidden",
        }}
      >
        {/* Thin rule above paragraph — separates hero zone from supporting text */}
        <div
          style={{
            width: "100%",
            height: "0.5px",
            background:
              "linear-gradient(to right, rgba(110,90,78,0.20), transparent)",
            marginBottom: "12px",
          }}
        />

        <p
          className="font-display text-[#4A3728] select-text"
          style={{
            fontSize: "clamp(10px, 1.75vh, 12.5px)",
            lineHeight: 1.88,
            textAlign: "justify",
            hyphens: "auto",
          }}
        >
          {/* Drop cap — large initial anchors the entry, matches sage color */}
          <span
            className="font-display float-left select-none leading-none"
            style={{
              fontSize: "clamp(40px, 7vh, 60px)",
              fontWeight: 700,
              color: "#8EA98C",
              lineHeight: 0.8,
              marginRight: "5px",
              marginTop: "4px",
            }}
          >
            E
          </span>
          very line of code is a sentence waiting to be written. To Poonam,
          the screen was paper, dried ink, and binding glue — a space where
          design and engineering did not merely function, but breathed together.
          This is the ledger of her creations.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER — thin rule + page number
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0 bottom-[3%]"
        style={{ padding: "0 7%", zIndex: 20 }}
      >
        <div
          style={{
            width: "100%",
            height: "0.5px",
            background:
              "linear-gradient(to right, rgba(110,90,78,0.18), transparent)",
            marginBottom: "5px",
          }}
        />
        <span
          className="font-display tracking-[0.3em] text-[#6E5A4E] select-none"
          style={{ fontSize: "8px", opacity: 0.22 }}
        >
          1
        </span>
      </div>

    </div>
  );
}
