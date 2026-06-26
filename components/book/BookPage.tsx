import React from "react";

interface BookPageProps {
  /** Which side of the spread this page occupies — controls shadow direction and aging. */
  side: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

/**
 * BookPage — V2
 *
 * Enhanced paper realism. Added layers:
 *  9.  Deeper spine gutter with visible page-warp curvature near binding
 *  10. Outer edge shadow — book edge catching ambient light
 *  11. Horizontal paper warp band — subtle light shift across page mid-point
 *  12. Ink spread layer — very faint warm tint simulating ink absorption
 *
 * All texture should be felt, never noticed.
 * If you can name the effect, it is too strong.
 */
export default function BookPage({ side, children, className = "" }: BookPageProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        // Warm aged cream — the right page is slightly warmer toward the outer edge
        background: isLeft
          ? "linear-gradient(162deg, #F6EBCA 0%, #F2E6C6 38%, #EBD9B5 100%)"
          : "linear-gradient(198deg, #F7EDD0 0%, #F3E8C7 42%, #ECE0BA 100%)",
        // Gutter inner shadow — deeper than V1, creates convincing page curve
        boxShadow: isLeft
          ? "inset -22px 0 38px -4px rgba(0,0,0,0.09), inset -4px 0 8px rgba(110,90,78,0.12)"
          : "inset 22px 0 38px -4px rgba(0,0,0,0.09), inset 4px 0 8px rgba(110,90,78,0.12)",
      }}
    >
      {/* ── 1. Paper Fibre Weave ─────────────────────────────────────────
          Fine crosshatch at near-zero opacity. Felt, not seen.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              87deg,
              rgba(110,90,78,0.026) 0px,
              rgba(110,90,78,0.026) 1px,
              transparent 1px,
              transparent 3px
            ),
            repeating-linear-gradient(
              1deg,
              rgba(110,90,78,0.017) 0px,
              rgba(110,90,78,0.017) 1px,
              transparent 1px,
              transparent 4px
            )
          `,
        }}
      />

      {/* ── 2. SVG Turbulence Grain ─────────────────────────────────────
          Reuses filter IDs from layout.tsx.
         ──────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 paper-grain-overlay pointer-events-none select-none" />
      <div className="absolute inset-0 paper-grain-light pointer-events-none select-none" />

      {/* ── 3. Aged Yellowing — warm corner discoloration ───────────────
          Left page ages at bottom-right; right at top-left (spine proximity).
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: isLeft ? "auto" : 0,
          bottom: isLeft ? 0 : "auto",
          right: isLeft ? 0 : "auto",
          left: isLeft ? "auto" : 0,
          width: "200px",
          height: "200px",
          background: `radial-gradient(circle at ${isLeft ? "100% 100%" : "0% 0%"}, rgba(190,148,52,0.08) 0%, transparent 70%)`,
          filter: "blur(32px)",
        }}
      />

      {/* ── 4. Corner Age Spots ─────────────────────────────────────────
          Four corners — subtle oxidization darkening.
         ──────────────────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 0% 0%, rgba(110,90,78,0.07) 0%, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(110,90,78,0.065) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 0% 100%, rgba(110,90,78,0.075) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 100% 100%, rgba(110,90,78,0.08) 0%, transparent 70%)" }} />

      {/* ── 5. Micro Stains — fingerprints of time ──────────────────────
          Asymmetric, non-repeating. Near-invisible blemishes.
         ──────────────────────────────────────────────────────────────── */}
      <div className="absolute pointer-events-none select-none"
        style={{ top: "27%", left: isLeft ? "22%" : "17%", width: "80px", height: "56px",
          background: "radial-gradient(ellipse, rgba(110,90,78,0.032) 0%, transparent 70%)", filter: "blur(14px)" }} />
      <div className="absolute pointer-events-none select-none"
        style={{ top: "61%", right: isLeft ? "13%" : "18%", width: "52px", height: "40px",
          background: "radial-gradient(ellipse, rgba(148,118,82,0.024) 0%, transparent 70%)", filter: "blur(9px)" }} />
      <div className="absolute pointer-events-none select-none"
        style={{ top: "44%", left: isLeft ? "52%" : "60%", width: "34px", height: "28px",
          background: "radial-gradient(ellipse, rgba(110,90,78,0.020) 0%, transparent 70%)", filter: "blur(7px)" }} />

      {/* ── 6. Spine Gutter Shadow — deeper than V1 ─────────────────────
          Gradient that pools at the spine and feathers outward.
          The second layer (darker, tighter) creates the actual crease.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none select-none"
        style={{
          [isLeft ? "right" : "left"]: 0,
          width: "48px",
          background: `linear-gradient(to ${isLeft ? "left" : "right"}, rgba(0,0,0,0.09) 0%, rgba(0,0,0,0.04) 50%, transparent 100%)`,
        }}
      />
      {/* Tight dark crease line at the very spine edge */}
      <div
        className="absolute top-4 bottom-4 pointer-events-none select-none"
        style={{
          [isLeft ? "right" : "left"]: 0,
          width: "6px",
          background: `linear-gradient(to ${isLeft ? "left" : "right"}, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.06) 60%, transparent 100%)`,
          filter: "blur(1px)",
        }}
      />

      {/* ── 7. Page Surface Curvature ────────────────────────────────────
          Radial lightening toward mid-page — page bowing away from spine.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          background: `radial-gradient(ellipse at ${isLeft ? "38%" : "62%"} 50%, rgba(255,252,244,0.10) 0%, transparent 60%)`,
        }}
      />

      {/* ── 8. Horizontal Paper Warp Band ────────────────────────────────
          A barely-visible horizontal band of slightly different tone
          simulates the micro-warp of paper absorbing humidity over time.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute left-0 right-0 pointer-events-none select-none"
        style={{
          top: "46%",
          height: "80px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(185,145,70,0.018) 50%, transparent 100%)",
        }}
      />

      {/* ── 9. Ink Spread — warm tint in text areas ──────────────────────
          Very faint warm tinge in the upper reading area, as if ink
          has been absorbed into the fibres over decades.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute left-0 right-0 pointer-events-none select-none"
        style={{
          top: "15%",
          height: "55%",
          background: `radial-gradient(ellipse at 50% 30%, rgba(140,110,70,0.015) 0%, transparent 70%)`,
        }}
      />

      {/* ── 10. Edge Highlight & Page Thickness ──────────────────────────
           Top highlight: paper edge catching overhead light.
           Bottom shadow: page weight resting.
           Outer edge: stack of pages below this one.
          ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.60),
            inset 0 -1px 0 rgba(110,90,78,0.08),
            inset ${isLeft ? "-" : ""}1px 0 rgba(110,90,78,0.06)
          `,
        }}
      />

      {/* Physical page-stack edge — outer side shows slight darkness from pages below */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none select-none"
        style={{
          [isLeft ? "left" : "right"]: 0,
          width: "3px",
          background: isLeft
            ? "linear-gradient(to right, rgba(110,90,78,0.18), rgba(110,90,78,0.06))"
            : "linear-gradient(to left, rgba(110,90,78,0.18), rgba(110,90,78,0.06))",
        }}
      />

      {/* ── 11. Outer Edge Ambient Shadow ────────────────────────────────
           Soft darkening along the outer edge of the book —
           simulates the ambient shadow cast by the desk beneath.
          ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none select-none"
        style={{
          [isLeft ? "left" : "right"]: 0,
          width: "20px",
          background: `linear-gradient(to ${isLeft ? "right" : "left"}, rgba(0,0,0,0.04) 0%, transparent 100%)`,
        }}
      />

      {/* ── Content Layer ────────────────────────────────────────────────
           Renders above all paper texture at z-10.
          ──────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
