'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useRef } from 'react';

function Knot() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.4;
    ref.current.rotation.x += dt * 0.2;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.15, 0.3, 220, 40]} />
      <meshPhysicalMaterial
        color="#3ab4ff"
        roughness={0.15}
        metalness={0.6}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transparent
        opacity={0.98}
      />
    </mesh>
  );
}

export default function TechCanvas() {
  return (
    <Canvas
      // 🔑 torna o canvas transparente
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0); // alpha 0
        gl.setClearAlpha(0);
        scene.background = null;       // sem cor de fundo
      }}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'transparent',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <Suspense fallback={null}>
        <Knot />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
