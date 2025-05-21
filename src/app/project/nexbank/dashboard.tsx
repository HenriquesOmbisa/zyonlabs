'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';

const transactions = [
  {
    id: '1',
    description: 'Depósito Salário',
    amount: 4500.0,
    date: '2023-05-15',
    type: 'credit',
    category: 'Salário',
  },
  {
    id: '2',
    description: 'Supermercado',
    amount: -350.75,
    date: '2023-05-14',
    type: 'debit',
    category: 'Alimentação',
  },
  {
    id: '3',
    description: 'Transferência para João',
    amount: -200.0,
    date: '2023-05-12',
    type: 'debit',
    category: 'Transferência',
  },
  {
    id: '4',
    description: 'Dividendos Investimentos',
    amount: 120.5,
    date: '2023-05-10',
    type: 'credit',
    category: 'Investimentos',
  },
];

const cards = [
  {
    id: '1',
    number: '•••• •••• •••• 4242',
    type: 'VISA',
    name: 'Cartão Principal',
    expiry: '05/25',
    balance: 12500.42,
    color: 'bg-gradient-to-r from-indigo-500 to-purple-600',
  },
  {
    id: '2',
    number: '•••• •••• •••• 5252',
    type: 'MASTERCARD',
    name: 'Cartão Internacional',
    expiry: '08/26',
    balance: 3200.0,
    color: 'bg-gradient-to-r from-rose-500 to-pink-600',
  },
  {
    id: '3',
    number: '•••• •••• •••• 8787',
    type: 'AMEX',
    name: 'Cartão Empresarial',
    expiry: '12/24',
    balance: 8750.0,
    color: 'bg-gradient-to-r from-amber-500 to-orange-600',
  },
];

const investments = [
  {
    id: '1',
    name: 'Fundo Ações Global',
    value: 12500.42,
    yield: 8.5,
    risk: 'Alto',
    category: 'Ações',
  },
  {
    id: '2',
    name: 'Tesouro Direto IPCA+',
    value: 8750.0,
    yield: 5.2,
    risk: 'Baixo',
    category: 'Renda Fixa',
  },
  {
    id: '3',
    name: 'Fundo Imobiliário',
    value: 6200.0,
    yield: 6.8,
    risk: 'Médio',
    category: 'FIIS',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Icons.logo className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-indigo-600">NexBank</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-6"
          >
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              Início
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              Produtos
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              Investimentos
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              Ajuda
            </button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </motion.nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.div variants={fadeIn} className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Olá, Carlos Eduardo</h1>
              <p className="text-gray-600">Bem-vindo de volta ao seu painel NexBank</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Icons.plus className="mr-2 h-4 w-4" />
                Nova Transação
              </Button>
              <Button>
                <Icons.download className="mr-2 h-4 w-4" />
                Exportar Extrato
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Saldo Disponível
                  </CardTitle>
                  <Icons.wallet className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 24.852,42</div>
                  <p className="text-xs text-gray-500">+12% desde o último mês</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Receitas
                  </CardTitle>
                  <Icons.arrowUp className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 5.320,00</div>
                  <p className="text-xs text-gray-500">+8% desde o último mês</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Despesas
                  </CardTitle>
                  <Icons.arrowDown className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 2.150,75</div>
                  <p className="text-xs text-gray-500">-3% desde o último mês</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Investimentos
                  </CardTitle>
                  <Icons.trendingUp className="h-4 w-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 27.450,42</div>
                  <p className="text-xs text-gray-500">+5.2% este ano</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cards Carousel */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Seus Cartões</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {cards.map((card) => (
                    <CarouselItem key={card.id} className="md:basis-1/2">
                      <div
                        className={`${card.color} rounded-xl p-6 text-white shadow-lg h-48 flex flex-col justify-between`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm opacity-80">Saldo Disponível</p>
                            <p className="text-2xl font-bold">
                              {card.balance.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                              })}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm opacity-80">{card.type}</p>
                            <p className="text-lg font-medium">{card.name}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-lg tracking-wider mb-1">{card.number}</p>
                          <div className="flex justify-between">
                            <p className="text-sm opacity-80">VALIDADE</p>
                            <p className="text-sm opacity-80">CVV</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{card.expiry}</p>
                            <p>•••</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            </motion.section>

            {/* Transactions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Últimas Transações</h2>
                <Button variant="ghost" className="text-indigo-600">
                  Ver todas
                </Button>
              </div>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Descrição</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead className="text-right">Valor</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">
                            {transaction.description}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                transaction.type === 'credit' ? 'default' : 'destructive'
                              }
                            >
                              {transaction.category}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(transaction.date).toLocaleDateString('pt-BR')}
                          </TableCell>
                          <TableCell
                            className={`text-right font-medium ${
                              transaction.type === 'credit'
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}
                          >
                            {transaction.amount.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Ações Rápidas</h2>
              <Card>
                <CardContent className="p-6 grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24 flex flex-col">
                    <Icons.transfer className="h-6 w-6 mb-2" />
                    <span>Transferência</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col">
                    <Icons.payment className="h-6 w-6 mb-2" />
                    <span>Pagar</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col">
                    <Icons.deposit className="h-6 w-6 mb-2" />
                    <span>Depósito</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col">
                    <Icons.investment className="h-6 w-6 mb-2" />
                    <span>Investir</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.section>

            {/* Investments */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Seus Investimentos</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Carteira de Investimentos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {investments.map((investment) => (
                    <div key={investment.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{investment.name}</h3>
                        <Badge
                          variant={
                            investment.risk === 'Alto'
                              ? 'destructive'
                              : investment.risk === 'Médio'
                              ? 'warning'
                              : 'default'
                          }
                        >
                          {investment.risk}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>
                          {investment.value.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </span>
                        <span className="text-green-600">+{investment.yield}%</span>
                      </div>
                      <Progress value={investment.yield} className="h-2" />
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4">
                    Ver detalhes
                  </Button>
                </CardContent>
              </Card>
            </motion.section>

            {/* Financial Goals */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Metas Financeiras</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Suas Metas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Viagem Internacional</span>
                        <span className="text-sm text-gray-600">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        R$ 6.500 de R$ 10.000
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Reserva de Emergência</span>
                        <span className="text-sm text-gray-600">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        R$ 8.400 de R$ 20.000
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 text-indigo-600">
                    Adicionar nova meta
                  </Button>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>

        {/* Promo Banner */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">
                  Descubra nosso cartão Platinum
                </h2>
                <p className="opacity-90 max-w-lg">
                  Taxas zero, cashback em todas as compras e benefícios exclusivos para
                  você.
                </p>
              </div>
              <Button variant="secondary" className="whitespace-nowrap">
                Solicitar agora
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icons.logo className="h-6 w-6 text-indigo-600" />
                <span className="text-lg font-bold text-indigo-600">NexBank</span>
              </div>
              <p className="text-gray-600 text-sm">
                A nova geração em serviços bancários. Simplificamos sua vida financeira.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Conta Corrente</li>
                <li>Cartões</li>
                <li>Investimentos</li>
                <li>Empréstimos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Institucional</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Imprensa</li>
                <li>Sustentabilidade</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ajuda</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Central de Ajuda</li>
                <li>Segurança</li>
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2023 NexBank. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <Icons.facebook className="h-5 w-5 text-gray-500" />
              <Icons.twitter className="h-5 w-5 text-gray-500" />
              <Icons.instagram className="h-5 w-5 text-gray-500" />
              <Icons.linkedin className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}