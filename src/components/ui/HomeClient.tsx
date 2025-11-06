'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/components/ui/LoadingScreen';
import WelcomeText from '@/components/ui/WelcomeText';

export default function HomeClient() {
  const [ready, setReady] = useState(true); // coloque false se quiser a tela de loading
  const router = useRouter();

  // se alguém acessar /#sobre, redireciona para /sobre
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#sobre') {
      router.replace('/sobre');
    }
  }, [router]);

  return (
    <>
      {!ready && <LoadingScreen onFinish={() => setReady(true)} />}
      <main className="relative min-h-[calc(100svh-5rem)] overflow-x-clip">
        {ready && <WelcomeText />}
      </main>
    </>
  );
}
