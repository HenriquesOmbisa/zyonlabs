'use client';
import { motion } from 'framer-motion';
import { Calculator, LineChart, Landmark, FileText, BadgePercent, ShieldCheck, HandCoins, Facebook, Linkedin, Instagram, Mail, MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

// Tipos
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
};

type Client = {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
};

// Dados
const services: Service[] = [
  {
    id: 1,
    title: "Contabilidade Completa",
    description: "Gestão fiscal e financeira para seu negócio",
    icon: FileText,
    features: [
      "Balancetes mensais",
      "Demonstrativos financeiros",
      "Encerramento fiscal",
      "Relatórios personalizados"
    ]
  },
  {
    id: 2,
    title: "Consultoria Tributária",
    description: "Redução legal de carga fiscal",
    icon: BadgePercent,
    features: [
      "Planejamento tributário",
      "Recuperação de créditos",
      "Análise de regimes fiscais",
      "Defesa administrativa"
    ]
  },
  {
    id: 3,
    title: "Auditoria Financeira",
    description: "Diagnóstico e compliance",
    icon: ShieldCheck,
    features: [
      "Due diligence",
      "Conformidade legal",
      "Relatórios para investidores",
      "Prevenção de fraudes"
    ]
  }
];

const clients: Client[] = [
  {
    id: 1,
    name: "Ricardo Almeida",
    role: "CEO - Rede de Farmácias",
    testimonial: "A FinExpert reduziu nossos impostos em 27% com planejamento estratégico.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: 2,
    name: "Fernanda Costa",
    role: "Diretora - Escola Particular",
    testimonial: "Migração para MEI foi impecável. Economizamos R$15k/ano!",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

export default function Home() {
  const [taxValue, setTaxValue] = useState(100000);
  const [taxResult, setTaxResult] = useState<number | null>(null);

  const calculateTax = () => {
    // Simulação complexa (substitua por lógica real)
    const result = taxValue * 0.27; // Ex: 27% de impostos
    setTaxResult(result);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative bg-[#1e293b] text-white py-24">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <Badge variant="outline" className="mb-4 border-emerald-500 text-emerald-500">
              Contadores Certificados
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-emerald-400">Estratégia fiscal</span> que maximiza seus resultados
            </h1>
            <p className="text-xl mb-8 text-slate-300">
              Consultoria contábil personalizada para PMEs e empreendedores
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                (11) 9876-5432
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-slate-700 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calculator className="h-6 w-6 text-emerald-400" />
                Simulador Fiscal
              </h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="revenue" className="text-slate-300 block mb-2">
                    Faturamento Anual (R$)
                  </Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={taxValue}
                    onChange={(e) => setTaxValue(Number(e.target.value))}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                  <div className="flex justify-between text-sm text-slate-400 mt-2">
                    <span>R$ 50k</span>
                    <span>R$ 500k</span>
                    <span>R$ 5M</span>
                  </div>
                </div>
                
                <Button 
                  onClick={calculateTax}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  Calcular Economia
                </Button>
                
                {taxResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-slate-800/50 p-4 rounded-lg"
                  >
                    <h4 className="font-medium mb-2">Potencial de Economia Anual:</h4>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-emerald-400">
                        R$ {taxResult.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-emerald-400 mb-1">+27%</span>
                    </div>
                    <Progress value={27} className="h-2 mt-4 bg-slate-700" />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-800 mb-4"
            >
              Serviços Contábeis Especializados
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Soluções completas para compliance e crescimento financeiro
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon className="h-8 w-8 text-emerald-600" />
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      Detalhes
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                alt="Equipe FinExpert"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Por Que Escolher a FinExpert?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Landmark className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">15 Anos de Experiência</h3>
                    <p className="text-slate-600">
                      Atuando em diversos segmentos de mercado com cases comprovados
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <LineChart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Resultados Mensuráveis</h3>
                    <p className="text-slate-600">
                      Média de 23% de redução fiscal para nossos clientes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <HandCoins className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Honorários Transparentes</h3>
                    <p className="text-slate-600">
                      Cobrança baseada em valor agregado, não em horas trabalhadas
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Clientes que Confiam</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Empresas que alcançaram resultados excepcionais com nossa consultoria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-slate-200 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden">
                        <Image
                          src={client.avatar}
                          alt={client.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{client.name}</h3>
                        <p className="text-sm text-slate-600">{client.role}</p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <blockquote className="italic text-slate-700">
                      &quot;{client.testimonial}&quot;
                    </blockquote>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Pronto para Otimizar Suas Finanças?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Agende uma análise gratuita do seu negócio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Solicitar Análise
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="h-8 w-8 text-emerald-500" />
                <h3 className="text-xl font-bold text-white">FinExpert</h3>
              </div>
              <p>
                Consultoria contábil e estratégica para crescimento sustentável
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Serviços</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                      {service.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Sobre Nós
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Blog Fiscal
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Política de Privacidade
                  </Button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Contato</h4>
              <address className="not-italic">
                <p className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  Av. Paulista, 1000 - São Paulo/SP
                </p>
                <p className="flex items-center gap-2 mb-2">
                  <Phone className="h-5 w-5" />
                  (11) 9876-5432
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  contato@finexpert.com.br
                </p>
              </address>
            </div>
          </div>
          
          <Separator className="bg-slate-800 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} FinExpert. Todos os direitos reservados.
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