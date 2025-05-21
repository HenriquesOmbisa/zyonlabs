import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhoneMockupProps {
  imageUrl: string;
  className?: string;
}

export function PhoneMockup({ imageUrl, className }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="relative h-[600px] w-[300px]">
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[40px] border-[12px] border-blue-900/90 bg-blue-900/20 backdrop-blur-sm shadow-2xl"></div>
        
        {/* Screen */}
        <div className="absolute inset-[12px] rounded-[28px] overflow-hidden">
          <Image
            src={imageUrl}
            alt="App screenshot"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent"></div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 h-6 w-32 bg-blue-900/90 rounded-b-xl z-10"></div>
      </div>
      
      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -bottom-8 -right-8 hidden lg:block"
      >
        <div className="relative w-64 h-40 bg-gradient-to-br from-gold-500/90 to-gold-600/90 rounded-2xl shadow-xl p-4 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-gold-400/20 rounded-full filter blur-xl"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <span className="text-blue-950 font-bold">HERITAGE</span>
              <span className="text-blue-950/80 text-sm">•••• 4567</span>
            </div>
            <div className="text-blue-950">
              <p className="text-sm mb-1">Roberto Santos</p>
              <p className="text-xs opacity-80">Válido até 12/28</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}