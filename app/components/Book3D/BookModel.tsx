"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface BookModelProps {
  mouse: React.RefObject<{ x: number; y: number }>;
  scrollProgress: React.RefObject<number>;
}

const BOOK_W = 2.6;
const BOOK_H = 3.6;
const BOOK_D = 0.45;

export default function BookModel({ mouse, scrollProgress }: BookModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coverRef = useRef<THREE.Mesh>(null); // right half — the opening cover
  const { camera } = useThree();
  const clock = useRef(0);

  const coverTexture = useTexture("/book-cover.png");
  coverTexture.wrapS = THREE.ClampToEdgeWrapping;
  coverTexture.wrapT = THREE.ClampToEdgeWrapping;

  // Spine / page block material
  const pageMat = new THREE.MeshStandardMaterial({
    color: "#e8dccb",
    roughness: 0.85,
    metalness: 0.02,
  });

  const spineMat = new THREE.MeshStandardMaterial({
    color: "#5a4028",
    roughness: 0.9,
    metalness: 0.05,
  });

  const coverMat = new THREE.MeshStandardMaterial({
    map: coverTexture,
    roughness: 0.7,
    metalness: 0.05,
  });

  const backCoverMat = new THREE.MeshStandardMaterial({
    color: "#5a4028",
    roughness: 0.85,
    metalness: 0.03,
  });

  useFrame((_, delta) => {
    clock.current += delta;
    const progress = scrollProgress.current ?? 0;
    const mx = mouse.current?.x ?? 0;
    const my = mouse.current?.y ?? 0;

    if (!groupRef.current) return;

    if (progress < 0.35) {
      // Phase 1: float and follow cursor
      const floatY = Math.sin(clock.current * 0.7) * 0.05;
      const targetRotY = mx * 0.28;
      const targetRotX = -my * 0.15;

      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.04;
      groupRef.current.position.y += (floatY - groupRef.current.position.y) * 0.06;

      // Reset camera
      (camera as THREE.PerspectiveCamera).position.z += (7.5 - (camera as THREE.PerspectiveCamera).position.z) * 0.04;

    } else if (progress < 0.72) {
      // Phase 2: camera zooms in, book stabilises
      const p = (progress - 0.35) / 0.37; // 0→1
      const easedP = easeInOutCubic(p);

      groupRef.current.rotation.y += (0 - groupRef.current.rotation.y) * 0.06;
      groupRef.current.rotation.x += (0 - groupRef.current.rotation.x) * 0.06;
      groupRef.current.position.y += (0 - groupRef.current.position.y) * 0.06;

      const targetZ = THREE.MathUtils.lerp(7.5, 3.8, easedP);
      (camera as THREE.PerspectiveCamera).position.z += (targetZ - (camera as THREE.PerspectiveCamera).position.z) * 0.08;

    } else {
      // Phase 3: cover opens
      const p = (progress - 0.72) / 0.28; // 0→1
      const easedP = easeInOutCubic(p);

      if (coverRef.current) {
        const targetAngle = -Math.PI * 0.82 * easedP;
        coverRef.current.rotation.y += (targetAngle - coverRef.current.rotation.y) * 0.08;
      }

      // Slow drift back out as book opens
      const targetZ = THREE.MathUtils.lerp(3.8, 5, easeInOutCubic(Math.min(1, p * 1.5)));
      (camera as THREE.PerspectiveCamera).position.z += (targetZ - (camera as THREE.PerspectiveCamera).position.z) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Page block — main body */}
      <mesh position={[0, 0, 0]} material={pageMat}>
        <boxGeometry args={[BOOK_W, BOOK_H, BOOK_D]} />
      </mesh>

      {/* Spine — left edge */}
      <mesh position={[-BOOK_W / 2 - 0.06, 0, 0]} material={spineMat}>
        <boxGeometry args={[0.12, BOOK_H + 0.04, BOOK_D + 0.08]} />
      </mesh>

      {/* Back cover — fixed */}
      <mesh position={[0, 0, -BOOK_D / 2 - 0.02]} material={backCoverMat}>
        <boxGeometry args={[BOOK_W + 0.04, BOOK_H + 0.06, 0.04]} />
      </mesh>

      {/* Front cover — rotates open, pivot at the left edge */}
      <group position={[-BOOK_W / 2, 0, BOOK_D / 2 + 0.02]}>
        <mesh
          ref={coverRef}
          position={[BOOK_W / 2, 0, 0]}
          rotation={[0, 0, 0]}
          material={coverMat}
          castShadow
        >
          <boxGeometry args={[BOOK_W, BOOK_H + 0.06, 0.04]} />
        </mesh>
      </group>

      {/* Subtle page-edges detail */}
      <mesh position={[BOOK_W / 2 + 0.03, 0, 0]}>
        <boxGeometry args={[0.06, BOOK_H, BOOK_D - 0.02]} />
        <meshStandardMaterial color="#ede0c8" roughness={0.95} />
      </mesh>
    </group>
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
