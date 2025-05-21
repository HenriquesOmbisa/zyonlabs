import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Footer() {
  const links = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '#services' },
    { name: 'Agendamento', href: '#appointment' },
    { name: 'Médicos', href: '#doctors' },
    { name: 'Contato', href: '#contact' },
    { name: 'Termos de Serviço', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
  ]

  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <HeartPulse className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SaúdePlus</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Cuidando da sua saúde com excelência e tecnologia.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Links Rápidos</h3>
            <nav className="mt-4 space-y-2">
              {links.slice(0, 4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-medium">Informações</h3>
            <nav className="mt-4 space-y-2">
              {links.slice(4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="mt-4 text-muted-foreground">
              Assine nossa newsletter para receber novidades e promoções.
            </p>
            <div className="mt-4 flex gap-2">
              <Input placeholder="Seu email" className="flex-1" />
              <Button variant="outline">Assinar</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SaúdePlus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

function HeartPulse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
}