import React from "react";

/**
 * LinenCoverBackground — Premium sage linen clothbound cover texture.
 *
 * Replaces PaperBackground on the front cover face.
 * Simulates:
 *  1. Muted sage woven linen base (#8E9B84)
 *  2. Fine crosshatch weave pattern (fine linen grain)
 *  3. Natural depth: darker edges, lighter center lighting
 *  4. Blind-emboss botanical motif (ultra-subtle, same-color linework)
 *  5. Soft ambient light catch from top-left
 */
function LinenCoverBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">

      {/* ── 1. BASE LINEN COLOUR ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #9FADA0 0%, #8E9B84 28%, #879680 55%, #8E9B84 72%, #7F8E76 100%)",
        }}
      />

      {/* ── 2. WOVEN CLOTH TEXTURE — fine horizontal threads ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1.5px,
              rgba(80, 95, 72, 0.12) 1.5px,
              rgba(80, 95, 72, 0.12) 2px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1.5px,
              rgba(80, 95, 72, 0.08) 1.5px,
              rgba(80, 95, 72, 0.08) 2px
            )
          `,
          backgroundSize: "2px 2px",
          mixBlendMode: "multiply",
          opacity: 0.65,
        }}
      />

      {/* ── 3. WOVEN CLOTH TEXTURE — diagonal warp lift (linen weave character) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 3px,
              rgba(174, 184, 161, 0.07) 3px,
              rgba(174, 184, 161, 0.07) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 3px,
              rgba(80, 95, 72, 0.05) 3px,
              rgba(80, 95, 72, 0.05) 4px
            )
          `,
          backgroundSize: "4px 4px",
          opacity: 0.7,
        }}
      />

      {/* ── 4. LIGHTING — warm morning light catch from top-left ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 30% 20%, rgba(210,220,200,0.18) 0%, rgba(174,184,161,0.06) 45%, transparent 70%)",
        }}
      />

      {/* ── 5. DEPTH VIGNETTE — darker at edges, lighter at center ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 48%, transparent 35%, rgba(80,95,72,0.22) 70%, rgba(62,76,56,0.40) 100%)",
        }}
      />

      {/* ── 6. TOP EDGE DARKEN — simulates cloth wrapping over board ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[8%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(62,76,56,0.35) 0%, transparent 100%)",
        }}
      />

      {/* ── 7. BOTTOM EDGE DARKEN ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[6%]"
        style={{
          background:
            "linear-gradient(to top, rgba(55,68,50,0.30) 0%, transparent 100%)",
        }}
      />

      {/* ── 8. BLIND EMBOSS BOTANICAL — olive branch, bottom right ── */}
      {/* Ultra-subtle: same color family, only visible with light angle */}
      <div
        className="absolute"
        style={{
          bottom: "6%",
          right: "6%",
          width: "28%",
          height: "38%",
          opacity: 1,
          zIndex: 2,
        }}
      >
        <svg
          viewBox="0 0 120 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Main stem */}
          <path
            d="M60 170 C58 140 55 110 60 80 C63 60 58 40 62 20"
            stroke="rgba(80,95,72,0.22)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left leaves */}
          <path d="M60 145 C48 140 40 132 38 120 C50 122 58 132 60 145Z" fill="rgba(80,95,72,0.11)" stroke="rgba(80,95,72,0.16)" strokeWidth="0.6"/>
          <path d="M60 120 C46 114 38 105 37 92 C50 95 58 107 60 120Z" fill="rgba(80,95,72,0.09)" stroke="rgba(80,95,72,0.14)" strokeWidth="0.5"/>
          <path d="M60 95 C47 90 40 80 40 68 C52 72 59 84 60 95Z" fill="rgba(80,95,72,0.08)" stroke="rgba(80,95,72,0.12)" strokeWidth="0.5"/>
          <path d="M60 70 C49 64 43 54 44 42 C55 47 60 59 60 70Z" fill="rgba(80,95,72,0.07)" stroke="rgba(80,95,72,0.11)" strokeWidth="0.4"/>
          {/* Right leaves */}
          <path d="M60 155 C72 148 80 138 80 126 C68 129 61 140 60 155Z" fill="rgba(80,95,72,0.10)" stroke="rgba(80,95,72,0.15)" strokeWidth="0.6"/>
          <path d="M60 130 C73 124 81 113 80 100 C68 104 61 116 60 130Z" fill="rgba(80,95,72,0.08)" stroke="rgba(80,95,72,0.13)" strokeWidth="0.5"/>
          <path d="M60 105 C72 100 78 90 77 78 C66 82 61 93 60 105Z" fill="rgba(80,95,72,0.07)" stroke="rgba(80,95,72,0.12)" strokeWidth="0.4"/>
          <path d="M60 80 C71 75 76 65 74 53 C64 58 60 69 60 80Z" fill="rgba(80,95,72,0.07)" stroke="rgba(80,95,72,0.11)" strokeWidth="0.4"/>
          {/* Tiny olive berries */}
          <circle cx="37" cy="119" r="2.5" fill="rgba(80,95,72,0.12)"/>
          <circle cx="80" cy="125" r="2.5" fill="rgba(80,95,72,0.10)"/>
          <circle cx="39" cy="67" r="2" fill="rgba(80,95,72,0.09)"/>
          {/* Tip bud */}
          <ellipse cx="62" cy="20" rx="3" ry="5" fill="rgba(80,95,72,0.12)" stroke="rgba(80,95,72,0.16)" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* ── 9. BLIND EMBOSS BOTANICAL — eucalyptus sprig, top left ── */}
      <div
        className="absolute"
        style={{
          top: "5%",
          left: "5%",
          width: "22%",
          height: "30%",
          opacity: 1,
          zIndex: 2,
        }}
      >
        <svg
          viewBox="0 0 100 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%", transform: "scaleX(-1) rotate(20deg)" }}
        >
          <path d="M50 130 C48 100 44 70 50 40 C53 22 49 10 51 2" stroke="rgba(80,95,72,0.18)" strokeWidth="1" strokeLinecap="round" fill="none"/>
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <ellipse
                cx={42 - i * 2}
                cy={115 - i * 22}
                rx={10 - i}
                ry={6}
                transform={`rotate(-${25 + i * 5} ${42 - i * 2} ${115 - i * 22})`}
                fill="rgba(80,95,72,0.09)"
                stroke="rgba(80,95,72,0.13)"
                strokeWidth="0.5"
              />
              <ellipse
                cx={58 + i * 2}
                cy={110 - i * 22}
                rx={10 - i}
                ry={6}
                transform={`rotate(${25 + i * 5} ${58 + i * 2} ${110 - i * 22})`}
                fill="rgba(80,95,72,0.08)"
                stroke="rgba(80,95,72,0.12)"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ── 10. CLOTH SURFACE MICRO-SHEEN — very faint highlight stripe ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(210,220,200,0.06) 0%, transparent 40%, rgba(80,95,72,0.04) 70%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

export default React.memo(LinenCoverBackground);
