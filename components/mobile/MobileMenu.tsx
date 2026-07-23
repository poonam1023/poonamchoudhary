"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BotanicalIllustration from "../decorations/BotanicalIllustration";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { num: "01", label: "Introduction", href: "#home" },
  { num: "02", label: "Mission", href: "#mission" },
  { num: "03", label: "Meet the Author", href: "#about" },
  { num: "04", label: "The Book", href: "#book" },
  { num: "05", label: "Inside Philosophy", href: "#highlights" },
  { num: "06", label: "Why I Wrote This", href: "#testimonials" },
  { num: "07", label: "Articles", href: "#articles" },
  { num: "08", label: "Contact", href: "#contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Additional layer for iOS devices
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // 2. Escape key closes the menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // 3. Trap Focus inside the menu for accessibility
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus the first element initially
    if (firstElement) {
      firstElement.focus();
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab (Backward)
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab (Forward)
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTabKey);
    return () => {
      window.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={containerRef}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 140,
            display: "flex",
            justifyContent: "flex-end",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(58, 44, 30, 0.35)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          />

          {/* Menu Drawer */}
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
            style={{
              position: "relative",
              width: "82%",
              maxWidth: "360px",
              height: "100%",
              background: "#FAF7F2",
              boxShadow: "-8px 0 32px rgba(58, 44, 30, 0.12)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Elegant Top Grain Border Line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "5px",
                background: "linear-gradient(90deg, #A8B29A 0%, #EDE5D8 100%)",
              }}
            />

            {/* Watercolor Background Blob Detail */}
            <div
              style={{
                position: "absolute",
                bottom: "-10%",
                left: "-20%",
                width: "80%",
                height: "40%",
                background: "radial-gradient(circle, rgba(168,178,154,0.08) 0%, transparent 75%)",
                filter: "blur(20px)",
                pointerEvents: "none",
              }}
            />

            {/* Subtle Pressed Fern Overlay */}
            <BotanicalIllustration
              variant="fern"
              scale={0.8}
              opacity={0.06}
              position={{ bottom: "5%", left: "4%" }}
              rotation={25}
              style={{ pointerEvents: "none", position: "absolute" }}
            />

            {/* Scrollable Content Area */}
            <div
              className="mobile-scroll-hide"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "100px 36px 40px",
                overflowY: "auto",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* Navigation Items */}
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  marginBottom: "40px",
                }}
              >
                {MENU_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.08 + index * 0.03,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-baseline gap-3 text-decoration-none"
                    >
                      <span
                        className="text-[10px] tracking-[0.2em] font-mono text-[#A8B29A] font-semibold"
                      >
                        CH {item.num}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                        }}
                        className="text-[22px] font-medium text-[#3A2C1E] transition-all duration-200 group-hover:text-[#A8B29A] group-hover:translate-x-1"
                      >
                        {item.label}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section - Push to bottom */}
              <div style={{ marginTop: "auto" }}>
                {/* Vintage Divider */}
                <div
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(110,90,78,0.12) 0%, transparent 100%)",
                    marginBottom: "28px",
                  }}
                />

                {/* Call To Action */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.38, ease: "easeOut" }}
                >
                  <a
                    href="#book"
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "52px",
                      borderRadius: "14px",
                      background: "#A8B29A",
                      color: "#FAF8F4",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      boxShadow: "0 6px 20px rgba(168,178,154,0.3)",
                      transition: "transform 0.2s ease, background-color 0.2s ease",
                    }}
                    className="hover:bg-[#98A58B]"
                  >
                    Get My Book
                  </a>
                </motion.div>

                {/* Copyright/Footer Text */}
                <p
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "9px",
                    color: "rgba(110,90,78,0.5)",
                    textAlign: "center",
                    marginTop: "20px",
                    letterSpacing: "0.05em",
                  }}
                >
                  © {new Date().getFullYear()} Poonam Choudhary
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
