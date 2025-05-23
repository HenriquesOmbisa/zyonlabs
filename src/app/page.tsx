// app/page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortifolioSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import Cart from '@/components/sections/ui/Cart';
import ModalService from '@/components/sections/ui/ModalService';
import ModalCaseStudy from '@/components/sections/ui/ModalCaseStudy';
import WhatsappButton from '@/components/sections/ui/WhatsappButton';



export default function Home() {
  return (
    <div className="min-h-screen w-screen md:w-full bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <Header />
      
      <main className='w-full'>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TechnologiesSection />
        <ContactSection />
      </main>

      <Footer />

      <Cart />
      <ModalService />
      <ModalCaseStudy />
      <WhatsappButton />
    </div>
  );
}