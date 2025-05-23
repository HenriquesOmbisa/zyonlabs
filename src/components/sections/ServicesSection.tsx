'use client'
import { SERVICES } from "@/data/static";
import { motion } from "framer-motion";
import ServiceCard from "./ui/ServiceCard";
import useCart from "@/store/useCart";

const ServicesSection = () => {
  const { items, toggleService, setSelectedService } = useCart();
  return (
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
          <p className="mt-2 text-sm text-gray-400 text-center italic">
            * Os preços apresentados são valores base promocionais e podem variar conforme o escopo e a complexidade do projeto.
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
                isSelected={items.some(item => item.id === service.id)}
                onClick={() => toggleService(service)}
                select={()=> setSelectedService(service)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;