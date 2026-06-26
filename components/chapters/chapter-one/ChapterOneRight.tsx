import React from "react";
import Image from "next/image";

/**
 * ChapterOneRight — V2
 *
 * The opening chapter page. Typeset as a luxury hardcover first page.
 * Redesigned with:
 *   - Stronger vertical rhythm and breathing room
 *   - PROJECT POONAM masthead above chapter label
 *   - Botanical ornament between title and body
 *   - Narrower body column (~55ch) for superior readability
 *   - Refined drop cap with emboss treatment
 *   - Marginal publisher annotations
 *   - Full footer rule with printed page number
 */
export default function ChapterOneRight() {
  return (
    <div className="relative w-full h-full flex flex-col py-10 px-11 md:px-12 overflow-hidden">

      {/* ── Marginal note — left margin annotation ─────────────────────── */}
      {/* Positioned absolutely in the outer left margin of the text column */}
      <div
        className="absolute hidden md:flex flex-col items-end select-none pointer-events-none"
        style={{
          left: "14px",
          top: "50%",
          transform: "translateY(-80px)",
          gap: "4px",
        }}
      >
        <span
          className="font-sans uppercase"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "6px",
            letterSpacing: "0.26em",
            color: "rgba(110,90,78,0.22)",
            lineHeight: 1,
          }}
        >
          First Edition
        </span>
        <span
          style={{
            width: "0.5px",
            height: "16px",
            background: "rgba(110,90,78,0.15)",
            display: "block",
            margin: "0 auto",
          }}
        />
        <span
          className="font-sans"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "6px",
            letterSpacing: "0.22em",
            color: "rgba(110,90,78,0.18)",
            lineHeight: 1,
          }}
        >
          MMXXVI
        </span>
      </div>

      {/* ── Main content column ────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col justify-center mx-auto w-full"
        style={{ maxWidth: "320px" }}
      >

        {/* PROJECT POONAM masthead */}
        <div className="text-center mb-1">
          <span
            className="font-sans uppercase select-none"
            style={{
              fontSize: "7px",
              letterSpacing: "0.42em",
              color: "rgba(110,90,78,0.28)",
            }}
          >
            Project Poonam
          </span>
        </div>

        {/* Chapter label */}
        <div className="text-center mb-6">
          <span
            className="font-sans uppercase select-none"
            style={{
              fontSize: "8px",
              letterSpacing: "0.40em",
              color: "rgba(110,90,78,0.38)",
            }}
          >
            Chapter I
          </span>
        </div>

        {/* Chapter title — intentional line breaks, strong vertical rhythm */}
        <div className="text-center mb-6">
          <h2
            className="font-display leading-[1.18]"
            style={{
              fontSize: "clamp(20px, 3.8vw, 26px)",
              letterSpacing: "0.01em",
              color: "rgba(110,90,78,0.92)",
              fontWeight: 400,
            }}
          >
            The Architect
            <br />
            <span style={{ fontSize: "0.88em", opacity: 0.7 }}>of</span>
            <br />
            Imagined Spaces
          </h2>
        </div>

        {/* Botanical ornament — the existing vintage illustration, tiny */}
        <div
          className="relative mx-auto mb-7 select-none pointer-events-none"
          style={{ width: "52px", height: "30px" }}
        >
          <Image
            src="/vintage-illustration.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: "grayscale(100%) sepia(25%) opacity(0.22) contrast(0.9)",
              mixBlendMode: "multiply",
            }}
            aria-hidden
          />
        </div>

        {/* ── First paragraph with drop cap ──────────────────────────── */}
        <div
          className="text-justify mb-5"
          style={{ color: "rgba(110,90,78,0.80)" }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "13.5px",
              lineHeight: "1.92",
              letterSpacing: "0.008em",
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

        {/* ── Second paragraph ───────────────────────────────────────── */}
        <p
          className="font-display text-justify"
          style={{
            fontSize: "13.5px",
            lineHeight: "1.92",
            letterSpacing: "0.008em",
            color: "rgba(110,90,78,0.72)",
          }}
        >
          This is the ledger of her creations — where logic meets literature,
          and every project begins as a page waiting to be turned. The cover
          is open. The narrative begins.
        </p>

      </div>

      {/* ── Page footer — printed rule and number ──────────────────────── */}
      <div className="flex flex-col items-center gap-2 pb-1">
        {/* Full-width rule */}
        <div
          className="flex items-center gap-3 w-full"
          style={{ maxWidth: "320px", margin: "0 auto" }}
        >
          <span
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(110,90,78,0.14)",
              display: "block",
            }}
          />
          <span
            className="font-display select-none"
            style={{
              fontSize: "8px",
              color: "rgba(110,90,78,0.22)",
            }}
          >
            ✦
          </span>
          <span
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(110,90,78,0.14)",
              display: "block",
            }}
          />
        </div>
        {/* Page number */}
        <span
          className="font-display select-none"
          style={{
            fontSize: "10px",
            letterSpacing: "0.30em",
            color: "rgba(110,90,78,0.28)",
          }}
        >
          ✦&thinsp;1&thinsp;✦
        </span>
      </div>

    </div>
  );
}
