// src/components/ui/ProjectCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { useLang } from '@/components/ui/LangProvider';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { dict, lang } = useLang();
  const copy = project.copy[lang] ?? project.copy.pt;

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group block h-full"
      aria-label={`${dict.projectsPage.cardAriaLabel} ${copy.title}`}
    >
      <article className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-lg shadow-black/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/60">
        {/* Capa */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.cover}             // ex: '/images/projects/bravoform/cover.jpg'
            alt={copy.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width:1024px) 32vw, (min-width:640px) 50vw, 100vw"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        {/* Conteúdo */}
        <div className="p-5">
          {copy.category && (
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300/80">
              {copy.category}
            </p>
          )}

          <h2 className="mt-1 text-lg font-semibold text-zinc-50">
            {copy.title}
          </h2>

          <p className="mt-2 text-sm text-zinc-300/90 line-clamp-3">
            {copy.summary}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-zinc-300 group-hover:border-cyan-400/40"
              >
                {t}
              </span>
            ))}
            {project.tags.length > 6 && (
              <span className="text-[11px] text-zinc-400">
                +{project.tags.length - 6}
              </span>
            )}
          </div>

         
        </div>
      </article>
    </Link>
  );
}
