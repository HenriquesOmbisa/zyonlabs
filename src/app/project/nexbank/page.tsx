'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: <Icons.instant className="h-8 w-8 text-indigo-600" />,
    title: "Transações Instantâneas",
    description: "Envie e receba dinheiro em tempo real, 24/7, sem taxas escondidas."
  },
  {
    icon: <Icons.investment className="h-8 w-8 text-indigo-600" />,
    title: "Investimentos Inteligentes",
    description: "Carteiras automatizadas com retornos ajustados ao seu perfil de risco."
  },
  {
    icon: <Icons.security className="h-8 w-8 text-indigo-600" />,
    title: "Segurança Máxima",
    description: "Biometria, criptografia de ponta e proteção contra fraudes."
  },
  {
    icon: <Icons.cashback className="h-8 w-8 text-indigo-600" />,
    title: "Cashback Premium",
    description: "Até 5% de volta em todas as compras com nosso cartão platinum."
  }
];

const testimonials = [
  {
    name: "Ana Carolina Silva",
    role: "Empreendedora",
    content: "O NexBank revolucionou como gerencio meu negócio. As ferramentas de fluxo de caixa são incríveis!",
    avatar: "/avatars/ana.jpg"
  },
  {
    name: "Ricardo Almeida",
    role: "Investidor",
    content: "Finalmente um banco que entende de investimentos. Minha carteira cresceu 32% este ano com suas recomendações.",
    avatar: "/avatars/ricardo.jpg"
  },
  {
    name: "Fernanda Gomes",
    role: "Fotógrafa Freelancer",
    content: "Adoro o design intuitivo e o atendimento humano que recebo, mesmo sendo um banco digital.",
    avatar: "/avatars/fernanda.jpg"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="secondary" className="mb-4 text-indigo-600 hover:bg-white">
                FinTech do Ano 2023
              </Badge>
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Revolucione sua <span className="text-indigo-300">vida financeira</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl mx-auto"
            >
              O banco digital que combina tecnologia de ponta com um toque humano para simplificar seu dinheiro.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg"
                onClick={() => router.push('/signup')}
              >
                Abra sua conta grátis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white hover:bg-indigo-700 hover:text-white border-white"
              >
                <Icons.play className="mr-2 h-4 w-4" />
                Veja como funciona
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Parceiros e reconhecimentos:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <Icons.forbes className="h-8 text-gray-400" />
            <Icons.techcrunch className="h-6 text-gray-400" />
            <Icons.bbc className="h-7 text-gray-400" />
            <Icons.fastcompany className="h-6 text-gray-400" />
            <Icons.wired className="h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bancário. <span className="text-indigo-600">Mas humano.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos a agilidade de uma fintech com a segurança de um banco tradicional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-indigo-100 z-0"></div>
                <div className="relative z-10">
                  <img 
                    src="/app-screenshot.png" 
                    alt="NexBank App" 
                    className="rounded-2xl shadow-2xl border-8 border-white"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-4 text-indigo-600">
                Experiência Premium
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tudo que você precisa na palma da sua mão
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nosso aplicativo foi premiado como o mais intuitivo do mercado, com ferramentas poderosas para gerenciar seu dinheiro de qualquer lugar.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <Icons.check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Controle total</h4>
                    <p className="text-gray-600">Categorize gastos, defina orçamentos e receba alertas inteligentes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <Icons.check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Investimentos simplificados</h4>
                    <p className="text-gray-600">Comece a investir com apenas R$ 1 e conselhos personalizados.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <Icons.check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Suporte 24/7</h4>
                    <p className="text-gray-600">Atendimento humano sempre que precisar, sem robôs chatos.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="outline" size="lg" className="border-gray-300">
                  <Icons.apple className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300">
                  <Icons.googlePlay className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold mb-2">2M+</div>
              <p className="text-indigo-100">Clientes satisfeitos</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">R$ 5Bi</div>
              <p className="text-indigo-100">Em transações mensais</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">4.9</div>
              <p className="text-indigo-100">Avaliação média na App Store</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 90% dos nossos usuários recomendam o NexBank para amigos e familiares.
            </p>
          </motion.div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.content}"</p>
                      <div className="mt-6 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icons.star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comece grátis e atualize quando precisar de mais benefícios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader className="border-b">
                  <CardTitle className="text-2xl">Básico</CardTitle>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">R$ 0</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Conta digital sem tarifa</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Cartão virtual</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>PIX ilimitado</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.x className="h-5 w-5 text-gray-300" />
                      <span className="text-gray-400">Cashback</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.x className="h-5 w-5 text-gray-300" />
                      <span className="text-gray-400">Investimentos premium</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Começar agora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-2 border-indigo-600 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-indigo-600 text-white px-3 py-1">
                    Mais Popular
                  </Badge>
                </div>
                <CardHeader className="border-b">
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">R$ 19</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Tudo do Básico</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Cartão físico sem anuidade</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Até 2% cashback</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Investimentos com taxa zero</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Seguro celular</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Assinar Premium
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="border-b">
                  <CardTitle className="text-2xl">Empresarial</CardTitle>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">R$ 99</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Tudo do Premium</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Até 5% cashback</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Conta PJ integrada</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Gestão de equipe</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Icons.check className="h-5 w-5 text-green-500" />
                      <span>Consultor dedicado</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Para empresas
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tudo o que você precisa saber antes de abrir sua conta.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg hover:no-underline">
                Como abro minha conta no NexBank?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                É simples e rápido! Baixe nosso app, preencha seus dados, faça uma selfie e um vídeo confirmando seus documentos. Em menos de 10 minutos sua conta estará pronta para uso, sem papelada ou burocracia.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg hover:no-underline">
                O NexBank é seguro?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutamente. Somos regulados pelo Banco Central e seguimos os mais altos padrões de segurança do setor, com criptografia de ponta a ponta, autenticação biométrica e seguro de até R$ 250 mil pelo FGC.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg hover:no-underline">
                Posso depositar dinheiro em espécie?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sim! Temos parceria com mais de 50 mil pontos de depósito em todo o país, incluindo redes de supermercados, farmácias e lotéricas. Consulte os locais mais próximos no nosso app.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg hover:no-underline">
                Como funciona o cashback?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Todo mês você recebe de volta uma porcentagem do valor gasto com seu cartão NexBank. No plano Premium é até 2% e no Empresarial até 5%. O valor é creditado automaticamente na sua conta no primeiro dia útil do mês seguinte.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para revolucionar sua vida financeira?
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
              Junte-se a mais de 2 milhões de pessoas que já descobriram uma forma mais inteligente de lidar com dinheiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg"
                onClick={() => router.push('/signup')}
              >
                Criar conta gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white hover:bg-indigo-700 hover:text-white border-white"
              >
                Fale com um especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Icons.logo className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold">NexBank</span>
              </div>
              <p className="text-gray-400 mb-6">
                A nova geração em serviços financeiros. Simples, seguro e feito para você.
              </p>
              <div className="flex gap-4">
                <Icons.facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Icons.twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Icons.instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Icons.linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Produtos</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Conta Digital</li>
                <li className="hover:text-white cursor-pointer">Cartão de Crédito</li>
                <li className="hover:text-white cursor-pointer">Investimentos</li>
                <li className="hover:text-white cursor-pointer">Empréstimos</li>
                <li className="hover:text-white cursor-pointer">Seguros</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Institucional</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Sobre nós</li>
                <li className="hover:text-white cursor-pointer">Carreiras</li>
                <li className="hover:text-white cursor-pointer">Imprensa</li>
                <li className="hover:text-white cursor-pointer">Sustentabilidade</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Ajuda</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Central de Ajuda</li>
                <li className="hover:text-white cursor-pointer">Segurança</li>
                <li className="hover:text-white cursor-pointer">Tarifas</li>
                <li className="hover:text-white cursor-pointer">Ouvidoria</li>
                <li className="hover:text-white cursor-pointer">Contato</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2023 NexBank. Todos os direitos reservados.
              </p>
              <div className="flex gap-6">
                <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Termos de Uso</p>
                <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Política de Privacidade</p>
                <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Cookies</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}