'use client';

import { useTransition } from 'react';
import { useLang } from '@/components/ui/LangProvider';

export default function LangSwitch() {
  const { lang } = useLang();
  const [isPending, startTransition] = useTransition();

  function setLanguage(nextLang: 'pt' | 'en') {
    if (nextLang === lang || isPending) return;

    startTransition(async () => {
      try {
        await fetch(`/api/lang?set=${nextLang}`, {
          method: 'POST',
        });
        window.location.reload();
      } catch (err) {
        console.error('Failed to set language', err);
      }
    });
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        className={`rounded-full px-2 py-1 border text-[11px] transition ${
          lang === 'pt'
            ? 'border-white/80 bg-white text-black'
            : 'border-white/20 bg-transparent text-white/70 hover:border-white/50'
        }`}
        aria-pressed={lang === 'pt'}
        aria-label="Português"
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-2 py-1 border text-[11px] transition ${
          lang === 'en'
            ? 'border-white/80 bg-white text-black'
            : 'border-white/20 bg-transparent text-white/70 hover:border-white/50'
        }`}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
