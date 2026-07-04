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
      {/* Soft edge shadow mapping to page curl */}
      <div 
        className="absolute right-[-15px] bottom-[-10px] w-[160px] h-[50px] pointer-events-none z-0 opacity-35 blur-[10px] rotate-[2deg]"
        style={{
          background: "radial-gradient(circle, rgba(58,44,30,0.50) 0%, rgba(58,44,30,0) 70%)",
        }}
      />

      {/* ── 2. HARDCOVER BOARD BACKING ── */}
      {/* Left board cover backing */}
      <div 
        className="absolute top-[-4px] bottom-[-6px] rounded-none pointer-events-none z-0 border border-[#C4A882]/20"
        style={{
          right: "50%",
          left: "-100.8%",
          background: "linear-gradient(135deg, #F8F3EA 0%, #EEE5D8 100%)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.42), 2px 8px 20px rgba(20,12,7,0.29)",
        }}
      >
        {/* Canvas texture simulation */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #DCCBB3 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* Right board cover backing */}
      <div 
        className="absolute top-[-4px] bottom-[-6px] rounded-none pointer-events-none z-0 border border-[#C4A882]/20"
        style={{
          left: "50%",
          right: "-0.8%",
          background: "linear-gradient(225deg, #F8F3EA 0%, #EEE5D8 100%)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.42), -2px 8px 20px rgba(20,12,7,0.29)",
        }}
      >
        {/* Canvas texture simulation */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #DCCBB3 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* ── 3. STACKED PAPER THICKNESS ── */}
      {/* Left page-stack thickness block */}
      <div 
        className="absolute top-0 bottom-0 pointer-events-none z-1"
        style={{
          right: "100%",
          width: "10px",
          left: "-100.4%",
          background: "#F5F0E8",
          borderLeft: "0.5px solid rgba(110,90,78,0.12)",
          backgroundImage: "repeating-linear-gradient(to right, #F5F0E8, #F5F0E8 1.5px, #EDE6DC 1.5px, #EDE6DC 2.5px)",
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
          background: "#F5F0E8",
          borderRight: "0.5px solid rgba(110,90,78,0.12)",
          backgroundImage: "repeating-linear-gradient(to left, #F5F0E8, #F5F0E8 1.5px, #EDE6DC 1.5px, #EDE6DC 2.5px)",
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
          background: "#F5F0E8",
          borderBottom: "0.5px solid rgba(110,90,78,0.12)",
          backgroundImage: "repeating-linear-gradient(to bottom, #F5F0E8, #F5F0E8 1.5px, #EDE6DC 1.5px, #EDE6DC 2.5px)",
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
          background: "linear-gradient(to right, rgba(58,44,30,0.12) 0%, rgba(58,44,30,0.06) 30%, rgba(58,44,30,0.01) 46%, rgba(255,255,255,0.08) 50%, rgba(58,44,30,0.01) 54%, rgba(58,44,30,0.06) 70%, rgba(58,44,30,0.12) 100%)",
        }}
      >
        {/* Deepest central crevice line */}
        <div 
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px]"
          style={{
            background: "linear-gradient(to right, rgba(58,44,30,0.20), rgba(58,44,30,0.30) 50%, rgba(58,44,30,0.12))",
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(Book3D);
