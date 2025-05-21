import { SERVICES } from "@/data/static";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Info, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/utils/utils";

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
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`rounded-xl p-6 border-2 shadow-md transition-all duration-300 ${
      isSelected
        ? "border-purple-500 bg-purple-900/30"
        : "border-gray-700 bg-gray-800/50"
    }`}
  >
    <div className="text-purple-400 mb-4">
      {service.icon && <service.icon size={28} />}
    </div>

    <h3 className="text-xl font-semibold text-white mb-2">
      {service.name}
    </h3>

    <p className="text-lg text-green-400 font-bold mb-4">
      {formatPrice(service.price)}
    </p>

    <p className="text-gray-300 text-sm">
      {service.description}
    </p>
    <div className="flex-items-center">
      <Button onClick={onClick} className="mt-4 w-full cursor-pointer">
        <ShoppingCart size={20} className="mr-2" />
        {isSelected ? 'Remover do carrinho' :'Adicionar ao carrinho'}
      </Button>
      <Button variant={"outline"} className="mt-4 w-full cursor-pointer text-foreground" onClick={select}>
        <Info size={20} className="mr-2" />
        Ver detalhes
      </Button>
    </div>
  </motion.div>
);

export default ServiceCard;
