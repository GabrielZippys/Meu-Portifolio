'use client';

import { motion, type Variants } from 'framer-motion';
import { useLang } from '@/components/ui/LangProvider';

type Tech = {
  key: string;
  label: string;
  iconClass: string;   // classe do Devicon
  color: string;       // cor do hover/anel
};

const TECHS: Tech[] = [
  { key: 'next',    label: 'Next.js',         iconClass: 'devicon-nextjs-plain',           color: '#00E7F0' },
  { key: 'tailwind',label: 'Tailwind CSS',    iconClass: 'devicon-tailwindcss-original',   color: '#38BDF8' },
  { key: 'firebase',label: 'Firebase',        iconClass: 'devicon-firebase-plain',         color: '#FFCA28' },
  { key: 'ts',      label: 'TypeScript',      iconClass: 'devicon-typescript-plain',       color: '#3178C6' },
  { key: 'three',   label: 'Three.js',        iconClass: 'devicon-threejs-original',       color: '#8B5CF6' },
  { key: 'node',    label: 'Node.js',         iconClass: 'devicon-nodejs-plain',           color: '#5FA04E' },
  { key: 'framer',  label: 'Framer Motion',   iconClass: 'devicon-react-original',         color: '#6EE7B7' }, // ícone “genérico” (React) pra representar Motion
  { key: 'git',     label: 'Git',             iconClass: 'devicon-git-plain',              color: '#F05133' },
];

const easeOutBezier: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutBezier, delay: 0.08 * i },
  }),
};

// helper para evitar \r\n em className
const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

export default function TechLogos() {
  const { dict } = useLang();

  return (
    <motion.ul
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="mt-6 flex flex-wrap gap-3"
      aria-label={dict.homePage.techListAria}
    >
      {TECHS.map((t, i) => (
        <motion.li key={t.key} variants={fadeUp} custom={i + 1}>
          <button
            type="button"
            aria-label={t.label}
            title={t.label}
            className="group"
          >
            <div
              className={cn(
                'badge relative flex h-12 w-12 items-center justify-center rounded-2xl',
                'border border-white/10 bg-black/30 shadow-lg shadow-black/20',
                'transition-all duration-300 hover:scale-[1.03] hover:border-white/30'
              )}
            >
              {/* anel/brilho */}
              <div
                className={cn(
                  'pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300',
                  'group-hover:opacity-100'
                )}
                style={{
                  boxShadow: `0 0 24px 6px ${t.color}33, inset 0 0 24px 4px ${t.color}22`,
                }}
              />

              {/* ícone */}
              <i
                className={cn(t.iconClass, 'text-[22px]')}
                style={{ color: t.color }}
              />
            </div>
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
}
