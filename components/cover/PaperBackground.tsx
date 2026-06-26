import React from "react";

export default function PaperBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#F8F3E8] overflow-hidden select-none pointer-events-none">
      {/* Texture Layer 1: Base Warm Paper Blend */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#DCCBB3]/10 via-transparent to-[#EFE4D2]/20" />

      {/* Texture Layer 2: Subtle Vintage Stains */}
      <div 
        className="absolute top-[15%] left-[20%] w-[350px] h-[300px] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(220,203,179,0.3) 0%, rgba(220,203,179,0) 70%)",
        }}
      />
      <div 
        className="absolute bottom-[20%] right-[15%] w-[450px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(169,134,74,0.1) 0%, rgba(169,134,74,0) 80%)",
        }}
      />
      <div 
        className="absolute top-[60%] left-[65%] w-[250px] h-[250px] rounded-full blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(239,228,210,0.4) 0%, rgba(239,228,210,0) 70%)",
        }}
      />

      {/* Texture Layer 3: Dynamic SVG Paper Grain Overlay */}
      <div className="absolute inset-0 paper-grain-overlay opacity-15" />
      <div className="absolute inset-0 paper-grain-light opacity-12" />

      {/* Texture Layer 4: Soft Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(44,34,26,0.12)_100%)] pointer-events-none" />
    </div>
  );
}
