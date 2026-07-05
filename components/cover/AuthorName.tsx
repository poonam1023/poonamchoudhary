import React from "react";

/**
 * AuthorName — Professional identity strip.
 *
 * Editorial approach: no "BY", no stacking hierarchy, no fleurons.
 * Three elegant inline icons with minimal labels aligned horizontally.
 * Thin-outline gold/muted-olive icons for: Banker · Author · Parenting.
 */
function AuthorName() {
  return (
    <div className="flex flex-col items-center select-none gap-5">
      {/* Thin horizontal rule — editorial separator */}
      <div
        style={{
          width: "32px",
          height: "0.75px",
          background: "rgba(196, 168, 100, 0.55)",
        }}
      />

      {/* Three identity icons — inline, centered */}
      <div className="flex items-center justify-center gap-6 md:gap-8">
        {/* Banker icon */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.62 }}
          >
            <path
              d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11"
              stroke="#8A7040"
              strokeWidth="0.95"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="font-sans uppercase"
            style={{
              fontSize: "6.5px",
              letterSpacing: "0.20em",
              color: "rgba(100, 80, 45, 0.58)",
            }}
          >
            Former Banker
          </span>
        </div>

        {/* Divider dot */}
        <span
          style={{
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "rgba(196, 168, 100, 0.40)",
            display: "inline-block",
            marginBottom: "16px",
          }}
        />

        {/* Author icon */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.62 }}
          >
            <path
              d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
              stroke="#8A7040"
              strokeWidth="0.95"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="font-sans uppercase"
            style={{
              fontSize: "6.5px",
              letterSpacing: "0.20em",
              color: "rgba(100, 80, 45, 0.58)",
            }}
          >
            Author
          </span>
        </div>

        {/* Divider dot */}
        <span
          style={{
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "rgba(196, 168, 100, 0.40)",
            display: "inline-block",
            marginBottom: "16px",
          }}
        />

        {/* Parenting icon */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.62 }}
          >
            {/* Simple heart outline */}
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              stroke="#8A7040"
              strokeWidth="0.95"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="font-sans uppercase"
            style={{
              fontSize: "6.5px",
              letterSpacing: "0.20em",
              color: "rgba(100, 80, 45, 0.58)",
            }}
          >
            Parenting
          </span>
        </div>
      </div>

      {/* Thin horizontal rule — editorial separator */}
      <div
        style={{
          width: "32px",
          height: "0.75px",
          background: "rgba(196, 168, 100, 0.55)",
        }}
      />
    </div>
  );
}

export default React.memo(AuthorName);
