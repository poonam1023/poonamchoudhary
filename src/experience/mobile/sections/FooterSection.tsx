"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { footerContent } from "@/src/shared/data/content";

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};


export default function FooterSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      ref={ref}
      style={{
        padding: "56px 24px calc(80px + env(safe-area-inset-bottom, 0px))",
        background: "#3A2C1E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle botanical watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        fill="none"
        stroke="rgba(250,248,244,0.04)"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "220px",
          height: "220px",
          pointerEvents: "none",
        }}
      >
        <path d="M100 180 C100 120 60 80 40 40 C70 50 110 80 100 180Z" strokeWidth="1" />
        <path d="M100 130 C120 110 140 90 160 80" strokeWidth="0.8" />
        <path d="M100 100 C80 85 65 70 55 55" strokeWidth="0.8" />
      </svg>

      {/* Brand */}
      <motion.div
        custom={0}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ marginBottom: "32px" }}
      >
        <h2
          id="footer-heading"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#FAF8F4",
            marginBottom: "4px",
          }}
        >
          {footerContent.name}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.18em",
            color: "rgba(250,248,244,0.45)",
            textTransform: "uppercase",
          }}
        >
          {footerContent.role}
        </p>
      </motion.div>

      {/* Contact details */}
      <motion.div
        custom={1}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "32px",
          paddingBottom: "28px",
          borderBottom: "1px solid rgba(250,248,244,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(250,248,244,0.65)" }}>
          <LocationIcon />
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px" }}>
            {footerContent.location}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(250,248,244,0.65)" }}>
          <MailIcon />
          <a
            href={`mailto:${footerContent.email}`}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {footerContent.email}
          </a>
        </div>
      </motion.div>

      {/* Nav links */}
      <motion.nav
        custom={2}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        aria-label="Footer navigation"
        style={{ marginBottom: "32px" }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 24px",
          }}
        >
          {footerContent.navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(250,248,244,0.6)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Social + copyright */}
      <motion.div
        custom={3}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            color: "rgba(250,248,244,0.3)",
            margin: 0,
          }}
        >
          {footerContent.copyright}
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on Instagram"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "10px",
            background: "rgba(250,248,244,0.07)",
            border: "1px solid rgba(250,248,244,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(250,248,244,0.55)",
          }}
        >
          <InstagramIcon />
        </a>
      </motion.div>
    </footer>
  );
}
