export type Locale = 'pt' | 'en';

export const dictionaries = {
  pt: {
    header: {
      name: 'Gabriel Oliveira',
    },
    footer: {
      copyright: '© {year} Gabriel Oliveira · Desenvolvido com Next.js + TailwindCSS',
    },
    nav: {
      home: 'Home',
    },
    homePage: {
      metaTitle: 'Gabriel Oliveira | Desenvolvedor Fullstack',
      metaDescription: 'Portfólio com automação, dashboards e projetos com Firebase.',
      title: 'Bem-vindo ao meu Portfólio',
      subtitle: 'Tecnologia • Automação • Inovação — soluções de ponta com foco em resultado.',
      ctaProjects: 'Ver Projetos',
      ctaAbout: 'Sobre mim',
      tags: ['Next.js', 'Tailwind', 'Firebase', 'Automação', 'DataViz'],
      techListAria: 'Tecnologias em que sou proficiente',
    },
    projectsPage: {
      title: 'Projetos',
      metaTitle: 'Projetos – Gabriel Oliveira',
      metaDescription:
        'Lista dos principais trabalhos. Cada item tem resumo, imagem e campos para links de código, demo e uma galeria com exemplos.',
      heading: 'Projetos',
      description:
        'Lista dos principais trabalhos. Cada item tem resumo, imagem e campos para links de código, demo e uma galeria com exemplos.',
      backHomeAria: 'Voltar para a Home',
      cardAriaLabel: 'Ver detalhes do projeto',
    },
    sobrePage: {
      metaTitle: 'Sobre mim — Gabriel Oliveira',
      metaDescription:
        'Minha história como dev fullstack com foco em automação, dashboards e produtos com impacto.',
      title: 'Minha história',
      subtitle:
        'Um pouco da trilha até aqui — como cheguei em automação, dashboards e produtos que reduzem operação e aumentam resultado.',
      tags: ['Automação', 'Dashboards', 'Integrações', 'UX com animações'],
      blocks: [
        {
          h: 'Começo e curiosidade',
          p: 'No começo eu era apenas uma criança sempre curiosa. Ganhei meu primeiro computador, um Positivo Celeron, que foi minha porta de entrada para aprender a navegar na internet, usar o Windows e baixar jogos. Isso tudo com 6 anos. Me apaixonei por computador e tecnologia e, daí pra frente, nunca parei de procurar e descobrir o que o mundo da tecnologia podia proporcionar — desde criar jogos até testar diferentes sistemas operacionais. Foi aí que nasceu o interesse por programação e ele continua até hoje.',
        },
        {
          h: 'Fullstack na prática',
          p: 'Com Next.js, Node e Firebase, passei a entregar produtos completos: do backend ao front, sempre com foco em performance, segurança e DX. O objetivo é claro: menos atrito, mais resultado.',
        },
        {
          h: 'Automação e dados',
          p: 'Criei agendadores robustos, integrações com APIs e dashboards que contam histórias. A regra é medir, aprender e iterar rápido — de logs confiáveis a visualizações que geram decisão.',
        },
        {
          h: 'Experimentos visuais',
          p: 'Animações com Framer Motion e cenas 3D com Three.js elevam a experiência. Quando bem dosadas, trazem clareza e personalidade sem pesar na navegação.',
        },
        {
          h: 'Hoje',
          p: 'Sigo construindo produtos que eliminam desperdício e geram impacto. Se você busca automação e uma camada de UX que converte, vamos conversar.',
        },
      ],
      ctaProjects: 'Ver projetos',
      ctaBackHome: 'Voltar para a Home',
    },
    projectDetails: {
      backToProjects: 'Voltar para projetos',
      caseStudy: 'Estudo de caso',
      techStack: 'Stack & foco técnico',
      viewCode: 'Ver código no GitHub',
      challenge: 'Desafio',
      solution: 'Solução',
      outcomes: 'Resultados & impacto',
      productGallery: 'Galeria do produto',
      galleryDescription: 'Telas que destacam UX, fluxos de trabalho e análises.',
      backToAllProjects: 'Voltar para todos os projetos',
    },
    common: {
      previous: 'Anterior',
      next: 'Próxima',
      close: 'Fechar ✕',
      viewProject: 'Ver Projeto',
      technologies: 'Tecnologias',
      allProjects: 'Todos os Projetos',
      backToProjects: 'Voltar para projetos',
      caseStudy: 'Estudo de caso',
      techStack: 'Stack & foco técnico',
      viewCode: 'Ver código no GitHub',
      challenge: 'Desafio',
      solution: 'Solução',
      outcomes: 'Resultados & impacto',
      productGallery: 'Galeria do produto',
      galleryDescription: 'Telas que destacam UX, fluxos de trabalho e análises.',
      backToAllProjects: 'Voltar para todos os projetos',
    },
  },
  en: {
    header: {
      name: 'Gabriel Oliveira',
    },
    footer: {
      copyright: '© {year} Gabriel Oliveira · Built with Next.js + TailwindCSS',
    },
    nav: {
      home: 'Home',
    },
    homePage: {
      metaTitle: 'Gabriel Oliveira | Fullstack Developer',
      metaDescription: 'Portfolio with automation, dashboards and Firebase projects.',
      title: 'Welcome to my Portfolio',
      subtitle: 'Technology • Automation • Innovation — cutting-edge solutions focused on results.',
      ctaProjects: 'View Projects',
      ctaAbout: 'About Me',
      tags: ['Next.js', 'Tailwind', 'Firebase', 'Automation', 'DataViz'],
      techListAria: 'Technologies I am proficient in',
    },
    projectsPage: {
      title: 'Projects',
      metaTitle: 'Projects – Gabriel Oliveira',
      metaDescription:
        'List of main works. Each item has a summary, image, and fields for code links, demo, and a gallery with examples.',
      heading: 'Projects',
      description:
        'List of main works. Each item has a summary, image, and fields for code links, demo, and a gallery with examples.',
      backHomeAria: 'Back to Home',
      cardAriaLabel: 'View project details for',
    },
    sobrePage: {
      metaTitle: 'About me — Gabriel Oliveira',
      metaDescription:
        'My journey as a fullstack dev focused on automation, dashboards and products that drive real impact.',
      title: 'My story',
      subtitle:
        'A bit of the path so far — how I arrived at automation, dashboards and products that reduce operational waste and increase results.',
      tags: ['Automation', 'Dashboards', 'Integrations', 'UX with animations'],
      blocks: [
        {
          h: 'Beginnings and curiosity',
          p: 'It started with a curious kid and a modest computer: a Celeron desktop that opened the door to the internet. I learned to browse, tweak Windows and download games. That was at 6 years old. From there, I never stopped exploring what technology could do — from creating simple games to installing different operating systems just to see how they worked. That is where my love for programming was born, and it is still going.',
        },
        {
          h: 'Fullstack in practice',
          p: 'With Next.js, Node and Firebase, I began delivering end‑to‑end products: from backend to frontend, always focused on performance, security and DX. The goal is clear: less friction, more results.',
        },
        {
          h: 'Automation and data',
          p: 'I have built robust schedulers, API integrations and dashboards that tell stories. The rule is to measure, learn and iterate quickly— from reliable logs to visualizations that drive decisions.',
        },
        {
          h: 'Visual experiments',
          p: 'Animations with Framer Motion and 3D scenes with Three.js elevate the experience. When used well, they bring clarity and personality without hurting navigation.',
        },
        {
          h: 'Today',
          p: 'I keep building products that remove waste and create impact. If you are looking for automation and a UX layer that converts, let’s talk.',
        },
      ],
      ctaProjects: 'View projects',
      ctaBackHome: 'Back to Home',
    },
    projectDetails: {
      backToProjects: 'Back to projects',
      caseStudy: 'Case study',
      techStack: 'Tech stack & focus',
      viewCode: 'View code on GitHub',
      challenge: 'Challenge',
      solution: 'Solution',
      outcomes: 'Outcomes & impact',
      productGallery: 'Product gallery',
      galleryDescription: 'Screens that highlight UX, workflows and analytics.',
      backToAllProjects: 'Back to all projects',
    },
    common: {
      previous: 'Previous',
      next: 'Next',
      close: 'Close ✕',
      viewProject: 'View Project',
      technologies: 'Technologies',
      allProjects: 'All Projects',
      backToProjects: 'Back to projects',
      caseStudy: 'Case study',
      techStack: 'Tech stack & focus',
      viewCode: 'View code on GitHub',
      challenge: 'Challenge',
      solution: 'Solution',
      outcomes: 'Outcomes & impact',
      productGallery: 'Product gallery',
      galleryDescription: 'Screens that highlight UX, workflows and analytics.',
      backToAllProjects: 'Back to all projects',
    },
  },
} as const;

export type Dict = (typeof dictionaries)[Locale];

export function getDictionary(lang: Locale): Dict {
  return dictionaries[lang] ?? dictionaries.pt;
}
