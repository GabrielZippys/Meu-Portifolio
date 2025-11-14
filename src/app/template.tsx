// src/app/template.tsx
'use client';
import SplashGate from '@/components/ui/SplashGate';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <SplashGate oncePerSession={false} minDurationMs={900}>
      {children}
    </SplashGate>
  );
}
