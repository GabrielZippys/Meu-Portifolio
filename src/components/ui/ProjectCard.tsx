// src/components/ui/ProjectCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, summary, cover, tags } = project;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.06]">
      <Link href={`/projetos/${slug}`} className="block focus:outline-none">
        <div className="relative h-44 w-full">
          {cover ? (
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover opacity-90 transition group-hover:opacity-100"
              sizes="(max-width:768px) 100vw, 33vw"
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 via-sky-500/20 to-indigo-600/30" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-zinc-300/90">{summary}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-xs text-zinc-300"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-4 text-sm font-medium text-cyan-300 group-hover:text-cyan-200">
            Ver detalhes →
          </div>
        </div>
      </Link>
    </article>
  );
}
