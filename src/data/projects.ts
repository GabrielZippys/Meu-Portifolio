// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  tags: string[];
  category?: string;
  links?: {
    github: string;
    demo?: string;
  };
  challenge?: string;
  solution?: string;
  results?: string;
  images?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'bravoform',
    title: 'BravoForm',
    category: 'Plataforma de formulários e OS',
    summary:
      'Plataforma digital para criação, envio e análise de formulários e ordens de serviço, com automações e dashboards para times de operação e qualidade.',
    cover: '/images/projects/bravoform/cover.jpg',
    tags: ['Next.js', 'Firebase', 'Node.js', 'Automação', 'DataViz'],
    links: {
      github: 'https://github.com/seu-usuario/bravoform', // ajuste para o link real
      demo: 'https://sua-demo-bravoform.com', // opcional
    },
    challenge:
      'Antes do BravoForm, diversos processos internos — como checklists diários, não conformidades, inspeções de segurança e ordens de serviço — eram controlados em planilhas, formulários soltos e mensagens. Isso dificultava saber quem respondeu, o que foi enviado e o que ainda estava pendente. A empresa não tinha rastreabilidade para auditorias, nem uma visão consolidada por unidade, setor ou período, o que gerava retrabalho, perda de informação e decisões pouco orientadas a dados.',
    solution:
      'O BravoForm centraliza toda a criação, envio e gestão de formulários e ordens de serviço em uma única plataforma. No frontend, foi utilizado Next.js com Server Components, TailwindCSS e TypeScript para garantir performance e uma UI responsiva. No backend, Firebase Auth, Firestore e Storage fazem a base de autenticação e persistência, enquanto automações em Node.js e no AgendadorPro (Python/Tkinter) executam jobs recorrentes de ETL, atualização de dashboards e envios automáticos. A modelagem de dados em Firestore organiza empresas, departamentos, formulários, colaboradores e respostas em subcoleções, permitindo filtros por empresa, setor, período e tipo de formulário. As respostas alimentam dashboards em Power BI ou DataStudio, com exportação completa para Excel e BigQuery, além de geração de PDFs individuais. As permissões são segmentadas por perfil (admin x colaborador), com regras de segurança no Firestore e tokens separados para cada área.',
    results:
      'Com o BravoForm, gestores conseguem enxergar em tempo real quem respondeu, quando respondeu e o que foi registrado, com filtros por empresa, departamento, formulário e período. Processos que antes estavam espalhados em planilhas passam a ter histórico centralizado, pronto para auditorias e análises de performance. O módulo de Ordem de Serviço permite que uma não conformidade gere automaticamente uma OS com status, prioridade, anexos, comentários, SLA por etapa e rastreio visual em dashboards. Na prática, o sistema digitaliza processos, aumenta o controle interno, reduz retrabalho e cria uma cultura orientada a dados. O escopo do projeto soma mais de 400 horas de desenvolvimento fullstack, equivalente a um investimento teórico em torno de R$ 68.000,00 considerando uma taxa de R$ 170,00/h, incluindo interface, regras de negócio, segurança, integrações e estrutura analítica.',
    images: [
      '/images/projects/bravoform/cover.jpg',
      // adicione aqui outras imagens da galeria quando quiser
    ],
  },

  {
    slug: 'agendador-pro',
    title: 'Agendador PRO',
    category: 'Automação & Scheduler desktop',
    summary:
      'Fila de automações, auto-update, logs e alertas; execução de bots/ETLs com robustez em ambiente desktop.',
    cover: '/images/projects/agendador-bravo/cover.jpg',
    tags: ['Python/Tkinter', 'Auto-update', 'Logs', 'ETL', 'Pentaho', 'Automação', 'DataViz'],
    links: {
      github: 'https://github.com/seu-usuario/agendador-bravo', // ajuste
      // demo opcional
    },
    challenge:
      'Centralizar e orquestrar execuções de automações e ETLs sem depender de intervenção manual constante, garantindo logs, alertas e reexecução confiável.',
    solution:
      'Aplicativo desktop em Python/Tkinter com fila de jobs, agendamento configurável, auto-update, integração com scripts de automação e ETLs.',
    results:
      'Redução de falhas por esquecimento, rastreabilidade total das execuções e operação mais previsível para o time que depende dos bots.',
    images: ['/images/projects/agendador-bravo/01.jpg'],
  },

  {
    slug: 'embedded',
    title: 'DashBoard Embedded',
    category: 'Dashboards embarcados',
    summary:
      'Permite que dashboards do Power BI sejam embutidos de forma segura dentro do sistema web da empresa, respeitando regras de acesso por tipo de usuário.',
    cover: '/images/projects/dashboard-embedded/cover.jpg',
    tags: ['PowerBI', 'Next.js', 'Firebase', 'React', 'Backend/API', 'Banco de Dados'],
    links: {
      github: 'https://github.com/seu-usuario/acougue-mais', // ajuste se necessário
    },
    challenge:
      'Levar dashboards para o ambiente interno da empresa com segurança, garantindo que cada colaborador veja apenas os dados que pode enxergar.',
    solution:
      'Implementação de camada backend para geração de tokens e integração com Power BI Embedded, controle de permissões e navegação com filtros.',
    results:
      'Maior adoção de dashboards, visão em tempo real diretamente no fluxo de trabalho do usuário e menos dependência de acesso direto ao portal do Power BI.',
    images: ['/images/projects/dashboard-embedded/cover.jpg'],
  },
];

export default PROJECTS;
