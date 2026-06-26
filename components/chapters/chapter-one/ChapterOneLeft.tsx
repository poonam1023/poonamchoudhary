import React from "react";
import Image from "next/image";

/**
 * ChapterOneLeft — V2
 *
 * Author introduction page. Styled as a frontispiece from a luxury hardcover.
 * Answers "Who is Poonam?" without a single paragraph of prose.
 *
 * Hierarchy (top → bottom):
 *   Publisher ornament (❦)
 *   AUTHOR label
 *   Engraved portrait (CSS-processed to look printed)
 *   Name — Poonam Choudhary
 *   Role descriptors
 *   Decorative rule
 *   Quote
 *   Handwritten signature
 *   Publisher seal (PC · MMXXVI)
 *   Page number ✦ i ✦
 */
export default function ChapterOneLeft() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-10 px-9 overflow-hidden">

      {/* ── Top: Publisher ornament + AUTHOR label ─────────────────────── */}
      <div className="flex flex-col items-center gap-2 pt-1">
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "13px",
            color: "rgba(110,90,78,0.22)",
            lineHeight: 1,
          }}
        >
          ❦
        </span>
        <span
          className="font-sans uppercase select-none"
          style={{
            fontSize: "7px",
            letterSpacing: "0.42em",
            color: "rgba(110,90,78,0.35)",
          }}
        >
          Author
        </span>
      </div>

      {/* ── Center: Portrait + Identity ────────────────────────────────── */}
      <div className="flex flex-col items-center gap-5 flex-1 justify-center">

        {/* Engraved portrait — processed to blend into paper */}
        <div
          className="relative"
          style={{
            width: "148px",
            height: "148px",
          }}
        >
          {/* Soft vignette overlay to blend portrait into paper */}
          <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
              zIndex: 2,
              borderRadius: "50%",
              boxShadow: "inset 0 0 28px 10px rgba(243,232,201,0.82)",
            }}
          />
          {/* Grain overlay on portrait */}
          <div
            className="absolute inset-0 paper-grain-overlay pointer-events-none select-none"
            style={{ zIndex: 3, opacity: 0.22, borderRadius: "50%" }}
          />
          <Image
            src="/author-portrait.png"
            alt="Portrait of Poonam Choudhary"
            fill
            className="object-cover"
            style={{
              // Vintage engraving: desaturate + sepia + darken slightly
              filter:
                "grayscale(100%) sepia(40%) contrast(1.05) brightness(0.96)",
              // Multiply blend makes whites transparent against paper
              mixBlendMode: "multiply",
              borderRadius: "50%",
            }}
            priority
          />
        </div>

        {/* Name */}
        <div className="flex flex-col items-center gap-1">
          <p
            className="font-display text-center leading-tight"
            style={{
              fontSize: "19px",
              letterSpacing: "0.04em",
              color: "rgba(110,90,78,0.88)",
              fontWeight: 400,
            }}
          >
            Poonam Choudhary
          </p>

          {/* Thin ornamental rule */}
          <div
            style={{
              width: "30px",
              height: "1px",
              background: "rgba(110,90,78,0.16)",
              margin: "4px 0",
            }}
          />

          {/* Role descriptors */}
          <div className="flex flex-col items-center gap-[5px]">
            {["Author", "Parenting Mentor", "Banker"].map((role) => (
              <span
                key={role}
                className="font-sans uppercase select-none"
                style={{
                  fontSize: "7.5px",
                  letterSpacing: "0.28em",
                  color: "rgba(110,90,78,0.40)",
                  lineHeight: 1,
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-3" style={{ opacity: 0.2 }}>
          <span style={{ display: "block", width: "22px", height: "0.5px", background: "rgba(110,90,78,1)" }} />
          <span style={{ fontFamily: "Georgia, serif", fontSize: "8px", color: "rgba(110,90,78,1)" }}>✦</span>
          <span style={{ display: "block", width: "22px", height: "0.5px", background: "rgba(110,90,78,1)" }} />
        </div>

        {/* Quote */}
        <p
          className="font-display italic text-center"
          style={{
            fontSize: "11.5px",
            lineHeight: 1.72,
            color: "rgba(110,90,78,0.42)",
            maxWidth: "200px",
          }}
        >
          &ldquo;Every child deserves a story<br />worth growing inside.&rdquo;
        </p>

        {/* Handwritten signature */}
        <div
          className="relative select-none"
          style={{ width: "130px", height: "38px" }}
        >
          <Image
            src="/signature.png"
            alt="Signature of Poonam Choudhary"
            fill
            className="object-contain"
            style={{
              filter: "sepia(20%) opacity(0.38)",
            }}
          />
        </div>

        {/* Publisher seal */}
        <div
          className="flex flex-col items-center gap-[3px]"
          style={{
            border: "0.75px solid rgba(110,90,78,0.16)",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            justifyContent: "center",
          }}
        >
          <span
            className="font-display select-none"
            style={{
              fontSize: "10px",
              letterSpacing: "0.10em",
              color: "rgba(110,90,78,0.30)",
              lineHeight: 1,
            }}
          >
            PC
          </span>
          <span
            className="font-sans select-none"
            style={{
              fontSize: "5.5px",
              letterSpacing: "0.14em",
              color: "rgba(110,90,78,0.25)",
              lineHeight: 1,
            }}
          >
            MMXXVI
          </span>
        </div>

      </div>

      {/* ── Page Number ──────────────────────────────────────────────────── */}
      <div className="text-center pb-1">
        <span
          className="font-display select-none"
          style={{
            fontSize: "10px",
            letterSpacing: "0.30em",
            color: "rgba(110,90,78,0.28)",
          }}
        >
          ✦&thinsp;i&thinsp;✦
        </span>
      </div>

    </div>
  );
}
