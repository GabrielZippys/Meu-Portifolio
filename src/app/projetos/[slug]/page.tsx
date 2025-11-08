// src/app/projetos/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import PROJECTS from '@/data/projects';
import Gallery from '@/components/ui/Gallery';

// Slugs gerados estaticamente
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// No Next 16, params vem como Promise
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.title} — Projects by Gabriel Oliveira`;
  const description = project.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: project.cover ? [{ url: project.cover }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="container mx-auto px-6 pb-24 pt-20">
      {/* topo / breadcrumb */}
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <Link
          href="/projetos"
          className="inline-flex items-center text-xs font-medium text-zinc-400 hover:text-cyan-300 transition"
        >
          <span aria-hidden="true" className="mr-1">
            ←
          </span>
          Back to projects
        </Link>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          Case study
        </span>
      </div>

      {/* HERO + capa lado a lado em telas grandes */}
      <section className="mx-auto mt-6 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        <header>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              {project.title}
            </span>
          </h1>

          {project.category && (
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
              {project.category}
            </p>
          )}

          <p className="mt-4 text-sm md:text-base text-zinc-300/90 leading-relaxed">
            {project.summary}
          </p>

          {/* Stack / tags */}
          {project.tags?.length > 0 && (
            <div className="mt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Tech stack & focus
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-200 bg-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* links principais */}
          {(project.links?.github || project.links?.demo) && (
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {project.links?.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-xs md:text-sm text-zinc-200 hover:bg-white/[0.1] transition"
                >
                  View code on GitHub
                </Link>
              )}

              {project.links?.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/15 px-4 py-2 text-xs md:text-sm text-cyan-50 hover:bg-cyan-500/25 hover:border-cyan-300 transition"
                >
                  Open live demo
                </Link>
              )}
            </div>
          )}
        </header>

        {/* Card de capa */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-sky-500/8 to-indigo-500/10 blur-2xl" />
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority={false}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BLOCO: desafio / solução / resultados */}
            {/* BLOCO: challenge / solution / outcomes em cards "deitados" */}
      {(project.challenge || project.solution || project.results) && (
        <section className="mx-auto mt-12 max-w-5xl space-y-4">
          {project.challenge && (
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 md:px-6 md:py-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                <div className="md:w-40 shrink-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                    Challenge
                  </p>
                </div>
                <p className="text-xs md:text-sm text-zinc-300/90 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </article>
          )}

          {project.solution && (
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 md:px-6 md:py-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                <div className="md:w-40 shrink-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                    Solution
                  </p>
                </div>
                <p className="text-xs md:text-sm text-zinc-300/90 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </article>
          )}

          {project.results && (
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 md:px-6 md:py-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                <div className="md:w-40 shrink-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                    Outcomes &amp; impact
                  </p>
                </div>
                <p className="text-xs md:text-sm text-zinc-300/90 leading-relaxed">
                  {project.results}
                </p>
              </div>
            </article>
          )}
        </section>
      )}


      {/* GALERIA */}
      {project.images && project.images.length > 0 && (
        <section className="mx-auto mt-14 max-w-5xl">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-base md:text-lg font-semibold text-zinc-100">
              Product gallery
            </h2>
            <p className="text-xs text-zinc-400">
              Screens that highlight UX, workflows and analytics.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 md:p-4">
            <Gallery images={project.images} />
          </div>
        </section>
      )}

      {/* voltar */}
      <div className="mx-auto mt-12 max-w-5xl border-t border-white/5 pt-6">
        <Link
          href="/projetos"
          className="inline-flex items-center text-sm font-medium text-cyan-300 hover:text-cyan-200 transition"
        >
          <span aria-hidden="true" className="mr-1">
            ←
          </span>
          Back to all projects
        </Link>
      </div>
    </main>
  );
}
