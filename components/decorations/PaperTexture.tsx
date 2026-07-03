"use client";

import React from "react";

interface PaperTextureProps {
  opacity?: number;
  variant?: "antique" | "sage" | "rose" | "parchment";
  className?: string;
}

export default function PaperTexture({
  opacity = 1,
  variant = "antique",
  className = "",
}: PaperTextureProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "sage":
        return {
          gradient: "from-[#A8B29A]/15 via-transparent to-[#8EA98C]/20",
          stain1: "rgba(168,178,154,0.06)",
          stain2: "rgba(142,169,140,0.04)",
        };
      case "rose":
        return {
          gradient: "from-[#D9A0A0]/15 via-transparent to-[#B89482]/20",
          stain1: "rgba(217,160,160,0.06)",
          stain2: "rgba(184,148,130,0.04)",
        };
      case "parchment":
        return {
          gradient: "from-[#EAD8B2]/20 via-transparent to-[#C4A882]/25",
          stain1: "rgba(196,168,130,0.08)",
          stain2: "rgba(180,150,110,0.05)",
        };
      case "antique":
      default:
        return {
          gradient: "from-[#E8DCCB]/25 via-transparent to-[#C4A882]/30",
          stain1: "rgba(110,90,78,0.05)",
          stain2: "rgba(168,178,154,0.04)",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden rounded-md ${className}`}
      style={{ opacity }}
    >
      {/* Base Hue Blend — center light, edges darkened like aged handmade paper */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${styles.gradient}`} />

      {/* Paper color variation: center warm, edges darker/cooler (aged archival paper) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(110,90,78,0.025) 100%),
            radial-gradient(ellipse at 100% 0%, rgba(110,90,78,0.018) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 100%, rgba(110,90,78,0.015) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 0%, rgba(160,130,90,0.012) 0%, transparent 40%),
            radial-gradient(ellipse at 100% 100%, rgba(160,130,90,0.010) 0%, transparent 40%)
          `,
        }}
      />

      {/* Spine-side darkening (subtle) */}
      <div
        className="absolute top-0 bottom-0 left-0"
        style={{
          width: "30%",
          background: "linear-gradient(to right, rgba(110,90,78,0.015) 0%, transparent 100%)",
        }}
      />

      {/* Organic Age Spots & Stains */}
      <div
        className="absolute top-[15%] left-[20%] w-[200px] h-[160px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${styles.stain1} 0%, rgba(0,0,0,0) 75%)`,
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[15%] w-[240px] h-[200px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${styles.stain2} 0%, rgba(0,0,0,0) 80%)`,
          filter: "blur(45px)",
        }}
      />

      {/* Foxing — tiny aged brown dots, opacity under 3% */}
      <div className="absolute top-[40%] left-[80%] w-[3px] h-[3px] rounded-full"
        style={{ background: "#8A6D56", opacity: "0.025", filter: "blur(0.5px)" }} />
      <div className="absolute top-[75%] left-[25%] w-[2px] h-[4px] rounded-full"
        style={{ background: "#8A6D56", opacity: "0.02", filter: "blur(0.5px)", transform: "rotate(45deg)" }} />
      <div className="absolute top-[20%] left-[55%] w-[1.5px] h-[2px] rounded-full"
        style={{ background: "#9A8060", opacity: "0.02", filter: "blur(0.3px)" }} />
      <div className="absolute top-[60%] left-[10%] w-[2px] h-[2px] rounded-full"
        style={{ background: "#7A6050", opacity: "0.015", filter: "blur(0.3px)" }} />
      <div className="absolute top-[85%] left-[70%] w-[1.5px] h-[1.5px] rounded-full"
        style={{ background: "#8A6D56", opacity: "0.02", filter: "blur(0.3px)" }} />

      {/* Edge Vignette — soft, paper absorbs light at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 65%, rgba(110,90,78,0.035) 100%)",
        }}
      />
    </div>
  );
}
