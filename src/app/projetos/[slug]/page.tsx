// src/app/projetos/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

type Params = { slug: string };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  return {
    title: p ? `${p.title} — Projetos` : 'Projeto',
    description: p?.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return <div className="p-6">Projeto não encontrado.</div>;

  return (
    <main className="container mx-auto px-6 pb-24 pt-28">
      <Link href="/projetos" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Voltar
      </Link>

      <header className="mt-4">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100">{p.title}</h1>
        <p className="mt-3 max-w-2xl text-zinc-300/90">{p.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-300"
            >
              {t}
            </li>
          ))}
        </ul>
      </header>

      {/* Capa / hero */}
      <section className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        {p.cover ? (
          <div className="relative h-[260px] w-full md:h-[360px]">
            <Image
              src={p.cover}
              alt={p.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </div>
        ) : (
          <div className="h-48 w-full bg-gradient-to-br from-cyan-600/30 via-sky-500/20 to-indigo-600/30" />
        )}
      </section>

      {/* Descrição / slots para conteúdo */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold text-zinc-100">Descrição</h2>
            <p className="mt-2 text-zinc-300/90">
              (Escreva aqui os detalhes do projeto: problema, solução, arquitetura, decisões,
              métricas, aprendizados, etc.)
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold text-zinc-100">Imagens / Galeria</h2>
            <p className="mt-2 text-zinc-300/90">
              (Adicione prints em <code>/public/images/projects/slug/</code>. Se quiser, mapeie e
              renderize aqui um grid.)
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold text-zinc-100">Trechos de código</h2>
            <pre className="mt-2 overflow-auto rounded-lg bg-black/60 p-4 text-sm text-zinc-200">
{`// Cole aqui um snippet curto e relevante do projeto
function exemplo() {
  console.log('Hello, world');
}`}
            </pre>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="text-base font-semibold text-zinc-100">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {p.links?.github && (
                <li>
                  <Link href={p.links.github} target="_blank" className="text-cyan-300 hover:underline">
                    Repositório GitHub
                  </Link>
                </li>
              )}
              {p.links?.demo && (
                <li>
                  <Link href={p.links.demo} target="_blank" className="text-cyan-300 hover:underline">
                    Demo / Deploy
                  </Link>
                </li>
              )}
              {p.links?.video && (
                <li>
                  <Link href={p.links.video} target="_blank" className="text-cyan-300 hover:underline">
                    Vídeo
                  </Link>
                </li>
              )}
              {!p.links && <li className="text-zinc-400">Sem links adicionados ainda.</li>}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
