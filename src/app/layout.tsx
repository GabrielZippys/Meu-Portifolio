// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Oliveira | Fullstack Dev',
  description: 'Portfólio com projetos de automações, dashboards e Firebase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-white`}>
        <header className="fixed top-0 z-50 w-full backdrop-blur border-b border-zinc-800 bg-black/30 text-white">
          <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-lg font-bold tracking-tight">Gabriel Oliveira</h1>
            <nav className="flex gap-4 text-zinc-300">
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

        <main className="pt-[80px] px-4 max-w-6xl mx-auto">{children}</main>

        <footer className="mt-16 text-center text-sm text-zinc-500 py-6 border-t border-zinc-800">
          <p>© {new Date().getFullYear()} Gabriel Oliveira • Desenvolvido com Next.js + TailwindCSS</p>
        </footer>
      </body>
    </html>
  )
}
