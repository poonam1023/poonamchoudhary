import React from "react";
import PaperTexture from "./PaperTexture";
import PaperGrain from "./PaperGrain";

export default function PaperBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#F7F1E8] overflow-hidden select-none pointer-events-none rounded-md">
      {/* 1. Base color stains and blends */}
      <PaperTexture />

      {/* 2. SVG Paper Grain Overlay */}
      <PaperGrain />

      {/* 3. Soft Vignette for cover borders */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(110,90,78,0.11)_100%)] pointer-events-none rounded-md" />
    </div>
  );
}
