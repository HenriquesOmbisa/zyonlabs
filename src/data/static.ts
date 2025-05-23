import { CaseStudy, Service } from '@/types';
import { BarChart2, Layout, Rocket, Globe, ShoppingBag, Code, Server, Brush } from 'lucide-react';

export const SERVICES: Service[] = [
  {
    id: 1,
    name: 'Consultoria de TI',
    icon: BarChart2,
    price: 50000,
    description: 'Análise estratégica e roadmap tecnológico',
    delivery: '3 dias úteis',
    benefits: [
      'Diagnóstico completo',
      'Plano de ação personalizado',
      'Redução de custos e riscos',
      'Aumento da eficiência',
      'Apoio na implementação',
      'Acompanhamento contínuo'
    ],
    techStack: ['Supabase', 'Firebase', 'Google Workspace']
  },
  {
    id: 2,
    name: 'Otimização UI/UX',
    icon: Brush,
    price: 90000,
    description: 'Experiência do usuário premium',
    delivery: '1 semana',
    benefits: [
      'Aumento da conversão',
      'Design mais intuitivo',
      'Melhor usabilidade em mobile',
      'Aumento do engajamento',
      
    ],
    techStack: ['Figma', 'Tailwind', 'React']
  },
  {
    id: 3,
    name: 'Landing Pages',
    icon: Layout,
    price: 150000,
    description: 'Conversão otimizada e design impactante',
    delivery: '5 dias úteis',
    benefits: [
      'Alta performance',
      'Responsiva e moderna',
      'Foco em conversão',
      'Integração com ferramentas de marketing',
      'Otimização para SEO',
      'Análise de dados e relatórios',
      'Suporte contínuo'
    ],
    techStack: ['Next.js', 'Vercel', 'Tailwind']
  },
  {
    id: 4,
    name: 'Sites Institucionais',
    icon: Globe,
    price: 180000,
    description: 'Presença digital profissional',
    delivery: '2 semanas',
    benefits: [
      'SEO otimizado',
      'Responsivo e acessível',
      'Integração com redes sociais',
      'Análise de dados',
      'Design sob medida',
      'Gerenciável via CMS próprio',
      'Suporte contínuo'
    ],
    techStack: ['Next.js', 'Go', 'Tailwind']
  },
  {
    id: 5,
    name: 'E-commerce',
    icon: ShoppingBag,
    price: 200000,
    description: 'Lojas virtuais completas e integradas',
    delivery: '3 semanas',
    benefits: [
      'Design responsivo',
      'Otimização para SEO',
      'Integração com marketplaces',
      'Gerenciamento de produtos',
      'Sistema gerenciamento de pagamentos',
      'Carrinho de compras otimizado',
      'Integração com redes sociais',
      'Relatórios e análises',
      'Checkout seguro',
      'Integração com pagamentos',
      'Gestão de estoque',
      'Suporte contínuo'
    ],
    techStack: ['Next.js', 'Stripe', 'Postgres']
  },
  {
    id: 6,
    name: 'Aplicativos Web',
    icon: Code,
    price: 300000,
    description: 'Soluções SaaS sob medida',
    delivery: '4 semanas',
    benefits: [
      'Escalável e modular',
      'Integração com APIs',
      'Design responsivo',
      'Gerenciamento de usuários',
      'Relatórios e análises',
      'Segurança integrada',
      'Painéis administrativos completos',
      'Suporte contínuo'
    ],
    techStack: ['Go', 'React', 'Postgres', 'Docker']
  },
  {
    id: 7,
    name: 'MVP Rápido',
    icon: Rocket,
    price: 250000,
    description: 'Validação de ideia em 4 semanas',
    delivery: '4 semanas',
    benefits: [
      'Protótipo funcional',
      'Feedback real do mercado',
      'Iteração rápida',
      'Redução de riscos',
      'Pronto para investidores',
      'Escalável',
      'Integração com APIs',
      'Design responsivo',
      'Gerenciamento de usuários',
      'Relatórios e análises',
      'Segurança integrada',
      'Painéis administrativos completos',
      'Suporte contínuo'
    ],
    techStack: ['Next.js', 'Supabase', 'Tailwind']
  },
  {
    id: 8,
    name: 'APIs & Backend',
    icon: Server,
    price: 100000,
    description: 'Infraestrutura robusta e escalável',
    delivery: '1 semana',
    benefits: [
      'Alto desempenho',
      'Segurança avançada',
      'Documentação clara',
      'Integração com serviços externos',
      'Gerenciamento de usuários',
      'Relatórios e análises',
      'Escalabilidade garantida',
      'Pronto para escalar',
      'Suporte contínuo'
    ],
    techStack: ['Go', 'Postgres', 'Redis', 'Swagger']
  }
];


export const TECH_STACK = [
  { name: 'Next.js', logo: '/tech/nextjs.svg' },
  { name: 'React', logo: '/tech/react.svg' },
  { name: 'TypeScript', logo: '/tech/typescript.svg' },
  { name: 'Node.js', logo: '/tech/nodejs.svg' },
  { name: 'Golang', logo: '/tech/go.svg' },
  { name: 'Tailwind', logo: '/tech/tailwind.svg' },
  { name: 'MongoDB', logo: '/tech/mongodb.svg' },
  { name: 'Postgres', logo: '/tech/postgresql.svg' },
  { name: 'Mysql', logo: '/tech/mysql.svg' },
  { name: 'Firebase', logo: '/tech/firebase.svg' },
  { name: 'AWS', logo: '/tech/aws.svg' },
  { name: 'Supabase', logo: '/tech/supabase.png' },
];


export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: 'EduPlus - Plataforma de Educação',
    description: 'SaaS para cursos online com aumento de 300% em conversões',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/projects/eduplus.png',
    slug: 'eduplus',
  },
  {
    id: 2,
    title: 'Marketplace Local',
    description: 'Solução completa para pequenos negócios com 10k usuários',
    tech: ['React', 'Firebase', 'Stripe'],
    image: '/projects/paperhub.png',
    slug: 'paperhub',
  },
  {
    id: 3,
    title: 'App de Saúde',
    description: 'Sistema de agendamento médico',
    tech: ['Flutter', 'Node.js', 'PostgreSQL'],
    image: '/projects/saudeplus.png',
    slug: 'saudeplus',
  },
  {
    id: 4,
    title: 'Global Trade - Exportação e Importação',
    description: 'Plataforma de gestão de comércio exterior com integração de APIs',
    tech: ['NextJS', 'Go', 'PostgreSQL'],
    image: '/projects/globaltrade.png',
    slug: 'globaltrade',
  }
];