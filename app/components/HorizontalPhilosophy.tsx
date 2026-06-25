"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    num: "01",
    title: "Presence\nbefore\nPerfection",
    body: "Children need adults who return, repair, and remain emotionally available — not adults who perform parenthood flawlessly.",
    bg: "#f7eddd",
    ink: "#2b251d",
    accent: "#879570",
    side: "Children remember how you made them feel, not how perfectly you behaved.",
  },
  {
    num: "02",
    title: "Connection\nbefore\nCorrection",
    body: "Guidance begins with understanding what a child is trying to say beneath the behaviour — not with stopping the behaviour itself.",
    bg: "#e8d5b0",
    ink: "#2b251d",
    accent: "#8b6038",
    side: "The child who acts out is the child who needs your attention most.",
  },
  {
    num: "03",
    title: "Repair\nbefore\nShame",
    body: "Every difficult moment can become a pathway back to trust when a parent pauses, breathes, and chooses reconnection.",
    bg: "#2b251d",
    ink: "#f7eddd",
    accent: "#c9a96e",
    side: "The relationship is always more important than the argument.",
  },
];

export default function HorizontalPhilosophy() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Stagger text elements on each panel as it scrolls into view
      panels.forEach((_, i) => {
        const panel = track.querySelectorAll<HTMLElement>(".h-panel")[i];
        if (!panel) return;
        const headline = panel.querySelector<HTMLElement>(".h-headline");
        const body = panel.querySelector<HTMLElement>(".h-body");

        gsap.fromTo(
          [headline, body],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: wrapRef }
  );

  return (
    <section id="philosophy" ref={wrapRef} style={{ overflow: "hidden" }}>
      {/* Track: all panels side by side */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          width: `${panels.length * 100}vw`,
          willChange: "transform",
        }}
      >
        {panels.map((p, i) => (
          <div
            key={p.num}
            className="h-panel"
            style={{
              width: "100vw",
              height: "100vh",
              flexShrink: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: p.bg,
              color: p.ink,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Left column — big number + headline */}
            <div
              style={{
                padding: "clamp(3rem, 8vw, 7rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                borderRight: `1px solid ${p.ink}18`,
              }}
            >
              {/* Chapter number */}
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(6rem, 15vw, 14rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: `${p.accent}30`,
                  position: "absolute",
                  top: "clamp(1rem, 3vh, 2.5rem)",
                  right: "clamp(2rem, 5vw, 4rem)",
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                {p.num}
              </span>

              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(0.58rem, 0.7vw, 0.7rem)",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: p.accent,
                  marginBottom: "1.25rem",
                }}
              >
                Chapter {p.num} · Parenting Philosophy
              </p>

              <h2
                className="h-headline"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.9,
                  color: p.ink,
                  margin: 0,
                  whiteSpace: "pre-line",
                }}
              >
                {p.title}
              </h2>
            </div>

            {/* Right column — body text + side quote */}
            <div
              style={{
                padding: "clamp(3rem, 8vw, 7rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                className="h-body"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                  lineHeight: 1.8,
                  color: `${p.ink}cc`,
                  maxWidth: "38ch",
                  marginBottom: "2.5rem",
                }}
              >
                {p.body}
              </p>

              {/* Margin pull-quote */}
              <div
                style={{
                  borderLeft: `2px solid ${p.accent}`,
                  paddingLeft: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(1rem, 1.5vw, 1.35rem)",
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: p.ink,
                  }}
                >
                  &ldquo;{p.side}&rdquo;
                </p>
              </div>
            </div>

            {/* Decorative horizontal rule */}
            <div
              style={{
                position: "absolute",
                bottom: "clamp(2rem, 4vh, 3rem)",
                left: "clamp(3rem, 8vw, 7rem)",
                right: "clamp(3rem, 8vw, 7rem)",
                height: 1,
                background: `${p.ink}18`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
