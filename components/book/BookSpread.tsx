import React from "react";

interface BookSpreadProps {
  leftPage?: React.ReactNode;
  rightPage: React.ReactNode;
  /** Slot for absolutely-positioned side panels (e.g. BookmarkNavigation). */
  sidePanel?: React.ReactNode;
}

/**
 * BookSpread
 *
 * Lays out two pages side by side with a center gutter.
 * Owns the spread geometry — never owns content.
 *
 * NOTE: In the current architecture ChapterOne manages its own spread geometry
 * (the right-page div from BookOpeningAnimation constrains layout).
 * BookSpread is provided as a reusable primitive for future chapters
 * rendered in a full-width context.
 */
export default function BookSpread({ leftPage, rightPage, sidePanel }: BookSpreadProps) {
  return (
    <div className="relative w-full h-full flex">
      {/* Left page — hidden on mobile */}
      {leftPage && (
        <div className="hidden md:block relative flex-1 h-full">
          {leftPage}
        </div>
      )}

      {/* Center gutter */}
      {leftPage && (
        <div
          className="hidden md:block absolute left-1/2 top-5 bottom-5 w-px pointer-events-none"
          style={{
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(110,90,78,0.10) 15%, rgba(110,90,78,0.15) 50%, rgba(110,90,78,0.10) 85%, transparent 100%)",
          }}
        />
      )}

      {/* Right page */}
      <div className={`relative ${leftPage ? "flex-1" : "w-full"} h-full`}>
        {rightPage}
      </div>

      {/* Top navigation panel (bookmark ribbons) inserted at the top edge near the spine */}
      {sidePanel && (
        <div
          className="hidden md:block absolute pointer-events-none"
          style={{
            bottom: "100%",
            left: "50%",
            width: "0px",
          }}
        >
          {sidePanel}
        </div>
      )}
    </div>
  );
}
