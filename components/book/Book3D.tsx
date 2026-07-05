"use client";

import React from "react";

interface Book3DProps {
  children: React.ReactNode;
}

/**
 * Book3D — Premium physical book model wrapper.
 *
 * Clothbound hardcover edition upgrades:
 *  1. Sage linen hardcover boards (#8E9B84) — matches cover face.
 *  2. Stacked ivory paper block on bottom/sides.
 *  3. Deep center spine valley crease with lighting falloff.
 *  4. Layered ambient + contact shadows under the book spread.
 *  5. Subtle warm-gold page-edge tint on the stacked block.
 */
function Book3D({ children }: Book3DProps) {
  return (
    <div className="relative w-full h-full select-none">
      {/* ── 1. LAYERED DROP SHADOWS (Floating Book on Desk Effect) ── */}
      {/* Ambient shadow (large, soft spread) */}
      <div
        className="absolute inset-x-[-7%] inset-y-[-4%] rounded-[28px] pointer-events-none z-0 opacity-45 blur-[44px]"
        style={{
          background: "radial-gradient(circle, rgba(14,8,4,0.68) 0%, rgba(14,8,4,0) 78%)",
        }}
      />
      {/* Contact shadow (tight underneath the book boards) */}
      <div
        className="absolute inset-x-[-3%] bottom-[-19px] h-[42px] rounded-full pointer-events-none z-0 opacity-65 blur-[10px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,8,4,0.78) 0%, rgba(14,8,4,0) 75%)",
        }}
      />
      {/* Soft edge shadow */}
      <div
        className="absolute right-[-15px] bottom-[-10px] w-[160px] h-[50px] pointer-events-none z-0 opacity-35 blur-[10px] rotate-[2deg]"
        style={{
          background: "radial-gradient(circle, rgba(58,44,30,0.50) 0%, rgba(58,44,30,0) 70%)",
        }}
      />

      {/* ── 2. HARDCOVER BOARD BACKING — SAGE LINEN ── */}
      {/* Left board cover backing */}
      <div
        className="absolute top-[-4px] bottom-[-6px] rounded-none pointer-events-none z-0"
        style={{
          right: "50%",
          left: "-100.8%",
          background:
            "linear-gradient(160deg, #9FADA0 0%, #8E9B84 35%, #7F8E76 100%)",
          boxShadow: "inset 0 1px 1px rgba(174,184,161,0.30), 2px 8px 20px rgba(20,12,7,0.29)",
          borderRight: "1px solid rgba(62,76,56,0.25)",
        }}
      >
        {/* Linen weave simulation */}
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(80,95,72,0.12) 1.5px, rgba(80,95,72,0.12) 2px),
              repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(80,95,72,0.08) 1.5px, rgba(80,95,72,0.08) 2px)
            `,
            backgroundSize: "2px 2px",
          }}
        />
      </div>

      {/* Right board cover backing */}
      <div
        className="absolute top-[-4px] bottom-[-6px] rounded-none pointer-events-none z-0"
        style={{
          left: "50%",
          right: "-0.8%",
          background:
            "linear-gradient(200deg, #9FADA0 0%, #8E9B84 35%, #7F8E76 100%)",
          boxShadow: "inset 0 1px 1px rgba(174,184,161,0.30), -2px 8px 20px rgba(20,12,7,0.29)",
          borderLeft: "1px solid rgba(62,76,56,0.25)",
        }}
      >
        {/* Linen weave simulation */}
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(80,95,72,0.12) 1.5px, rgba(80,95,72,0.12) 2px),
              repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(80,95,72,0.08) 1.5px, rgba(80,95,72,0.08) 2px)
            `,
            backgroundSize: "2px 2px",
          }}
        />
      </div>

      {/* ── 3. STACKED PAPER BLOCK — warm ivory with subtle gold tint ── */}
      {/* Left page-stack thickness block */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-1"
        style={{
          right: "100%",
          width: "10px",
          left: "-100.4%",
          background: "#F5EED8",
          borderLeft: "0.5px solid rgba(110,90,60,0.14)",
          backgroundImage:
            "repeating-linear-gradient(to right, #F5EED8, #F5EED8 1.5px, #EDE5C8 1.5px, #EDE5C8 2.5px)",
          boxShadow: "inset 1px 0 3px rgba(58,44,30,0.04)",
        }}
      />

      {/* Right page-stack thickness block */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-1"
        style={{
          left: "100%",
          width: "10px",
          right: "-0.4%",
          background: "#F5EED8",
          borderRight: "0.5px solid rgba(110,90,60,0.14)",
          backgroundImage:
            "repeating-linear-gradient(to left, #F5EED8, #F5EED8 1.5px, #EDE5C8 1.5px, #EDE5C8 2.5px)",
          boxShadow: "inset -1px 0 3px rgba(58,44,30,0.04)",
        }}
      />

      {/* Bottom page-stack thickness block */}
      <div
        className="absolute bottom-[-5px] pointer-events-none z-1"
        style={{
          left: "-100.4%",
          right: "-0.4%",
          height: "5px",
          background: "#F5EED8",
          borderBottom: "0.5px solid rgba(110,90,60,0.14)",
          backgroundImage:
            "repeating-linear-gradient(to bottom, #F5EED8, #F5EED8 1.5px, #EDE5C8 1.5px, #EDE5C8 2.5px)",
          boxShadow: "inset 0 1px 3px rgba(58,44,30,0.04)",
        }}
      />

      {/* ── 4. MAIN PAGE CURVATURE DISTORTION ── */}
      <div
        className="relative w-full h-full z-10"
        style={{
          boxShadow: "inset 0 0 100px rgba(58,44,30,0.03)",
        }}
      >
        {children}
      </div>

      {/* ── 5. DEEP CENTER SPINE GUTTER ── */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: 0,
          transform: "translateX(-50%)",
          width: "36px",
          zIndex: 35,
          background:
            "linear-gradient(to right, rgba(40,55,35,0.18) 0%, rgba(40,55,35,0.08) 30%, rgba(40,55,35,0.01) 46%, rgba(174,184,161,0.06) 50%, rgba(40,55,35,0.01) 54%, rgba(40,55,35,0.08) 70%, rgba(40,55,35,0.18) 100%)",
        }}
      >
        {/* Deepest central crevice line */}
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px]"
          style={{
            background:
              "linear-gradient(to right, rgba(40,55,35,0.28), rgba(40,55,35,0.38) 50%, rgba(40,55,35,0.18))",
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(Book3D);
