'use client';

import React, { createContext, useContext } from 'react';
import type { Dict, Locale } from '@/lib/i18n';

interface LangContextValue {
  lang: Locale;
  dict: Dict;
}

const LangContext = createContext<LangContextValue | null>(null);

export default function LangProvider({
  lang,
  dict,
  children,
}: {
  lang: Locale;
  dict: Dict;
  children: React.ReactNode;
}) {
  return <LangContext.Provider value={{ lang, dict }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return ctx;
}
