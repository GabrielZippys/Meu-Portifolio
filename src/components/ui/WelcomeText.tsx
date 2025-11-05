'use client';

import { motion, type Variants } from 'framer-motion';
import dynamic from 'next/dynamic';
import TechLogos from './TechLogos';

const TechCanvas = dynamic(() => import('./TechCanvas'), { ssr: false });

// bezier que imita o "easeOut"
const easeOutBezier: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutBezier,   // 👈 troca a string por bezier
      delay: 0.1 * i,
    },
  }),
};

export default function WelcomeText() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="order-2 md:order-1">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Bem-vindo ao meu Portfólio
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 text-zinc-300/90 text-lg sm:text-xl max-w-xl"
          >
            Tecnologia • Automação • Inovação — soluções de ponta com foco em resultado.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projetos"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold text-black bg-cyan-400/90 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 backdrop-blur transition"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold border border-white/15 text-zinc-200 hover:bg-white/10 transition"
            >
              Falar comigo
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-6 flex flex-wrap gap-2 text-sm text-zinc-400"
          >
            {['Next.js', 'Tailwind', 'Firebase', 'Automação', 'DataViz'].map(s => (
              <li key={s} className="rounded-full border border-white/10 px-3 py-1">
                {s}
              </li>
            ))}
            <TechLogos />

          </motion.ul>
        </div>

        {/* 3D */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="order-1 md:order-2">
          <TechCanvas />
        </motion.div>
      </div>
    </section>
  );
}
