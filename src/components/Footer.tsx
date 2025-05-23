'use client';

import { SERVICES } from "@/data/static";
import { Mail, Rocket } from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Rocket size={20} />
              </div>
              Zyon<span className="text-purple-400">Labs</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando ideias em realidade digital com excelência e inovação.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576630231775"
                target="_blank"
                className="text-gray-400 hover:text-purple-400"
              >
                <FaFacebook size={25} />
              </a>
              <a 
                href="https://www.linkedin.com/company/zyonlabs" 
                target="_blank"
                className="text-gray-400 hover:text-purple-400"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 4).map(service => (
                <li key={service.id}>
                  <ScrollLink 
                    to="servicos" 
                    smooth={true}
                    className="text-gray-400 hover:text-purple-400 cursor-pointer"
                  >
                    {service.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink 
                  to="home" 
                  smooth={true}
                  className="text-gray-400 hover:text-purple-400 cursor-pointer"
                >
                  Início
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="portfolio" 
                  smooth={true}
                  className="text-gray-400 hover:text-purple-400 cursor-pointer"
                >
                  Portfólio
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="tecnologias" 
                  smooth={true}
                  className="text-gray-400 hover:text-purple-400 cursor-pointer"
                >
                  Tecnologias
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="contato" 
                  smooth={true}
                  className="text-gray-400 hover:text-purple-400 cursor-pointer"
                >
                  Contato
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Assine para receber nossas atualizações e dicas de tecnologia.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} ZyonLabs. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400">Termos</a>
            <a href="#" className="text-gray-400 hover:text-purple-400">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;