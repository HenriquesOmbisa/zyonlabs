'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, Calculator, PieChart, Landmark, FileText, BadgePercent, 
  ShieldCheck, HandCoins, ChevronRight, ChevronLeft, Users, 
  Award, Clock, CheckCircle2, Mail, Phone, MapPin, Plus, Minus, 
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';

// ======= Dados Dinâmicos =======
const heroSlides = [
  {
    title: "Otimização Fiscal Personalizada",
    subtitle: "Reduza legalmente sua carga tributária em até 35%",
    cta: "Simular Economia",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    overlay: "bg-blue-900/60"
  },
  {
    title: "Consultoria Financeira Estratégica",
    subtitle: "Planejamento para crescimento sustentável",
    cta: "Falar com Especialista",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    overlay: "bg-emerald-900/60"
  },
  {
    title: "Auditoria Contábil Completa",
    subtitle: "Conformidade e transparência para seu negócio",
    cta: "Agendar Diagnóstico",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    overlay: "bg-slate-900/60"
  }
];

const partners = [
  { name: "Forbes", logo: "/forbes-logo.svg" },
  { name: "Bloomberg", logo: "/bloomberg-logo.svg" },
  { name: "Deloitte", logo: "/deloitte-logo.svg" },
  { name: "PwC", logo: "/pwc-logo.svg" },
  { name: "Santander", logo: "/santander-logo.svg" }
];

const services = {
  contabilidade: [
    {
      title: "Declaração de IRPF",
      description: "Elaboração e entrega com análise dedutível",
      icon: FileText
    },
    // +5 itens...
  ],
  consultoria: [
    {
      title: "Reestruturação Societária",
      description: "Otimização legal da estrutura do negócio",
      icon: Landmark
    },
    // +5 itens...
  ]
};

const team = [
  {
    name: "Dr. Carlos Mendes",
    role: "Especialista em Direito Tributário",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "15 anos de experiência em planejamento fiscal"
  },
  // +3 membros...
];

const faqs = [
  {
    question: "Como posso reduzir meus impostos legalmente?",
    answer: "Através de... [resposta detalhada]"
  },
  // +7 perguntas...
];

