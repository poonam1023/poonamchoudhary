"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import BookModel from "./BookModel";

interface BookSceneProps {
  mouse: React.RefObject<{ x: number; y: number }>;
  scrollProgress: React.RefObject<number>;
}

export default function BookScene({ mouse, scrollProgress }: BookSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 38 }}
      style={{
        position: "absolute",
        inset: 0,
        background: "transparent",
        // Allow mouse events through for the 3D book but NOT scroll
        touchAction: "none",
      }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      {/* Key light — warm top-left */}
      <directionalLight position={[4, 8, 6]} intensity={1.8} color="#fff8ec" castShadow />
      {/* Fill light — cool ambient from right */}
      <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#b8c4d0" />
      {/* Rim light — warm bottom */}
      <pointLight position={[0, -4, 2]} intensity={0.6} color="#c9a96e" />
      <ambientLight intensity={0.45} color="#f7eddd" />

      <Suspense fallback={null}>
        <BookModel mouse={mouse} scrollProgress={scrollProgress} />
        <Environment preset="apartment" />
      </Suspense>
    </Canvas>
  );
}
