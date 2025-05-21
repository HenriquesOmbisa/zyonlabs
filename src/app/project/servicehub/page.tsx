'use client';
import { motion } from 'framer-motion';
import { Building2, Code, Cloud, Server, Smartphone, Database, Rocket, CheckCircle, Mail, Phone, MapPin, Twitter, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
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

type TeamMember = {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  image: string;
};

// Dados
const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web sob medida",
    icon: Code,
    features: [
      "Next.js/React",
      "TypeScript",
      "Tailwind CSS",
      "Integração com APIs"
    ]
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Infraestrutura escalável na nuvem",
    icon: Cloud,
    features: [
      "AWS/Azure/GCP",
      "Arquitetura Serverless",
      "Migração de dados",
      "Otimização de custos"
    ]
  },
  {
    id: 3,
    title: "Mobile Apps",
    description: "Aplicativos nativos e híbridos",
    icon: Smartphone,
    features: [
      "React Native",
      "Flutter",
      "iOS & Android",
      "Integração com APIs"
    ]
  }
];

const team: TeamMember[] = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CTO & Full-stack Developer",
    expertise: ["Node.js", "Go", "AWS"],
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Ana Oliveira",
    role: "UX/UI Designer",
    expertise: ["Figma", "Prototipagem", "Design System"],
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const successCases = [
  {
    id: 1,
    title: "Sistema de Gestão para Varejo",
    result: "+300% eficiência operacional",
    description: "Plataforma customizada para rede de supermercados"
  },
  {
    id: 2,
    title: "Migração para Cloud",
    result: "Redução de 40% nos custos",
    description: "Transição completa de infraestrutura local para AWS"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Soluções em <span className="text-yellow-300">TI</span> que impulsionam seu negócio
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Consultoria especializada em desenvolvimento, cloud e transformação digital
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                Nossos Serviços
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Fale Conosco
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                alt="Equipe de TI"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-800 mb-4"
            >
              Nossos Serviços Especializados
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Soluções completas desde o planejamento até a implementação
            </motion.p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
          </Tabs>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Detalhes
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Conheça Nossa Equipe</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Profissionais certificados e com vasta experiência de mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {/* Card de "Junte-se a nós" */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full flex flex-col items-center justify-center bg-blue-50 border-blue-200">
                <CardHeader className="items-center text-center">
                  <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Junte-se a Nossa Equipe</CardTitle>
                  <CardDescription>
                    Estamos sempre buscando talentos
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="border-blue-600 text-blue-600">
                    Ver Vagas
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Cases de Sucesso</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Resultados reais que entregamos para nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successCases.map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{caseStudy.title}</CardTitle>
                    <CardDescription className="text-green-600 font-medium">
                      {caseStudy.result}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{caseStudy.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 text-blue-600">
                      Ver Estudo Completo →
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Pronto para Transformar Seu Negócio?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Agende uma consultoria gratuita com nossos especialistas
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
              Agendar Consultoria
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Entre em Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-slate-600">contato@servicehub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Telefone</h3>
                    <p className="text-slate-600">(11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Endereço</h3>
                    <p className="text-slate-600">
                      Av. Paulista, 1000 - São Paulo/SP
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input id="subject" placeholder="Sobre o que deseja falar?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Descreva sua necessidade..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">ServiceHub</h3>
              </div>
              <p className="text-slate-400">
                Transformando ideias em soluções digitais desde 2020
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Serviços</h4>
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
              <h4 className="font-semibold text-lg mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Sobre Nós
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Equipe
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Blog
                  </Button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
              <p className="text-slate-400 mb-4">
                Assine para receber nossas atualizações
              </p>
              <div className="flex">
                <Input 
                  placeholder="Seu email" 
                  className="rounded-r-none border-slate-700 bg-slate-800 text-white" 
                />
                <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="bg-slate-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ServiceHub. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}