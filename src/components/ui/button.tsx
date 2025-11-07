import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '../../../types/project';

function Cover({ project }: { project: Project }) {
  if (project.cover) {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-zinc-900/40">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 40vw"
          priority={false}
        />
      </div>
    );
  }
  // Fallback sem imagem
  return (
    <div
      className="h-44 w-full rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/15 to-fuchsia-500/20"
      aria-hidden
    />
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.06]"
    >
      <Cover project={project} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
        {project.period && (
          <p className="mt-1 text-sm text-zinc-400">{project.period}</p>
        )}
        <p className="mt-2 line-clamp-2 text-sm text-zinc-300/90">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techs.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-xs text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
