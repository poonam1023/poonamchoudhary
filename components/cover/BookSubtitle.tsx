import React from "react";

/**
 * BookSubtitle — Book philosophy line.
 * 
 * Placed at the top of the cover as a quiet statement.
 * Wide-tracked uppercase, very small, restrained.
 * No decorative ornaments.
 */
function BookSubtitle() {
  return (
    <div className="select-none text-center">
      <p
        className="font-sans font-normal uppercase text-center leading-[2.2]"
        style={{
          fontSize: "clamp(0.45rem, 0.9vw, 0.65rem)",
          letterSpacing: "0.28em",
          color: "rgba(58, 44, 30, 0.52)",
        }}
      >
        Raising Ourselves
        <br />
        Before We Raise Our Children
      </p>
    </div>
  );
}

export default React.memo(BookSubtitle);
