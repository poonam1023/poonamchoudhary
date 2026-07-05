import React from "react";

function BookTitle() {
  return (
    <div className="relative inline-block select-none z-20">
      {/* Letterpress base */}
      <h1
        className="font-display font-bold text-3xl md:text-[38px] tracking-[0.26em] uppercase text-center leading-[1.4]"
        style={{
          color: "#3A2C1E",
          textShadow:
            "0.5px 0.5px 0px rgba(255,255,255,0.45), " +
            "-0.5px -0.5px 0px rgba(90,70,58,0.38), " +
            "1.5px 1.5px 2.5px rgba(45,30,20,0.24), " +
            "2.5px 2.5px 5px rgba(45,30,20,0.12)",
        }}
      >
        POONAM CHOUDHARY
      </h1>
    </div>
  );
}

export default React.memo(BookTitle);
