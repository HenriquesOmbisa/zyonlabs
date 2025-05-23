'use client';
import useCart from "@/store/useCart";
import { discountedPrice, formatPrice } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, ShoppingCart, X } from "lucide-react";

const ModalService = () => {
  const { selectedService, setSelectedService, toggleService, items } = useCart();
  return (
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
              className="bg-gray-800 rounded-xl max-w-xl w-full p-6"
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
                {/* Ícone e descrição */}
                <div className="flex items-start gap-4">
                  <div className="text-purple-400 p-3 bg-gray-700 rounded-lg">
                    {selectedService.icon && <selectedService.icon size={24} />}
                  </div>
                  <div>
                    <div className="mb-2">
                      <p className="text-sm text-gray-400 line-through">
                        {formatPrice(selectedService.price)}
                      </p>
                      <p className="text-lg text-purple-400 font-bold">
                        {formatPrice(discountedPrice(selectedService.price))}
                      </p>
                    </div>
                    <p className="text-gray-300">{selectedService.description}</p>
                  </div>
                </div>

                {/* Delivery */}
                {selectedService.delivery && (
                  <div className="pt-2">
                    <p className="text-sm text-gray-400">
                      ⏱ Entrega estimada: <span className="text-white font-medium">{selectedService.delivery}</span>
                    </p>
                  </div>
                )}
                
                {/* Benefícios */}
                {selectedService.benefits?.length > 0 && (
                  <div>
                    <h4 className="font-bold text-white mb-2">O que está incluso:</h4>
                    <ul className="space-y-1">
                      {selectedService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Tech Stack */}
                {selectedService.techStack?.length > 0 && (
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="font-bold text-white mb-2">Tecnologias utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.techStack.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 rounded-full text-xs text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
  
                {/* Botão de ação */}
                <button
                  onClick={() => {
                    toggleService(selectedService);
                    setSelectedService(null);
                  }}
                  className={`w-full mt-4 py-2 rounded-md flex items-center justify-center gap-2 ${
                    items.some(item => item.id === selectedService.id) 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {items.some(item => item.id === selectedService.id) ? (
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
  );
}

export default ModalService;