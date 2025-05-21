import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Joana Pereira",
    role: "Paciente",
    content: "Excelente atendimento! A equipe é muito atenciosa e o Dr. Carlos resolveu meu problema rapidamente.",
    rating: 5,
  },
  {
    name: "Marcos Antônio",
    role: "Paciente",
    content: "Facilidade no agendamento, ambiente limpo e organizado, e os médicos são muito competentes. Recomendo!",
    rating: 5,
  },
  {
    name: "Luísa Fernandes",
    role: "Paciente",
    content: "Minha família toda é atendida aqui há anos. Nunca tivemos motivos para reclamar. Profissionais excelentes!",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">O que dizem sobre nós</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Veja a opinião de quem já utilizou nossos serviços.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">&quot;{testimonial.content}&quot;</p>
                    <footer className="text-sm font-medium">
                      {testimonial.name} - {testimonial.role}
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}