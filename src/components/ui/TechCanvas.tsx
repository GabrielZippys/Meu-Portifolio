'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls /*, Environment*/ } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function Knot() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    mesh.current.rotation.x += dt * 0.25;
    mesh.current.rotation.y += dt * 0.35;
  });
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.1, 0.35, 256, 32]} />
        <meshStandardMaterial
          metalness={0.6}
          roughness={0.25}
          color="#00D1FF"
          emissive="#4F46E5"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

export default function TechCanvas() {
  return (
    <div className="relative w-full h-[460px] sm:h-[560px] md:h-[660px] lg:h-[740px] overflow-visible">
      {/* glow AGORA ATRÁS do canvas */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(160px 140px at 60% 40%, #00d1ff55, transparent), radial-gradient(160px 140px at 40% 60%, #7c3aed55, transparent)',
        }}
      />

      <Canvas
        className="absolute inset-0 z-10"
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 7.2], fov: 50 }}   // 👈 de 4 para ~5.2
        onCreated={({ gl }) => gl.setClearAlpha(0)}
      >

        {/* Se preferir um fundo sólido e evitar qualquer “flash”, descomente: */}
        {/* <color attach="background" args={['#0b0f14']} /> */}

        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />

        <PresentationControls global rotation={[0, 0.2, 0]} polar={[-0.3, 0.3]} azimuth={[-0.6, 0.6]}>
          <Suspense fallback={null}>
            <Knot />
            {/* Evite o “flash branco” inicial: use Environment só se precisar e sem background */}
            {/* <Environment preset="city" background={false} /> */}
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
