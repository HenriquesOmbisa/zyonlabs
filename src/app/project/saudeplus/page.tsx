'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Navbar from '@/components/saude/navbar'
import Hero from '@/components/saude/hero'
import Services from '@/components/saude/services'
import Appointment from '@/components/saude/appointment'
import Doctors from '@/components/saude/doctors'
import Testimonials from '@/components/saude/testimonials'
import Contact from '@/components/saude/contact'
import Footer from '@/components/saude/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>SaúdePlus | Clínica Médica Integrada</title>
        <meta name="description" content="Agende consultas médicas online e tenha acesso a diversos serviços de saúde" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <main className="space-y-20">
          <Hero />
          <Services />
          <Appointment />
          <Doctors />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  )
}