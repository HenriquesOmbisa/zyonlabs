import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: 'ZyonLabs - Transformação Digital para Negócios Inovadores',
  description:
    'A ZyonLabs oferece soluções tecnológicas completas, desde o design até o desenvolvimento de sistemas, apps e plataformas personalizadas. Potencialize o seu negócio com inovação digital.',
  keywords: [
    'ZyonLabs',
    'agência digital',
    'desenvolvimento de software',
    'website Angola',
    'criar site',
    'criação de webisites',
    'criação de webisites Angola',
    'criação de presença digital',
    'criação de presença Angola',
    'criação de website intitucional',
    'criação de website intitucional Angola',
    'criar de website Angola',
    'criação de loja virtual',
    'criação de loja virtual Angola',
    'criação de loja online',
    'criação de loja online Angola',
    'criação de e-commerce',
    'criação de e-commerce Angola',
    'transformação digital',
    'desenvolvimento web',
    'aplicativos móveis',
    'soluções digitais',
    'automação empresarial',
    'consultoria em TI',
    'agência digital Angola',
    'plataformas personalizadas',
    'freelancers e startups',
    'Angola tecnologia',
    'inovação digital em África',
  ],
  authors: [{ name: 'ZyonLabs', url: 'https://zyonlabs.vercel.app' }],
  creator: 'ZyonLabs',
  publisher: 'ZyonLabs',
  metadataBase: new URL('https://zyonlabs.vercel.app'),
  alternates: {
    canonical: 'https://zyonlabs.vercel.app',
    languages: {
      'pt-AO': 'https://zyonlabs.vercel.app/pt-AO',
      'en': 'https://zyonlabs.vercel.app/en',
    },
  },
  openGraph: {
    title: 'ZyonLabs - Transformação Digital para Negócios Inovadores',
    description:
      'Descubra como a ZyonLabs pode transformar sua ideia em uma solução digital real. Web, apps, automações e mais — com foco em inovação para empresas africanas e globais.',
    url: 'https://zyonlabs.vercel.app',
    siteName: 'ZyonLabs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZyonLabs - Agência Digital em Angola',
      },
    ],
    locale: 'pt_AO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    notranslate: false,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZyonLabs - Inovação e Tecnologia em Angola',
    description:
      'Soluções digitais sob medida para negócios que desejam crescer com tecnologia. De Angola para o mundo.',
    images: ['/og-image.jpg'],
    site: '@zyonlabs',
    creator: '@zyonlabs',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  category: 'tecnologia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
