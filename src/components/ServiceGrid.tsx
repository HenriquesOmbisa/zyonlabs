// components/ServiceGrid.tsx
'use client';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';

export function ServiceGrid({ services, cart, toggleService }: {
  services: typeof SERVICES;
  cart: typeof SERVICES;
  toggleService: (service: typeof SERVICES[0]) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map(service => (
        <ServiceCard
          key={service.id}
          service={service}
          isSelected={cart.some(item => item.id === service.id)}
          onClick={() => toggleService(service)}
        />
      ))}
    </div>
  );
}