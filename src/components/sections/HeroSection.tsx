// components/sections/HeroSection.tsx
'use client';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
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
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2"
            >
              Nossos Serviços <ChevronRight size={18} />
            </ScrollLink>
            <ScrollLink
              to="contato"
              smooth={true}
              className="border border-purple-400 text-purple-400 px-6 py-3 rounded-md font-bold transition-colors"
            >
              Orçamento Rápido
            </ScrollLink>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <Image 
            src="/projects/saudeplus.png"
            alt="Equipe de desenvolvimento"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}