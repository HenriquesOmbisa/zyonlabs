'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, CreditCard, DollarSign, Smartphone, Shield, BarChart2, Clock, User, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

// Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Mock Data
const features = [
  { icon: <DollarSign className="w-6 h-6 text-purple-600" />, title: "Conta 100% Digital", desc: "Sem taxas e com rendimento diário." },
  { icon: <CreditCard className="w-6 h-6 text-purple-600" />, title: "Cartão Internacional", desc: "Sem anuidade e cashback." },
  { icon: <BarChart2 className="w-6 h-6 text-purple-600" />, title: "Investimentos", desc: "CDB, Tesouro Direto e mais." },
  { icon: <Shield className="w-6 h-6 text-purple-600" />, title: "Seguro Gratuito", desc: "Proteção para seu cartão." },
];

const testimonials = [
  { name: "Ana Silva", role: "Cliente desde 2020", text: "Melhor banco digital que já usei! Atendimento excelente.", avatar: "/testimonials/1.jpg" },
  { name: "Carlos Oliveira", role: "Empresário", text: "Taxas baixas e app intuitivo. Recomendo!", avatar: "/testimonials/2.jpg" },
  { name: "Mariana Costa", role: "Investidora", text: "Ótimos fundos de investimento disponíveis.", avatar: "/testimonials/3.jpg" },
];