// ======= Componente Principal =======
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [taxValue, setTaxValue] = useState(500000);
  const [activeTab, setActiveTab] = useState("contabilidade");
  const [formStep, setFormStep] = useState(1);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Partner logo auto-scroll
  useEffect(() => {
    const scrollContainer = document.querySelector(".partners-scroll");
    if (scrollContainer) {
      const clone = scrollContainer.innerHTML;
      scrollContainer.innerHTML += clone;
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ===== Hero com Slideshow ===== */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 ${heroSlides[currentSlide].overlay}`}
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controles do Slideshow */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition-all ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>

        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* ===== Barra de Marcas ===== */}
      <section className="py-8 bg-slate-100 overflow-hidden">
        <div className="partners-scroll flex items-center gap-12 whitespace-nowrap animate-infinite-scroll">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 grayscale opacity-80 hover:opacity-100 transition">
              <Image 
                src={partner.logo} 
                alt={partner.name}
                width={120}
                height={40}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== Calculadora Interativa ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                <span className="text-emerald-600">Quanto você pode economizar</span> com nosso planejamento?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="revenue" className="block mb-2 text-slate-700">
                    Faturamento Anual (R$)
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="revenue"
                      type="range"
                      min="100000"
                      max="5000000"
                      step="10000"
                      value={taxValue}
                      onChange={(e) => setTaxValue(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="font-mono font-bold min-w-[120px] text-right">
                      R$ {taxValue.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-sm text-slate-500 mb-1">Sem Planejamento</h3>
                    <p className="text-2xl font-bold text-red-500">
                      R$ {(taxValue * 0.34).toLocaleString('pt-BR')}
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 bg-emerald-50 border-emerald-200">
                    <h3 className="text-sm text-slate-500 mb-1">Com WealthGuard</h3>
                    <p className="text-2xl font-bold text-emerald-600">
                      R$ {(taxValue * 0.22).toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-3">Economia Potencial</h3>
                  <Progress 
                    value={27} 
                    className="h-3 bg-slate-200" 
                  />
                  <div className="flex justify-between mt-2 text-sm text-slate-600">
                    <span>27% em média</span>
                    <span>R$ {(taxValue * 0.12).toLocaleString('pt-BR')}/ano</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calculator className="h-6 w-6 text-emerald-600" />
                Simulação Personalizada
              </h3>
              
              <form className="space-y-4">
                <div>
                  <Label htmlFor="business-type">Tipo de Negócio</Label>
                  <select
                    id="business-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Selecione...</option>
                    <option value="mei">MEI</option>
                    <option value="ltda">LTDA</option>
                    <option value="sa">S/A</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="employees">Funcionários</Label>
                    <Input id="employees" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <Input id="state" placeholder="UF" maxLength={2} />
                  </div>
                </div>

                <Button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Calcular Economia Exata
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Nossos Processos ===== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Metodologia <span className="text-emerald-400">WealthGuard</span>
          </h2>
          
          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-500/30 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  step: "1",
                  title: "Diagnóstico Inicial",
                  description: "Análise completa da situação fiscal",
                  icon: FileText
                },
                // +4 etapas...
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative md:flex even:md:flex-row-reverse"
                >
                  {/* Ponto na linha */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-xl font-bold">{item.step}</span>
                  </div>
                  
                  {/* Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:pl-8' : 'md:pl-16 md:pr-8'} mt-8 md:mt-0`}>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <item.icon className="h-6 w-6 text-emerald-400" />
                          <CardTitle>{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline text-left">
                  <div className="flex items-center gap-3">
                    <Plus className="h-5 w-5 text-emerald-600 accordion-open:hidden" />
                    <Minus className="h-5 w-5 text-emerald-600 hidden accordion-open:block" />
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-8 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== Formulário Multi-step ===== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="overflow-hidden">
            <CardHeader className="bg-slate-900 text-white">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6" />
                {formStep === 1 && "Informações Básicas"}
                {formStep === 2 && "Detalhes do Negócio"}
                {formStep === 3 && "Finalizar"}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-6">
              {/* Step 1 */}
              {formStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" />
                  </div>
                </motion.div>
              )}
              
              {/* Step 2 */}
              {formStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" />
                  </div>
                  <div>
                    <Label htmlFor="revenue">Faturamento Anual (R$)</Label>
                    <Input id="revenue" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="employees">Nº de Funcionários</Label>
                    <Input id="employees" type="number" />
                  </div>
                </motion.div>
              )}
              
              {/* Step 3 */}
              {formStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Pronto para enviar!</h3>
                  <p className="text-slate-600 mb-6">
                    Revise seus dados e confirme o envio para nossa equipe
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Enviar Solicitação
                  </Button>
                </motion.div>
              )}
            </CardContent>
            
            <CardFooter className="flex justify-between border-t p-6">
              {formStep > 1 && (
                <Button 
                  variant="outline" 
                  onClick={() => setFormStep(formStep - 1)}
                >
                  Voltar
                </Button>
              )}
              
              {formStep < 3 ? (
                <Button 
                  className="ml-auto" 
                  onClick={() => setFormStep(formStep + 1)}
                >
                  Continuar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : null}
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* ===== Rodapé Completo ===== */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="h-8 w-8 text-emerald-500" />
                <h3 className="text-xl font-bold text-white">WealthGuard</h3>
              </div>
              <p>
                Consultoria financeira e contábil de alto nível para negócios ambiciosos.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">Contabilidade</Button></li>
                <li><Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">Consultoria</Button></li>
                <li><Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">Auditoria</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Links</h4>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">Blog</Button></li>
                <li><Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">Carreiras</Button></li>
                <li><Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">Termos</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Contato</h4>
              <address className="not-italic space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Av. Brigadeiro Faria Lima, 1500 - SP
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (11) 9876-5432
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  contato@wealthguard.com.br
                </p>
              </address>
            </div>
          </div>
          
          <Separator className="bg-slate-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} WealthGuard. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}