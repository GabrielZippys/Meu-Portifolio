'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  title: string
  description: string
  techs: string[]
  link?: string
  image?: string
}

export function ProjectCard({
  title,
  description,
  techs,
  link,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-lg border border-border transition-all hover:shadow-2xl'
      )}
    >
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {techs.map((tech) => (
            <span
              key={tech}
              className="bg-muted px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:underline mt-2"
          >
            View Project <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