const faqs = [
  { question: "Como abrir uma conta?", answer: "Baixe o app, preencha seus dados e em 5 minutos sua conta estará ativa!" },
  { question: "Quais os benefícios do cartão?", answer: "Cashback, seguro gratuito e sem anuidade." },
  { question: "Como faço um empréstimo?", answer: "Pelo app, com taxas a partir de 1,2% ao mês." },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("conta");
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container flex items-center justify-between h-20 px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-purple-600 text-white p-2 rounded-full">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-purple-600">NexBank</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="font-medium hover:text-purple-600 transition-colors">Para Você</Link>
            <Link href="#business" className="font-medium hover:text-purple-600 transition-colors">Empresas</Link>
            <Link href="#investments" className="font-medium hover:text-purple-600 transition-colors">Investimentos</Link>
            <Link href="#support" className="font-medium hover:text-purple-600 transition-colors">Ajuda</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-purple-600 text-purple-600" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/register">Abrir Conta</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Seu banco digital <span className="text-purple-600">completo</span> e sem complicação
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Conta, cartão, investimentos e empréstimos em um só lugar. Abra sua conta em 5 minutos e comece a usar hoje mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 h-14 px-8 text-lg" asChild>
                  <Link href="/register">
                    Abrir Conta Grátis <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 h-14 px-8 text-lg" asChild>
                  <Link href="#app">
                    Baixar App <Smartphone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/credit-card-3d.png"
                alt="Cartão NexBank"
                width={600}
                height={400}
                className="mx-auto lg:mr-0 drop-shadow-2xl"
              />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 hidden lg:block"
              >
                <Card className="w-72 bg-white/90 backdrop-blur-md shadow-lg border border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                      <span>Transferência Recebida</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">De: João Silva</p>
                        <p className="text-sm text-gray-600">Ref: Pagamento</p>
                      </div>
                      <p className="text-xl font-bold text-purple-600">R$ 1.250,00</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS LOGOS ===== */}
      <section className="py-12 bg-gray-100">
        <div className="container">
          <p className="text-center text-sm text-gray-500 mb-8">Parceiros e garantias</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['mastercard', 'visa', 'febraban', 'bacen', 'google-play', 'app-store'].map((logo) => (
              <Image
                key={logo}
                src={`/partners/${logo}.png`}
                alt={logo}
                width={120}
                height={40}
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-medium mb-4">
              POR QUE ESCOLHER O NEXBANK?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tudo o que você precisa em um <span className="text-purple-600">único app</span>
            </h2>
            <p className="text-lg text-gray-600">
              Soluções financeiras completas para sua vida pessoal e empresarial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border border-gray-200">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 rounded-full bg-purple-100">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT TABS ===== */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-white h-14 shadow-sm">
              <TabsTrigger value="conta" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white h-full">
                Conta Digital
              </TabsTrigger>
              <TabsTrigger value="cartao" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white h-full">
                Cartão de Crédito
              </TabsTrigger>
              <TabsTrigger value="investimentos" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white h-full">
                Investimentos
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="conta" className="mt-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Conta digital <span className="text-purple-600">100% gratuita</span>
                      </h3>
                      <ul className="space-y-4 mb-8">
                        {[
                          "Sem tarifas de manutenção",
                          "Rendimento diário do seu dinheiro",
                          "Transferências ilimitadas",
                          "PIX gratuito 24/7",
                          "Seguro de até R$ 250 mil",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-purple-600 mt-0.5 mr-3" />
                            <span className="text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8" asChild>
                        <Link href="/register">
                          Abrir Conta <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative">
                      <Image
                        src="/digital-account.png"
                        alt="Conta Digital"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="cartao" className="mt-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Cartão de crédito <span className="text-purple-600">sem anuidade</span>
                      </h3>
                      <ul className="space-y-4 mb-8">
                        {[
                          "Cashback de 1% em todas as compras",
                          "Anuidade zero para sempre",
                          "Limite pré-aprovado na hora",
                          "App para controle total",
                          "Seguro de compras incluído",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-purple-600 mt-0.5 mr-3" />
                            <span className="text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8" asChild>
                        <Link href="/cartao">
                          Pedir Cartão <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative flex justify-center">
                      <Image
                        src="/credit-card-front.png"
                        alt="Cartão de Crédito"
                        width={500}
                        height={330}
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="investimentos" className="mt-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Investimentos <span className="text-purple-600">para todos</span>
                      </h3>
                      <ul className="space-y-4 mb-8">
                        {[
                          "CDB com 110% do CDI",
                          "Tesouro Direto sem taxa",
                          "Fundos de investimento",
                          "Assessoria gratuita",
                          "Resgate rápido e fácil",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-purple-600 mt-0.5 mr-3" />
                            <span className="text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8" asChild>
                        <Link href="/investimentos">
                          Começar a Investir <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative">
                      <Image
                        src="/investment-chart.png"
                        alt="Investimentos"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* ===== APP SECTION ===== */}
      <section id="app" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Baixe o app e <span className="text-purple-600">simplifique sua vida</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tudo na palma da sua mão. Transfira, pague, invista e muito mais de onde estiver.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="h-14 px-6 border-gray-300" asChild>
                  <Link href="#">
                    <Image src="/app-store-badge.png" alt="App Store" width={120} height={40} />
                  </Link>
                </Button>
                <Button variant="outline" className="h-14 px-6 border-gray-300" asChild>
                  <Link href="#">
                    <Image src="/google-play-badge.png" alt="Google Play" width={135} height={40} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-[500px]">
                <div className="absolute inset-0 rounded-[40px] border-[14px] border-gray-900 shadow-2xl"></div>
                <Image
                  src="/app-screens.png"
                  alt="App NexBank"
                  fill
                  className="rounded-[26px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que nossos <span className="text-white">clientes</span> dizem
            </h2>
            <p className="text-lg text-purple-100">
              Milhares de pessoas já simplificaram sua vida financeira com o NexBank.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-purple-100">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="italic">&quot;{testimonial.text}&quot;</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="support" className="py-20">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dúvidas <span className="text-purple-600">frequentes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Encontre respostas para as perguntas mais comuns sobre o NexBank.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-purple-600 text-purple-600 h-12 px-8" asChild>
              <Link href="/support">
                Ver todas as dúvidas <HelpCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gray-100">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para <span className="text-purple-600">revolucionar</span> sua vida financeira?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Abra sua conta em minutos e comece a usar todos os benefícios do NexBank hoje mesmo.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 h-14 px-8 text-lg" asChild>
              <Link href="/register">
                Criar Conta Gratuita <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white pt-16 pb-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="bg-purple-600 text-white p-2 rounded-full">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">NexBank</span>
              </Link>
              <p className="text-gray-400 mb-6">
                O banco digital feito para simplificar sua vida financeira.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <Link key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Produtos</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Conta Digital</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Cartão de Crédito</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Investimentos</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Empréstimos</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Institucional</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Imprensa</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Ajuda</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Central de Ajuda</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Segurança</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tarifas</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Ouvidoria</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NexBank. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Image src="/selo-bacen.png" alt="Banco Central" width={80} height={40} />
              <Image src="/selo-febraban.png" alt="Febraban" width={80} height={40} />
              <Image src="/selo-google-play.png" alt="Google Play" width={80} height={40} />
              <Image src="/selo-app-store.png" alt="App Store" width={80} height={40} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}