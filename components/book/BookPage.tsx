import React from "react";

interface BookPageProps {
  /** Which side of the spread this page occupies — controls shadow direction and aging position. */
  side: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

/**
 * BookPage
 *
 * Renders a single page of the book with layered paper realism:
 * - Warm aged cream background gradient
 * - Micro paper fibre weave
 * - SVG turbulence grain (reusing existing filter IDs from layout.tsx)
 * - Corner age spots and yellowing discoloration
 * - Micro stains
 * - Spine gutter shadow
 * - Edge highlight and page thickness
 *
 * Never owns content — content is always provided as children.
 */
export default function BookPage({ side, children, className = "" }: BookPageProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        // Warm aged cream — slightly more yellow at top for left, bottom for right
        background: isLeft
          ? "linear-gradient(160deg, #F7EDCC 0%, #F3E8C9 40%, #EDE0BC 100%)"
          : "linear-gradient(200deg, #F8EFD0 0%, #F4EAC8 45%, #EDE1BE 100%)",
        // Gutter inner shadow — heavier toward spine
        boxShadow: isLeft
          ? "inset -18px 0 32px -6px rgba(0,0,0,0.07), inset -2px 0 5px rgba(110,90,78,0.10)"
          : "inset 18px 0 32px -6px rgba(0,0,0,0.07), inset 2px 0 5px rgba(110,90,78,0.10)",
      }}
    >
      {/* ── 1. Paper Fibre Weave ───────────────────────────────────────
          Mimics the cross-hatch of fine book paper under close inspection.
          Extremely low opacity — felt rather than seen.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              87deg,
              rgba(110,90,78,0.024) 0px,
              rgba(110,90,78,0.024) 1px,
              transparent 1px,
              transparent 3px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(110,90,78,0.016) 0px,
              rgba(110,90,78,0.016) 1px,
              transparent 1px,
              transparent 4px
            )
          `,
        }}
      />

      {/* ── 2. SVG Turbulence Grain ──────────────────────────────────────
          Reuses the filter IDs defined in layout.tsx.
         ──────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 paper-grain-overlay pointer-events-none select-none" />
      <div className="absolute inset-0 paper-grain-light pointer-events-none select-none" />

      {/* ── 3. Aged Yellowing ────────────────────────────────────────────
          Warm yellow-orange discoloration in one corner, as if exposed
          to light over decades.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          // Left page ages at bottom-right (spine side), right page at top-left (also spine side)
          top: isLeft ? "auto" : 0,
          bottom: isLeft ? 0 : "auto",
          right: isLeft ? 0 : "auto",
          left: isLeft ? "auto" : 0,
          width: "180px",
          height: "180px",
          background: `radial-gradient(circle at ${isLeft ? "100% 100%" : "0% 0%"}, rgba(185,145,55,0.075) 0%, transparent 70%)`,
          filter: "blur(28px)",
        }}
      />

      {/* ── 4. Corner Age Spots ──────────────────────────────────────────
          Four corners show very subtle darkening — simulates oxidization.
         ──────────────────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-14 h-14 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 0% 0%, rgba(110,90,78,0.065) 0%, transparent 72%)" }} />
      <div className="absolute top-0 right-0 w-14 h-14 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(110,90,78,0.065) 0%, transparent 72%)" }} />
      <div className="absolute bottom-0 left-0 w-14 h-14 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 0% 100%, rgba(110,90,78,0.075) 0%, transparent 72%)" }} />
      <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 100% 100%, rgba(110,90,78,0.075) 0%, transparent 72%)" }} />

      {/* ── 5. Micro Stains ──────────────────────────────────────────────
          Near-invisible blemishes — the fingerprint of time.
          Positions are deliberately asymmetric and non-repeating.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "28%",
          left: isLeft ? "23%" : "18%",
          width: "72px",
          height: "52px",
          background: "radial-gradient(ellipse, rgba(110,90,78,0.03) 0%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "63%",
          right: isLeft ? "14%" : "19%",
          width: "48px",
          height: "38px",
          background: "radial-gradient(ellipse, rgba(145,115,80,0.022) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "48%",
          left: isLeft ? "55%" : "65%",
          width: "30px",
          height: "25px",
          background: "radial-gradient(ellipse, rgba(110,90,78,0.018) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      {/* ── 6. Spine Gutter Shadow ───────────────────────────────────────
          Inner shadow along the edge facing the book's spine.
          Creates the illusion of pages curving inward toward the binding.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none select-none"
        style={{
          [isLeft ? "right" : "left"]: 0,
          width: "36px",
          background: `linear-gradient(to ${isLeft ? "left" : "right"}, rgba(0,0,0,0.065) 0%, rgba(0,0,0,0.02) 60%, transparent 100%)`,
        }}
      />

      {/* ── 7. Page Surface Curvature ────────────────────────────────────
          Subtle mid-page lightening — simulates page bowing slightly
          away from the spine, catching more light at the center.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          background: `radial-gradient(ellipse at ${isLeft ? "35%" : "65%"} 50%, rgba(255,252,242,0.09) 0%, transparent 65%)`,
        }}
      />

      {/* ── 8. Edge Highlight & Page Thickness ──────────────────────────
          Inset box-shadow simulates the physical edge of the paper
          with a highlight on the top and a shadow at the bottom.
         ──────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.55),
            inset 0 -1px 0 rgba(110,90,78,0.07),
            inset ${isLeft ? "-" : ""}1px 0 rgba(110,90,78,0.05)
          `,
        }}
      />

      {/* Physical page-stack thickness line along the outer edge */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none select-none"
        style={{
          [isLeft ? "left" : "right"]: 0,
          width: "2px",
          background: isLeft
            ? "linear-gradient(to right, rgba(110,90,78,0.14), rgba(110,90,78,0.04))"
            : "linear-gradient(to left, rgba(110,90,78,0.14), rgba(110,90,78,0.04))",
        }}
      />

      {/* ── Content Layer ────────────────────────────────────────────────
          All children render above the paper texture layers at z-10.
         ──────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
