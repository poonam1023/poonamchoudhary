"use client";

import React from "react";

interface Book3DProps {
  children: React.ReactNode;
}

/**
 * Book3D — Premium physical book model wrapper.
 *
 * Implements Phase 1 physical book upgrades:
 *  1. Multi-layered hardcover boards (canvas/leather backing).
 *  2. Stacked paper thickness (120-200 sheets simulated on bottom/sides).
 *  3. Deep center spine valley crease with lighting falloff.
 *  4. Layered ambient + contact shadows under the book spread.
 *  5. Rounded page corners and page bevel edges.
 */
export default function Book3D({ children }: Book3DProps) {
  return (
    <div className="relative w-full h-full select-none">
      {/* ── 1. LAYERED DROP SHADOWS (Floating Book on Desk Effect) ── */}
      {/* Ambient shadow (large, soft spread) */}
      <div 
        className="absolute inset-x-[-4%] inset-y-[-2%] rounded-[24px] pointer-events-none z-0 opacity-40 blur-[36px]"
        style={{
          background: "radial-gradient(circle, rgba(16,12,10,0.65) 0%, rgba(0,0,0,0) 80%)",
        }}
      />
      {/* Contact shadow (dark, tight underneath the book boards) */}
      <div 
        className="absolute inset-x-[-1%] bottom-[-15px] h-[35px] rounded-full pointer-events-none z-0 opacity-80 blur-[8px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(10,8,6,0.95) 0%, rgba(0,0,0,0) 75%)",
        }}
      />
      {/* Soft edge shadow mapping to page curl */}
      <div 
        className="absolute right-[-15px] bottom-[-10px] w-[180px] h-[60px] pointer-events-none z-0 opacity-55 blur-[12px] rotate-[2deg]"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* ── 2. HARDCOVER BOARD BACKING (Canvas/Leather Cover) ── */}
      {/* Left board cover backing */}
      <div 
        className="absolute top-[-4px] bottom-[-6px] rounded-l-[8px] pointer-events-none z-0 border border-[#2D231B]/40"
        style={{
          right: "50%",
          left: "-100.8%", // Slightly wider than pages
          background: "linear-gradient(135deg, #2D231B 0%, #1A1410 100%)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), 2px 4px 10px rgba(0,0,0,0.35)",
        }}
      >
        {/* Leather/Canvas texture simulation */}
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* Right board cover backing */}
      <div 
        className="absolute top-[-4px] bottom-[-6px] rounded-r-[8px] pointer-events-none z-0 border border-[#2D231B]/40"
        style={{
          left: "50%",
          right: "-0.8%", // Slightly wider than pages
          background: "linear-gradient(225deg, #2D231B 0%, #1A1410 100%)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), -2px 4px 10px rgba(0,0,0,0.35)",
        }}
      >
        {/* Leather/Canvas texture simulation */}
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* ── 3. STACKED PAPER THICKNESS (120-200 sheets stack along edges) ── */}
      {/* Left page-stack thickness block */}
      <div 
        className="absolute top-0 bottom-0 pointer-events-none z-1"
        style={{
          right: "100%",
          width: "12px",
          left: "-100.4%",
          background: "#ECE0CE",
          borderLeft: "0.5px solid rgba(110,90,78,0.25)",
          // Layered paper lines simulating sheets
          backgroundImage: "repeating-linear-gradient(to right, #ECE0CE, #ECE0CE 1.5px, #DDCAB4 1.5px, #DDCAB4 2.5px)",
          boxShadow: "inset 1px 0 3px rgba(0,0,0,0.1)",
        }}
      />

      {/* Right page-stack thickness block */}
      <div 
        className="absolute top-0 bottom-0 pointer-events-none z-1"
        style={{
          left: "100%",
          width: "12px",
          right: "-0.4%",
          background: "#ECE0CE",
          borderRight: "0.5px solid rgba(110,90,78,0.25)",
          // Layered paper lines simulating sheets
          backgroundImage: "repeating-linear-gradient(to left, #ECE0CE, #ECE0CE 1.5px, #DDCAB4 1.5px, #DDCAB4 2.5px)",
          boxShadow: "inset -1px 0 3px rgba(0,0,0,0.1)",
        }}
      />

      {/* Bottom page-stack thickness block (spans full book width) */}
      <div 
        className="absolute bottom-[-5px] pointer-events-none z-1"
        style={{
          left: "-100.4%",
          right: "-0.4%",
          height: "6px",
          background: "#ECE0CE",
          borderBottom: "0.5px solid rgba(110,90,78,0.25)",
          // Layered horizontal paper lines
          backgroundImage: "repeating-linear-gradient(to bottom, #ECE0CE, #ECE0CE 1.5px, #DDCAB4 1.5px, #DDCAB4 2.5px)",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
        }}
      />

      {/* ── 4. MAIN PAGE CURVATURE DISTORTION ── */}
      {/* 
        This is the actual page contents viewport.
        Slight perspective bend, soft lighting falloff from outer edges to spine.
      */}
      <div 
        className="relative w-full h-full z-10"
        style={{
          boxShadow: "inset 0 0 100px rgba(0,0,0,0.06)",
        }}
      >
        {children}
      </div>

      {/* ── 5. DEEP CENTER SPINE GUTTER ── */}
      {/* 
        Overlapping shadow valley down the center binding crease.
        Provides realistic lighting falloff and spine depth.
      */}
      <div 
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: 0,
          transform: "translateX(-50%)",
          width: "36px",
          zIndex: 35,
          background: "linear-gradient(to right, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.02) 46%, rgba(255,255,255,0.12) 50%, rgba(0,0,0,0.02) 54%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.28) 100%)",
        }}
      >
        {/* Deepest central crevice line */}
        <div 
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2.5px]"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.48), rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.25))",
          }}
        />
      </div>
    </div>
  );
}
