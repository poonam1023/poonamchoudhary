import React from "react";
import Image from "next/image";

/**
 * ChapterOneRight — V4
 *
 * The opening chapter page. Typeset as a luxury hardcover first page.
 * Benchmarked against Penguin Classics / Folio Society editorial standards.
 *
 * Hierarchy:
 *   PROJECT POONAM masthead    ← 6.5px tracked label
 *   CHAPTER I                  ← 8px tracked label
 *   Botanical ornament         ← small vintage illustration
 *   ——✦—— divider              ← 0.4px rule
 *   The Architect              ← Cormorant 400, 24px
 *   of                         ← italic, smaller, indented
 *   Imagined Spaces            ← Cormorant 400, 24px
 *   ——————————                 ← thin rule
 *   Drop-cap paragraph         ← E + body text
 *   Second paragraph
 *   ———— ✦ 1 ✦ ————           ← printed footer rule
 *
 * Marginal annotations sit in the left margin (outside the 300px column).
 */
export default function ChapterOneRight() {
  return (
    <div className="relative w-full h-full flex flex-col py-10 px-10 overflow-hidden">

      {/* ── Marginal note — vertical editorial annotation ──────────────── */}
      <div
        className="absolute hidden md:flex flex-col items-end select-none pointer-events-none"
        style={{
          left: "12px",
          top: "50%",
          transform: "translateY(-90px)",
          gap: "5px",
        }}
      >
        <span
          className="font-sans uppercase"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "6px",
            letterSpacing: "0.28em",
            color: "rgba(110,90,78,0.20)",
            lineHeight: 1,
          }}
        >
          First Edition
        </span>
        <span
          style={{
            width: "0.5px",
            height: "18px",
            background: "rgba(110,90,78,0.12)",
            display: "block",
            margin: "0 auto",
          }}
        />
        <span
          className="font-sans"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "5.5px",
            letterSpacing: "0.24em",
            color: "rgba(110,90,78,0.16)",
            lineHeight: 1,
          }}
        >
          MMXXVI
        </span>
      </div>

      {/* ── Main content column ────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col justify-center mx-auto w-full"
        style={{ maxWidth: "300px" }}
      >

        {/* ── Header block ────────────────────────────────────────────── */}
        <div className="flex flex-col items-center" style={{ gap: "4px", marginBottom: "20px" }}>

          {/* PROJECT POONAM */}
          <span
            className="font-sans uppercase select-none"
            style={{
              fontSize: "6.5px",
              letterSpacing: "0.48em",
              color: "rgba(110,90,78,0.25)",
            }}
          >
            Project Poonam
          </span>

          {/* CHAPTER I */}
          <span
            className="font-sans uppercase select-none"
            style={{
              fontSize: "8px",
              letterSpacing: "0.44em",
              color: "rgba(110,90,78,0.36)",
            }}
          >
            Chapter I
          </span>
        </div>

        {/* ── Botanical ornament ──────────────────────────────────────── */}
        <div
          className="relative mx-auto select-none pointer-events-none"
          style={{ width: "50px", height: "28px", marginBottom: "18px" }}
        >
          <Image
            src="/vintage-illustration.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: "grayscale(100%) sepia(30%) opacity(0.20) contrast(0.88)",
              mixBlendMode: "multiply",
            }}
            aria-hidden
          />
        </div>

        {/* ── Title ───────────────────────────────────────────────────── */}
        <div className="text-center" style={{ marginBottom: "16px" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "24px",
              letterSpacing: "0.015em",
              color: "rgba(110,90,78,0.90)",
              fontWeight: 400,
              lineHeight: 1.22,
            }}
          >
            The Architect
            <br />
            <span
              style={{
                fontSize: "0.80em",
                fontStyle: "italic",
                opacity: 0.68,
                paddingLeft: "20px",
              }}
            >
              of
            </span>
            <br />
            Imagined Spaces
          </h2>
        </div>

        {/* ── Divider before body ─────────────────────────────────────── */}
        <div className="flex items-center gap-2 mx-auto" style={{ marginBottom: "22px", width: "160px" }}>
          <span style={{ flex: 1, height: "0.4px", display: "block", background: "rgba(110,90,78,0.16)" }} />
          <span
            className="font-display select-none"
            style={{ fontSize: "7px", color: "rgba(110,90,78,0.22)" }}
          >
            ✦
          </span>
          <span style={{ flex: 1, height: "0.4px", display: "block", background: "rgba(110,90,78,0.16)" }} />
        </div>

        {/* ── First paragraph with drop cap ────────────────────────────── */}
        <div
          className="text-justify"
          style={{
            color: "rgba(110,90,78,0.78)",
            marginBottom: "18px",
            hyphens: "auto",
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "13px",
              lineHeight: "2.0",
              letterSpacing: "0.006em",
            }}
          >
            <span className="drop-cap-letter">E</span>
            very line of code is a sentence waiting to be written. For years,
            we treated the digital screen as a glowing dashboard — a canvas of
            cold glass and neon signals. But Poonam saw it differently. To her,
            the screen was paper, dried ink, and binding glue. A space where
            design and engineering did not merely function, but breathed.
          </p>
        </div>

        {/* ── Second paragraph ─────────────────────────────────────────── */}
        <p
          className="font-display text-justify"
          style={{
            fontSize: "13px",
            lineHeight: "2.0",
            letterSpacing: "0.006em",
            color: "rgba(110,90,78,0.68)",
            hyphens: "auto",
          }}
        >
          This is the ledger of her creations — where logic meets literature,
          and every project begins as a page waiting to be turned. The cover
          is open. The narrative begins.
        </p>

      </div>

      {/* ── Footer: full-width rule + page number ──────────────────────── */}
      <div className="flex flex-col items-center gap-[8px] pb-1">
        {/* Full-width rule */}
        <div
          className="flex items-center gap-3 w-full"
          style={{ maxWidth: "300px", margin: "0 auto" }}
        >
          <span
            style={{
              flex: 1,
              height: "0.4px",
              background: "rgba(110,90,78,0.13)",
              display: "block",
            }}
          />
          <span
            className="font-display select-none"
            style={{
              fontSize: "7px",
              color: "rgba(110,90,78,0.20)",
            }}
          >
            ✦
          </span>
          <span
            className="font-display select-none"
            style={{
              fontSize: "10px",
              letterSpacing: "0.32em",
              color: "rgba(110,90,78,0.26)",
            }}
          >
            1
          </span>
          <span
            className="font-display select-none"
            style={{
              fontSize: "7px",
              color: "rgba(110,90,78,0.20)",
            }}
          >
            ✦
          </span>
          <span
            style={{
              flex: 1,
              height: "0.4px",
              background: "rgba(110,90,78,0.13)",
              display: "block",
            }}
          />
        </div>
      </div>

    </div>
  );
}
