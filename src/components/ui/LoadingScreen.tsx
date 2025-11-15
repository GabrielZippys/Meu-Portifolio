'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '@/components/ui/LangProvider';

type LocationState = {
  status: 'detecting' | 'success' | 'error';
  country?: string;
};

export default function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const { dict } = useLang();
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);
  const [location, setLocation] = useState<LocationState>({ status: 'detecting' });

  useEffect(() => {
    const steps = dict.loading.steps;
    const rot = setInterval(() => setI((v) => (v + 1) % steps.length), 700);
    // fecha sozinho em ~2.2s
    const close = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, 2200);
    return () => {
      clearInterval(rot);
      clearTimeout(close);
    };
  }, [dict.loading.steps, onFinish]);

  useEffect(() => {
    let cancelled = false;

    async function detectCountry() {
      try {
        const res = await fetch('/api/location', { cache: 'no-store' });
        if (!res.ok) throw new Error('request failed');
        const data = await res.json();
        if (cancelled) return;
        if (data?.country) {
          setLocation({ status: 'success', country: data.country });
        } else {
          setLocation({ status: 'error' });
        }
      } catch (error) {
        if (!cancelled) {
          setLocation({ status: 'error' });
        }
      }
    }

    detectCountry();
    return () => {
      cancelled = true;
    };
  }, []);

  const locationText = (() => {
    if (location.status === 'success' && location.country) {
      return dict.loading.locationDetected.replace('{country}', location.country);
    }
    if (location.status === 'error') {
      return dict.loading.locationFallback;
    }
    return dict.loading.detectingLocation;
  })();

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
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-sm text-zinc-200">
                    {dict.loading.steps[i]}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">{locationText}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}