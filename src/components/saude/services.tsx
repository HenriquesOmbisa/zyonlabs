'use client';
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Stethoscope, HeartPulse, Brain, Bone, Pill, Syringe } from 'lucide-react'

const services = [
  {
    title: "Clínica Geral",
    description: "Consultas de rotina, check-ups e acompanhamento de saúde geral.",
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
  },
  {
    title: "Cardiologia",
    description: "Cuidados especializados para o seu coração e sistema cardiovascular.",
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
  },
  {
    title: "Neurologia",
    description: "Diagnóstico e tratamento de doenças do sistema nervoso.",
    icon: <Brain className="h-8 w-8 text-primary" />,
  },
  {
    title: "Ortopedia",
    description: "Tratamento de lesões e condições relacionadas ao sistema musculoesquelético.",
    icon: <Bone className="h-8 w-8 text-primary" />,
  },
  {
    title: "Farmácia",
    description: "Medicamentos e orientações farmacêuticas personalizadas.",
    icon: <Pill className="h-8 w-8 text-primary" />,
  },
  {
    title: "Exames Laboratoriais",
    description: "Realização de exames com tecnologia de ponta e resultados rápidos.",
    icon: <Syringe className="h-8 w-8 text-primary" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Nossos Serviços</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Oferecemos uma ampla gama de serviços médicos para atender todas as suas necessidades de saúde.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}