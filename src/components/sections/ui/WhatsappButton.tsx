'use client';

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <motion.a
      href="https://wa.me/244949221682"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg z-40"
    >
      <FaWhatsapp size={24} />
    </motion.a>
  );
}

export default WhatsappButton;