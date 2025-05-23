'use client';

import { TECH_STACK } from "@/data/static";
import { motion } from "framer-motion";
import Image from "next/image";

const TechnologiesSection = () => {
  return (
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
  );
}

export default TechnologiesSection;