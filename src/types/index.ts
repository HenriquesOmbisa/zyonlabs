// types/index.ts
export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  delivery: string;
  benefits: string[];
  techStack: string[];
  icon?: React.ComponentType<{ size?: number }>;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  slug: string;
}