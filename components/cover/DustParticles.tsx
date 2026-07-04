"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  type: "dust" | "fiber";
  length?: number;
  angle?: number;
  spin?: number;
  waverPhase?: number;
  waverAmp?: number;
}

export default function DustParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const numDust = 45;
    const numFibers = 15;
    let time = 0;

    let resizeTimeout: NodeJS.Timeout;

    const resizeCanvas = () => {
      if (typeof window !== "undefined") {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Debounce particle re-initialization to avoid GC/object allocation thrashing
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          initParticles();
        }, 150);
      }
    };

    const initParticles = () => {
      particles = [];
      // Light beam zone roughly: top-center trapezoid
      const beamCenterX = canvas.width * 0.45;
      const beamTopWidth = canvas.width * 0.4;
      const beamBottomWidth = canvas.width * 0.6;

      // Dust particles
      for (let i = 0; i < numDust; i++) {
        const inBeam = Math.random() < 0.65;
        let x: number, y: number;
        if (inBeam) {
          // Concentrate in light beam zone
          const t = Math.random();
          const beamWidth = beamTopWidth + (beamBottomWidth - beamTopWidth) * t;
          x = beamCenterX - beamWidth / 2 + Math.random() * beamWidth;
          y = t * canvas.height * 0.85 + canvas.height * 0.05;
        } else {
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;
        }
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06 - 0.01,
          radius: Math.random() * 1.6 + 0.3,
          alpha: Math.random() * 0.06 + 0.03,
          type: "dust",
          waverPhase: Math.random() * Math.PI * 2,
          waverAmp: Math.random() * 0.3 + 0.1,
        });
      }
      // Floating paper fibers
      for (let i = 0; i < numFibers; i++) {
        const inBeam = Math.random() < 0.55;
        let x: number, y: number;
        if (inBeam) {
          const t = Math.random();
          const beamWidth = beamTopWidth + (beamBottomWidth - beamTopWidth) * t;
          x = beamCenterX - beamWidth / 2 + Math.random() * beamWidth;
          y = t * canvas.height * 0.7 + canvas.height * 0.1;
        } else {
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;
        }
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.04,
          vy: (Math.random() - 0.5) * 0.04 - 0.005,
          radius: 0.5,
          alpha: Math.random() * 0.05 + 0.02,
          type: "fiber",
          length: Math.random() * 5 + 3,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.002,
          waverPhase: Math.random() * Math.PI * 2,
          waverAmp: Math.random() * 0.2 + 0.05,
        });
      }
    };

    const updateAndDraw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Sinusoidal waver for organic drift
        const waver = Math.sin(time + (p.waverPhase || 0)) * (p.waverAmp || 0);
        p.x += p.vx + waver * 0.02;
        p.y += p.vy;

        if (p.type === "fiber" && p.angle !== undefined && p.spin !== undefined) {
          p.angle += p.spin;
        }

        // Wrap around borders
        const margin = 30;
        if (p.x < -margin) p.x = canvas.width + margin;
        if (p.x > canvas.width + margin) p.x = -margin;
        if (p.y < -margin) p.y = canvas.height + margin;
        if (p.y > canvas.height + margin) p.y = -margin;

        ctx.beginPath();
        if (p.type === "dust") {
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 165, 145, ${p.alpha})`;
          ctx.fill();
        } else if (p.type === "fiber" && p.length !== undefined && p.angle !== undefined) {
          ctx.strokeStyle = `rgba(180, 165, 145, ${p.alpha})`;
          ctx.lineWidth = 0.4;
          ctx.lineCap = "round";

          const xEnd = p.x + Math.cos(p.angle) * p.length;
          const yEnd = p.y + Math.sin(p.angle) * p.length;
          const midX = (p.x + xEnd) / 2 + Math.sin(p.angle) * 1;
          const midY = (p.y + yEnd) / 2 + Math.cos(p.angle) * 1;

          ctx.moveTo(p.x, p.y);
          ctx.quadraticCurveTo(midX, midY, xEnd, yEnd);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    updateAndDraw();

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", resizeCanvas);
      }
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none"
    />
  );
}
