// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gabriel Oliveira | Fullstack Dev',
  description: 'Portfólio com projetos de automações, dashboards e Firebase',
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

      <body className={`${inter.className} bg-black text-white`}>
        {/* Conteúdo acima do background */}
        <div className="relative z-10">
          {/* Header fixo 80px */}
          <header className="fixed top-0 inset-x-0 z-50 h-20 backdrop-blur border-b border-white/10 bg-black/30">
            <div className="mx-auto max-w-6xl h-full flex items-center justify-between px-6">
              <h1 className="text-lg font-semibold tracking-tight">Gabriel Oliveira</h1>
              <nav className="flex gap-4 text-white/80">
                <a href="https://www.linkedin.com/in/gabrielzippys/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-pink-500 transition" size={20} />
                </a>
                <a href="https://github.com/GabrielZippys" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-pink-500 transition" size={20} />
                </a>
                <a href="mailto:gabriel@example.com">
                  <FaEnvelope className="hover:text-pink-500 transition" size={20} />
                </a>
              </nav>
            </div>
          </header>

          {/* Conteúdo com offset do header */}
          <main className="pt-20">
            {children}
          </main>

          <footer className="mt-16 text-center text-sm text-white/50 py-6 border-t border-white/10">
            <p>© {new Date().getFullYear()} Gabriel Oliveira • Desenvolvido com Next.js + TailwindCSS</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
