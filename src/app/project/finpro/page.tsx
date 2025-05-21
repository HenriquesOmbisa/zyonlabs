'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, LineChart, Shield, Wallet } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { TestimonialCard } from '@/components/testimonial-card';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const featureItems = [
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: 'Investimentos Inteligentes',
    description: 'Plataforma avançada para maximizar seus retornos com segurança.',
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: 'Gestão Financeira',
    description: 'Controle total sobre suas finanças em um único lugar.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Segurança Garantida',
    description: 'Tecnologia de ponta para proteger seus ativos e dados.',
  },
];

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO da TechSolutions',
    content:
      'A FinanciaPro revolucionou nossa gestão financeira. Em 6 meses já vimos um aumento de 30% nos nossos investimentos.',
    avatar: '/avatars/avatar1.jpg',
  },
  {
    name: 'Ana Oliveira',
    role: 'Diretora Financeira',
    content:
      'A segurança e as ferramentas analíticas nos deram confiança para expandir nossos investimentos internacionalmente.',
    avatar: '/avatars/avatar2.jpg',
  },
  {
    name: 'Roberto Santos',
    role: 'Investidor',
    content:
      'Como investidor individual, encontrei na FinanciaPro o parceiro ideal para diversificar minha carteira com orientação especializada.',
    avatar: '/avatars/avatar3.jpg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-900">FinanciaPro</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-primary">
              Serviços
            </Link>
            <Link href="#solutions" className="text-sm font-medium text-gray-700 hover:text-primary">
              Soluções
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary">
              Depoimentos
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary">
              Contato
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/register">
                Começar agora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container flex flex-col items-center justify-center py-20 md:py-32"
      >
        <motion.div variants={fadeIn} className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Transforme seu futuro <span className="text-primary">financeiro</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções financeiras integradas para pessoas e empresas. Maximize seus investimentos com tecnologia de ponta e
            consultoria especializada.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">
                Comece gratuitamente <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#solutions">
                Conheça nossas soluções <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="mt-16 rounded-xl bg-gradient-to-r from-primary to-blue-600 p-1 shadow-xl"
        >
          <div className="rounded-lg bg-white p-1">
            <Image
              src="/dashboard-screenshot.jpg"
              alt="Dashboard FinanciaPro"
              width={1200}
              height={800}
              className="rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Clients Logos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-gray-50"
      >
        <div className="container">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">Confiado por empresas líderes</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {['company1', 'company2', 'company3', 'company4', 'company5'].map((company) => (
              <div key={company} className="grayscale hover:grayscale-0 transition-all">
                <Image
                  src={`/clients/${company}.png`}
                  alt={company}
                  width={120}
                  height={40}
                  className="h-8 object-contain opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Soluções financeiras completas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Tudo o que você precisa para tomar decisões financeiras inteligentes em uma única plataforma.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureItems.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tecnologia financeira para <span className="text-primary">resultados excepcionais</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa plataforma combina análise de dados avançada com ferramentas intuitivas para oferecer insights
                poderosos que impulsionam seus resultados financeiros.
              </p>
              <ul className="space-y-4">
                {[
                  'Análise de mercado em tempo real',
                  'Recomendações personalizadas',
                  'Relatórios detalhados automatizados',
                  'Integração com múltiplas contas',
                  'Alertas inteligentes de oportunidades',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" size="lg" asChild>
                <Link href="/register">
                  Experimente gratuitamente <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="/financial-analytics.jpg"
                  alt="Análise Financeira"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-xl border-2 border-primary/20 z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: 'R$5.8bi', label: 'Ativos sob gestão' },
              { value: '25k+', label: 'Clientes satisfeitos' },
              { value: '98%', label: 'Taxa de satisfação' },
              { value: '15+', label: 'Prêmios financeiros' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">O que nossos clientes dizem</h2>
            <p className="mt-4 text-lg text-gray-600">
              Empresas e investidores que transformaram seus resultados com nossas soluções.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-1">
            <div className="rounded-xl bg-gray-900 p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua vida financeira?</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                  Comece hoje mesmo e tenha acesso a todas as ferramentas para tomar decisões financeiras inteligentes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button variant="secondary" size="lg" className="w-full" asChild>
                    <Link href="/register">
                      Comece gratuitamente <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/demo">
                      Agendar demonstração <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fale conosco</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa equipe está pronta para responder suas dúvidas e ajudar você a encontrar a melhor solução para suas
                necessidades financeiras.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contato@financiapro.com.br</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Telefone</h3>
                  <p className="text-gray-600">+55 (11) 1234-5678</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Envie uma mensagem</CardTitle>
                  <CardDescription>Responderemos em até 24 horas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Nome
                        </label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Seu email" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="sr-only">
                        Assunto
                      </label>
                      <Input id="subject" placeholder="Assunto" />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Sua mensagem"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <Wallet className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">FinanciaPro</span>
              </Link>
              <p className="mt-4 text-gray-400">
                Soluções financeiras inteligentes para transformar seu futuro.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-400 hover:text-white">
                    Imprensa
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions" className="text-gray-400 hover:text-white">
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-gray-400 hover:text-white">
                    Integrações
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Termos
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-gray-400 hover:text-white">
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-gray-400 hover:text-white">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FinanciaPro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}