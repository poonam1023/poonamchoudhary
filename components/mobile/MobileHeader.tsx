"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MobileHeaderProps {
  isOpen: boolean;
  toggle: () => void;
  activeChapter?: string;
}

interface PathProps {
  d?: string;
  variants?: Record<string, any>;
  transition?: any;
  animate?: string;
}

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="1.8"
    stroke="#6E5A4E"
    strokeLinecap="round"
    {...props}
  />
);

export default function MobileHeader({ isOpen, toggle, activeChapter = "01" }: MobileHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 150, // Higher than MobileMenu's 140
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isScrolled && !isOpen ? "12px 24px" : "20px 24px 12px",
        background: isOpen
          ? "transparent"
          : isScrolled
          ? "rgba(250, 248, 244, 0.88)"
          : "transparent",
        backdropFilter: isOpen ? "none" : isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isOpen ? "none" : isScrolled ? "blur(16px)" : "none",
        borderBottom:
          isScrolled && !isOpen
            ? "1px solid rgba(110, 90, 78, 0.08)"
            : "1px solid transparent",
        boxShadow:
          isScrolled && !isOpen ? "0 4px 20px rgba(58, 44, 30, 0.04)" : "none",
        transition: "background-color 0.25s ease, padding 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Brand Identity / Logo */}
      <a
        href="#home"
        style={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          userSelect: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#3A2C1E",
          }}
        >
          Poonam
        </span>
        <span
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#3A2C1E",
          }}
        >
          Choudhary
        </span>
      </a>

      {/* Center Chapter Progress Counter */}
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A8B29A]/15 border border-[#A8B29A]/25 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A8B29A] animate-pulse" />
        <span className="text-[9px] font-mono tracking-widest text-[#6E5A4E] font-semibold uppercase">
          CH {activeChapter} / 08
        </span>
      </div>

      {/* Hamburger / Menu Morphing Toggle Button */}
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(168,178,154,0.18)",
          border: "1px solid rgba(168,178,154,0.28)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          outline: "none",
          transition: "background-color 0.2s ease, transform 0.2s ease",
        }}
        className="hover:scale-105 active:scale-95"
      >
        <svg width="18" height="18" viewBox="0 0 20 20">
          <Path
            variants={{
              closed: { d: "M 3 5 L 17 5" },
              open: { d: "M 5 5 L 15 15" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
          <Path
            d="M 3 10 L 17 10"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
            animate={isOpen ? "open" : "closed"}
          />
          <Path
            variants={{
              closed: { d: "M 3 15 L 17 15" },
              open: { d: "M 5 15 L 15 5" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
        </svg>
      </button>
    </header>
  );
}
