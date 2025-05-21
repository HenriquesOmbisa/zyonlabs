import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Entre em Contato</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Tem alguma dúvida ou precisa de mais informações? Estamos aqui para ajudar.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="text-lg font-medium">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua Saúde, 123 - Centro<br />
                  São Paulo/SP - CEP: 01000-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="text-lg font-medium">Telefone</h3>
                <p className="text-muted-foreground">
                  (11) 1234-5678<br />
                  (11) 98765-4321 (WhatsApp)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">contato@saudeplus.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="text-lg font-medium">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 19h<br />
                  Sábado: 8h às 13h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Input placeholder="Seu nome" required />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Seu email" required />
              </div>
            </div>
            <div className="space-y-2">
              <Input placeholder="Assunto" required />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Sua mensagem"
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}