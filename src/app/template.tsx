// src/app/template.tsx
'use client';
import SplashGate from '@/components/ui/SplashGate';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <SplashGate oncePerSession minDurationMs={900}>
      {children}
    </SplashGate>
  );
}
