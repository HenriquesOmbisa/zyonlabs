import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarDays, Clock, User, Stethoscope } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Appointment() {
  return (
    <section id="appointment" className="bg-secondary/5 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Agende sua Consulta</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Preencha o formulário abaixo para agendar sua consulta com nossos especialistas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle>Informações do Agendamento</CardTitle>
              <CardDescription>
                Preencha todos os campos para garantir o melhor atendimento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium">
                      <User className="h-4 w-4" />
                      Nome Completo
                    </label>
                    <Input placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium">
                      <User className="h-4 w-4" />
                      BI
                    </label>
                    <Input placeholder="00xxxxxxxLAxxx" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium">
                      <CalendarDays className="h-4 w-4" />
                      Data da Consulta
                    </label>
                    <Input type="date" required />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium">
                      <Clock className="h-4 w-4" />
                      Horário Preferencial
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Manhã (8h - 12h)</SelectItem>
                        <SelectItem value="afternoon">Tarde (13h - 17h)</SelectItem>
                        <SelectItem value="evening">Noite (18h - 21h)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <Stethoscope className="h-4 w-4" />
                    Especialidade Médica
                  </label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma especialidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Clínica Geral</SelectItem>
                      <SelectItem value="cardiology">Cardiologia</SelectItem>
                      <SelectItem value="neurology">Neurologia</SelectItem>
                      <SelectItem value="orthopedics">Ortopedia</SelectItem>
                      <SelectItem value="pediatrics">Pediatria</SelectItem>
                      <SelectItem value="dermatology">Dermatologia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <Stethoscope className="h-4 w-4" />
                    Observações
                  </label>
                  <Textarea
                    placeholder="Descreva brevemente o motivo da consulta ou outras observações importantes..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="mt-4">
                  Confirmar Agendamento
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}