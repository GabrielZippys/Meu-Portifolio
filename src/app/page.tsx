'use client'

import { Button } from "@/components/ui/button"
import { ArrowDownToLine, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ProjectCard } from "@/components/ui/ProjectCard"

const projects = [
  {
    title: "BravoForm – Smart Form Platform",
    description: "Dynamic form builder with per-user access, real-time answers, PDF/CSV exports, and Firestore integration.",
    techs: ["Next.js", "Firebase", "Tailwind", "PDF", "Realtime"],
    link: "#", // coloque o link real ou deixe #
  },
  {
    title: "Apetito BI – Embedded Power BI",
    description: "Secure platform to embed Power BI dashboards with user-based access via Firebase Auth.",
    techs: ["Next.js", "Power BI", "Tailwind", "Auth"],
    link: "#",
  },
  {
    title: "Agendador-Bravo – Desktop Task Scheduler",
    description: "Python Tkinter app to schedule and execute .py/.exe/.ktr scripts with GitHub auto-update and alert system.",
    techs: ["Python", "Tkinter", "Pentaho", "Auto-Update", "Email/WhatsApp"],
    link: "https://github.com/GabrielZippys/Agendador-Bravo",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10 md:px-20">
      <section className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Gabriel Oliveira
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-muted-foreground mb-8"
        >
          Fullstack Developer • Python Automations • Dashboards • Firebase Cloud
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="#projects">
            <Button size="lg">View My Work</Button>
          </Link>
          <a href="/Gabriel-Oliveira-Resume.pdf" download>
            <Button size="lg" variant="outline">
              <ArrowDownToLine className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
          <a href="mailto:gabriel.z.dev@example.com">
            <Button size="lg" variant="ghost">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </a>
        </motion.div>
      </section>

      <section id="projects" className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          🚀 Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {projects.map((project, i) => (
         <ProjectCard key={i} {...project} />
          ))}
           </div>


        {/* Em breve: Cards de Projetos */}
        <p className="text-center text-muted-foreground">
          Coming soon: Interactive cards for BravoForm, Apetito BI, Agendador-Bravo.
        </p>
      </section>

      <section id="skills" className="mt-32 max-w-5xl mx-auto text-center">
  <h2 className="text-2xl md:text-3xl font-semibold mb-10">🧠 Tech Stack & Skills</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-left text-muted-foreground">
    <div>
      <h3 className="font-bold text-foreground mb-2">Frontend</h3>
      <ul className="space-y-1 text-sm">
        <li>Next.js 14 (App Router)</li>
        <li>React + TailwindCSS</li>
        <li>Shadcn UI + Framer Motion</li>
        <li>Dark Mode, Responsive UI</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-foreground mb-2">Backend</h3>
      <ul className="space-y-1 text-sm">
        <li>Firebase (Auth + Firestore)</li>
        <li>Node.js + Express</li>
        <li>Python (Flask, Tkinter)</li>
        <li>APIs REST</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-foreground mb-2">DevOps & Cloud</h3>
      <ul className="space-y-1 text-sm">
        <li>GitHub Actions</li>
        <li>Firebase Hosting</li>
        <li>Vercel</li>
        <li>Git + CI/CD</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-foreground mb-2">Data & Automation</h3>
      <ul className="space-y-1 text-sm">
        <li>Power BI Embedded</li>
        <li>Pentaho ETL / Kettle</li>
        <li>Custom schedulers</li>
        <li>WhatsApp Bots</li>
      </ul>
    </div>
  </div>
</section>


<footer className="mt-32 border-t pt-10 pb-6 text-center text-sm text-muted-foreground">
  <div className="mb-4 flex justify-center gap-4">
    <a
      href="https://github.com/GabrielZippys"
      className="hover:text-foreground transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
    <a
      href="https://linkedin.com/in/gabriel-oliveira-49a5152aa"
      className="hover:text-foreground transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
    <a
      href="mailto:gabriel.z.dev@example.com"
      className="hover:text-foreground transition"
    >
      Email
    </a>
  </div>
  <p>© {new Date().getFullYear()} Gabriel Oliveira. All rights reserved.</p>
</footer>

    </main>
  )
}
