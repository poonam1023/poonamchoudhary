import React from "react";

export default function PaperGrain() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
      <div className="absolute inset-0 paper-grain-overlay" />
    </div>
  );
}
