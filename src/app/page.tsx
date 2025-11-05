'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';
import WelcomeText from '@/components/ui/WelcomeText';

export default function HomePage() {
  const [ready, setReady] = useState(false);
  return (
    <>
      {!ready && <LoadingScreen onFinish={() => setReady(true)} />}
      <main className="relative">{ready && <WelcomeText />}</main>
    </>
  );
}
