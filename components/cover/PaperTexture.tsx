import React from "react";

export default function PaperTexture() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden rounded-md">
      {/* Base Paper Hue Blend */}
      <div className="absolute inset-0 bg-gradient-to-tr from-paper-secondary/25 via-transparent to-paper-secondary/40" />

      {/* Paper color variation: center warm, edges darkened */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(110,90,78,0.020) 100%),
            radial-gradient(ellipse at 100% 0%, rgba(110,90,78,0.015) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 100%, rgba(110,90,78,0.012) 0%, transparent 50%)
          `,
        }}
      />

      {/* Organic Age Spots & Stains */}
      <div
        className="absolute top-[12%] left-[18%] w-[180px] h-[150px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(110,90,78,0.05) 0%, rgba(110,90,78,0) 75%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[15%] right-[10%] w-[250px] h-[220px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(110,90,78,0.04) 0%, rgba(110,90,78,0) 80%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute top-[70%] left-[65%] w-[120px] h-[120px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,178,154,0.04) 0%, rgba(168,178,154,0) 75%)",
          filter: "blur(35px)",
        }}
      />
      <div
        className="absolute bottom-[40%] left-[8%] w-[90px] h-[90px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(110,90,78,0.03) 0%, rgba(110,90,78,0) 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Edge Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 65%, rgba(110,90,78,0.05) 100%)",
        }}
      />
    </div>
  );
}
