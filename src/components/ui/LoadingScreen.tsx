'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const STEPS = [
  'Carregando o projeto…',
  'Conectando aos serviços…',
  'Renderizando interface…',
];

export default function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const rot = setInterval(() => setI((v) => (v + 1) % STEPS.length), 700);
    // fecha sozinho em ~2.2s
    const close = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, 2200);
    return () => {
      clearInterval(rot);
      clearTimeout(close);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-sm text-zinc-200">{STEPS[i]}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
