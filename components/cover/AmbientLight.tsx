import React from "react";

export default function AmbientLight() {
  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-color-dodge opacity-[0.35] select-none"
      style={{
        background: "radial-gradient(circle at 10% 10%, rgba(255, 242, 215, 0.48) 0%, rgba(26, 20, 18, 0) 70%)"
      }}
    />
  );
}
