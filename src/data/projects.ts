// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover?: string;        // caminho dentro de /public (opcional)
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
  images?: string[];     // imagens extras para a página de detalhes (opcional)
};

export const PROJECTS: Project[] = [
  {
    slug: 'bravoform',
    title: 'BravoForm',
    summary: 'Sistema de criação, edição e envio de formulários para clientes, gestão de OS e dashboards.',
    cover: '/images/projects/bravoform/tag.jpg',   // <- caminho a partir de /public
    images: [
      '/images/projects/bravoform/01.jpg',
      '/images/projects/bravoform/02.jpg',
    ],
    tags: ['Next.js','Firebase','Automação','DataViz', 'React', 'Backend/API', 'Banco de Dados'],
  },
  {
    slug: 'agendador-bravo',
    title: 'Agendador PRO ',
    summary:
      'Fila de automações, auto-update, logs e alertas; execução de bots/ETLs com robustez.',
    cover: '/images/projects/agendador-bravo/cover.jpg',
    tags: ['Python/Tkinter', 'Auto-update', 'Logs', 'ETL', 'Pentaho', 'Automação', 'DataViz'],
    links: { github: 'https://github.com/seu-usuario/agendador-bravo' },
  },
  {
    slug: 'dashboard-embedded',
    title: 'DashBoard Embeded',
    summary: 'Permitir que dashboards do Power BI sejam embutidos...',
    cover: '/images/projects/dashboard-embedded/cover.jpg', // 👈 confere esse caminho
    tags: ['PowerBI', 'Next.js', 'Firebase', 'Backend/API', 'Banco de Dados'],
  },
];
