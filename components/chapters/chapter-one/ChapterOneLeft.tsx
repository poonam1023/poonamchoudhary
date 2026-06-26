import React from "react";

/**
 * ChapterOneLeft
 *
 * The left-hand page of the Chapter I spread — styled as a printed colophon.
 * Modeled after the title pages of premium Penguin Classics editions:
 * generous whitespace, almost nothing on the page, everything centered.
 *
 * Owns ONLY content. No layout, no paper effects.
 * Parent (BookPage) provides the paper surface.
 */
export default function ChapterOneLeft() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-12 px-10">

      {/* ── Top breathing space ─── */}
      <div />

      {/* ── Center Colophon ──────────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center space-y-9">

        {/* Project Title */}
        <p
          className="font-display italic leading-tight"
          style={{
            fontSize: "21px",
            letterSpacing: "0.03em",
            color: "rgba(110,90,78,0.84)",
          }}
        >
          Project Poonam
        </p>

        {/* Decorative ornament */}
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "18px",
            color: "rgba(110,90,78,0.26)",
            lineHeight: 1,
          }}
        >
          ❦
        </span>

        {/* Publication details */}
        <div
          className="space-y-[10px]"
          style={{ maxWidth: "220px" }}
        >
          {[
            "First Edition",
            "Designed & Crafted in the Ether",
            "Published MMXXVI",
          ].map((line) => (
            <p
              key={line}
              className="font-sans uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.24em",
                color: "rgba(110,90,78,0.50)",
                lineHeight: 1.6,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Thin rule */}
        <div
          style={{
            width: "36px",
            height: "1px",
            background: "rgba(110,90,78,0.14)",
          }}
        />

        {/* Quote */}
        <p
          className="font-display italic text-center"
          style={{
            fontSize: "12px",
            lineHeight: 1.75,
            color: "rgba(110,90,78,0.38)",
            maxWidth: "210px",
          }}
        >
          &ldquo;To build is to write a story in steel and sand, or in pixels and light.&rdquo;
        </p>

        {/* Author initials */}
        <p
          className="font-display"
          style={{
            fontSize: "11px",
            letterSpacing: "0.20em",
            color: "rgba(110,90,78,0.32)",
          }}
        >
          P.C.
        </p>
      </div>

      {/* ── Page Number ──────────────────────────────────────────────── */}
      <div className="text-center">
        <span
          className="font-display select-none"
          style={{
            fontSize: "10.5px",
            letterSpacing: "0.30em",
            color: "rgba(110,90,78,0.32)",
          }}
        >
          ✦&thinsp;i&thinsp;✦
        </span>
      </div>

    </div>
  );
}
