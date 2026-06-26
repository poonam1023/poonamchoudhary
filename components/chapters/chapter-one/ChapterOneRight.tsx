import React from "react";

/**
 * ChapterOneRight
 *
 * The right-hand page of the Chapter I spread.
 * Typeset to match the opening page of a luxury hardcover novel.
 *
 * Hierarchy:
 *   CHAPTER I label
 *   ❦ ornament
 *   Chapter title
 *   — ✦ — divider
 *   Drop-cap opening paragraph
 *   Second paragraph
 *   ✦ 1 ✦ page number
 *
 * Typography:
 *   Headings — Cormorant Garamond (font-display)
 *   Body     — Inter (font-sans) at display size with Cormorant for the prose paragraphs
 *   Body width — ~58ch at this size (optimal for print)
 *   Line height — 1.88 for generous breathing room
 *
 * Uses .drop-cap-letter CSS class defined in globals.css.
 */
export default function ChapterOneRight() {
  return (
    <div className="w-full h-full flex flex-col justify-between py-12 px-10 md:px-12">

      {/* ── Main typeset content ──────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col justify-center mx-auto w-full"
        style={{ maxWidth: "360px" }}
      >

        {/* Chapter label */}
        <div className="text-center mb-5">
          <span
            className="font-sans uppercase select-none"
            style={{
              fontSize: "9px",
              letterSpacing: "0.38em",
              color: "rgba(110,90,78,0.42)",
            }}
          >
            Chapter I
          </span>
        </div>

        {/* Ornament */}
        <div
          className="text-center mb-5"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            color: "rgba(110,90,78,0.22)",
            lineHeight: 1,
          }}
        >
          ❦
        </div>

        {/* Chapter Title */}
        <div className="text-center mb-6">
          <h2
            className="font-display font-semibold leading-[1.12]"
            style={{
              fontSize: "clamp(22px, 4.5vw, 28px)",
              letterSpacing: "0.008em",
              color: "rgba(110,90,78,0.90)",
            }}
          >
            The Architect
            <br />
            of Imagined Spaces
          </h2>
        </div>

        {/* Decorative divider */}
        <div
          className="flex items-center justify-center mb-8"
          style={{ gap: "12px", opacity: 0.28 }}
        >
          <span
            style={{
              display: "block",
              width: "28px",
              height: "0.5px",
              background: "rgba(110,90,78,1)",
            }}
          />
          <span
            className="font-sans"
            style={{ fontSize: "9px", color: "rgba(110,90,78,1)" }}
          >
            ✦
          </span>
          <span
            style={{
              display: "block",
              width: "28px",
              height: "0.5px",
              background: "rgba(110,90,78,1)",
            }}
          />
        </div>

        {/* ── First paragraph — Drop Cap ─────────────────────────────── */}
        <div
          className="text-justify mb-5"
          style={{ color: "rgba(110,90,78,0.80)" }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "14.5px",
              lineHeight: "1.88",
              letterSpacing: "0.005em",
            }}
          >
            {/* Drop cap uses CSS float — see globals.css .drop-cap-letter */}
            <span className="drop-cap-letter">E</span>
            very line of code is a sentence waiting to be written. For years, we
            treated the digital screen as a glowing dashboard — a canvas of cold
            glass and neon signals. But Poonam saw it differently. To her, the
            screen was paper, dried ink, and binding glue. It was a space where
            design and engineering did not merely function, but breathed.
          </p>
        </div>

        {/* ── Second paragraph ───────────────────────────────────────── */}
        <p
          className="font-display text-justify"
          style={{
            fontSize: "14.5px",
            lineHeight: "1.88",
            letterSpacing: "0.005em",
            color: "rgba(110,90,78,0.76)",
          }}
        >
          This is the ledger of her creations — where logic meets literature,
          and every project begins as a page waiting to be turned. As you read
          on, you will uncover works crafted through design, code, and pure
          imagination. The cover is open. The narrative begins.
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
          ✦&thinsp;1&thinsp;✦
        </span>
      </div>

    </div>
  );
}
