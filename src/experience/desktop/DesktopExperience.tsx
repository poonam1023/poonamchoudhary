"use client";

import BookOpeningAnimationClient from "@/components/cover/BookOpeningAnimationClient";

/**
 * Desktop Experience — thin wrapper around the existing book system.
 * Zero changes to internal logic; keeps the desktop perfectly isolated.
 */
export default function DesktopExperience() {
  return <BookOpeningAnimationClient />;
}
