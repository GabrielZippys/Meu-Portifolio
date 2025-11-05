'use client';

import { motion, type Variants } from 'framer-motion';

/* ====== SVGs personalizados ====== */
function NextGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="gradNext" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e5f2ff" />
          <stop offset="50%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <path d="M3 4h3v16H3zM6 4h3l6 12h-3zM15 4h3v16h-3z" fill="url(#gradNext)" />
    </svg>
  );
}

function FramerGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="gradFramer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path d="M4 3h16v6H12l8 6H4V9h8z" fill="url(#gradFramer)" />
      <path d="M12 15H4l8 6v-6z" fill="url(#gradFramer)" />
    </svg>
  );
}

/* Firebase oficial (chama amarela/laranja) */
function FirebaseGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 351" aria-hidden="true" className={className}>
      {/* Baseado no asset oficial simplificado */}
      <path
        d="M0 277 18 52c1-9 13-12 18-4l37 69 16-30c3-6 12-6 15 0l21 41 65-124c4-8 16-6 17 3l28 270L131 351 0 277Z"
        fill="#FFA000"
      />
      <path
        d="m131 351 118-74-28-270c-1-9-13-11-17-3l-73 140v207Z"
        fill="#F57C00"
      />
      <path
        d="M54 117 18 52c-5-8-17-5-18 4L0 277l54-160Z"
        fill="#FFCA28"
      />
    </svg>
  );
}

/* ====== LISTA ====== */
type Tech =
  | { name: 'Next.js' | 'Framer Motion' | 'Firebase'; svg: 'next' | 'framer' | 'firebase'; href?: string }
  | { name: string; devicon: string; href?: string };

const TECHS: Tech[] = [
  { name: 'Next.js', svg: 'next' },
  { name: 'Framer Motion', svg: 'framer' },
  { name: 'Firebase', svg: 'firebase' },

  { name: 'React', devicon: 'devicon-react-original colored' },
  { name: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
  { name: 'Tailwind CSS', devicon: 'devicon-tailwindcss-plain colored' },
  { name: 'Three.js', devicon: 'devicon-threejs-original' },
  { name: 'Node.js', devicon: 'devicon-nodejs-plain colored' },
  { name: 'Git', devicon: 'devicon-git-plain colored' },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
const list: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item: Variants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } };

export default function TechLogos() {
  return (
    <motion.ul
      variants={list}
      initial="hidden"
      animate="show"
      className="mt-6 flex flex-wrap items-center gap-3"
      aria-label="Tecnologias dominadas"
    >
      {TECHS.map((t) => (
        <motion.li key={t.name} variants={item}>
          <a
            href={t.href ?? '#'}
            onClick={(e) => !t.href && e.preventDefault()}
            className="group"
            aria-label={t.name}
            title={t.name}
          >
            <div
              className="badge relative flex h-12 w-12 items-center justify-center rounded-2xl
                         border border-white/10 bg-white/[0.05] backdrop-blur-sm
                         transition will-change-transform hover:scale-105 hover:border-cyan-400/30
                         hover:shadow-[0_0_24px_4px_rgba(34,211,238,.12)]"
            >
              {/* glow interno */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
                              [background:radial-gradient(60px_60px_at_50%_40%,rgba(34,211,238,.18),transparent_62%)]" />

              {/* Ícone */}
              {'svg' in t ? (
                t.svg === 'next' ? (
                  <NextGlyph className="h-6 w-6 drop-shadow-[0_0_10px_rgba(129,140,248,.35)] transition group-hover:scale-110" />
                ) : t.svg === 'framer' ? (
                  <FramerGlyph className="h-6 w-6 drop-shadow-[0_0_10px_rgba(99,102,241,.35)] transition group-hover:scale-110" />
                ) : (
                  <FirebaseGlyph className="h-7 w-7 drop-shadow-[0_0_10px_rgba(251,191,36,.3)] transition group-hover:scale-110" />
                )
              ) : (
                <i
                  className={[
                    t.devicon,
                    'text-[26px] opacity-95',
                    'group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,.35)] transition',
                  ].join(' ')}
                />
              )}

              <span className="sr-only">{t.name}</span>
            </div>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
