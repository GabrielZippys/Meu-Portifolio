// src/components/ui/TechCanvas.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';
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
    <div className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] lg:h-[700px] overflow-visible">
      {/* Glow de fundo atrás do canvas */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-45"
        style={{
          background:
            'radial-gradient(180px 160px at 65% 35%, #00d1ff55, transparent), radial-gradient(200px 180px at 35% 70%, #7c3aed55, transparent)',
        }}
      />

      <Canvas
        className="absolute inset-0 z-10"
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        onCreated={({ gl }) => gl.setClearAlpha(0)}
      >
        {/* Se quiser um fundinho sólido em vez de totalmente transparente, descomenta abaixo */}
        {/* <color attach="background" args={['#020617']} /> */}

        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1.3} />

        <PresentationControls
          global
          rotation={[0, 0.3, 0]}
          polar={[-0.3, 0.3]}
          azimuth={[-0.6, 0.6]}
          config={{ mass: 1, tension: 170, friction: 26 }}
        >
          <Suspense fallback={null}>
            <Knot />
            {/* IMPORTANTE: sem Environment remoto aqui para evitar erro 429 */}
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
