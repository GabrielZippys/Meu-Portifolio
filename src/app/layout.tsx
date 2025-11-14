// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import '@/app/globals.css';

// Fonte
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Opcional: use esta URL no metadata/OGs
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gabriel Oliveira | Fullstack Dev',
    template: '%s — Gabriel Oliveira',
  },
  description:
    'Portfólio com projetos de automações, dashboards (embedded), Firebase e experiência full-stack.',
  openGraph: {
    type: 'website',
    title: 'Gabriel Oliveira — Portfólio',
    description:
      'Portfólio com projetos de automações, dashboards (embedded), Firebase e experiência full-stack.',
    images: [{ url: '/og-cover.jpg', width: 1200, height: 630, alt: 'Gabriel Oliveira — Portfólio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Oliveira | Fullstack Dev',
    description:
      'Portfólio com projetos de automações, dashboards (embedded), Firebase e experiência full-stack.',
    images: ['/og-cover.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Devicon (logos de tecnologias) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>

      {/* IMPORTANTE:
          - Nada de SplashGate aqui (ele vai no template.tsx)
          - Sem bg locais nos heros; background global vive aqui. */}
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {/* BACKGROUND GLOBAL (suave e sem bordas “quadradas”) */}
        <div className="fixed inset-0 -z-10">
          {/* base preta */}
          <div className="absolute inset-0 bg-black" />
          {/* gradiente amplo, super suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/15" />
          {/* grade sutil de pontos (definida no globals.css) */}
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
        </div>

        {/* Link de acessibilidade */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Pular para o conteúdo
        </a>

        {/* Header fixo e leve */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-sm">
          <div className="container mx-auto flex h-14 items-center justify-between px-6">
            <h1 className="text-base font-semibold tracking-tight">Gabriel Oliveira</h1>

            <nav className="flex items-center gap-4 text-white/80">
              <Link
                href="https://www.linkedin.com/in/gabriel-oliveira-49a5152aa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-white"
                title="LinkedIn"
              >
                in
              </Link>

              <Link
                href="https://github.com/GabrielZippys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-white"
                title="GitHub"
              >
                gh
              </Link>

              <Link
                href="mailto:hd1366351@outlook.com"
                aria-label="E-mail"
                className="transition hover:text-white"
                title="E-mail"
              >
                @
              </Link>
            </nav>
          </div>
        </header>

        {/* Conteúdo com offset do header */}
        <main id="content" className="pt-24">
          {children}
        </main>

        {/* Footer simples */}
        <footer className="mt-10 border-t border-white/10">
          <div className="container mx-auto px-6 py-6 text-center text-xs text-white/60">
            © {new Date().getFullYear()} Gabriel Oliveira • Desenvolvido com Next.js + TailwindCSS
          </div>
        </footer>
      </body>
    </html>
  );
}
