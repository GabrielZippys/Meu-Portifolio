'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

type Props = {
  children: React.ReactNode;
  /** mostrar o splash só na 1ª visita da sessão */
  oncePerSession?: boolean;
  /** duração mínima do splash em ms (evita flicker) */
  minDurationMs?: number;
};

export default function SplashGate({
  children,
  oncePerSession = true,
  minDurationMs = 1200,
}: Props) {
  const [show, setShow] = useState(false);
  const [canRenderChildren, setCanRenderChildren] = useState(false);

  useEffect(() => {
    const KEY = 'splash:v1';
    const already = sessionStorage.getItem(KEY);

    if (oncePerSession && already) {
      // já viu: não mostra
      setCanRenderChildren(true);
      return;
    }

    setShow(true);
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minDurationMs - elapsed);
      setTimeout(() => {
        setShow(false);
        setCanRenderChildren(true);
        if (oncePerSession) sessionStorage.setItem(KEY, '1');
      }, wait);
    };

    // falha-segura: garante que fecha em 4s se nada chamar finish()
    const guard = setTimeout(finish, 4000);
    return () => clearTimeout(guard);
  }, [oncePerSession, minDurationMs]);

  return (
    <>
      {canRenderChildren && children}
      {show && <LoadingScreen onFinish={() => setShow(false)} />}
    </>
  );
}
