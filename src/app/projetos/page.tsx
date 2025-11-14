// src/app/projetos/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import PROJECTS from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

export const metadata: Metadata = {
  title: 'Projetos – Gabriel Oliveira',
  description:
    'Lista dos principais trabalhos. Cada item tem resumo, imagem e campos para links de código, demo e uma galeria com exemplos.',
}

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-6 pb-24 pt-24">
      {/* topo com botão Home */}
      <nav className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/90 shadow-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Voltar para a Home"
        >
          <span aria-hidden>←</span>
          <span>Home</span>
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-cyan-400 to-violet-400">
            Projetos
          </span>
        </h1>
        <p className="mt-4 text-zinc-300/90 max-w-2xl">
          Lista dos principais trabalhos. Cada item tem resumo, imagem e campos
          para links de código, demo e uma galeria com exemplos.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </main>
  )
}
