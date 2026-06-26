import React from "react";
import Image from "next/image";

/**
 * ChapterOneLeft — V4
 *
 * Author Introduction Frontispiece.
 * The reader has just opened the book. This is the first thing they see.
 * They meet Poonam before reading a single word of prose.
 *
 * Composition (top → bottom):
 *   Publisher ornament ❦
 *   AUTHOR label
 *   Engraved portrait (180px, vintage-processed)
 *   Poonam Choudhary (name)
 *   Author · Parenting Mentor · Banker
 *   ——✦—— divider
 *   Quote (italic)
 *   Handwritten signature
 *   Publisher seal (circular emboss)
 *   ✦ i ✦ page number
 *
 * Literary objects (two only):
 *   1. Pressed botanical SVG watermark — behind portrait, ~3% opacity
 *   2. Library stamp — CSS ink stamp, bottom-left corner
 *
 * Design principle: every element intentionally placed.
 * Breathing room between sections is generous.
 * The page should feel printable if photographed right now.
 */
export default function ChapterOneLeft() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-9 px-8 overflow-hidden relative">

      {/* ═══════════════════════════════════════════════════════════════
          LITERARY OBJECT 1: Pressed Botanical SVG Watermark
          Sits behind the portrait. Almost invisible. Felt, not seen.
         ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "220px",
          height: "280px",
          opacity: 0.038,
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 220 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
          aria-hidden="true"
        >
          {/* Central stem */}
          <path
            d="M110 260 Q108 200 105 140 Q102 80 108 20"
            stroke="rgba(110,90,78,1)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Left fronds — large */}
          <path d="M105 140 Q70 120 40 88 C68 116 98 128 105 140 Z" fill="rgba(110,90,78,0.9)" />
          <path d="M107 120 Q75 95 52 60 C78 90 102 108 107 120 Z" fill="rgba(110,90,78,0.8)" />
          <path d="M108 100 Q80 72 64 38 C84 68 104 88 108 100 Z" fill="rgba(110,90,78,0.7)" />
          <path d="M108 82 Q86 52 74 18 C88 48 106 70 108 82 Z" fill="rgba(110,90,78,0.6)" />
          {/* Right fronds — large */}
          <path d="M105 140 Q140 120 170 88 C142 116 112 128 105 140 Z" fill="rgba(110,90,78,0.9)" />
          <path d="M107 120 Q140 95 163 60 C138 90 112 108 107 120 Z" fill="rgba(110,90,78,0.8)" />
          <path d="M108 100 Q136 72 152 38 C132 68 110 88 108 100 Z" fill="rgba(110,90,78,0.7)" />
          <path d="M108 82 Q130 52 142 18 C128 48 110 70 108 82 Z" fill="rgba(110,90,78,0.6)" />
          {/* Lower left fronds */}
          <path d="M106 165 Q68 158 36 140 C65 156 100 162 106 165 Z" fill="rgba(110,90,78,0.85)" />
          <path d="M107 185 Q75 182 44 168 C72 180 102 182 107 185 Z" fill="rgba(110,90,78,0.75)" />
          <path d="M108 205 Q80 204 55 194 C78 202 104 204 108 205 Z" fill="rgba(110,90,78,0.60)" />
          {/* Lower right fronds */}
          <path d="M106 165 Q145 158 177 140 C148 156 112 162 106 165 Z" fill="rgba(110,90,78,0.85)" />
          <path d="M107 185 Q140 182 171 168 C144 180 112 182 107 185 Z" fill="rgba(110,90,78,0.75)" />
          <path d="M108 205 Q136 204 162 194 C138 202 112 204 108 205 Z" fill="rgba(110,90,78,0.60)" />
          {/* Tiny leaf tip details */}
          <ellipse cx="40" cy="88" rx="4" ry="7" transform="rotate(-30 40 88)" fill="rgba(110,90,78,0.5)" />
          <ellipse cx="170" cy="88" rx="4" ry="7" transform="rotate(30 170 88)" fill="rgba(110,90,78,0.5)" />
          <ellipse cx="110" cy="20" rx="3" ry="5" fill="rgba(110,90,78,0.5)" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TOP: Publisher Ornament + AUTHOR label
         ═══════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col items-center gap-[7px] pt-1 relative z-10">
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            color: "rgba(110,90,78,0.20)",
            lineHeight: 1,
          }}
        >
          ❦
        </span>
        <span
          className="font-sans uppercase select-none"
          style={{
            fontSize: "6.5px",
            letterSpacing: "0.46em",
            color: "rgba(110,90,78,0.32)",
          }}
        >
          Author
        </span>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CENTER: Portrait + Identity Stack
         ═══════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col items-center gap-[18px] flex-1 justify-center relative z-10">

        {/* ── Engraved Portrait ───────────────────────────────────────── */}
        <div
          className="relative"
          style={{
            width: "180px",
            height: "180px",
          }}
        >
          {/* Outer ring — faint circular border like engraving plate */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              inset: "-4px",
              borderRadius: "50%",
              border: "0.5px solid rgba(110,90,78,0.10)",
            }}
          />
          {/* Vignette: blends edges of portrait into paper */}
          <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
              zIndex: 2,
              borderRadius: "50%",
              boxShadow: "inset 0 0 36px 14px rgba(241,228,194,0.88)",
            }}
          />
          {/* Paper grain on portrait */}
          <div
            className="absolute inset-0 paper-grain-overlay pointer-events-none select-none"
            style={{ zIndex: 3, opacity: 0.24, borderRadius: "50%" }}
          />
          <Image
            src="/author-portrait.png"
            alt="Portrait of Poonam Choudhary"
            fill
            className="object-cover"
            style={{
              filter: "grayscale(100%) sepia(50%) contrast(1.08) brightness(0.94)",
              borderRadius: "50%",
            }}
            priority
          />
        </div>

        {/* ── Name ────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-[8px]">
          <p
            className="font-display text-center leading-tight"
            style={{
              fontSize: "20px",
              letterSpacing: "0.03em",
              color: "rgba(110,90,78,0.88)",
              fontWeight: 400,
            }}
          >
            Poonam Choudhary
          </p>

          {/* Thin ornamental rule */}
          <div
            style={{
              width: "28px",
              height: "0.5px",
              background: "rgba(110,90,78,0.14)",
            }}
          />

          {/* Role descriptors */}
          <div className="flex flex-col items-center gap-[6px]">
            {["Author", "Parenting Mentor", "Banker"].map((role) => (
              <span
                key={role}
                className="font-sans uppercase select-none"
                style={{
                  fontSize: "7px",
                  letterSpacing: "0.26em",
                  color: "rgba(110,90,78,0.36)",
                  lineHeight: 1,
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* ── Decorative divider ──────────────────────────────────────── */}
        <div className="flex items-center gap-3" style={{ opacity: 0.18 }}>
          <span style={{ display: "block", width: "24px", height: "0.5px", background: "rgba(110,90,78,1)" }} />
          <span style={{ fontFamily: "Georgia, serif", fontSize: "8px", color: "rgba(110,90,78,1)" }}>✦</span>
          <span style={{ display: "block", width: "24px", height: "0.5px", background: "rgba(110,90,78,1)" }} />
        </div>

        {/* ── Quote ───────────────────────────────────────────────────── */}
        <p
          className="font-display italic text-center"
          style={{
            fontSize: "12px",
            lineHeight: 1.78,
            color: "rgba(110,90,78,0.40)",
            maxWidth: "196px",
          }}
        >
          &ldquo;Every child deserves a story<br />worth growing inside.&rdquo;
        </p>

        {/* ── Handwritten Signature ────────────────────────────────────── */}
        <div
          className="relative select-none"
          style={{ width: "140px", height: "42px" }}
        >
          <Image
            src="/signature.png"
            alt="Signature of Poonam Choudhary"
            fill
            className="object-contain"
            style={{
              filter: "sepia(30%) opacity(0.34)",
            }}
          />
        </div>

        {/* ── Publisher Seal ──────────────────────────────────────────── */}
        <div
          className="publisher-seal flex flex-col items-center justify-center"
          style={{
            width: "46px",
            height: "46px",
            gap: "2px",
          }}
        >
          <span
            className="font-display select-none"
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "rgba(110,90,78,0.28)",
              lineHeight: 1,
            }}
          >
            PC
          </span>
          <span
            className="font-sans select-none"
            style={{
              fontSize: "5px",
              letterSpacing: "0.16em",
              color: "rgba(110,90,78,0.22)",
              lineHeight: 1,
            }}
          >
            MMXXVI
          </span>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM: Page Number
         ═══════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col items-center gap-[14px] relative z-10 pb-1 w-full">

        {/* LITERARY OBJECT 2: Library Stamp — bottom left */}
        <div className="absolute bottom-10 left-6 library-stamp text-center select-none pointer-events-none">
          <div>First Edition</div>
          <div>MMXXVI</div>
          <div>Poonam Press</div>
        </div>

        <span
          className="font-display select-none"
          style={{
            fontSize: "10px",
            letterSpacing: "0.30em",
            color: "rgba(110,90,78,0.26)",
          }}
        >
          ✦&thinsp;i&thinsp;✦
        </span>
      </div>

    </div>
  );
}
