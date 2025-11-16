'use client';

import { motion, Variants } from 'framer-motion';
import TechCanvas from '@/components/ui/TechCanvas';
import TechLogos from '@/components/ui/TechLogos';
import { useLang } from '@/components/ui/LangProvider';

const easeOutBezier = [0.16, 1, 0.3, 1] as const;

const fadeUp = (i = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutBezier, delay: 0.1 * i },
  },
});

export default function WelcomeText() {
  const { dict } = useLang();

  return (
    <section
      className="
        relative
        min-h-[calc(100svh-5rem)]
        md:min-h-[calc(100svh-5rem)]
        flex items-center
        overflow-x-clip
      "
    >
      {/* Camadas de fundo */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient" />

      {/* 3D – wrapper absoluto, mais largo/alto e deslocado à direita */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: easeOutBezier, delay: 0.15 }}
        className="
          pointer-events-none
          absolute
          top-[110px] sm:top-[160px] lg:top-[180px]
          right-[-140px] sm:right-[-36px] md:right-[-20px] lg:right-[2.5vw] xl:right-[11.5vw]
          w-[280px] h-[280px]
          sm:w-[420px] sm:h-[420px]
          md:w-[640px] md:h-[640px]
          xl:w-[880px] xl:h-[880px]
          2xl:w-[640px] 2xl:h-[640px]
        "
      >
        <TechCanvas />
      </motion.div>

      {/* Conteúdo */}
      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Coluna de texto */}
        <div className="order-2 md:order-1">
          <motion.h1
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200">
              {dict.homePage.title}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(1)}
            initial="hidden"
            animate="show"
            className="mt-4 text-zinc-300/90 text-lg max-w-xl"
          >
            {dict.homePage.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp(2)}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/projetos"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold bg-cyan-500/90 hover:bg-cyan-500 text-black transition"
            >
              {dict.homePage.ctaProjects}
            </a>

            <a
              href="/sobre"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 transition"
            >
              {dict.homePage.ctaAbout}
            </a>
          </motion.div>

          {/* Chips */}
          <motion.ul
            variants={fadeUp(3)}
            initial="hidden"
            animate="show"
            className="mt-6 flex flex-wrap gap-2 text-sm text-zinc-400"
          >
            {dict.homePage.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 px-3 py-1 bg-white/5"
              >
                {t}
              </li>
            ))}
          </motion.ul>

          {/* Logos */}
          <motion.div
            variants={fadeUp(4)}
            initial="hidden"
            animate="show"
            className="mt-4"
          >
            <TechLogos />
          </motion.div>
        </div>

        {/* A outra coluna fica vazia só para reservar espaço no grid em telas grandes */}
        <div className="order-1 md:order-2" />
      </div>
    </section>
  );
}
