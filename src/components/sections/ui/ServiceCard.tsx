import { SERVICES } from "@/data/static";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { Info, ShoppingCart } from "lucide-react";
import { discountedPrice, formatPrice, discountRate } from "@/utils";

const ServiceCard = ({
  service,
  isSelected,
  onClick,
  select,
}: {
  service: typeof SERVICES[0];
  isSelected: boolean;
  onClick: () => void;
  select: () => void;
}) => {

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative rounded-xl p-6 border-2 shadow-md transition-all duration-300 ${
        isSelected
          ? "border-purple-500 bg-purple-900/30"
          : "border-gray-700 bg-gray-800/50"
      }`}
    >
      {/* Selo de desconto */}
      <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
        {discountRate * 100}% OFF
      </div>

      <div className="text-purple-400 mb-4">
        {service.icon && <service.icon size={28} />}
      </div>

      <h3 className="text-xl font-semibold text-white mb-1">
        {service.name}
      </h3>

      {/* Preço */}
      <div className="mb-2">
        <p className="text-sm text-gray-400 line-through">
          {formatPrice(service.price)}
        </p>
        <p className="text-lg text-green-400 font-bold">
          {formatPrice(discountedPrice(service.price))}
        </p>
      </div>

      {/* Descrição */}
      <p className="text-gray-300 text-sm mb-2">
        {service.description}
      </p>

      {/* Delivery e Benefit */}
      <div className="text-xs text-gray-400 mb-4 space-y-1">
        <p>⏱ Entrega: {service.delivery}</p>
        {service.benefits?.length > 0 && (
          <p>✔ {service.benefits[0]}</p>
        )}
      </div>

      {/* Ações */}
      <div className="flex flex-col gap-2">
        <Button onClick={onClick} className="w-full cursor-pointer">
          <ShoppingCart size={20} className="mr-2" />
          {isSelected ? "Remover do carrinho" : "Adicionar ao carrinho"}
        </Button>
        <Button
          variant="outline"
          className="w-full cursor-pointer text-foreground"
          onClick={select}
        >
          <Info size={20} className="mr-2" />
          Ver detalhes
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
