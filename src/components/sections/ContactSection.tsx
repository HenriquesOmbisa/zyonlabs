'use client';

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import useForm from "@/hooks/useForm";

const ContactSection = () => {
  const { formData, handleInputChange, handleSubmit } = useForm();
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="contato" 
      className="w-full py-20 container mx-auto px-6"
    >
        <div className="w-full flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2" >
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
                  <div className="font-medium">henriques@gmail.com</div>
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
          </div>
          
          <div className="md:w-1/2 bg-gray-800/50 p-8 rounded-xl" >
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange(e)}
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
                  onChange={(e) => handleInputChange(e)}
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
                  onChange={(e) => handleInputChange(e)}
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
          </div>
        </div>
      </motion.section>
  );
}

export default ContactSection;