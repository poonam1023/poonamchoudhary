"use client";

import { useEffect, useRef } from "react";

type CursorLabel = "" | "READ" | "DRAG" | "OPEN";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const label = useRef<CursorLabel>("");
  const scale = useRef(1);
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterInteractive = (e: Event) => {
      const el = (e.currentTarget as HTMLElement);
      const type = el.dataset.cursor as CursorLabel | undefined;
      label.current = type ?? "READ";
      scale.current = type === "DRAG" ? 2.5 : type === "OPEN" ? 2 : 1.5;
      if (labelRef.current) labelRef.current.textContent = label.current;
      if (ringRef.current) {
        ringRef.current.dataset.active = "1";
        ringRef.current.dataset.filled = type === "OPEN" ? "1" : "0";
      }
    };

    const onLeaveInteractive = () => {
      label.current = "";
      scale.current = 1;
      if (labelRef.current) labelRef.current.textContent = "";
      if (ringRef.current) {
        ringRef.current.dataset.active = "0";
        ringRef.current.dataset.filled = "0";
      }
    };

    // Attach to all interactive elements
    const attach = () => {
      document.querySelectorAll<HTMLElement>(
        "a, button, [data-cursor]"
      ).forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };

    window.addEventListener("mousemove", onMove);
    // Attach initially and re-attach whenever DOM changes
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    // RAF lerp loop
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.11;
      pos.current.y += (target.current.y - pos.current.y) * 0.11;

      if (ringRef.current) {
        const s = scale.current;
        const size = 22 * s;
        ringRef.current.style.transform = `translate(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px) scale(${s})`;
      }

      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      mo.disconnect();
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        width: 22,
        height: 22,
        borderRadius: "50%",
        border: "1.5px solid rgba(135, 149, 112, 0.8)",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mixBlendMode: "multiply",
        transition: "width 300ms ease, height 300ms ease, background-color 300ms ease, border-color 300ms ease",
        willChange: "transform",
      }}
      data-active="0"
      data-filled="0"
    >
      <span
        ref={labelRef}
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "0.42rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#45382c",
          userSelect: "none",
        }}
      />
    </div>
  );
}
