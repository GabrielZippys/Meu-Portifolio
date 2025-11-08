// src/components/ui/Gallery.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = { images: string[] };

export default function Gallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
          >
            <Image src={src} alt={`Screenshot ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative h-[80vh] w-[min(1100px,92vw)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={images[idx]} alt={`Screenshot ${idx + 1}`} fill className="object-contain" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-lg" />
            <div className="absolute -bottom-12 left-0 right-0 mx-auto flex w-full max-w-[360px] justify-between gap-4">
              <button
                onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
              >
                ← Anterior
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % images.length)}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
              >
                Próxima →
              </button>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute right-0 top-0 rounded-bl-xl border border-white/20 bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/15"
              aria-label="Fechar"
            >
              Fechar ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
