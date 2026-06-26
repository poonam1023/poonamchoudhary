import React from "react";

export default function PaperTexture() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden rounded-md">
      {/* Base Paper Hue Blend */}
      <div className="absolute inset-0 bg-gradient-to-tr from-paper-secondary/25 via-transparent to-paper-secondary/40" />

      {/* Layer of fibers: repeating micro-grid simulating fine woven book cover fibers */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(110,90,78,0.15) 1px, transparent 1px),
            linear-gradient(0deg, rgba(110,90,78,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "3px 3px",
        }}
      />

      {/* Organic Age Spots & Stains */}
      <div 
        className="absolute top-[12%] left-[18%] w-[180px] h-[150px] rounded-full blur-[40px]"
        style={{
          background: "radial-gradient(circle, rgba(110,90,78,0.05) 0%, rgba(110,90,78,0) 75%)",
        }}
      />
      <div 
        className="absolute bottom-[15%] right-[10%] w-[250px] h-[220px] rounded-full blur-[50px]"
        style={{
          background: "radial-gradient(circle, rgba(110,90,78,0.04) 0%, rgba(110,90,78,0) 80%)",
        }}
      />
      <div 
        className="absolute top-[70%] left-[65%] w-[120px] h-[120px] rounded-full blur-[35px]"
        style={{
          background: "radial-gradient(circle, rgba(168,178,154,0.04) 0%, rgba(168,178,154,0) 75%)", // Sage accent stain
        }}
      />
      <div 
        className="absolute bottom-[40%] left-[8%] w-[90px] h-[90px] rounded-full blur-[30px]"
        style={{
          background: "radial-gradient(circle, rgba(110,90,78,0.03) 0%, rgba(110,90,78,0) 70%)",
        }}
      />

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_70%,rgba(110,90,78,0.08)_100%)]" />
    </div>
  );
}
