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
    const numDust = 12;
    const numFibers = 6;

    const resizeCanvas = () => {
      if (typeof window !== "undefined") {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      // Dust particles
      for (let i = 0; i < numDust; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.08, // extremely slow
          vy: (Math.random() - 0.5) * 0.08,
          radius: Math.random() * 1.4 + 0.4,
          alpha: Math.random() * 0.07 + 0.05, // 5% to 12% opacity
          type: "dust",
        });
      }
      // Floating paper fibers
      for (let i = 0; i < numFibers; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.06, // even slower
          vy: (Math.random() - 0.5) * 0.06,
          radius: 0.5,
          alpha: Math.random() * 0.06 + 0.04, // 4% to 10% opacity
          type: "fiber",
          length: Math.random() * 7 + 4, // 4px to 11px long
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.003, // slow rotation
        });
      }
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.type === "fiber" && p.angle !== undefined && p.spin !== undefined) {
          p.angle += p.spin;
        }

        // Wrap around borders gracefully with offset
        const margin = 20;
        if (p.x < -margin) p.x = canvas.width + margin;
        if (p.x > canvas.width + margin) p.x = -margin;
        if (p.y < -margin) p.y = canvas.height + margin;
        if (p.y > canvas.height + margin) p.y = -margin;

        ctx.beginPath();
        if (p.type === "dust") {
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(110, 90, 78, ${p.alpha})`; // ink color dust
          ctx.fill();
        } else if (p.type === "fiber" && p.length !== undefined && p.angle !== undefined) {
          ctx.strokeStyle = `rgba(110, 90, 78, ${p.alpha})`;
          ctx.lineWidth = 0.5;
          ctx.lineCap = "round";
          
          // Draw slightly curved fiber line
          const xEnd = p.x + Math.cos(p.angle) * p.length;
          const yEnd = p.y + Math.sin(p.angle) * p.length;
          const midX = (p.x + xEnd) / 2 + Math.sin(p.angle) * 1.5;
          const midY = (p.y + yEnd) / 2 + Math.cos(p.angle) * 1.5;
          
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
