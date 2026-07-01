"use client";

// This wrapper exists solely to allow `ssr: false` dynamic import.
// Next.js App Router only permits `ssr: false` inside Client Components.
// BookOpeningAnimation is a pure animation experience — canvas, framer-motion,
// window listeners — with no SEO value, so disabling SSR is the correct fix
// for Dark Reader hydration mismatches across the entire component tree.
import dynamic from "next/dynamic";

const BookOpeningAnimation = dynamic(
  () => import("@/components/cover/BookOpeningAnimation"),
  { ssr: false }
);

export default function BookOpeningAnimationClient() {
  return <BookOpeningAnimation />;
}
