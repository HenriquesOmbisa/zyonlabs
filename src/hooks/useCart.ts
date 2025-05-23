// hooks/useCart.ts
'use client';

import { useState, useEffect } from 'react';
import { Service } from '@/types';
import { CaseStudy } from '@/types';

export default function useCart() {
  const [cart, setCart] = useState<Service[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('zyonlabs-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('zyonlabs-cart', JSON.stringify(cart));
    }
  }, [cart]);

  const toggleService = (service: Service) => {
    setCart(prev => 
      prev.some(item => item.id === service.id) 
        ? prev.filter(item => item.id !== service.id) 
        : [...prev, service]
    );
  };

  const clearCart = () => {
      setCart([]);
      localStorage.removeItem('zyonlabs-cart');
    }

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return {
    cart,
    isCartOpen,
    selectedService,
    selectedCase,
    toggleService,
    toggleCart,
    setSelectedService,
    setSelectedCase,
    clearCart,
  };
}