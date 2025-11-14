'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeText from '@/components/ui/WelcomeText';

export default function HomeClient() {
  const router = useRouter();

  // Se alguém acessar /#sobre, redireciona para /sobre
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#sobre') {
      router.replace('/sobre');
    }
  }, [router]);

  return (
    <main className="relative min-h-[calc(100svh-5rem)] overflow-x-clip">
      <WelcomeText />
    </main>
  );
}
