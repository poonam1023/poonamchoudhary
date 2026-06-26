/**
 * components/cover/ChapterOne.tsx — Backward-compatibility re-export
 *
 * BookOpeningAnimation.tsx imports ChapterOne from this path.
 * The implementation has moved to the modular chapter architecture at:
 *   components/chapters/chapter-one/ChapterOne.tsx
 *
 * This file exists solely so BookOpeningAnimation.tsx needs zero changes.
 * Do not add logic here — keep it as a pure re-export.
 */
export { default } from "@/components/chapters/chapter-one/ChapterOne";

