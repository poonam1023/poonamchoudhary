"use client";

import React from "react";
import Image from "next/image";

/**
 * ChapterOneLeft — Author Context Page (Left side of spread)
 *
 * PURPOSE: Quiet introduction. Low visual weight.
 * Supports the right page — never competes with it.
 *
 * RULES:
 *  - Portrait is small (38% wide). NOT the hero.
 *  - No large visual masses. No color splashes.
 *  - Typography is restrained.
 *  - Lots of breathing room.
 *  - The eye should not linger here.
 *
 * RECTANGLE SKELETON:
 *   [label — top left, tiny]
 *   [portrait — 38% wide, left of center, upper third]
 *   [name — medium serif, below portrait]
 *   [role — tiny caps]
 *   [quote — small, lower third, italic]
 *   [page num — bottom center]
 */
export default function ChapterOneLeft() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* ── Editorial label — barely visible, top left ── */}
      <div
        className="absolute select-none pointer-events-none"
        style={{ top: "5%", left: "8%", zIndex: 10 }}
      >
        <span
          className="font-sans uppercase tracking-[0.32em] text-[#6E5A4E]"
          style={{ fontSize: "6px", opacity: 0.3 }}
        >
          Author Introduction
        </span>
      </div>

      {/* ── Small portrait — upper-left zone ── */}
      {/* Intentionally small. 38% width. NOT the hero of the spread. */}
      <div
        className="absolute select-none"
        style={{
          top: "10%",
          left: "10%",
          width: "38%",
          aspectRatio: "3/4",
          zIndex: 10,
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#F5F0E8",
            border: "0.75px solid rgba(110,90,78,0.16)",
            padding: "5px",
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/author-portrait.png"
              alt="Poonam Choudhary"
              fill
              className="object-cover object-top"
              style={{
                filter: "grayscale(20%) sepia(18%) contrast(1.03) brightness(0.98)",
                mixBlendMode: "multiply",
              }}
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 18px rgba(0,0,0,0.10)" }}
            />
          </div>
        </div>
      </div>

      {/* ── Author name — sits right of portrait, vertically centered with it ── */}
      <div
        className="absolute"
        style={{
          top: "10%",
          left: "55%",
          right: "6%",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // vertically align with the portrait zone
          height: "38%",
          paddingTop: "5%",
        }}
      >
        {/* Fine rule */}
        <div
          style={{
            width: "24px",
            height: "0.5px",
            background: "rgba(110,90,78,0.28)",
            marginBottom: "10px",
          }}
        />
        <h3
          className="font-display text-[#3A2C1E] select-text"
          style={{
            fontSize: "clamp(13px, 2.2vh, 17px)",
            fontWeight: 600,
            letterSpacing: "0.03em",
            lineHeight: 1.25,
          }}
        >
          Poonam<br />Choudhary
        </h3>
        <p
          className="mt-2 font-sans uppercase tracking-[0.22em] text-[#6E5A4E] select-none"
          style={{ fontSize: "6px", opacity: 0.4 }}
        >
          Author&ensp;·&ensp;Speaker
          <br />
          <span style={{ letterSpacing: "0.18em" }}>Parenting Guide</span>
        </p>
      </div>

      {/* ── Quiet quote — lower third of page ── */}
      {/* Small, italic, centered. One quiet moment before the right page. */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: "16%",
          padding: "0 10%",
          zIndex: 10,
        }}
      >
        {/* Fine rule — separates portrait zone from quote zone */}
        <div
          style={{
            width: "40px",
            height: "0.5px",
            background: "rgba(110,90,78,0.22)",
            marginBottom: "12px",
          }}
        />
        <p
          className="font-display italic text-[#4A3728] select-text"
          style={{
            fontSize: "clamp(9.5px, 1.6vh, 12px)",
            lineHeight: 1.75,
            opacity: 0.68,
          }}
        >
          "Every child deserves a story
          <br />
          worth growing inside."
        </p>
        <p
          className="mt-2 font-sans uppercase tracking-[0.2em] text-[#6E5A4E] opacity-30 select-none"
          style={{ fontSize: "5.5px" }}
        >
          — Poonam Choudhary
        </p>
      </div>

      {/* ── Page number ── */}
      <div
        className="absolute bottom-[3%] left-1/2 -translate-x-1/2 select-none pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <span
          className="font-display tracking-[0.3em] text-[#6E5A4E]"
          style={{ fontSize: "8px", opacity: 0.22 }}
        >
          i
        </span>
      </div>

    </div>
  );
}
