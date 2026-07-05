"use client";

import React from "react";

interface Book3DProps {
  children: React.ReactNode;
}

/**
 * Book3D — Premium physical book model wrapper.
 *
 * Upgrades:
 *  1. Walnut Brown linen cover boards (#4B2E20, #3B2419, #6A4630) with linen texture overlay.
 *  2. Gilt (soft gold foil) page edges with individual sheet lines.
 *  3. Dark brown satin bookmark ribbon hanging from the bottom spine gutter with a drop shadow.
 *  4. Deep spine valley crease with brown shadow falloff.
 */
function Book3D({ children }: Book3DProps) {
  return (
    <div className="relative w-full h-full select-none">
      {/* ── 1. LAYERED DROP SHADOWS (Floating Book on Desk Effect) ── */}
      {/* Ambient shadow (large, soft spread) */}
      <div
        className="absolute inset-x-[-7%] inset-y-[-4%] rounded-[28px] pointer-events-none z-0 opacity-45 blur-[44px]"
        style={{
          background: "radial-gradient(circle, rgba(14,8,4,0.72) 0%, rgba(14,8,4,0) 78%)",
        }}
      />
      {/* Contact shadow (tight underneath the book boards) */}
      <div
        className="absolute inset-x-[-3%] bottom-[-19px] h-[42px] rounded-full pointer-events-none z-0 opacity-65 blur-[10px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,8,4,0.85) 0%, rgba(14,8,4,0) 75%)",
        }}
      />
      {/* Soft edge shadow */}
      <div
        className="absolute right-[-15px] bottom-[-10px] w-[160px] h-[50px] pointer-events-none z-0 opacity-35 blur-[10px] rotate-[2deg]"
        style={{
          background: "radial-gradient(circle, rgba(40,25,15,0.60) 0%, rgba(40,25,15,0) 70%)",
        }}
      />

      {/* ── 2. HARDCOVER BOARD BACKING — WALNUT BROWN LINEN ── */}
      {/* Left board cover backing */}
      <div
        className="absolute top-[-4px] bottom-[-6px] rounded-none pointer-events-none z-0"
        style={{
          right: "50%",
          left: "-100.8%",
          background: `
            linear-gradient(
              160deg, 
              #5E3D2B 0%,     /* Highlights */
              #4B2E20 35%,    /* Primary Walnut */
              #362016 80%,    /* Shadows */
              #2D1A12 100%
            )
          `,
          boxShadow: "inset 0 1px 1px rgba(106,70,48,0.30), 2px 8px 20px rgba(14,8,4,0.35)",
          borderRight: "1px solid rgba(45,26,18,0.35)",
        }}
      >
        {/* Linen weave simulation */}
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(45,26,18,0.18) 1.5px, rgba(45, 26, 18, 0.18) 2px),
              repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(45,26,18,0.14) 1.5px, rgba(45, 26, 18, 0.14) 2px)
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
          background: `
            linear-gradient(
              200deg, 
              #5E3D2B 0%,     /* Highlights */
              #4B2E20 35%,    /* Primary Walnut */
              #362016 80%,    /* Shadows */
              #2D1A12 100%
            )
          `,
          boxShadow: "inset 0 1px 1px rgba(106,70,48,0.30), -2px 8px 20px rgba(14,8,4,0.35)",
          borderLeft: "1px solid rgba(45,26,18,0.35)",
        }}
      >
        {/* Linen weave simulation */}
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(45,26,18,0.18) 1.5px, rgba(45, 26, 18, 0.18) 2px),
              repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(45,26,18,0.14) 1.5px, rgba(45, 26, 18, 0.14) 2px)
            `,
            backgroundSize: "2px 2px",
          }}
        />
      </div>

      {/* ── 3. GILT PAGE BLOCK EDGES (Warm ivory with soft golden edge reflection) ── */}
      {/* Left page-stack thickness block */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-1"
        style={{
          right: "100%",
          width: "10px",
          left: "-100.4%",
          background: "linear-gradient(to right, #DAB880 0%, #FAF5E8 30%, #E8C690 70%, #C4A26C 100%)",
          borderLeft: "0.5px solid rgba(110,90,60,0.18)",
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              #FAF5E8 0px,
              #FAF5E8 1px,
              #E5C38C 1.5px,
              #D2AD73 2.5px,
              #FAF5E8 3px
            )
          `,
          boxShadow: "inset 1px 0 3px rgba(45,26,18,0.10)",
        }}
      />

      {/* Right page-stack thickness block */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-1"
        style={{
          left: "100%",
          width: "10px",
          right: "-0.4%",
          background: "linear-gradient(to left, #DAB880 0%, #FAF5E8 30%, #E8C690 70%, #C4A26C 100%)",
          borderRight: "0.5px solid rgba(110,90,60,0.18)",
          backgroundImage: `
            repeating-linear-gradient(
              to left,
              #FAF5E8 0px,
              #FAF5E8 1px,
              #E5C38C 1.5px,
              #D2AD73 2.5px,
              #FAF5E8 3px
            )
          `,
          boxShadow: "inset -1px 0 3px rgba(45,26,18,0.10)",
        }}
      />

      {/* Bottom page-stack thickness block */}
      <div
        className="absolute bottom-[-5px] pointer-events-none z-1"
        style={{
          left: "-100.4%",
          right: "-0.4%",
          height: "5px",
          background: "linear-gradient(to bottom, #DAB880 0%, #FAF5E8 30%, #E8C690 70%, #C4A26C 100%)",
          borderBottom: "0.5px solid rgba(110,90,60,0.18)",
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              #FAF5E8 0px,
              #FAF5E8 1px,
              #E5C38C 1.5px,
              #D2AD73 2.5px,
              #FAF5E8 3px
            )
          `,
          boxShadow: "inset 0 1px 3px rgba(45,26,18,0.10)",
        }}
      />

      {/* ── 4. MAIN PAGE CURVATURE DISTORTION ── */}
      <div
        className="relative w-full h-full z-10"
        style={{
          boxShadow: "inset 0 0 100px rgba(45,26,18,0.03)",
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
            "linear-gradient(to right, rgba(35,20,12,0.22) 0%, rgba(35,20,12,0.12) 30%, rgba(35,20,12,0.01) 46%, rgba(200,165,106,0.04) 50%, rgba(35,20,12,0.01) 54%, rgba(35,20,12,0.12) 70%, rgba(35,20,12,0.22) 100%)",
        }}
      >
        {/* Deepest central crevice line */}
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px]"
          style={{
            background:
              "linear-gradient(to right, rgba(30,16,10,0.35), rgba(30,16,10,0.48) 50%, rgba(30,16,10,0.22))",
          }}
        />
      </div>

      {/* ── 6. BOOKMARK RIBBON (Dark brown satin ribbon draping onto desk) ── */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          bottom: "-74px",
          left: "48%",
          width: "22px",
          height: "80px",
          transform: "translateX(-50%) rotate(-3deg)",
          zIndex: 0, // Behind the book, lying on the desk
          background: "linear-gradient(to right, #1F100A 0%, #3B2117 30%, #46281C 50%, #3B2117 70%, #1F100A 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)",
          filter: "drop-shadow(2px 4px 5px rgba(10,5,3,0.60))",
        }}
      >
        {/* Satin sheen highlight stripe */}
        <div
          className="absolute inset-y-0 left-[35%] w-[12%]"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(Book3D);
