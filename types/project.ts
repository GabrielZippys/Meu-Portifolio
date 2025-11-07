export type Project = {
  slug: string;            // usado na URL (/projetos/[slug])
  title: string;
  summary: string;         // resumo curto
  period?: string;         // ex: "2024–2025"
  techs: string[];         // ex: ['Next.js','Firebase']
  tags?: string[];         // chips extras
  cover?: string;          // /projects/<slug>/cover.jpg (em /public)
  repoUrl?: string;        // link do código
  liveUrl?: string;        // link público / demo
  images?: string[];       // paths em /public para galeria
};
