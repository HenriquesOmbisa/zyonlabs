'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { Globe, Ship, PackageCheck, Clock, ShieldCheck, ArrowRight, Phone, Mail, MapPin, BarChart2, Users, FileText, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  // Animation controls
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo seu contato. Nossa equipe responderá em breve.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Globe className="text-blue-600 w-8 h-8 mr-2" />
            <span className="text-2xl font-bold text-blue-800">GlobalTrade</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Clientes', 'Contato'].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 hidden md:flex">
              <Phone className="mr-2 h-4 w-4" /> Fale Conosco
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt="Global logistics"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-700/50"></div>
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6 z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-100">
              Comércio Internacional
            </Badge>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Conectando Mercados <span className="text-blue-300">Globais</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto">
            Soluções integradas em comércio exterior que impulsionam seu negócio além das fronteiras
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100 text-lg px-8 py-6 shadow-lg">
              Solicitar Orçamento <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-blue-800 border-white hover:bg-white/10 text-lg px-8 py-6">
              Nossos Serviços <ChevronDown className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronDown className="text-white w-6 h-6" />
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <p className="text-gray-500">Parceiros e clientes em todo o mundo</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              'https://logo.clearbit.com/maersk.com',
              'https://logo.clearbit.com/dhl.com',
              'https://logo.clearbit.com/fedex.com',
              'https://logo.clearbit.com/ups.com',
              'https://logo.clearbit.com/cargotec.com'
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={logo}
                  alt="Partner logo"
                  width={120}
                  height={60}
                  className="object-contain h-10 md:h-12"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-100 mb-4">
                Nossas Soluções
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços <span className="text-blue-600">Completos</span> em Comércio Exterior
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-blue-600 mx-auto mb-8"></motion.div>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-4xl mx-auto">
              Oferecemos um portfólio integrado de serviços para atender todas as etapas da sua cadeia de suprimentos internacional
            </motion.p>
          </motion.div>

          <Tabs defaultValue="importacao" className="w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 h-auto p-2">
                <TabsTrigger value="importacao" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <PackageCheck className="mr-2 h-5 w-5" /> Importação
                </TabsTrigger>
                <TabsTrigger value="exportacao" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <Ship className="mr-2 h-5 w-5" /> Exportação
                </TabsTrigger>
                <TabsTrigger value="logistica" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <Globe className="mr-2 h-5 w-5" /> Logística
                </TabsTrigger>
              </TabsList>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <TabsContent value="importacao">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {importServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="exportacao">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {exportServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="logistica">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {logisticsServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
                  {stat.icon && <stat.icon className="mr-3 h-10 w-10" />}
                  {stat.value}
                </div>
                <div className="text-blue-100 uppercase text-sm tracking-wider">{stat.label}</div>
                <p className="text-white/70 mt-3 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="About GlobalTrade"
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-100 mb-4">
                Nossa História
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mais de <span className="text-blue-600">15 anos</span> conectando mercados
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fundada em 2008, a GlobalTrade surgiu com a missão de simplificar o comércio internacional para empresas brasileiras. 
                Hoje, somos referência em soluções integradas de importação e exportação.
              </p>
              
              <div className="space-y-4 mb-8">
                {aboutPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </motion.div>
                ))}
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Conheça nossa equipe <Users className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-100 mb-4">
                Como Funciona
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso <span className="text-blue-600">Processo</span> em 5 Passos
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-blue-600 mx-auto mb-8"></motion.div>
          </motion.div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-16 lg:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}
                >
                  <div className={`flex-shrink-0 relative ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold border-4 border-white shadow-lg">
                      {index + 1}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="lg:hidden absolute top-16 left-1/2 transform -translate-x-1/2 h-8 w-0.5 bg-gray-200"></div>
                    )}
                  </div>
                  
                  <Card className="flex-1 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <step.icon className="mr-3 h-6 w-6 text-blue-600" />
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="clientes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-100 mb-4">
                Depoimentos
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos <span className="text-blue-600">clientes</span> dizem
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-blue-600 mx-auto mb-8"></motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-6 border-t">
                    <div className="text-sm text-gray-500">{testimonial.date}</div>
                    <div className="flex space-x-2">
                      {testimonial.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-100 mb-4">
                Dúvidas Frequentes
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-blue-600">comuns</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-blue-600 mx-auto mb-8"></motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline py-4 font-medium text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 mb-4">
                Pronto para Começar?
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Transforme sua operação de comércio exterior hoje
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Nossa equipe de especialistas está pronta para otimizar sua cadeia de suprimentos internacionais
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100 text-lg px-8 py-6 shadow-lg">
                Solicitar Demonstração <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white text-foreground text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" /> (+244) 987-665-4321
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Entre em <span className="text-blue-600">Contato</span></h2>
              <p className="text-lg text-gray-600 mb-8">
                Tem perguntas sobre nossos serviços ou precisa de um orçamento? Preencha o formulário e nossa equipe entrará em contato em breve.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Phone className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(+244) 987-665-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Mail className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@globaltrade.co.ao</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">Av. das N'gola Kiluanje, 1234 - Sala 1501<br />Luanda, Angola</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo*</label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Empresa</label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail*</label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Serviço de Interesse</label>
                      <Select
                        name="service"
                        value={formData.service}
                        onValueChange={(value) => setFormData({...formData, service: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="importacao">Importação</SelectItem>
                          <SelectItem value="exportacao">Exportação</SelectItem>
                          <SelectItem value="logistica">Logística Internacional</SelectItem>
                          <SelectItem value="consultoria">Consultoria Aduaneira</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem*</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full py-6 text-lg">
                      Enviar Mensagem
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
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="text-blue-400 w-8 h-8 mr-2" />
                <span className="text-2xl font-bold">GlobalTrade</span>
              </div>
              <p className="text-gray-400 mb-4">
                Soluções completas em comércio exterior para expandir seus negócios internacionalmente.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      {/* Ícone fictício - substitua por ícones reais */}
                      <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {footerServices.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Assine nossa newsletter para receber atualizações e notícias do setor.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
                />
                <Button variant="secondary" className="ml-2 bg-blue-600 hover:bg-blue-700">
                  Assinar
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ZyonLabs. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Serviço</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente de Card de Serviço reutilizável
function ServiceCard({ service }: { service: { icon: React.ComponentType<any>, title: string, description: string, features?: string[] } }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow group">
      <CardHeader>
        <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <service.icon className="text-blue-600 w-6 h-6 group-hover:text-white transition-colors" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{service.description}</p>
        {service.features && (
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-green-500 w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-blue-600 p-0 group-hover:text-blue-700">
          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

// Dados para as seções
const importServices = [
  {
    icon: FileText,
    title: "Desembaraço Aduaneiro",
    description: "Processamento completo de documentação e liberação de mercadorias.",
    features: [
      "Classificação fiscal",
      "Processo acelerado",
      "Acompanhamento em tempo real"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Compliance Importação",
    description: "Garantia de conformidade com todas as regulamentações internacionais.",
    features: [
      "Análise de regulamentações",
      "Consultoria especializada",
      "Prevenção de multas"
    ]
  },
  {
    icon: PackageCheck,
    title: "Transporte Internacional",
    description: "Soluções marítimas, aéreas e terrestres para sua carga.",
    features: [
      "Rastreamento 24/7",
      "Cobertura global",
      "Seguro de carga"
    ]
  }
];

const exportServices = [
  {
    icon: BarChart2,
    title: "Inteligência de Mercado",
    description: "Análise de mercados internacionais para expansão de negócios.",
    features: [
      "Dados de consumo",
      "Análise de concorrência",
      "Tendências de mercado"
    ]
  },
  {
    icon: Globe,
    title: "Comercialização no Exterior",
    description: "Apoio na venda e distribuição de produtos em mercados internacionais.",
    features: [
      "Rede de distribuidores",
      "Suporte comercial",
      "Gestão de pedidos"
    ]
  },
  {
    icon: Users,
    title: "Representação Internacional",
    description: "Atuação como seu representante em feiras e negociações no exterior.",
    features: [
      "Participação em feiras",
      "Intermediação comercial",
      "Suporte linguístico"
    ]
  }
];

const logisticsServices = [
  {
    icon: Ship,
    title: "Logística Marítima",
    description: "Transporte de contêineres FCL e LCL para todo o mundo.",
    features: [
      "Rotas otimizadas",
      "Consolidação de carga",
      "Armazenagem"
    ]
  },
  {
    icon: PackageCheck,
    title: "Logística Aérea",
    description: "Solução rápida para cargas urgentes ou de alto valor.",
    features: [
      "Coleta expressa",
      "Transporte dedicado",
      "Entrega porta a porta"
    ]
  },
  {
    icon: Users,
    title: "Gestão de Cadeia de Suprimentos",
    description: "Otimização completa da sua cadeia logística internacional.",
    features: [
      "Análise de processos",
      "Redução de custos",
      "Tecnologia de rastreamento"
    ]
  }
];

const stats = [
  {
    icon: Globe,
    value: "60+",
    label: "Países Atendidos",
    description: "Rede global de parceiros e clientes"
  },
  {
    icon: Ship,
    value: "15+",
    label: "Anos de Experiência",
    description: "Atuando no comércio exterior"
  },
  {
    icon: Users,
    value: "5000+",
    label: "Clientes Satisfeitos",
    description: "Empresas que confiam em nós"
  },
  {
    icon: BarChart2,
    value: "30%",
    label: "Economia Média",
    description: "Redução de custos logísticos"
  }
];

const aboutPoints = [
  "Equipe com mais de 50 especialistas em comércio exterior",
  "Presença em 12 países com escritórios próprios",
  "Tecnologia própria de rastreamento e gestão",
  "Certificação ISO 9001 em processos logísticos",
  "Parcerias com as principais transportadoras globais"
];

const processSteps = [
  {
    icon: FileText,
    title: "Análise e Planejamento",
    description: "Avaliamos suas necessidades e desenvolvemos uma estratégia personalizada para sua operação de comércio exterior."
  },
  {
    icon: ShieldCheck,
    title: "Documentação e Compliance",
    description: "Cuidamos de toda a documentação necessária, garantindo conformidade com as regulamentações internacionais."
  },
  {
    icon: Ship,
    title: "Transporte Internacional",
    description: "Selecionamos o modal ideal (marítimo, aéreo ou terrestre) e gerenciamos todo o processo de transporte."
  },
  {
    icon: PackageCheck,
    title: "Desembaraço Aduaneiro",
    description: "Realizamos o desembaraço com agilidade e transparência, minimizando custos e tempo de espera."
  },
  {
    icon: CheckCircle,
    title: "Entrega e Acompanhamento",
    description: "Coordenamos a entrega final e fornecemos relatórios completos de toda a operação."
  }
];

const testimonials = [
  {
    name: "Carlos Mendes",
    position: "Diretor Comercial - TechImport",
    quote: "A GlobalTrade transformou nosso processo de importação, tornando-o mais eficiente e com custos reduzidos em 30%.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=258&auto=format&fit=crop",
    rating: 5,
    date: "15/05/2023",
    tags: ["Importação", "Logística"]
  },
  {
    name: "Ana Beatriz Silva",
    position: "Gerente de Logística - ExportBrasil",
    quote: "Excelente atendimento e conhecimento técnico. Nos ajudaram a expandir para 3 novos mercados no último ano.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=258&auto=format&fit=crop",
    rating: 5,
    date: "22/03/2023",
    tags: ["Exportação", "Consultoria"]
  },
  {
    name: "Roberto Almeida",
    position: "CEO - Almeida & Cia",
    quote: "Confio na GlobalTrade há anos para todas as nossas operações internacionais. Parceiros estratégicos de verdade.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=258&auto=format&fit=crop",
    rating: 5,
    date: "10/01/2023",
    tags: ["Importação", "Exportação"]
  }
];

const faqs = [
  {
    question: "Quais documentos são necessários para importar?",
    answer: "Os documentos variam conforme o tipo de produto e país de origem. Geralmente são necessários: fatura comercial, conhecimento de embarque, certificado de origem, licenças específicas (quando aplicável) e documentos de conformidade. Nossa equipe auxilia na preparação de toda a documentação."
  },
  {
    question: "Quanto tempo leva o processo de importação?",
    answer: "O tempo varia conforme o modal de transporte (aéreo: 3-7 dias, marítimo: 20-45 dias), tipo de mercadoria e eficiência do desembaraço. Com nosso processo otimizado, conseguimos reduzir em até 40% o tempo médio de liberação."
  },
  {
    question: "Como é calculado o frete internacional?",
    answer: "O frete é calculado com base no peso, volume, tipo de mercadoria, modal de transporte, origem/destino e urgência. Oferecemos uma plataforma online para simulação de custos em tempo real."
  },
  {
    question: "Vocês trabalham com produtos perigosos?",
    answer: "Sim, temos expertise no transporte e desembaraço de produtos perigosos, seguindo todas as normas internacionais (IMO, IATA, ANTT). Realizamos uma análise prévia para garantir a viabilidade e conformidade da operação."
  },
  {
    question: "Qual a vantagem de usar um agente de carga em vez de fazer direto?",
    answer: "Nossa expertise reduz riscos, custos e tempo. Temos conhecimento profundo de regulamentações, tarifas e processos. Negociamos melhores fretes devido ao volume, evitamos multas por erros documentais e oferecemos rastreamento integrado."
  }
];

const footerServices = [
  "Importação",
  "Exportação",
  "Logística Internacional",
  "Desembaraço Aduaneiro",
  "Consultoria em Comércio Exterior",
  "Seguro de Carga"
];

const footerLinks = [
  "Sobre Nós",
  "Cases de Sucesso",
  "Blog",
  "Carreiras",
  "Termos de Serviço",
  "Política de Privacidade"
];