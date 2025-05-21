'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Icons (Lucide)
import { ShoppingCart, Search, Menu, X, Instagram, Twitter, Facebook, CreditCard, Barcode, QrCode, NotebookText } from "lucide-react";

// Tipos
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  isBestSeller?: boolean;
};

type CartItem = Product & {
  quantity: number;
};

// Dados das categorias (usado no menu)
const categories = [
  "Todos",
  "Cadernos",
  "Canetas",
  "Mochilas",
  "Organizadores",
  "Papelaria"
];

// Schema de validação com Zod
const formSchema = z.object({
  nome: z.string().min(2, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  cep: z.string().length(9, "CEP inválido"),
  endereco: z.string().min(5, "Endereço incompleto"),
  numero: z.string().min(1, "Número obrigatório"),
  complemento: z.string().optional(),
  cidade: z.string().min(2, "Cidade inválida"),
  estado: z.string().length(2, "UF inválida"),
  pagamento: z.enum(["credito", "pix", "boleto"], {
    required_error: "Selecione um método de pagamento",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Mock do carrinho (substitua pelos dados reais se necessário)
  const cart: CartItem[] = [
    {
      id: 1,
      name: "Caderno Premium 200 folhas",
      price: 34.90,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Cadernos",
      rating: 4.7,
      description: "Capa dura, folhas resistentes e sem transpasse.",
      isBestSeller: true,
      quantity: 2
    },
    {
      id: 2,
      name: "Caneta Técnica 0.5mm",
      price: 12.90,
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Canetas",
      rating: 4.5,
      description: "Precisão para desenhos técnicos e escrita.",
      quantity: 1
    }
  ];

  // Calcular totais
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const frete = subtotal > 100 ? 0 : 15.90;
  const total = subtotal + frete;

  // Formulário com React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pagamento: "credito",
    },
  });

  // Submissão do formulário
  const onSubmit = (data: FormData) => {
    console.log("Dados do pedido:", { ...data, cart, total });
    router.push("/peoject/e-commerce/sucesso"); // Redirecionar para página de sucesso
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header (mesmo da home) */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            <div className="flex items-center gap-2">
              <NotebookText className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold">PaperHub</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-2">
            {categories.map(category => (
              <Button 
                key={category} 
                variant="ghost"
                onClick={() => router.push('/project/e-commerce')}
              >
                {category}
              </Button>
            ))}
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Input 
                placeholder="Buscar produtos..." 
                className="pl-10 bg-slate-800 border-slate-700 text-white"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>

            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 px-2 py-1">
                      {cart.reduce((acc, item) => acc + item.quantity, 0)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Carrinho ({cart.reduce((total, item) => total + item.quantity, 0)})
                  </SheetTitle>
                </SheetHeader>

                <div className="py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-slate-500">Seu carrinho está vazio</p>
                      <Button 
                        onClick={() => setIsCartOpen(false)} 
                        className="mt-4"
                      >
                        Continuar Comprando
                      </Button>
                    </div>
                  ) : (
                    <>
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4 p-3 border rounded-lg">
                          <div className="relative h-16 w-16 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-slate-600">R$ {item.price.toFixed(2)}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="w-6 text-center">{item.quantity}</span>
                            </div>
                          </div>
                          <div className="font-medium">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}

                      <Separator className="my-4" />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frete:</span>
                          <span className="font-medium">{frete === 0 ? "Grátis" : `R$ ${frete.toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-2">
                          <span>Total:</span>
                          <span>R$ {total.toFixed(2)}</span>
                        </div>
                      </div>

                      <Button 
                        className="w-full mt-6"
                        onClick={() => setIsCartOpen(false)}
                      >
                        Finalizar Compra
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800 p-4"
          >
            <div className="relative mb-4">
              <Input 
                placeholder="Buscar produtos..." 
                className="pl-10 bg-slate-700 border-slate-600 text-white"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
            {categories.map(category => (
              <Button 
                key={category} 
                variant="ghost" 
                className="w-full justify-start mb-1"
                onClick={() => {
                  router.push('/');
                  setIsMenuOpen(false);
                }}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        )}
      </header>

      {/* Conteúdo do Checkout */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="link" onClick={() => router.back()} className="p-0 text-blue-600">
            ← Voltar ao carrinho
          </Button>
          <h1 className="text-3xl font-bold">Finalizar Compra</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Entrega e Pagamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Informações de Entrega
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome"
                      {...register("nome")}
                    />
                    {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 col-span-1">
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                      id="cep"
                      placeholder="00000-000"
                      {...register("cep")}
                    />
                    {errors.cep && <p className="text-red-500 text-sm">{errors.cep.message}</p>}
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="endereco">Endereço</Label>
                    <Input
                      id="endereco"
                      placeholder="Rua, Avenida, etc."
                      {...register("endereco")}
                    />
                    {errors.endereco && <p className="text-red-500 text-sm">{errors.endereco.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 col-span-1">
                    <Label htmlFor="numero">Número</Label>
                    <Input
                      id="numero"
                      placeholder="123"
                      {...register("numero")}
                    />
                    {errors.numero && <p className="text-red-500 text-sm">{errors.numero.message}</p>}
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="complemento">Complemento (Opcional)</Label>
                    <Input
                      id="complemento"
                      placeholder="Apto, Bloco, etc."
                      {...register("complemento")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input
                      id="cidade"
                      placeholder="Sua cidade"
                      {...register("cidade")}
                    />
                    {errors.cidade && <p className="text-red-500 text-sm">{errors.cidade.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="estado">Estado (UF)</Label>
                    <Input
                      id="estado"
                      placeholder="SP"
                      maxLength={2}
                      {...register("estado")}
                    />
                    {errors.estado && <p className="text-red-500 text-sm">{errors.estado.message}</p>}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Métodos de Pagamento */}
                <div className="space-y-4">
                  <CardTitle>Método de Pagamento</CardTitle>
                  <RadioGroup defaultValue="credito" className="grid grid-cols-3 gap-4">
                    <div>
                      <RadioGroupItem value="credito" id="credito" className="peer sr-only" {...register("pagamento")} />
                      <Label
                        htmlFor="credito"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-slate-200 bg-white p-4 hover:bg-slate-50 hover:text-slate-900 peer-data-[state=checked]:border-blue-600"
                      >
                        <CreditCard className="h-6 w-6 mb-2" />
                        <span>Cartão</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="pix" id="pix" className="peer sr-only" {...register("pagamento")} />
                      <Label
                        htmlFor="pix"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-slate-200 bg-white p-4 hover:bg-slate-50 hover:text-slate-900 peer-data-[state=checked]:border-blue-600"
                      >
                        <QrCode className="h-6 w-6 mb-2" />
                        <span>PIX</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="boleto" id="boleto" className="peer sr-only" {...register("pagamento")} />
                      <Label
                        htmlFor="boleto"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-slate-200 bg-white p-4 hover:bg-slate-50 hover:text-slate-900 peer-data-[state=checked]:border-blue-600"
                      >
                        <Barcode className="h-6 w-6 mb-2" />
                        <span>Boleto</span>
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.pagamento && <p className="text-red-500 text-sm">{errors.pagamento.message}</p>}
                </div>

                <Button type="submit" className="w-full py-6 text-lg">
                  Confirmar Pedido
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Resumo do Pedido */}
          <Card className="h-fit sticky top-4">
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-slate-600">
                        {item.quantity} x R$ {item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="font-medium">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete:</span>
                    <span>{frete === 0 ? "Grátis" : `R$ ${frete.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>Total:</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer (mesmo da home) */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <NotebookText className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-bold">PaperHub</h3>
            </div>
            <p className="text-slate-400">
              Materiais premium para quem exige qualidade e estilo.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Sobre Nós', 'Blog', 'FAQ', 'Contato'].map(item => (
                <li key={item}>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Categorias</h4>
            <ul className="space-y-2">
              {categories.filter(cat => cat !== "Todos").map(category => (
                <li key={category}>
                  <Button 
                    variant="link" 
                    className="text-slate-400 hover:text-white p-0 h-auto"
                    onClick={() => router.push('/')}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <Button key={i} variant="outline" size="icon" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
            <p className="text-slate-400 mt-6">
              contato@paperhub.com.br
              <br />
              (11) 98765-4321
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 mt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} PaperHub. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}