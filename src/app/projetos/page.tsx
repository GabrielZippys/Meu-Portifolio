// src/app/projetos/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import PROJECTS from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/i18n'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const langCookie = cookieStore.get('lang')?.value as Locale | undefined
  const lang: Locale = langCookie === 'en' || langCookie === 'pt' ? langCookie : 'pt'
  const dict = getDictionary(lang)

  return {
    title: dict.projectsPage.metaTitle,
    description: dict.projectsPage.metaDescription,
  }
}

export default async function ProjectsPage() {
  const cookieStore = await cookies()
  const langCookie = cookieStore.get('lang')?.value as Locale | undefined
  const lang: Locale = langCookie === 'en' || langCookie === 'pt' ? langCookie : 'pt'
  const dict = getDictionary(lang)

  return (
    <main className="container mx-auto px-6 pb-24 pt-24">
      {/* topo com botão Home */}
      <nav className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/90 shadow-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label={dict.projectsPage.backHomeAria}
        >
          <span aria-hidden>←</span>
          <span>{dict.nav.home}</span>
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-cyan-400 to-violet-400">
            {dict.projectsPage.title}
          </span>
        </h1>
        <p className="mt-4 text-zinc-300/90 max-w-2xl">
          {dict.projectsPage.description}
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
