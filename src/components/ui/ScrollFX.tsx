// src/components/ui/ScrollFX.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollFX() {
  const { scrollYProgress } = useScroll();

  // deslocamentos suaves conforme o scroll
  const xA = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const yA = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const sA = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const xB = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const sB = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const xC = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const yC = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const sC = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Blob ciano */}
      <motion.div
        style={{ x: xA, y: yA, scale: sA }}
        className="absolute -top-28 -left-28 h-[48vmax] w-[48vmax] blur-3xl opacity-60"
        aria-hidden
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(34,211,238,.18), transparent 60%)',
          }}
        />
      </motion.div>

      {/* Blob roxo */}
      <motion.div
        style={{ x: xB, y: yB, scale: sB }}
        className="absolute -bottom-40 -right-32 h-[52vmax] w-[52vmax] blur-3xl opacity-50"
        aria-hidden
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(129,140,248,.16), transparent 60%)',
          }}
        />
      </motion.div>

      {/* Haze central azul */}
      <motion.div
        style={{ x: xC, y: yC, scale: sC }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[40vmax] w-[40vmax] blur-[60px] opacity-40"
        aria-hidden
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(56,189,248,.18), transparent 60%)',
          }}
        />
      </motion.div>

      {/* grade sutil opcional */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}
