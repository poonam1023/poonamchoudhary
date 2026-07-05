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
          width: "14px",
          left: "-101%",
          backgroundColor: "#CFAF6E",
          background: `
            linear-gradient(
              to right,
              #A87E46 0%,
              #C49F60 24%,
              #E5CB88 54%,
              #D4B876 100%
            )
          `,
          borderLeft: "0.5px solid rgba(110,90,60,0.18)",
          boxShadow: "inset 2px 0 4px rgba(255,245,205,0.28), inset -2px 0 5px rgba(72,45,24,0.18)",
        }}
      />

      {/* Right page-stack thickness block */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-1"
        style={{
          left: "100%",
          width: "14px",
          right: "-1%",
          backgroundColor: "#CFAF6E",
          background: `
            linear-gradient(
              to left,
              #A87E46 0%,
              #C49F60 24%,
              #E5CB88 54%,
              #D4B876 100%
            )
          `,
          borderRight: "0.5px solid rgba(110,90,60,0.18)",
          boxShadow: "inset -2px 0 4px rgba(255,245,205,0.28), inset 2px 0 5px rgba(72,45,24,0.18)",
        }}
      />

      {/* Bottom page-stack thickness block */}
      <div
        className="absolute bottom-[-5px] pointer-events-none z-1"
        style={{
          left: "-101%",
          right: "-1%",
          height: "7px",
          backgroundColor: "#CFAF6E",
          background: "linear-gradient(to bottom, #E7D192 0%, #D4B876 42%, #B99557 100%)",
          borderBottom: "0.5px solid rgba(110,90,60,0.18)",
          boxShadow: "inset 0 1px 3px rgba(255,245,205,0.24), inset 0 -2px 4px rgba(72,45,24,0.16)",
        }}
      />

      {/* ── 4. MAIN PAGE CURVATURE DISTORTION ── */}
      <div
        className="relative w-full h-full z-10"
        style={{
          boxShadow: "inset 0 0 100px rgba(45,26,18,0.03)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>

      {/* ── 5. DEEP CENTER SPINE GUTTER ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-24px",
          bottom: "-24px",
          left: 0,
          transform: "translateX(-50%)",
          width: "118px",
          zIndex: 9,
          background:
            "linear-gradient(to right, transparent 0%, rgba(58,38,25,0.018) 12%, rgba(58,38,25,0.040) 24%, rgba(35,22,14,0.070) 36%, rgba(16,8,5,0.145) 47%, rgba(16,8,5,0.195) 50%, rgba(255,244,218,0.045) 51.5%, rgba(35,22,14,0.074) 59%, rgba(58,38,25,0.040) 74%, rgba(58,38,25,0.018) 88%, transparent 100%)",
          filter: "blur(8px)",
          mixBlendMode: "multiply",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0.32) 16%, #000 31%, #000 69%, rgba(0,0,0,0.32) 84%, rgba(0,0,0,0) 95%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0.32) 16%, #000 31%, #000 69%, rgba(0,0,0,0.32) 84%, rgba(0,0,0,0) 95%, transparent 100%)",
        }}
      >
        {/* Deepest central crevice line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[3px]"
          style={{
            top: "8%",
            bottom: "8%",
            background:
              "linear-gradient(to right, transparent 0%, rgba(30,16,10,0.22) 35%, rgba(30,16,10,0.42) 50%, rgba(255,246,226,0.08) 68%, transparent 100%)",
            filter: "blur(2.5px)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 12%, #000 28%, #000 72%, rgba(0,0,0,0.4) 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 12%, #000 28%, #000 72%, rgba(0,0,0,0.4) 88%, transparent 100%)",
          }}
        />
      </div>

      {/* ── 6. BOOKMARK RIBBON (Dark brown satin ribbon draping onto desk) ── */}
      {[
        { key: "lt", left: "-100.2%", top: "-2px", rotate: 0 },
        { key: "lb", left: "-100.2%", bottom: "-2px", rotate: -90 },
        { key: "rt", right: "-0.2%", top: "-2px", rotate: 90 },
        { key: "rb", right: "-0.2%", bottom: "-2px", rotate: 180 },
      ].map(({ key, rotate, ...position }) => (
        <div
          key={key}
          className="absolute pointer-events-none"
          style={{
            ...position,
            width: "42px",
            height: "42px",
            zIndex: 6,
            transform: `rotate(${rotate}deg)`,
            transformOrigin: "center",
          }}
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
            <path d="M4 3.5H31M4 3.5V31" stroke="#C8A56A" strokeWidth="2.2" strokeLinecap="square" />
            <path d="M8 8H27M8 8V27" stroke="rgba(255,238,190,0.55)" strokeWidth="0.8" strokeLinecap="square" />
            <path
              d="M4 3.5H31M4 3.5V31"
              stroke="rgba(80,48,22,0.28)"
              strokeWidth="0.6"
              strokeLinecap="square"
              transform="translate(1.6 1.6)"
            />
          </svg>
        </div>
      ))}

      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-86px",
          left: "50%",
          width: "20px",
          height: "96px",
          transform: "translateX(-50%) rotate(1.8deg)",
          zIndex: 8,
          background: "linear-gradient(to right, #6B2E24 0%, #9D4735 30%, #B85A44 50%, #8E3B2F 72%, #5B241E 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)",
          filter: "drop-shadow(2px 5px 6px rgba(10,5,3,0.48))",
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

      <div
        className="absolute pointer-events-none"
        style={{
          left: "-101%",
          right: "-1%",
          top: "-1%",
          bottom: "-1%",
          zIndex: 50,
          background: `
            radial-gradient(circle at 22% 9%, rgba(255,252,236,0.24) 0%, rgba(255,252,236,0.08) 34%, transparent 58%),
            linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 42%, rgba(58,34,18,0.09) 100%)
          `,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}

export default React.memo(Book3D);
