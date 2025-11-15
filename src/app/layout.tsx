// src/app/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';
import { cookies } from 'next/headers';

import LangProvider from '@/components/ui/LangProvider';
import LangSwitch from '@/components/ui/LangSwitch';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/i18n';

import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Opcional: se quiser que os OG links usem a URL certa
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gabriel Oliveira | Fullstack Dev',
    template: '%s — Gabriel Oliveira',
  },
  description:
    'Portfólio com projetos de automações, dashboards (embedded), Firebase e UX.',
  openGraph: {
    type: 'website',
    title: 'Gabriel Oliveira — Portfólio',
    description:
      'Portfólio com projetos de automações, dashboards (embedded), Firebase e UX.',
    images: [{ url: '/og-cover.jpg', width: 1200, height: 630, alt: 'Gabriel Oliveira — Portfólio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Oliveira | Fullstack Dev',
    description:
      'Portfólio com projetos de automações, dashboards (embedded), Firebase e UX.',
    images: ['/og-cover.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('lang')?.value as Locale | undefined;
  const lang: Locale = langCookie === 'en' || langCookie === 'pt' ? langCookie : 'pt';
  const dict = getDictionary(lang);

  return (
    <html lang={lang === 'pt' ? 'pt-BR' : 'en-US'}>
      <head>
        {/* Devicon (logotipos de techs) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>

      {/* 
        IMPORTANTE:
        - Header e footer FIXED (sempre na tela)
        - O padding do <main> usa variáveis CSS para não ficar coberto
      */}
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <LangProvider lang={lang} dict={dict}>
          {/* BACKGROUND GLOBAL (camadas em -z) */}
          <div className="fixed inset-0 -z-10">
            {/* fundo preto base */}
            <div className="absolute inset-0 bg-black" />
            {/* gradiente amplo (esquerda→direita) */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-800/15 to-fuchsia-800/10" />
            {/* grade de pontos (definida no globals.css) */}
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
          </div>

          {/* HEADER FIXO */}
          <header
            className="fixed inset-x-0 top-0 z-[60] h-[var(--header-h)]
                       border-b border-white/10
                       bg-black/20 backdrop-blur-sm
                       supports-[backdrop-filter]:bg-black/30"
          >
            <div className="container mx-auto flex h-full items-center justify-between px-4">
              <h1 className="text-base font-semibold tracking-tight">{dict.header.name}</h1>

              <div className="flex items-center gap-4 text-white/80">
                <nav className="flex items-center gap-4">
                  <Link
                    href="https://www.linkedin.com/in/gabriel-oliveira-49a5152aa"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="transition hover:text-white"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </Link>

                  <Link
                    href="https://github.com/GabrielZippys"
                    target="_blank"
                    aria-label="GitHub"
                    className="transition hover:text-white"
                    title="GitHub"
                  >
                    <FaGithub size={18} />
                  </Link>

                  <Link
                    href="mailto:hd1366351@outlook.com"
                    aria-label="E-mail"
                    className="transition hover:text-white"
                    title="E-mail"
                  >
                    <FaEnvelope size={18} />
                  </Link>
                </nav>

                <LangSwitch />
              </div>
            </div>
          </header>

          {/* CONTEÚDO – compensado pelo header/footer fixos */}
          <main
            id="content"
            className="pt-[var(--header-h)] pb-[var(--footer-h)]"
          >
            {children}
          </main>

          {/* FOOTER FIXO */}
          <footer
            className="fixed inset-x-0 bottom-0 z-[60] h-[var(--footer-h)]
                       border-t border-white/10
                       bg-black/20 backdrop-blur-sm
                       supports-[backdrop-filter]:bg-black/30"
          >
            <div className="container mx-auto flex h-full items-center justify-center px-4 text-[11px] text-white/60">
              {dict.footer.copyright.replace('{year}', String(new Date().getFullYear()))}
            </div>
          </footer>
        </LangProvider>
      </body>
    </html>
  );
}
