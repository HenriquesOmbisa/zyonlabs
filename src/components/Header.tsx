// components/sections/Header.tsx
'use client';
import { Menu, Rocket } from 'lucide-react';
import CartButton from './sections/ui/CartButton';
import { Link as ScrollLink } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
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
            {[
              {id:'home', title:'Home'}, 
              {id:'servicos', title:'Serviços'},
              {id:'portfolio', title:'Portfólio'},
              {id:'tecnologias', title:'Tecnologias'},
              {id:'contato', title:'Contato'}
              ].map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={`capitalize hover:text-purple-300 cursor-pointer transition-colors`}
              >
                {item.title}
              </ScrollLink>
            ))}
          </nav>

          <CartButton />
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
                {[
                  {id:'home', title:'Home'}, 
                  {id:'servicos', title:'Serviços'},
                  {id:'portfolio', title:'Portfólio'},
                  {id:'tecnologias', title:'Tecnologias'},
                  {id:'contato', title:'Contato'}
                  ].map((item) => (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className={`capitalize py-2 ${
                      window.location.hash === `#${item.title}` ? 'text-purple-400 font-bold' : 'text-gray-300'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
}