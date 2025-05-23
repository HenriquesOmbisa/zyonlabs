// src/store/useCart.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CaseStudy, Service } from "@/types";

interface Cart {
  items: Service[];
  isOpen: boolean;
  selectedService: Service | null;
  selectedCase: CaseStudy | null;
  toggleService: (service: Service) => void;
  toggleCart: () => void;
  setSelectedService: (service: Service | null) => void;
  setSelectedCase: (caseStudy: CaseStudy | null) => void;
  clearCart: () => void;
}

const useCart = create<Cart>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      selectedService: null,
      selectedCase: null,
      toggleService: (service: Service) => {
        const isInCart = get().items.some((item) => item.id === service.id);
        const updatedItems = isInCart
          ? get().items.filter((item) => item.id !== service.id)
          : [...get().items, service];

        set({ items: updatedItems });
      },
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      setSelectedService: (service) => set({ selectedService: service }),
      setSelectedCase: (caseStudy) => set({ selectedCase: caseStudy }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "zyonlabs-cart", // chave do localStorage
      partialize: (state) => ({ items: state.items }), // só persistimos os items
    }
  )
);

export default useCart;
