// app/page.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, ShoppingCart, Check } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from 'react';

// Serviços da agência
const SERVICES = [
  { id: 1, name: 'MVP em 4 Semanas', price: 1500, description: 'Prototipagem rápida com Next.js + Node' },
  { id: 2, name: 'Landing Page Turbo', price: 800, description: 'Site institucional com SEO otimizado' },
  { id: 3, name: 'App Mobile', price: 3500, description: 'React Native + Firebase' }
];

export default function Home() {
  const [cart, setCart] = useState<typeof SERVICES>([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email'>('whatsapp');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  // Persistência do carrinho no localStorage
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

  // Envio turbo (WhatsApp ou Email)
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
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold"
        >
          Zyon<span className="text-purple-400">Labs</span>
        </motion.div>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 rounded-full bg-purple-800"
        >
          <ShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </motion.button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              SaaS, Apps e Sistemas
            </span><br />
            Sob Medida para Seu Negócio
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl mb-10 max-w-3xl mx-auto"
          >
            Do conceito à implementação em semanas, não meses
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className={`rounded-xl p-6 border-2 ${cart.some(item => item.id === service.id) ? 'border-purple-500 bg-purple-900/30' : 'border-gray-700 bg-gray-800/50'}`}
            >
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-purple-400 text-xl font-bold mb-4">${service.price}</p>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <Button 
                onClick={() => toggleService(service)}
                variant={cart.some(item => item.id === service.id) ? 'default' : 'outline'}
                className="w-full gap-2"
              >
                {cart.some(item => item.id === service.id) ? (
                  <>
                    <Check size={18} /> Selecionado
                  </>
                ) : (
                  'Adicionar'
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Carrinho Flutuante */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed inset-y-0 right-0 w-full md:w-96 bg-gray-800 shadow-xl z-50 p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Seu Orçamento</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-400">Nenhum serviço selecionado</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b border-gray-700 pb-4">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">${item.price}</p>
                      </div>
                      <button 
                        onClick={() => toggleService(item)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${cart.reduce((sum, item) => sum + item.price, 0)}</span>
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
                      <CheckCircle className="text-green-400" size={48} />
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg z-40"
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
}

// Componentes auxiliares (adicione ao seu projeto)
function Button({ children, ...props }: any) {
  return <button {...props} className={`px-4 py-2 rounded-md transition-colors ${props.className}`}>{children}</button>;
}

function CheckCircle(props: any) {
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