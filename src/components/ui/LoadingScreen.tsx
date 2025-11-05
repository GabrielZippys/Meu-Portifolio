'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stepsBase = [
  '> Carregando projeto...',
  '> Conectando ao Firestore...',
  '> Renderizando animações...',
  '> Pronto!',
];

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const steps = useMemo(() => stepsBase, []);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => {
      setIndex(i => {
        if (i < steps.length - 1) return i + 1;
        clearInterval(tick);
        setTimeout(() => {
          setVisible(false);
          onFinish();
        }, 500);
        return i;
      });
      return () => clearInterval(tick);
    }, 650);
    return () => clearInterval(tick);
  }, [onFinish, steps.length]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 text-green-400 font-mono text-sm"
      >
        <div className="leading-snug whitespace-pre">
          {steps.slice(0, index + 1).map((line, i) => (
            <div key={i} className={i === index ? 'type-caret' : ''}>
              {line}
            </div>
          ))}
          <button
            onClick={() => { setVisible(false); onFinish(); }}
            className="mt-4 inline-flex items-center rounded-md border border-green-400/30 px-3 py-1 text-green-300 hover:bg-green-400/10 transition pointer-events-auto"
          >
            Pular
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
