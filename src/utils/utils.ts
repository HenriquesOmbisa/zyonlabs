// Função para formatar o preço em Kz com separador de milhar
export const formatPrice = (price: number) => {
  return price.toLocaleString('pt-AO') + " Kz";
};