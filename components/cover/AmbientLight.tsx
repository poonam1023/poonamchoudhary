import React from "react";

export default function AmbientLight() {
  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-25 select-none"
      style={{
        background: "radial-gradient(circle at 15% 15%, rgba(255, 253, 245, 0.45) 0%, rgba(44, 34, 26, 0) 55%)"
      }}
    />
  );
}
