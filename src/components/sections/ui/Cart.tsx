'use client';
import React from 'react';
import useCart from '@/store/useCart';
import useForm from '@/hooks/useForm';
import { Service } from '@/types';
import { CheckCircle, ChevronRight, Mail, ShoppingCart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { formatPrice } from '@/utils';
import { FaWhatsapp } from 'react-icons/fa';
import { discountedPrice } from '@/utils';
import { useEffect, useState } from 'react';
import { SERVICES } from '@/data/static'

const Cart = () => {
  
  const { items, isOpen, toggleCart, toggleService } = useCart();
  const { handleSubmit, formData, handleInputChange, activeTab, handleTabChange, orderSent } = useForm();
  const total: number = items.reduce((acc: number, item: Service) => acc + discountedPrice(item.price), 0);

  const getIcon = (name: string) => SERVICES.find((service)=> service.name === name  )?.icon;

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  
    if (!hydrated) return null; // Evita erros de hydration
  
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed inset-y-0 right-0 w-full md:w-96 bg-gray-800 shadow-xl z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Seu Orçamento</h2>
              <button 
                onClick={toggleCart}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <X />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart size={48} className="mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">Seu carrinho está vazio</p>
                <ScrollLink
                  to="servicos"
                  smooth={true}
                  duration={500}
                  className="mt-4 text-purple-400 hover:text-purple-300 flex items-center justify-center gap-2 mx-auto cursor-pointer"
                  onClick={toggleCart}
                >
                  Ver nossos serviços <ChevronRight size={16} />
                </ScrollLink>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {items.map((item: Service) => (
                    <div key={item.id} className="flex justify-between items-center border-b border-gray-700 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="text-purple-400 mb-0 p-2 rounded-full border bg-purple-900/30 border-purple-500">
                          {(() => {
                            const Icon = getIcon(item.name);
                            return Icon ? <Icon size={28} /> : null;
                          })()}
                        </div>
                        <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-400">${formatPrice(discountedPrice(item.price))}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleService(item)}
                        className="text-red-400 hover:text-red-300 cursor-pointer p-1 rounded-md border bg-red-900/30 border-red-500"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                  </div>
                </div>

                {!orderSent ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-4 border-b border-gray-700 pb-4">
                      <button
                        type="button"
                        onClick={() => handleTabChange('whatsapp')}
                        className={`flex-1 py-2 rounded-md ${activeTab === 'whatsapp' ? 'bg-green-600' : 'bg-gray-700'}`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FaWhatsapp size={18} /> WhatsApp
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTabChange('email')}
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
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => handleInputChange(e)}
                        required
                        className="w-full bg-gray-700 rounded-md px-4 py-2"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={(e) => handleInputChange(e)}
                        required
                        className="w-full bg-gray-700 rounded-md px-4 py-2"
                      />
                      {activeTab === 'whatsapp' && (
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Seu WhatsApp"
                          value={formData.phone}
                          onChange={(e) => handleInputChange(e)}
                          required
                          className="w-full bg-gray-700 rounded-md px-4 py-2"
                        />
                      )}
                      <textarea
                        name="message"
                        placeholder="Detalhes do seu projeto..."
                        value={formData.message}
                        onChange={(e) => handleInputChange(e)}
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
    </div>
  );
}

export default Cart;