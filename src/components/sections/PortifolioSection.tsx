'use client';

import { CASE_STUDIES } from "@/data/static";
import { motion } from "framer-motion";
import CaseStudyCard from "./ui/CaseStudyCard";
import useCart from "@/store/useCart";

const PortifolioSection = () => {
  const { setSelectedCase } = useCart();
  return (
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
  );
}

export default PortifolioSection;