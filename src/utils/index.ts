// Função para formatar o preço em Kz com separador de milhar
export const formatPrice = (price: number) => {
  return price.toLocaleString('pt-AO') + " Kz";
};

export const discountRate = 0.75; // 70% de desconto
 export const discountedPrice = (price: number) => price * (1 - discountRate);