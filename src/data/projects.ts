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
      github: 'https://github.com/GabrielZippys/BRAVOFORM', // ajuste para o link real
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
  },

 {
  slug: 'agendador-pro',
  title: 'Agendador PRO',
  summary:
    'Aplicação desktop em Python para orquestrar bots, ETLs, scripts e backups em horários controlados, com fila visual, logs e alertas em tempo real.',
  cover: '/images/projects/agendador-bravo/cover.jpg', // sua capa atual
  tags: ['Python/Tkinter', 'Job scheduler', 'Automação', 'ETL', 'Logs', 'Desktop'],
  category: 'Automation • Desktop',

  links: {
    github: 'https://github.com/GabrielZippys/Agendador-Bravo', // ajuste se quiser
    // demo: 'https://link-da-demo.com',                      // opcional
  },

  challenge:
    'Antes do Agendador PRO, a execução de bots, scripts, relatórios e transformações ETL era feita de forma manual ou espalhada em agendadores diferentes (Task Scheduler, crons isolados, servidores específicos). Isso gerava dependência de pessoas para rodar processos críticos em horários fixos, aumentava o risco de esquecer execuções importantes e tornava difícil enxergar o que de fato estava rodando, quando falhou e por quê. Não havia uma fila centralizada de tarefas, nem um painel único de logs e histórico para apoiar o time técnico e as áreas de negócio.',

  solution:
    'O Agendador PRO consolida toda a automação em uma aplicação desktop robusta, escrita em Python 3.11+ com interface Tkinter customizada, pensada para rodar em servidores Windows ou máquinas que executam processos de backoffice. Cada tarefa é configurada com nome, caminho absoluto do executável ou script (.bat, .py, .exe, .ktr etc.), argumentos, pasta de trabalho, frequência (intervalo, horário fixo ou repetição), timeout e flags como executar em segundo plano e notificar em caso de falha. Por baixo, o app utiliza subprocess.Popen para disparar os processos, registra logs individuais por tarefa em disco, mantém um histórico estruturado com última execução, próxima prevista e status, e expõe uma fila visual com ícones de sucesso/erro em tempo real. O botão de interrupção permite matar um job em execução com segurança, controlando PID e estado via dicionário em memória. Painéis complementares exibem gráficos de falhas x sucessos, além de modos de simulação para testar erros sem impactar o ambiente.',

  results:
    'Com o Agendador PRO, o time passa a enxergar em tempo real tudo que está sendo executado: bots de atendimento, transformações Pentaho, scripts de backup, integrações Python e rotinas em Node.js. Processos que antes dependiam de alguém lembrar de abrir um arquivo agora são disparados automaticamente, com logs centralizados e alertas imediatos em caso de falha. Isso reduz erros humanos, garante regularidade na execução de tarefas críticas e aumenta a confiabilidade dos dados de backoffice. A área técnica ganha visibilidade sobre o que rodou, o que está em fila e o que falhou, e as áreas de negócio passam a contar com ETLs e relatórios mais estáveis. Em termos de investimento, o escopo equivale a centenas de horas de desenvolvimento fullstack (Python + UX desktop), incluindo interface, engine de agendamento, sistema de logs, atualização automática via manifest e preparação para notificações externas (e-mail, WhatsApp e APIs futuras).',

  images: [
    // você adiciona aqui os caminhos das imagens quando quiser
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
},


  {
  slug: 'embedded',
  title: 'Dashboard Embedded',
  summary:
    'Integração dos painéis do Power BI diretamente no sistema web interno, com segurança por usuário (RLS), autenticação via Firebase e experiência responsiva — eliminando links externos e centralizando indicadores no fluxo de trabalho da empresa.',
  cover: '/images/projects/dashboard-embedded/cover.jpg',
  tags: [
    'PowerBI',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'API Routes',
    'Firebase Auth',
    'RLS',
    'Security'
  ],
  links: {
    // ajuste se quiser apontar para o repo real:
    github: '',
    demo: '/projetos/embedded'
  },

  // --- Parte "gestores": por que fazer / dor de negócio
  challenge:
    'Gestores precisavam abrir dashboards do Power BI por links separados, sem controle de contexto do sistema e com pouca segurança por perfil. Isso gerava retrabalho, acessos indevidos e baixa adoção: cada área tinha uma forma de ver métricas, e o TI virava gargalo para distribuir relatórios. Era necessário embutir os painéis no próprio sistema da empresa, respeitando o que cada usuário pode ver (RLS) e eliminando a dependência de múltiplos acessos.',

  // --- Parte técnica condensada: arquitetura e fluxo de embed
  solution:
    'O projeto embute relatórios do Power BI dentro do app Next.js (App Router) usando o SDK powerbi-client. O front abre /dashboards/[id] e chama a rota /api/pbi/embed?dashboardId=... com cache: "no-store". A API valida o usuário autenticado (Firebase Auth), injeta o e-mail em header seguro (x-user-email) e consulta as permissões/roles para gerar o token de embed com RLS (effectiveUsername). A resposta contém embedUrl, reportId e accessToken. No client, o SDK faz pbi.embed(...) com navegação de páginas habilitada e filtros ocultos. A solução é 100% responsiva, suporta ?debug=1 para inspecionar dados de RLS (dataset/workspace/username) e organiza múltiplos dashboards por ID, permitindo evolução sem acoplamento. Toda a comunicação sensível fica no servidor (API Routes), mantendo segredos fora do browser.',

  // --- Impacto/resultado para o negócio
  results:
    'Indicadores passaram a viver no mesmo ambiente onde o time trabalha, aumentando adoção e velocidade de decisão. O controle por usuário/loja/área via RLS reduziu riscos de acesso indevido. O TI ganhou governança (token sempre novo, sem query strings sensíveis), e a liderança passou a consultar vendas, qualidade e operações em tempo real sem abrir outros sistemas. Resultado prático: menos erro manual, mais foco na gestão e modernização do ambiente interno.',

  // adicione as imagens quando quiser (pode começar só com a cover)
  images: [
    '/images/projects/dashboard-embedded/01.jpg',
    '/images/projects/dashboard-embedded/02.jpg',
    '/images/projects/dashboard-embedded/03.jpg'
  ]
},
];

export default PROJECTS;
