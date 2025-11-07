// src/app/projetos/page.tsx
import type { Metadata } from 'next';
import { PROJECTS } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export const metadata: Metadata = {
  title: 'Projetos — Gabriel Oliveira',
  description: 'Lista de projetos com resumo, tags e links.',
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-6 pb-24 pt-28">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            Projetos
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300/90">
          Lista dos principais trabalhos. Cada item tem resumo, imagem e campos
          para links de código, demo e uma galeria com exemplos.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </main>
  );
}
