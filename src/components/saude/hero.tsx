import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container grid min-h-[80vh] items-center gap-8 px-4 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Cuidando da sua saúde com <span className="text-primary">excelência</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Agende consultas online, tenha acesso a diversos especialistas e cuide 
            da sua saúde de forma simples e eficiente.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="text-lg" asChild>
              <a href="#appointment">Agendar Consulta</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="#services">Nossos Serviços</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden aspect-square md:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt="Médica sorrindo"
            fill
            className="rounded-lg object-cover shadow-xl"
            priority
          />
        </motion.div>
      </div>

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
    </section>
  )
}