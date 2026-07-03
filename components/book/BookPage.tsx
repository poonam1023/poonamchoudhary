import React from "react";

interface BookPageProps {
  /** Which side of the spread this page occupies — controls shadow direction and aging. */
  side: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

/**
 * BookPage — V4
 *
 * Paper realism layers (cumulative from all versions):
 *  1.  Paper fibre weave crosshatch
 *  2.  SVG turbulence grain (paper-grain-overlay)
 *  3.  SVG noise light (paper-grain-light)
 *  4.  Aged yellowing corner
 *  5.  Corner age spots × 4
 *  6.  Micro stains × 3
 *  7.  Spine gutter shadow (wide feathered)
 *  8.  Tight spine crease line
 *  9.  Page surface curvature radial
 *  10. Horizontal paper warp band
 *  11. Ink spread warm tint
 *  12. Edge highlight & page thickness
 *  13. Physical page-stack outer edge
 *  14. Outer edge ambient shadow
 *
 * V4 additions:
 *  15. Foxing spots — 5 tiny aged brown dots at seeded positions
 *  16. Very subtle top-edge darkening (moisture absorption)
 */
export default function BookPage({ side, children, className = "" }: BookPageProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background: isLeft
          ? "linear-gradient(162deg, #FAF7F2 0%, #F7F3EC 38%, #F5F0E8 100%)"
          : "linear-gradient(198deg, #FAF7F2 0%, #F7F3EC 42%, #F5F0E8 100%)",
        boxShadow: isLeft
          ? "inset -22px 0 38px -4px rgba(58,44,30,0.05), inset -4px 0 8px rgba(58,44,30,0.06)"
          : "inset 22px 0 38px -4px rgba(58,44,30,0.05), inset 4px 0 8px rgba(58,44,30,0.06)",
      }}
    >
      {/* ── 1. Premium hand-made paper grain (non-repeating, ultra-subtle) ── */}
      <div className="absolute inset-0 paper-grain-overlay pointer-events-none select-none" />

      {/* ── 4. Aged Yellowing — warm corner discoloration ────────────────── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: isLeft ? "auto" : 0,
          bottom: isLeft ? 0 : "auto",
          right: isLeft ? 0 : "auto",
          left: isLeft ? "auto" : 0,
          width: "200px",
          height: "200px",
          background: `radial-gradient(circle at ${isLeft ? "100% 100%" : "0% 0%"}, rgba(196,168,130,0.04) 0%, transparent 70%)`,
          filter: "blur(32px)",
        }}
      />

      {/* ── 5. Corner Age Spots × 4 ─────────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 0% 0%, rgba(110,90,78,0.04) 0%, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(110,90,78,0.035) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 0% 100%, rgba(110,90,78,0.04) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none select-none"
        style={{ background: "radial-gradient(circle at 100% 100%, rgba(110,90,78,0.045) 0%, transparent 70%)" }} />

      {/* ── 6. Micro Stains ─────────────────────────────────────────────── */}
      <div className="absolute pointer-events-none select-none"
        style={{ top: "27%", left: isLeft ? "22%" : "17%", width: "80px", height: "56px",
          background: "radial-gradient(ellipse, rgba(110,90,78,0.032) 0%, transparent 70%)", filter: "blur(14px)" }} />
      <div className="absolute pointer-events-none select-none"
        style={{ top: "61%", right: isLeft ? "13%" : "18%", width: "52px", height: "40px",
          background: "radial-gradient(ellipse, rgba(148,118,82,0.024) 0%, transparent 70%)", filter: "blur(9px)" }} />
      <div className="absolute pointer-events-none select-none"
        style={{ top: "44%", left: isLeft ? "52%" : "60%", width: "34px", height: "28px",
          background: "radial-gradient(ellipse, rgba(110,90,78,0.020) 0%, transparent 70%)", filter: "blur(7px)" }} />

      {/* ── 7. Spine Gutter Shadow — wide feathered ─────────────────────── */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none select-none"
        style={{
          [isLeft ? "right" : "left"]: 0,
          width: "36px",
          background: `linear-gradient(to ${isLeft ? "left" : "right"}, rgba(58,44,30,0.05) 0%, rgba(58,44,30,0.02) 50%, transparent 100%)`,
        }}
      />

      {/* ── 8. Tight spine crease line ──────────────────────────────────── */}
      <div
        className="absolute top-4 bottom-4 pointer-events-none select-none"
        style={{
          [isLeft ? "right" : "left"]: 0,
          width: "4px",
          background: `linear-gradient(to ${isLeft ? "left" : "right"}, rgba(58,44,30,0.08) 0%, rgba(58,44,30,0.03) 60%, transparent 100%)`,
          filter: "blur(1px)",
        }}
      />

      {/* ── 9. Page Surface Curvature ────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          background: `radial-gradient(ellipse at ${isLeft ? "38%" : "62%"} 50%, rgba(255,252,244,0.06) 0%, transparent 60%)`,
        }}
      />

      {/* ── 10. Horizontal Paper Warp Band ──────────────────────────────── */}
      <div
        className="absolute left-0 right-0 pointer-events-none select-none"
        style={{
          top: "46%",
          height: "60px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(196,176,148,0.010) 50%, transparent 100%)",
        }}
      />

      {/* ── 11. Ink Spread ──────────────────────────────────────────────── */}
      <div
        className="absolute left-0 right-0 pointer-events-none select-none"
        style={{
          top: "15%",
          height: "55%",
          background: `radial-gradient(ellipse at 50% 30%, rgba(110,90,78,0.008) 0%, transparent 70%)`,
        }}
      />

      {/* ── 12. Edge Highlight & Page Thickness ─────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.40),
            inset 0 -1px 0 rgba(110,90,78,0.05),
            inset ${isLeft ? "-" : ""}1px 0 rgba(110,90,78,0.04)
          `,
        }}
      />

      {/* ── 13. Physical page-stack outer edge ──────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none select-none"
        style={{
          [isLeft ? "left" : "right"]: 0,
          width: "2px",
          background: isLeft
            ? "linear-gradient(to right, rgba(110,90,78,0.10), rgba(110,90,78,0.04))"
            : "linear-gradient(to left, rgba(110,90,78,0.10), rgba(110,90,78,0.04))",
        }}
      />

      {/* ── 14. Outer Edge Ambient Shadow ───────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none select-none"
        style={{
          [isLeft ? "left" : "right"]: 0,
          width: "16px",
          background: `linear-gradient(to ${isLeft ? "right" : "left"}, rgba(58,44,30,0.02) 0%, transparent 100%)`,
        }}
      />

      {/* ── 15. Foxing Spots — reduced ──────────────────────────────────── */}
      <div className="absolute pointer-events-none select-none"
        style={{ top: "55%", left: isLeft ? "80%" : "18%", width: "8px", height: "8px",
          background: "radial-gradient(circle, rgba(168,128,68,0.020) 0%, transparent 70%)", filter: "blur(2px)" }} />
      <div className="absolute pointer-events-none select-none"
        style={{ top: "72%", left: isLeft ? "30%" : "65%", width: "6px", height: "6px",
          background: "radial-gradient(circle, rgba(138,106,52,0.025) 0%, transparent 70%)", filter: "blur(1.5px)" }} />

      {/* ── 16. Top edge moisture darkening ────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none select-none"
        style={{
          height: "20px",
          background: "linear-gradient(to bottom, rgba(110,90,78,0.025) 0%, transparent 100%)",
        }}
      />

      {/* ── Content Layer ────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
