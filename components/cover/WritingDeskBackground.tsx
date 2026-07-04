"use client";

import React from "react";

function WritingDeskBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Walnut wood desk surface */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            /* Base walnut heartwood */
            linear-gradient(to bottom, #5C3D2E 0%, #6B4A35 15%, #5A3B2A 30%, #6E4F3A 50%, #5C3D2E 65%, #6B4A35 80%, #5A3B2A 100%)
          `,
        }}
      />

      {/* Wood grain planks — three-panel construction */}
      {/* Plank 1 (left) */}
      <div
        className="absolute inset-y-0 left-0"
        style={{
          width: "36%",
          background: `
            repeating-linear-gradient(4deg, transparent, transparent 30px, rgba(90,59,42,0.25) 30px, rgba(90,59,42,0.25) 31px),
            repeating-linear-gradient(-3deg, transparent, transparent 45px, rgba(78,50,34,0.15) 45px, rgba(78,50,34,0.15) 46px),
            radial-gradient(ellipse 180% 40% at 30% 20%, rgba(160,130,90,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 150% 30% at 50% 70%, rgba(200,170,130,0.04) 0%, transparent 50%)
          `,
          borderRight: "1px solid rgba(50,30,18,0.3)",
          boxShadow: "inset -2px 0 4px rgba(0,0,0,0.08)",
        }}
      />

      {/* Plank 2 (center) */}
      <div
        className="absolute inset-y-0"
        style={{
          left: "36%",
          width: "30%",
          background: `
            repeating-linear-gradient(-2deg, transparent, transparent 25px, rgba(90,59,42,0.2) 25px, rgba(90,59,42,0.2) 26px),
            repeating-linear-gradient(5deg, transparent, transparent 50px, rgba(78,50,34,0.12) 50px, rgba(78,50,34,0.12) 51px),
            radial-gradient(ellipse 200% 35% at 60% 40%, rgba(180,150,110,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 120% 25% at 40% 80%, rgba(160,130,90,0.04) 0%, transparent 40%)
          `,
          borderLeft: "1px solid rgba(50,30,18,0.2)",
          borderRight: "1px solid rgba(50,30,18,0.2)",
          boxShadow: "inset 2px 0 4px rgba(0,0,0,0.04), inset -2px 0 4px rgba(0,0,0,0.04)",
        }}
      />

      {/* Plank 3 (right) */}
      <div
        className="absolute inset-y-0 right-0"
        style={{
          width: "34%",
          background: `
            repeating-linear-gradient(3deg, transparent, transparent 35px, rgba(90,59,42,0.22) 35px, rgba(90,59,42,0.22) 36px),
            repeating-linear-gradient(-4deg, transparent, transparent 40px, rgba(78,50,34,0.15) 40px, rgba(78,50,34,0.15) 41px),
            radial-gradient(ellipse 160% 30% at 70% 50%, rgba(200,170,130,0.05) 0%, transparent 45%),
            radial-gradient(ellipse 140% 25% at 20% 60%, rgba(160,130,90,0.03) 0%, transparent 40%)
          `,
          borderLeft: "1px solid rgba(50,30,18,0.3)",
          boxShadow: "inset 2px 0 4px rgba(0,0,0,0.08)",
        }}
      />

      {/* Maple/grain highlight streaks */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 300% 2% at 20% 30%, rgba(220,195,160,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 250% 1.5% at 65% 55%, rgba(220,195,160,0.03) 0%, transparent 60%),
            radial-gradient(ellipse 280% 2% at 45% 75%, rgba(220,195,160,0.035) 0%, transparent 65%),
            radial-gradient(ellipse 200% 1% at 80% 20%, rgba(220,195,160,0.025) 0%, transparent 50%)
          `,
        }}
      />

      {/* Edge shadow at bottom for desk thickness */}
      <div
        className="absolute bottom-0 left-0 right-0 h-3"
        style={{
          background: "linear-gradient(to top, rgba(30,16,8,0.3) 0%, transparent 100%)",
        }}
      />

      {/* Edge highlight at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent 5%, rgba(220,195,160,0.08) 50%, transparent 95%)",
        }}
      />

      {/* Ambient warm light overlay on desk */}
      <div
        className="absolute inset-0 z-5"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,248,230,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default React.memo(WritingDeskBackground);
