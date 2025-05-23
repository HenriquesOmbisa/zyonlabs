// components/ui/CartButton.tsx
'use client';

import { ShoppingCart } from 'lucide-react';
import useCart from '@/store/useCart';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CartButton() {
  const { items, toggleCart } = useCart();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Evita erros de hydration
  
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleCart}
      className="relative p-2 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors cursor-pointer"
    >
      <ShoppingCart />
      {items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {items.length}
        </span>
      )}
    </motion.button>
  );
}