import useCart from '@/store/useCart';
import { formatPrice } from '@/utils';
import { useState } from 'react';

export default function useForm() {
  const { items, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email'>('whatsapp');
  const [orderSent, setOrderSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleTabChange = (tab: 'whatsapp' | 'email') => {
    setActiveTab(tab);
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      setIsFormValid(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const servicesText = items.map(item => 
      `🛠️ *${item.name}*\n   - Preço: $${formatPrice(item.price)}\n   - Descrição: ${item.description}`
    ).join('\n\n');

    if (activeTab === 'whatsapp') {
      const message = 
        `📋 *NOVO PEDIDO ZYONLABS*\n\n` +
        `👤 *Cliente:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Telefone:* ${formData.phone}\n\n` +
        `💬 *Mensagem:* ${formData.message}\n\n` +
        `🛒 *Serviços:*\n\n${servicesText}\n\n` +
        `💵 *Total:* $${total}`;
      
      window.open(`https://wa.me/244949221682?text=${encodeURIComponent(message)}`, '_blank');
    }else {
      const subject = `Novo pedido de ${formData.name}`;
      const body = 
        `📋 *NOVO PEDIDO ZYONLABS*\n\n` +
        `👤 Cliente: ${formData.name}\n` +
        `📧 Email: ${formData.email}\n` +
        `📱 Telefone: ${formData.phone}\n\n` +
        `💬 Mensagem: ${formData.message}\n\n` +
        `🛒 Serviços:\n\n${servicesText}\n\n` +
        `💵 Total: $${total}`;

      window.open(`mailto:henriquesombisa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }

    setOrderSent(true);
    setTimeout(() => {
      clearCart();
      setOrderSent(false);
    }, 3000);
  };
  return {
    formData,
    handleInputChange,
    handleTabChange,
    activeTab,
    orderSent,
    isFormValid,
    validateForm,
    handleSubmit,
  };
}