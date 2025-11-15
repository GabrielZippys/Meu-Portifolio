// src/components/ui/AboutStory.tsx
'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import ScrollFX from './ScrollFX';
import { useLang } from '@/components/ui/LangProvider';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVar = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function AboutStory() {
  // barra de progresso no topo
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });

  const { dict } = useLang();

  const blocks = dict.sobrePage.blocks;

  return (
    <>
      {/* FX de fundo */}
      <ScrollFX />

      {/* progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-20 h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 z-40"
      />

      <main className="relative container mx-auto px-6 pb-24">
        {/* hero simples */}
        <header className="pt-28 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              {dict.sobrePage.title}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300/90">
            {dict.sobrePage.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {dict.sobrePage.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* conteúdo rolável com animações ao entrar na viewport */}
        <div className="mx-auto grid max-w-4xl gap-10">
          {blocks.map((b) => (
            <motion.section
              key={b.h}
              variants={sectionVar}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">{b.h}</h2>
              <p className="mt-3 text-zinc-300/90 leading-relaxed">{b.p}</p>
            </motion.section>
          ))}

          {/* CTA final */}
          <motion.section
            variants={sectionVar}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-6"
          >
            <a
              href="/#projetos"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold text-black bg-cyan-400/90 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
            >
              {dict.sobrePage.ctaProjects}
            </a>
            <a
              href="/"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold border border-white/15 text-zinc-200 hover:bg-white/10 transition"
            >
              {dict.sobrePage.ctaBackHome}
            </a>
          </motion.section>
        </div>
      </main>
    </>
  );
}
