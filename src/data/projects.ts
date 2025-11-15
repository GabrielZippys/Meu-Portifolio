// src/data/projects.ts

import type { Locale } from '@/lib/i18n';

export type ProjectCopy = {
  title: string;
  summary: string;
  category?: string;
  challenge?: string;
  solution?: string;
  results?: string;
};

export type Project = {
  slug: string;
  cover: string;
  tags: string[];
  links?: {
    github: string;
    demo?: string;
  };
  images?: string[];
  copy: Record<Locale, ProjectCopy>;
};

const PROJECTS: Project[] = [
  {
    slug: 'bravoform',
    cover: '/images/projects/bravoform/cover.jpg',
    tags: ['Next.js', 'Firebase', 'Node.js', 'Automação', 'DataViz'],
    links: {
      github: 'https://github.com/GabrielZippys/BRAVOFORM',
      demo: 'https://sua-demo-bravoform.com',
    },
    images: [
      '/images/projects/bravoform/cover.jpg',
      '/images/projects/bravoform/01.jpg',
      '/images/projects/bravoform/02.jpg',
      '/images/projects/bravoform/03.jpg',
      '/images/projects/bravoform/04.jpg',
      '/images/projects/bravoform/05.jpg',
      '/images/projects/bravoform/06.jpg',
      '/images/projects/bravoform/07.jpg',
      '/images/projects/bravoform/08.jpg',
      '/images/projects/bravoform/09.jpg',
      '/images/projects/bravoform/10.jpg',
      '/images/projects/bravoform/11.jpg',
    ],
    copy: {
      pt: {
        title: 'BravoForm',
        category: 'Plataforma de formulários e OS',
        summary:
          'Plataforma digital para criação, envio e análise de formulários e ordens de serviço, com automações e dashboards para times de operação e qualidade.',
        challenge:
          'Antes do BravoForm, diversos processos internos — como checklists diários, não conformidades, inspeções de segurança e ordens de serviço — eram controlados em planilhas, formulários soltos e mensagens. Isso dificultava saber quem respondeu, o que foi enviado e o que ainda estava pendente. A empresa não tinha rastreabilidade para auditorias, nem uma visão consolidada por unidade, setor ou período, o que gerava retrabalho, perda de informação e decisões pouco orientadas a dados.',
        solution:
          'O BravoForm centraliza toda a criação, envio e gestão de formulários e ordens de serviço em uma única plataforma. No frontend, foi utilizado Next.js com Server Components, TailwindCSS e TypeScript para garantir performance e uma UI responsiva. No backend, Firebase Auth, Firestore e Storage fazem a base de autenticação e persistência, enquanto automações em Node.js e no AgendadorPro (Python/Tkinter) executam jobs recorrentes de ETL, atualização de dashboards e envios automáticos. A modelagem de dados em Firestore organiza empresas, departamentos, formulários, colaboradores e respostas em subcoleções, permitindo filtros por empresa, setor, período e tipo de formulário. As respostas alimentam dashboards em Power BI ou DataStudio, com exportação completa para Excel e BigQuery, além de geração de PDFs individuais. As permissões são segmentadas por perfil (admin x colaborador), com regras de segurança no Firestore e tokens separados para cada área.',
        results:
          'Com o BravoForm, gestores conseguem enxergar em tempo real quem respondeu, quando respondeu e o que foi registrado, com filtros por empresa, departamento, formulário e período. Processos que antes estavam espalhados em planilhas passam a ter histórico centralizado, pronto para auditorias e análises de performance. O módulo de Ordem de Serviço permite que uma não conformidade gere automaticamente uma OS com status, prioridade, anexos, comentários, SLA por etapa e rastreio visual em dashboards.',
      },
      en: {
        title: 'BravoForm',
        category: 'Forms & work orders platform',
        summary:
          'Digital platform to create, send and analyze forms and work orders, with automations and dashboards for operations and quality teams.',
        challenge:
          'Before BravoForm, key processes — daily checklists, non‑compliance reports, safety inspections and work orders — lived in spreadsheets, scattered forms and chat messages. It was hard to know who responded, what had been submitted and what was still pending. The company lacked audit trails and a consolidated view by unit, department or period, which generated rework, data loss and decisions without reliable insights.',
        solution:
          'BravoForm centralizes the entire lifecycle of forms and work orders. The frontend uses Next.js Server Components, TailwindCSS and TypeScript to ensure performance and responsive UX. On the backend, Firebase Auth, Firestore and Storage provide auth and persistence, while Node.js automations plus the AgendadorPro desktop app run recurring ETL jobs, dashboard refreshes and automatic notifications. Firestore models companies, departments, forms, collaborators and responses in subcollections, enabling filters by company, sector, period and form type. Responses feed Power BI/DataStudio dashboards with full exports to Excel and BigQuery, PDF generation and granular permissions enforced through security rules.',
        results:
          'Managers now see, in real time, who answered what and when, filtering by business unit or process. Processes that used to be fragmented in spreadsheets now have centralized history ready for audits. The work‑order module spins non‑compliance findings into OS tickets with status, priority, attachments, comments and SLA tracking, creating a measurable, data‑driven culture.',
      },
    },
  },
  {
    slug: 'agendador-pro',
    cover: '/images/projects/agendador-bravo/cover.jpg',
    tags: ['Python/Tkinter', 'Job scheduler', 'Automação', 'ETL', 'Logs', 'Desktop'],
    links: {
      github: 'https://github.com/GabrielZippys/Agendador-Bravo',
    },
    images: [
      '/images/projects/agendador-bravo/01.jpg',
      '/images/projects/agendador-bravo/02.png',
      '/images/projects/agendador-bravo/03.png',
      '/images/projects/agendador-bravo/04.png',
      '/images/projects/agendador-bravo/05.png',
      '/images/projects/agendador-bravo/06.png',
      '/images/projects/agendador-bravo/07.png',
      '/images/projects/agendador-bravo/08.png',
      '/images/projects/agendador-bravo/09.png',
    ],
    copy: {
      pt: {
        title: 'Agendador PRO',
        category: 'Automação • Desktop',
        summary:
          'Aplicação desktop em Python para orquestrar bots, ETLs, scripts e backups em horários controlados, com fila visual, logs e alertas em tempo real.',
        challenge:
          'Antes do Agendador PRO, bots, scripts e ETLs eram rodados manualmente ou espalhados em agendadores diferentes. Havia dependência de pessoas para executar rotinas críticas, risco de esquecer jobs e nenhuma visão centralizada do que estava em execução ou falhou.',
        solution:
          'O Agendador PRO consolida toda a automação em uma aplicação desktop robusta escrita em Python 3.11+ com UI Tkinter personalizada. Cada tarefa recebe nome, caminho do executável/script, argumentos, pasta de trabalho, frequência, timeout e flags como "executar em segundo plano" e "notificar falha". Por baixo, o app usa subprocess.Popen para disparar processos, mantém histórico estruturado, fila visual com ícones em tempo real e botão para interromper jobs com segurança. Painéis complementares exibem gráficos de falhas x sucessos e modos de simulação.',
        results:
          'Times técnicos passam a enxergar em tempo real tudo que está sendo executado: bots, transformações Pentaho, scripts de backup, integrações Python e rotinas em Node.js. Processos deixam de depender de pessoas, ganham logs centralizados e alertas imediatos, reduzindo erros humanos e aumentando a confiabilidade dos dados de backoffice.',
      },
      en: {
        title: 'Agendador PRO',
        category: 'Automation • Desktop',
        summary:
          'Python desktop application that orchestrates bots, ETLs, scripts and backups on controlled schedules, with a visual queue, logs and real-time alerts.',
        challenge:
          'Before Agendador PRO, bots, scripts and ETLs were executed manually or scattered across different schedulers (Task Scheduler, isolated crons, dedicated servers). Critical routines depended on people remembering to run them, failures were easy to miss and there was no centralized queue or log panel for the technical team.',
        solution:
          'Agendador PRO unifies automation in a robust desktop app written in Python 3.11+ with a custom Tkinter UI. Each task stores name, executable/script path, arguments, working directory, frequency, timeout and flags such as run-in-background and notify-on-failure. Under the hood it uses subprocess.Popen, keeps structured history, real-time queue indicators and a safe kill button. Complementary dashboards show failure vs success charts plus simulation modes.',
        results:
          'Teams now monitor in real time every job running: customer-service bots, Pentaho transformations, backup scripts, Python integrations and Node.js routines. Processes stop depending on manual triggers, gain centralized logs and instant alerts, cutting human error and improving back-office reliability.',
      },
    },
  },
  {
    slug: 'embedded',
    cover: '/images/projects/dashboard-embedded/cover.jpg',
    tags: ['PowerBI', 'Next.js', 'TypeScript', 'TailwindCSS', 'API Routes', 'Firebase Auth', 'RLS', 'Security'],
    links: {
      github: '',
      demo: '/projetos/embedded',
    },
    images: [
      '/images/projects/dashboard-embedded/01.jpg',
      '/images/projects/dashboard-embedded/02.jpg',
      '/images/projects/dashboard-embedded/03.jpg',
    ],
    copy: {
      pt: {
        title: 'Dashboard Embedded',
        category: 'Dashboards embutidos',
        summary:
          'Integração dos painéis do Power BI diretamente no sistema interno, com segurança por usuário (RLS), autenticação via Firebase e experiência responsiva — eliminando links externos.',
        challenge:
          'Gestores precisavam abrir dashboards do Power BI por links separados, sem controle de contexto e com pouca segurança por perfil. Isso gerava retrabalho, acessos indevidos e baixa adoção. Era necessário embutir os painéis no próprio sistema, respeitando o que cada usuário pode ver (RLS) e acabando com múltiplos acessos.',
        solution:
          'O projeto embute relatórios do Power BI dentro do app Next.js usando o SDK powerbi-client. A rota /api/pbi/embed valida o usuário autenticado (Firebase Auth), consulta permissões e gera o token de embed com RLS. No client, o SDK inicializa os dashboards com navegação e filtros controlados. Tudo é responsivo, com modo de debug e múltiplos dashboards organizados por ID.',
        results:
          'Indicadores passam a viver no mesmo ambiente onde o time trabalha, aumentando adoção e velocidade de decisão. O controle por usuário/loja/área via RLS reduz riscos de acesso indevido enquanto o TI ganha governança e dashboards prontos para consultas em tempo real.',
      },
      en: {
        title: 'Dashboard Embedded',
        category: 'Embedded analytics',
        summary:
          'Power BI dashboards integrated directly into the internal web system with per-user security (RLS), Firebase authentication and responsive UX — removing external links.',
        challenge:
          'Stakeholders had to open Power BI dashboards through separate links with little context and weak per-role security. Adoption was low, data leaked between areas and IT became a bottleneck. We needed dashboards inside the core system, honoring what each user can see via RLS and eliminating multiple sign-ins.',
        solution:
          'The project embeds Power BI reports in a Next.js app via the powerbi-client SDK. The /api/pbi/embed route validates the Firebase-authenticated user, looks up permissions and generates an embed token with effectiveUsername for RLS. On the client, the SDK mounts dashboards with controlled navigation and hidden filters. Everything is responsive, supports debug mode and organizes multiple dashboards by ID.',
        results:
          'Metrics now live where teams work, increasing adoption and decision speed. Per-user RLS control cuts the risk of unauthorized access while IT gains governance (fresh tokens, no sensitive query strings) and leadership views sales, quality and operations data in real time without leaving the system.',
      },
    },
  },
];

export default PROJECTS;
