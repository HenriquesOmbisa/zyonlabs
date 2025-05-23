'use client';

import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import useCart from "@/store/useCart";
import { X } from "lucide-react";

const ModalCaseStudy = () => {
  const { selectedCase, setSelectedCase } = useCart();
  if (!selectedCase) return null;
  return (
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
              className="bg-gray-800 modal-hight rounded-xl max-w-2xl w-full overflow-hidden"
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
                
                <motion.a
                  href={`https://wa.me/244949221682?text=Oi, gostaria de conversar sobre o projeto: [ ${selectedCase.title} ]\n\n${selectedCase.description}\n\n`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    <FaWhatsapp /> Conversar sobre um projeto similar
                  </button>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  );
}

export default ModalCaseStudy;