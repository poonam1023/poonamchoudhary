import React from "react";
import PaperTexture from "./PaperTexture";
import PaperGrain from "./PaperGrain";

function PaperBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#F7F1E8] overflow-hidden select-none pointer-events-none">
      {/* 1. Base color stains and blends */}
      <PaperTexture />

      {/* 2. SVG Paper Grain Overlay */}
      <PaperGrain />

      {/* 3. Soft Vignette with subtle corner foxing / age darkening */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 55%, rgba(90,75,65,0.14) 85%, rgba(70,55,45,0.24) 100%)",
        }}
      />
    </div>
  );
}

export default React.memo(PaperBackground);
