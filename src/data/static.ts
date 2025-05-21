import { BarChart2, Layout, Rocket, Globe, ShoppingBag, Code, Server, Brush } from 'lucide-react';

export const SERVICES = [
  { id: 1, name: 'Consultoria de TI', icon: BarChart2, price: 50000, description: 'Análise estratégica e roadmap tecnológico' },
  { id: 2, name: 'Landing Pages', icon: Layout, price: 150000, description: 'Conversão otimizada e design impactante' },
  { id: 3, name: 'MVP Rápido', icon: Rocket, price: 250000, description: 'Validação de ideia em 4 semanas' },
  { id: 4, name: 'Sites Institucionais', icon: Globe, price: 180000, description: 'Presença digital profissional' },
  { id: 5, name: 'E-commerce', icon: ShoppingBag, price: 200000, description: 'Lojas virtuais completas' },
  { id: 6, name: 'Aplicativos Web', icon: Code, price: 300000, description: 'Soluções SaaS sob medida' },
  { id: 7, name: 'APIs & Backend', icon: Server, price: 100000, description: 'Infraestrutura robusta e escalável' },
  { id: 8, name: 'Otimização UI/UX', icon: Brush, price: 90000, description: 'Experiência do usuário premium' }
];

export const CASE_STUDIES = [
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