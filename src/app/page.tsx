'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {  Mail, X, ShoppingCart, ChevronRight, Rocket, Menu, Home } from 'lucide-react';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import { CASE_STUDIES, SERVICES, TECH_STACK } from '@/data/static';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import { formatPrice } from "@/utils/utils";

// ===== PÁGINA PRINCIPAL =====
export default function HomePage() {
  const [cart, setCart] = useState<typeof SERVICES>([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email'>('whatsapp');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderSent, setOrderSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);
  const [selectedCase, setSelectedCase] = useState<typeof CASE_STUDIES[0] | null>(null);

  // Persistência do carrinho
  useEffect(() => {
    const savedCart = localStorage.getItem('zyonlabs-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('zyonlabs-cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Adiciona/remove serviços
  const toggleService = (service: typeof SERVICES[0]) => {
    setCart(prev => 
      prev.some(item => item.id === service.id) 
        ? prev.filter(item => item.id !== service.id) 
        : [...prev, service]
    );
  };

  // Envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const servicesText = cart.map(item => 
      `🛠️ *${item.name}*%0A   - Preço: $${item.price}%0A   - Descrição: ${item.description}`
    ).join('%0A%0A');

    if (activeTab === 'whatsapp') {
      const message = `📋 *NOVO PEDIDO ZYONLABS*%0A%0A` +
        `👤 *Cliente:* ${formData.name}%0A` +
        `📧 *Email:* ${formData.email}%0A` +
        `📱 *Telefone:* ${formData.phone}%0A%0A` +
        `💬 *Mensagem:* ${formData.message}%0A%0A` +
        `🛒 *Serviços:*%0A%0A${servicesText}%0A%0A` +
        `💵 *Total:* $${total}`;
      
      window.open(`https://wa.me/244949221682?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      const subject = `Novo pedido de ${formData.name}`;
      const body = `Detalhes do pedido:%0A%0A${servicesText.replace(/%0A/g, '\n')}`;
      window.open(`mailto:contato@zyonlabs.com?subject=${subject}&body=${body}`);
    }

    setOrderSent(true);
    setTimeout(() => {
      setCart([]);
      setOrderSent(false);
      localStorage.removeItem('zyonlabs-cart');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      {/* === HEADER === */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </button>
            <ScrollLink
              to="home"
              smooth={true}
              className="text-3xl font-bold flex items-center gap-0 cursor-pointer"
            >
              <div className="bg-purple-600 p-2 rounded-lg space-x-2 mr-2">
                <Rocket size={22} strokeWidth={2.5} />
              </div>
              Zyon<span className="text-purple-400">Labs</span>
            </ScrollLink>
          </div>

          <nav className="hidden md:flex gap-8">
            {['home', 'servicos', 'portfolio', 'tecnologias', 'contato'].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className={`capitalize hover:text-purple-300 cursor-pointer transition-colors`}
              >
                {item}
              </ScrollLink>
            ))}
          </nav>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors cursor-pointer"
          >
            <ShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-gray-900 p-6"
            >
              <div className="flex flex-col gap-4">
                {['home', 'servicos', 'portfolio', 'tecnologias', 'contato'].map((item) => (
                  <ScrollLink
                    key={item}
                    to={item}
                    smooth={true}
                    duration={500}
                    className={`capitalize py-2 ${
                      window.location.hash === `#${item}` ? 'text-purple-400 font-bold' : 'text-gray-300'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item === 'home' ? <Home className="inline mr-2" /> : null}
                    {item}
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* === HERO SECTION === */}
      <section id="home" className="pt-32 pb-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                Transformação Digital
              </span><br />
              Para Negócios Inovadores
            </h1>
            <p className="text-xl mb-10 text-gray-300">
              Da ideação à implementação em semanas, não meses. Soluções tecnológicas que impulsionam seu negócio.
            </p>
            <div className="flex gap-4">
              <ScrollLink
                to="servicos"
                smooth={true}
                duration={500}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2 transition duration-300 ease-in-out hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
              >
                Nossos Serviços <ChevronRight size={18} />
              </ScrollLink>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="border border-purple-400 text-purple-400 px-6 py-3 rounded-md font-bold transition-colors transition duration-300 ease-in-out hover:shadow-[1px_1px_rgba(192,132,252),2px_2px_rgba(192,132,252),3px_3px_rgba(192,132,252),4px_4px_rgba(192,132,252),5px_5px_0px_0px_rgba(192,132,252)] "
              >
                Orçamento Rápido
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:w-1/2"
          >
            <Image 
              src="/projects/saudeplus.png"
              alt="Equipe de desenvolvimento"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* === SERVIÇOS === */}
      <section id="servicos" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Nossos <span className="text-purple-400">Serviços</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluções completas para cada etapa do seu projeto digital
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(service => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ServiceCard
                  service={service}
                  isSelected={cart.some(item => item.id === service.id)}
                  onClick={() => toggleService(service)}
                  select={()=> setSelectedService(service)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === PORTFÓLIO === */}
      <section id="portfolio" className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Cases de <span className="text-purple-400">Sucesso</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Projetos reais que impulsionaram negócios como o seu
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CaseStudyCard caseStudy={caseStudy} select={()=> setSelectedCase(caseStudy)}/>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === TECNOLOGIAS === */}
      <section id="tecnologias" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Tecnologias que <span className="text-purple-400">Dominamos</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Utilizamos as melhores ferramentas do mercado para entregar excelência
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4"
              >
                <div className="h-16 w-16 relative">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTATO === */}
      <section id="contato" className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">Vamos <span className="text-purple-400">Conversar</span></h2>
            <p className="text-xl text-gray-300 mb-8">
              Pronto para levar seu projeto para o próximo nível? Entre em contato para uma consulta gratuita.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-gray-400">Email</div>
                  <div className="font-medium">contato@zyonlabs.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <div className="text-gray-400">WhatsApp</div>
                  <div className="font-medium">+244 949 221 682</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-gray-800/50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-700 rounded-md px-4 py-3"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-700 rounded-md px-4 py-3"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-700 rounded-md px-4 py-3"
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-md font-bold transition-colors mt-6"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <Rocket size={20} />
                </div>
                Zyon<span className="text-purple-400">Labs</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando ideias em realidade digital com excelência e inovação.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <FaLinkedin size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <FaGithub size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2">
                {SERVICES.slice(0, 4).map(service => (
                  <li key={service.id}>
                    <ScrollLink 
                      to="servicos" 
                      smooth={true}
                      className="text-gray-400 hover:text-purple-400 cursor-pointer"
                    >
                      {service.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <ScrollLink 
                    to="home" 
                    smooth={true}
                    className="text-gray-400 hover:text-purple-400 cursor-pointer"
                  >
                    Início
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink 
                    to="portfolio" 
                    smooth={true}
                    className="text-gray-400 hover:text-purple-400 cursor-pointer"
                  >
                    Portfólio
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink 
                    to="tecnologias" 
                    smooth={true}
                    className="text-gray-400 hover:text-purple-400 cursor-pointer"
                  >
                    Tecnologias
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink 
                    to="contato" 
                    smooth={true}
                    className="text-gray-400 hover:text-purple-400 cursor-pointer"
                  >
                    Contato
                  </ScrollLink>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Assine para receber nossas atualizações e dicas de tecnologia.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md"
                >
                  <Mail size={18} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} ZyonLabs. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400">Termos</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* === MODAIS === */}
      {/* Modal de Serviço Detalhado */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gray-800 rounded-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedService.name}</h3>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-purple-400 p-3 bg-gray-700 rounded-lg">
                    {selectedService.icon && <selectedService.icon size={24} />}
                  </div>
                  <div>
                    <p className="text-purple-400 font-bold">${selectedService.price}</p>
                    <p className="text-gray-300">{selectedService.description}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="font-bold mb-2">Tecnologias Relacionadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'Node.js', 'TypeScript'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    toggleService(selectedService);
                    setSelectedService(null);
                  }}
                  className={`w-full mt-4 py-2 rounded-md flex items-center justify-center gap-2 ${
                    cart.some(item => item.id === selectedService.id) 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {cart.some(item => item.id === selectedService.id) ? (
                    <>
                      <X size={18} /> Remover do Orçamento
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} /> Adicionar ao Orçamento
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Case Study */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gray-800 rounded-xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 relative">
                <Image
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{selectedCase.title}</h3>
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X />
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedCase.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Tecnologias Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                  <FaWhatsapp /> Conversar sobre um projeto similar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carrinho Flutuante */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed inset-y-0 right-0 w-full md:w-96 bg-gray-800 shadow-xl z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Seu Orçamento</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <X />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart size={48} className="mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">Seu carrinho está vazio</p>
                <ScrollLink
                  to="servicos"
                  smooth={true}
                  duration={500}
                  className="mt-4 text-purple-400 hover:text-purple-300 flex items-center justify-center gap-2 mx-auto"
                  onClick={() => setIsCartOpen(false)}
                >
                  Ver nossos serviços <ChevronRight size={16} />
                </ScrollLink>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b border-gray-700 pb-4">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">${formatPrice(item.price)}</p>
                      </div>
                      <button 
                        onClick={() => toggleService(item)}
                        className="text-red-400 hover:text-red-300 cursor-pointer"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${formatPrice(cart.reduce((sum, item) => sum + item.price, 0))}</span>
                  </div>
                </div>

                {!orderSent ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-4 border-b border-gray-700 pb-4">
                      <button
                        type="button"
                        onClick={() => setActiveTab('whatsapp')}
                        className={`flex-1 py-2 rounded-md ${activeTab === 'whatsapp' ? 'bg-green-600' : 'bg-gray-700'}`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FaWhatsapp size={18} /> WhatsApp
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('email')}
                        className={`flex-1 py-2 rounded-md ${activeTab === 'email' ? 'bg-blue-600' : 'bg-gray-700'}`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Mail size={18} /> E-mail
                        </div>
                      </button>
                    </div>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full bg-gray-700 rounded-md px-4 py-2"
                      />
                      <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="w-full bg-gray-700 rounded-md px-4 py-2"
                      />
                      {activeTab === 'whatsapp' && (
                        <input
                          type="tel"
                          placeholder="Seu WhatsApp"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                          className="w-full bg-gray-700 rounded-md px-4 py-2"
                        />
                      )}
                      <textarea
                        placeholder="Detalhes do seu projeto..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-gray-700 rounded-md px-4 py-2"
                        rows={3}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-md font-bold transition-colors"
                    >
                      {activeTab === 'whatsapp' ? (
                        <div className="flex items-center justify-center gap-2">
                          <FaWhatsapp size={18} /> Enviar via WhatsApp
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Mail size={18} /> Enviar por E-mail
                        </div>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-block mb-4"
                    >
                      <CheckCircle className="text-green-400" width={48} height={48} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">Pedido Enviado!</h3>
                    <p className="text-gray-400">Entraremos em contato em breve</p>
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Fixo do WhatsApp */}
      <motion.a
        href="https://wa.me/244949221682"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg z-40"
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}