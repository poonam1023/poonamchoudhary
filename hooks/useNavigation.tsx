"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";

export type NavigationState = "closed" | "opening" | "open" | "transitioning" | "closing";

export interface FlipStep {
  to: number;
  direction: "forward" | "backward";
}

export type ActiveFlip = {
  to: number;
  direction: "forward" | "backward";
  id: number;
} | null;

interface NavigationContextType {
  state: NavigationState;
  openingPhase: "pressing" | "flipping" | null;
  currentPage: number;
  displayPage: number;
  flipQueue: FlipStep[];
  activeFlip: ActiveFlip;
  isMobile: boolean;

  openBook: () => Promise<void>;
  closeBook: () => void;
  goNext: () => void;
  goPrevious: () => void;
  goToChapter: (page: number) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const CHAPTER_SLUGS = ["home", "about", "philosophy", "books", "journal", "connect"];

const FLIP_DURATION = 450;
const FLIP_GAP = 60;

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<NavigationState>("closed");
  const [openingPhase, setOpeningPhase] = useState<"pressing" | "flipping" | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayPage, setDisplayPage] = useState(0); // 0 = Closed (Cover)
  const [flipQueue, setFlipQueue] = useState<FlipStep[]>([]);
  const [activeFlip, setActiveFlip] = useState<ActiveFlip>(null);
  const [isMobile, setIsMobile] = useState(false);
  const flipIdRef = useRef(0);

  // Sync references to avoid stale closures in global event listeners
  const stateRef = useRef(state);
  const currentPageRef = useRef(currentPage);
  const displayPageRef = useRef(displayPage);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    stateRef.current = state;
    if (state === "open" || state === "closed") {
      isTransitioningRef.current = false;
    }
  }, [state]);
  useEffect(() => { currentPageRef.current = currentPage; }, [currentPage]);
  useEffect(() => { displayPageRef.current = displayPage; }, [displayPage]);

  // Mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openBook = useCallback(async () => {
    if (stateRef.current !== "closed" || isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setState("opening");
    setOpeningPhase("pressing");

    await new Promise((resolve) => setTimeout(resolve, 350));
    setOpeningPhase("flipping");

    await new Promise((resolve) => setTimeout(resolve, 850));
    setState("open");
    setOpeningPhase(null);
    setCurrentPage(1);
    setDisplayPage(1);
  }, []);

  const closeBook = useCallback(() => {
    if ((stateRef.current !== "open" && stateRef.current !== "transitioning") || isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setState("closing");
    setDisplayPage(0);
    setFlipQueue([]);
    setActiveFlip(null);

    setTimeout(() => {
      setState("closed");
      setCurrentPage(1);
    }, 900); // matches cover rotation animation duration (0.9s)
  }, []);

  const goToChapter = useCallback((page: number) => {
    if (stateRef.current !== "open" || isTransitioningRef.current) return;
    if (page === 0) {
      closeBook();
      return;
    }
    if (page === displayPageRef.current) return;

    isTransitioningRef.current = true;
    const direction: "forward" | "backward" = page > displayPageRef.current ? "forward" : "backward";
    const steps: FlipStep[] = [];
    if (direction === "forward") {
      for (let i = displayPageRef.current + 1; i <= page; i++) {
        steps.push({ to: i, direction: "forward" });
      }
    } else {
      for (let i = displayPageRef.current - 1; i >= page; i--) {
        steps.push({ to: i, direction: "backward" });
      }
    }

    setDisplayPage(page);
    setFlipQueue(steps);
    setState("transitioning");
  }, [closeBook]);

  const goNext = useCallback(() => {
    const currentState = stateRef.current;
    if (currentState === "closed") {
      openBook();
    } else if (currentState === "open") {
      if (currentPageRef.current < 5) {
        goToChapter(currentPageRef.current + 1);
      }
    }
  }, [openBook, goToChapter]);

  const goPrevious = useCallback(() => {
    const currentState = stateRef.current;
    if (currentState === "open") {
      if (currentPageRef.current > 1) {
        goToChapter(currentPageRef.current - 1);
      } else if (currentPageRef.current === 1) {
        closeBook();
      }
    }
  }, [closeBook, goToChapter]);

  const openAndGoToPage = useCallback(async (page: number) => {
    if (stateRef.current !== "closed" || isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setState("opening");
    setOpeningPhase("pressing");
    await new Promise((resolve) => setTimeout(resolve, 350));
    setOpeningPhase("flipping");
    await new Promise((resolve) => setTimeout(resolve, 850));

    setCurrentPage(1);
    setDisplayPage(1);

    if (page > 1) {
      const steps: FlipStep[] = [];
      for (let i = 2; i <= page; i++) {
        steps.push({ to: i, direction: "forward" });
      }
      setDisplayPage(page);
      setFlipQueue(steps);
      setState("transitioning");
      setOpeningPhase(null);
    } else {
      setState("open");
      setOpeningPhase(null);
    }
  }, []);

  // Sync refs of functions for single-mount event listener hookup
  const goNextRef = useRef(goNext);
  const goPreviousRef = useRef(goPrevious);
  const goToChapterRef = useRef(goToChapter);
  const openAndGoToPageRef = useRef(openAndGoToPage);
  const closeBookRef = useRef(closeBook);

  useEffect(() => { goNextRef.current = goNext; }, [goNext]);
  useEffect(() => { goPreviousRef.current = goPrevious; }, [goPrevious]);
  useEffect(() => { goToChapterRef.current = goToChapter; }, [goToChapter]);
  useEffect(() => { openAndGoToPageRef.current = openAndGoToPage; }, [openAndGoToPage]);
  useEffect(() => { closeBookRef.current = closeBook; }, [closeBook]);

  // Queue runner
  useEffect(() => {
    if (state !== "transitioning") return;
    if (activeFlip !== null) return;
    if (flipQueue.length === 0) {
      setState("open");
      return;
    }

    const [next, ...rest] = flipQueue;
    setActiveFlip({
      to: next.to,
      direction: next.direction,
      id: ++flipIdRef.current,
    });
    setFlipQueue(rest);
  }, [state, activeFlip, flipQueue]);

  // Completion handler / timers
  useEffect(() => {
    if (!activeFlip) return;

    const contentSwitch = setTimeout(() => {
      setCurrentPage(activeFlip.to);
    }, FLIP_DURATION / 2);

    const done = setTimeout(() => {
      setActiveFlip(null);
    }, FLIP_DURATION + FLIP_GAP);

    return () => {
      clearTimeout(contentSwitch);
      clearTimeout(done);
    };
  }, [activeFlip]);

  // Sync URL hash with displayPage
  useEffect(() => {
    const slug = CHAPTER_SLUGS[displayPage];
    const newHash = (slug && slug !== "home") ? `#${slug}` : "";
    if (window.location.hash !== newHash) {
      window.history.pushState(null, "", newHash || window.location.pathname);
    }
  }, [displayPage]);

  // Deep linking and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase() || "home";
      const pageIndex = CHAPTER_SLUGS.indexOf(hash);
      if (pageIndex !== -1) {
        if (pageIndex === 0) {
          if (stateRef.current === "open" || stateRef.current === "transitioning") {
            closeBookRef.current();
          }
        } else {
          if (stateRef.current === "closed") {
            openAndGoToPageRef.current(pageIndex);
          } else if (stateRef.current === "open" && pageIndex !== displayPageRef.current) {
            goToChapterRef.current(pageIndex);
          }
        }
      }
    };

    const timer = setTimeout(() => {
      handleHashChange();
    }, 100);

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Global listeners for scroll, touch, and keyboard (registered once on mount)
  useEffect(() => {
    let wheelAccumulator = 0;
    let resetTimer: NodeJS.Timeout | null = null;
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioningRef.current) {
        wheelAccumulator = 0;
        return;
      }

      const currentState = stateRef.current;
      if (currentState !== "closed" && currentState !== "open") {
        wheelAccumulator = 0;
        return;
      }

      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        wheelAccumulator = 0;
      }, 200);

      wheelAccumulator += e.deltaY;
      const threshold = 80;

      if (wheelAccumulator >= threshold) {
        wheelAccumulator = 0;
        if (resetTimer) clearTimeout(resetTimer);
        goNextRef.current();
      } else if (wheelAccumulator <= -threshold) {
        wheelAccumulator = 0;
        if (resetTimer) clearTimeout(resetTimer);
        goPreviousRef.current();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioningRef.current) return;
      const currentState = stateRef.current;
      if (currentState !== "closed" && currentState !== "open") {
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      const minSwipeDistance = 50;

      if (Math.abs(diffY) >= minSwipeDistance) {
        if (diffY > 0) {
          goNextRef.current();
        } else {
          goPreviousRef.current();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioningRef.current) return;
      const currentState = stateRef.current;
      if (currentState !== "closed" && currentState !== "open") return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          goNextRef.current();
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          goPreviousRef.current();
          break;
        case "Home":
          e.preventDefault();
          goToChapterRef.current(0);
          break;
        case "End":
          e.preventDefault();
          goToChapterRef.current(5);
          break;
        default:
          break;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      if (resetTimer) clearTimeout(resetTimer);
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        state,
        openingPhase,
        currentPage,
        displayPage,
        flipQueue,
        activeFlip,
        isMobile,
        openBook,
        closeBook,
        goNext,
        goPrevious,
        goToChapter,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
