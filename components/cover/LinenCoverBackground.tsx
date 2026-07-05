import React from "react";

interface LinenCoverBackgroundProps {
  isHovered?: boolean;
}

/**
 * LinenCoverBackground — Premium Walnut Brown linen clothbound cover texture.
 *
 * Implements:
 *  1. Deep Walnut Brown woven linen base (#4B2E20) with shadows (#3B2419) and highlights (#6A4630)
 *  2. Fine woven fabric texture with visible fibers (crosshatch warp/weft simulation)
 *  3. Inset debossed border frame with physical depth
 *  4. Blind-embossed corner botanical leaf motifs at all four corners
 *  5. Gold-foil publisher emblem (PC) in a circle at the bottom-left corner
 *  6. Hover-triggered micro-sheen light reflection sweep across the cover
 */
function LinenCoverBackground({ isHovered = false }: LinenCoverBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">

      {/* ── 1. BASE WALNUT BROWN MATERIAL ── */}
      <div
        className="absolute inset-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          background: `
            radial-gradient(
              ellipse 95% 85% at 50% 40%,
              #5E3D2B 0%,     /* Highlight */
              #4B2E20 40%,    /* Primary Walnut */
              #362016 85%,    /* Shadow */
              #2D1A12 100%    /* Deep shadow */
            )
          `,
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
              rgba(45, 26, 18, 0.22) 1.5px,
              rgba(45, 26, 18, 0.22) 2px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1.5px,
              rgba(45, 26, 18, 0.18) 1.5px,
              rgba(45, 26, 18, 0.18) 2px
            )
          `,
          backgroundSize: "2.2px 2.2px",
          mixBlendMode: "multiply",
          opacity: 0.75,
        }}
      />

      {/* ── 3. WOVEN CLOTH TEXTURE — diagonal fibers (warp & weft lift) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 3px,
              rgba(106, 70, 48, 0.10) 3px,
              rgba(106, 70, 48, 0.10) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 3px,
              rgba(45, 26, 18, 0.08) 3px,
              rgba(45, 26, 18, 0.08) 4px
            )
          `,
          backgroundSize: "4px 4px",
          opacity: 0.8,
        }}
      />

      {/* ── 4. DEBOSSED BORDER FRAME (12-18mm from edge) ── */}
      <div
        className="absolute transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          inset: "clamp(12px, 3.8%, 22px)",
          border: "1px solid rgba(45, 26, 18, 0.8)",
          // Debossing: inner shadow + outer highlight lip
          boxShadow: `
            inset 1px 1px 2px rgba(10, 5, 3, 0.75), 
            inset -0.5px -0.5px 1px rgba(106, 70, 48, 0.22),
            0.5px 0.5px 0px rgba(255, 255, 255, 0.05)
          `,
          borderRadius: "1px",
        }}
      >
        {/* ── 5. BLIND-EMBOSSED CORNER BOTANICAL MOTIFS ── */}
        {/* Top-Left Corner Motif */}
        <div className="absolute top-2 left-2 w-8 h-8 opacity-65">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 3 C12 3 20 8 20 18 M3 3 C3 12 8 20 18 20"
              stroke="rgba(35, 18, 12, 0.8)"
              strokeWidth="0.8"
            />
            {/* Highlights for debossed depth */}
            <path
              d="M3.5 3.5 C12 3.5 19.5 8.5 19.5 17.5"
              stroke="rgba(106, 70, 48, 0.25)"
              strokeWidth="0.4"
            />
            <circle cx="8" cy="8" r="1.5" fill="rgba(35, 18, 12, 0.6)" />
            <circle cx="14" cy="14" r="1.2" fill="rgba(35, 18, 12, 0.5)" />
          </svg>
        </div>

        {/* Top-Right Corner Motif */}
        <div className="absolute top-2 right-2 w-8 h-8 opacity-65 transform rotate-90">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 3 C12 3 20 8 20 18 M3 3 C3 12 8 20 18 20"
              stroke="rgba(35, 18, 12, 0.8)"
              strokeWidth="0.8"
            />
            <path
              d="M3.5 3.5 C12 3.5 19.5 8.5 19.5 17.5"
              stroke="rgba(106, 70, 48, 0.25)"
              strokeWidth="0.4"
            />
            <circle cx="8" cy="8" r="1.5" fill="rgba(35, 18, 12, 0.6)" />
            <circle cx="14" cy="14" r="1.2" fill="rgba(35, 18, 12, 0.5)" />
          </svg>
        </div>

        {/* Bottom-Left Corner Motif */}
        <div className="absolute bottom-2 left-2 w-8 h-8 opacity-65 transform -rotate-90">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 3 C12 3 20 8 20 18 M3 3 C3 12 8 20 18 20"
              stroke="rgba(35, 18, 12, 0.8)"
              strokeWidth="0.8"
            />
            <path
              d="M3.5 3.5 C12 3.5 19.5 8.5 19.5 17.5"
              stroke="rgba(106, 70, 48, 0.25)"
              strokeWidth="0.4"
            />
            <circle cx="8" cy="8" r="1.5" fill="rgba(35, 18, 12, 0.6)" />
            <circle cx="14" cy="14" r="1.2" fill="rgba(35, 18, 12, 0.5)" />
          </svg>
        </div>

        {/* Bottom-Right Corner Motif */}
        <div className="absolute bottom-2 right-2 w-8 h-8 opacity-65 transform rotate-180">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 3 C12 3 20 8 20 18 M3 3 C3 12 8 20 18 20"
              stroke="rgba(35, 18, 12, 0.8)"
              strokeWidth="0.8"
            />
            <path
              d="M3.5 3.5 C12 3.5 19.5 8.5 19.5 17.5"
              stroke="rgba(106, 70, 48, 0.25)"
              strokeWidth="0.4"
            />
            <circle cx="8" cy="8" r="1.5" fill="rgba(35, 18, 12, 0.6)" />
            <circle cx="14" cy="14" r="1.2" fill="rgba(35, 18, 12, 0.5)" />
          </svg>
        </div>

        {/* ── 6. GOLD-FOIL PUBLISHER EMBLEM (PC) ── */}
        <div
          className="absolute bottom-[4%] left-[4%] flex items-center justify-center pointer-events-none"
          style={{
            width: "clamp(24px, 6vw, 36px)",
            height: "clamp(24px, 6vw, 36px)",
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center border border-[#C8A56A]/60"
            style={{
              background: "rgba(200, 165, 106, 0.05)",
              boxShadow: `
                0.5px 0.5px 0.5px rgba(240, 215, 160, 0.7),
                inset -0.5px -0.5px 0.5px rgba(70, 50, 15, 0.5),
                0 2px 4px rgba(0, 0, 0, 0.15)
              `,
            }}
          >
            <span
              className="font-display font-bold italic"
              style={{
                fontSize: "clamp(8px, 1.8vw, 11px)",
                color: "#C8A56A",
                textShadow: "0.5px 0.5px 0px rgba(240, 215, 160, 0.5)",
                letterSpacing: "-0.05em",
                marginLeft: "-1px",
              }}
            >
              PC
            </span>
          </div>
        </div>
      </div>

      {/* ── 7. NATURAL LIGHTING GRADIENT ── */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 20% 15%, rgba(255, 245, 230, 0.12) 0%, rgba(106, 70, 48, 0.04) 50%, transparent 80%)",
        }}
      />

      {/* ── 8. HOVER-TRIGGERED METALLIC SHEEN SWEEP ── */}
      <div
        className="absolute inset-0 transition-transform duration-[1.4s] ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          background: `
            linear-gradient(
              125deg,
              transparent 25%,
              rgba(255, 242, 220, 0.0) 35%,
              rgba(255, 242, 220, 0.08) 45%,
              rgba(255, 242, 220, 0.16) 50%,
              rgba(255, 242, 220, 0.08) 55%,
              rgba(255, 242, 220, 0.0) 65%,
              transparent 100%
            )
          `,
          transform: isHovered ? "translate3d(60%, 60%, 0)" : "translate3d(-60%, -60%, 0)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* ── 9. CLOTH BEVEL HIGHLIGHTS (Thickness wrap at card edges) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: `
            inset 0 1px 0px rgba(255, 255, 255, 0.08), 
            inset 1px 0 0px rgba(255, 255, 255, 0.05),
            inset -1px 0 0px rgba(0, 0, 0, 0.35),
            inset 0 -1px 0px rgba(0, 0, 0, 0.45)
          `,
        }}
      />

    </div>
  );
}

export default React.memo(LinenCoverBackground);
