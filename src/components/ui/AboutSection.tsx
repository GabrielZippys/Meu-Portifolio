// src/components/ui/AboutStory.tsx
'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import ScrollFX from './ScrollFX';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVar = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function AboutStory() {
  // barra de progresso no topo
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });

  const blocks = [
    {
      h: 'Começo e curiosidade',
      p: 'No começo eu era apenas uma criança sempre curiosa ganhei meu primeiro computador um positivo Celeron que foi minha porta de entrada aonde pude aprender a navegar na internet e usar o Windows e baixar jogos pela internet isso tudo com 6 anos me apaixonei por computador e tecnologia dai pra frente nunca parei de procurar e descobrir o que o mundo da tecnologia pode proporcionar desde criar jogos até baixar diferentes Sistemas Operacionais para meu computador e com isso nasceu o amor pela programação e até hoje continua.',
    },
    {
      h: 'Fullstack na prática',
      p: 'Com Next.js, Node e Firebase, passei a entregar produtos completos: do backend ao front, sempre com foco em performance, segurança e DX. O objetivo é claro: menos atrito, mais resultado.',
    },
    {
      h: 'Automação e dados',
      p: 'Criei agendadores robustos, integrações com APIs e dashboards que contam histórias. A regra é medir, aprender e iterar rápido — de logs confiáveis a visualizações que geram decisão.',
    },
    {
      h: 'Experimentos visuais',
      p: 'Animações com Framer Motion e cenas 3D com Three.js elevam a experiência. Quando bem dosadas, trazem clareza e personalidade sem pesar na navegação.',
    },
    {
      h: 'Hoje',
      p: 'Sigo construindo produtos que eliminam desperdício e geram impacto. Se você busca automação e uma camada de UX que converte, vamos conversar.',
    },
  ];

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
              Minha história
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300/90">
            Um pouco da trilha até aqui — como cheguei em automação, dashboards e produtos
            que reduzem operação e aumentam resultado.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Automação', 'Dashboards', 'Integrações', 'UX com animações'].map((t) => (
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
              Ver projetos
            </a>
            <a
             href="/"              className="inline-flex items-center rounded-2xl px-6 py-3 font-semibold border border-white/15 text-zinc-200 hover:bg-white/10 transition"
            >
              Voltar para a Home
            </a>
          </motion.section>
        </div>
      </main>
    </>
  );
}
