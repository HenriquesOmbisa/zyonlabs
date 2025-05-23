'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

// Icons (Lucide)
import { ShoppingCart, Search, Star, ChevronRight, ChevronLeft, Menu, X, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formatPrice } from '@/utils'

// Types
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

// Data
const categories = [
  "Todos",
  "Cadernos",
  "Canetas",
  "Mochilas",
  "Organizadores",
  "Papelaria"
];

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Caderno Premium 200 folhas",
    price: 3490,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Cadernos",
    rating: 4.7,
    description: "Capa dura, folhas resistentes e sem transpasse.",
    isBestSeller: true
  },
  {
    id: 2,
    name: "Caneta Técnica 0.5mm",
    price: 290,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Canetas",
    rating: 4.5,
    description: "Precisão para desenhos técnicos e escrita.",
    isBestSeller: true
  },
  {
    id: 3,
    name: "Mochila Antirroubo 15.6”",
    price: 9990,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Mochilas",
    rating: 4.8,
    description: "Compartimento acolchoado para notebook."
  },
  {
    id: 4,
    name: "Kit Organizador de Mesa",
    price: 5990,
    image: "https://images.unsplash.com/photo-1608500218807-37025970ac1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Organizadores",
    rating: 4.3,
    description: "5 peças em acrílico transparente."
  },
  {
    id: 5,
    name: "Post-it Colorido 10x10cm",
    price: 490,
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Papelaria",
    rating: 4.2,
    description: "Pacote com 100 folhas adesivas."
  },
  {
    id: 6,
    name: "Estojo Executivo",
    price: 590,
    image: "https://images.unsplash.com/photo-1584977900111-6df8c2f8bbb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Organizadores",
    rating: 4.0,
    description: "Com divisórias para canetas e clipes."
  }
];

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    title: "Coleção Profissional 2024",
    subtitle: "Materiais que inspiram criatividade"
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    title: "Volta às Aulas com 30% OFF",
    subtitle: "Tudo para seu ano letivo"
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    title: "Organize Seu Espaço",
    subtitle: "Produtos para aumentar sua produtividade"
  }
];

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const router = useRouter();

  // Filter products
  const filteredProducts = featuredProducts.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart functions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
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
              <svg className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 12h18M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h1 className="text-2xl font-bold">PaperHub</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-2">
            {categories.map(category => (
              <Button 
                key={category} 
                variant="ghost"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-slate-800" : ""}
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                    Carrinho ({cart.reduce((total, item) => total + item.quantity, 0)}
                  </SheetTitle>
                </SheetHeader>

                <div className="py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-slate-500">Seu carrinho está vazio</p>
                      <Button 
                        onClick={() => {
                          setIsCartOpen(false)
                        }} 
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
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-6 w-6"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span className="w-6 text-center">{item.quantity}</span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-6 w-6"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}

                      <Separator className="my-4" />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span className="font-medium">R$ {cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frete:</span>
                          <span className="font-medium">Grátis</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-2">
                          <span>Total:</span>
                          <span>R$ {cartTotal.toFixed(2)}</span>
                        </div>
                      </div>

                      <Button className="w-full mt-6" onClick={()=> router.push("/project/paperhub/checkout")}>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
            {categories.map(category => (
              <Button 
                key={category} 
                variant="ghost" 
                className="w-full justify-start mb-1"
                onClick={() => {
                  setSelectedCategory(category);
                  setIsMenuOpen(false);
                }}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        )}
      </header>

      {/* Hero Slider */}
      <section className="relative h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].img}
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="text-center px-4 max-w-3xl"
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-xl text-slate-100 mb-6">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <Button size="lg" className="mt-2">
                  Explorar Coleção
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <button 
          onClick={() => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition-all ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossas Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.filter(cat => cat !== "Todos").map(category => (
            <motion.div
              key={category}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`p-6 rounded-lg cursor-pointer transition-colors ${
                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white shadow-md hover:bg-slate-100'
              }`}
            >
              <div className="text-center">
                <div className="mx-auto mb-3 flex items-center justify-center h-12 w-12 rounded-full bg-white/10">
                  {category === "Cadernos" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>}
                  {category === "Canetas" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                  </svg>}
                  {category === "Mochilas" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>}
                  {category === "Organizadores" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                  </svg>}
                  {category === "Papelaria" && <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>}
                </div>
                <h3 className="font-medium">{category}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            {selectedCategory === "Todos" ? "Produtos em Destaque" : selectedCategory}
          </h2>
          {searchTerm && (
            <p className="text-slate-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </p>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg mb-4">Nenhum produto encontrado.</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedCategory("Todos");
                setSearchTerm("");
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.isBestSeller && (
                      <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-700">
                        Mais Vendido
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-slate-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                        />
                      ))}
                      <span className="text-sm text-slate-500 ml-1">({product.rating})</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                      {formatPrice(product.price)}
                    </span>
                    <Button 
                      size="sm"
                      onClick={() => addToCart(product)}
                    >
                      Adicionar
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                role: "Designer",
                comment: "Os cadernos são incríveis! Uso para todos os meus projetos.",
                rating: 5
              },
              {
                name: "Carlos Mendes",
                role: "Estudante",
                comment: "A mochila é resistente e cabe tudo que preciso para a faculdade.",
                rating: 4
              },
              {
                name: "Juliana Costa",
                role: "Professora",
                comment: "Material de qualidade que dura o ano todo. Recomendo!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">&quot;{testimonial.comment}&quot;</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-300 mr-3"></div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Receba Nossas Ofertas</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Inscreva-se para receber descontos exclusivos e novidades em primeira mão.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input 
              placeholder="Seu melhor email" 
              className="rounded-r-none border-blue-500 bg-blue-500 text-white placeholder-blue-200 focus:border-white"
            />
            <Button className="rounded-l-none bg-blue-700 hover:bg-blue-800">
              <Mail className="h-4 w-4 mr-2" />
              Assinar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 12h18M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5" strokeWidth="2" strokeLinecap="round"/>
              </svg>
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
                    onClick={() => setSelectedCategory(category)}
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
              contato@paperhub.co.ao
              <br />
              (+244) 987-665-4321
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 mt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} ZyonLabs. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}