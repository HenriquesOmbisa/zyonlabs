'use client';
import { motion } from 'framer-motion';
import { PlayCircle, Star, Search, BookOpen, Users, Globe, CheckCircle, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { formatPrice } from '@/utils/utils';

// Tipos
type Course = {
  id: number;
  title: string;
  instructor: string;
  category: string;
  rating: number;
  students: number;
  price: number;
  image: string;
  duration: string;
};

type Testimonial = {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
};

// Dados
const courses: Course[] = [
  {
    id: 1,
    title: "React Avançado com TypeScript",
    instructor: "Carlos Silva",
    category: "Desenvolvimento",
    rating: 4.9,
    students: 1245,
    price: 4500,
    duration: "32 horas",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "UI/UX Design Moderno",
    instructor: "Ana Oliveira",
    category: "Design",
    rating: 4.8,
    students: 987,
    price: 249.90,
    duration: "28 horas",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Marketing Digital Completo",
    instructor: "Pedro Santos",
    category: "Negócios",
    rating: 4.7,
    students: 2156,
    price: 199.90,
    duration: "40 horas",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Data Science para Iniciantes",
    instructor: "Mariana Costa",
    category: "Ciência de Dados",
    rating: 4.8,
    students: 876,
    price: 349.90,
    duration: "36 horas",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João Mendes",
    role: "Desenvolvedor Front-end",
    comment: "Os cursos transformaram minha carreira. Em 6 meses consegui meu primeiro emprego como dev!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Luana Fernandes",
    role: "UX Designer",
    comment: "Didática incrível e conteúdo atualizado. Recomendo para todos na área de design!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  }
];

const categories = ["Todos", "Desenvolvimento", "Design", "Negócios", "Ciência de Dados"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCourses = selectedCategory === "Todos" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-800">EduPlus</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" className="text-slate-700 hover:text-blue-600">Cursos</Button>
            <Button variant="ghost" className="text-slate-700 hover:text-blue-600">Professores</Button>
            <Button variant="ghost" className="text-slate-700 hover:text-blue-600">Preços</Button>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Input 
                placeholder="Buscar cursos..." 
                className="pl-10 w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
            <Button variant="outline">Login</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Registrar</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforme seu futuro com educação de <span className="text-yellow-300">qualidade</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Aprenda com os melhores instrutores e acelere sua carreira com nossos cursos online.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                Explorar Cursos
              </Button>
              <Button size="lg" variant="outline" className="text-foreground border-white hover:bg-white/10">
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                alt="Estudantes aprendendo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full p-6 bg-white/90 hover:bg-white text-blue-600">
                  <PlayCircle className="h-10 w-10" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cursos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-800 mb-4"
            >
              Nossos Cursos em Destaque
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Aprenda com os melhores instrutores do mercado em diversas áreas do conhecimento.
            </motion.p>
          </div>

          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Lista de Cursos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.map(course => (
              <motion.div
                key={course.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <span className="font-bold text-blue-600"> {formatPrice(course.price)}</span>
                    </div>
                    <CardDescription className="text-slate-600">{course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                        />
                      ))}
                      <span className="text-sm text-slate-500 ml-1">({course.rating})</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>{course.students} alunos</span>
                      <span>{course.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Saiba Mais</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demonstração da Aula */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <div className="bg-black rounded-lg overflow-hidden aspect-video shadow-xl">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                    alt="Demonstração de aula"
                    fill
                    className="object-cover opacity-70"
                  />
                  <Button size="lg" className="absolute z-10 rounded-full p-6 bg-white/90 hover:bg-white text-blue-600">
                    <PlayCircle className="h-10 w-10" />
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/3"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Experimente uma aula gratuita</h2>
              <p className="text-slate-600 mb-6">
                Assista a uma demonstração do nosso curso de React Avançado e veja a qualidade do nosso conteúdo.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Acesso imediato após a inscrição</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Certificado de conclusão</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Suporte dos instrutores</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Comece Agora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">+50.000</h3>
              <p className="text-blue-200">Alunos satisfeitos</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <BookOpen className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">+200</h3>
              <p className="text-blue-200">Cursos disponíveis</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <Globe className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">+30</h3>
              <p className="text-blue-200">Países alcançados</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">O que nossos alunos dizem</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Veja depoimentos de quem já transformou sua carreira com nossos cursos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">&quot;{testimonial.comment}&quot;</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-4">Comece sua jornada hoje</h2>
                <p className="mb-6">
                  Preencha o formulário para receber informações sobre nossos cursos e promoções especiais.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-300" />
                    <span>Acesso vitalício aos cursos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-300" />
                    <span>Certificado reconhecido</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-300" />
                    <span>Suporte individualizado</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="course">Curso de Interesse</Label>
                    <select
                      id="course"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione um curso</option>
                      {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.title}</option>
                      ))}
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Receber Informações
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">EduPlus</h3>
              </div>
              <p className="text-slate-400">
                A plataforma de educação online mais completa para acelerar sua carreira.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Cursos</h4>
              <ul className="space-y-2">
                {categories.filter(cat => cat !== "Todos").map(category => (
                  <li key={category}>
                    <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                      {category}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Sobre Nós
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Depoimentos
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Blog
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                    Contato
                  </Button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
              <p className="text-slate-400 mb-4">
                Assine para receber novidades e promoções.
              </p>
              <div className="flex">
                <Input 
                  placeholder="Seu e-mail" 
                  className="rounded-r-none border-slate-700 bg-slate-800 text-white" 
                />
                <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="bg-slate-700 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ZyonLabs. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}