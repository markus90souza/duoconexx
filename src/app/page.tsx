'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TopHeader } from '@/components/top-header'
import { Hero } from '@/layouts/hero'
import { OurClients } from '@/layouts/our-clients'

import { AboutUs } from '@/layouts/about-us'
import { Plans } from '@/layouts/plans'
import { CallToAction } from '@/layouts/call-to-action'
import { Faqs } from '@/layouts/Faqs'
import { ContactUS } from '@/layouts/contact-us'
import { Features } from '@/layouts/Features'

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <TopHeader />
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <OurClients />
          {/* <FeaturesForClients /> */}
          <CallToAction />
          {/* Feature section with screenshot */}
          <Features />
          {/* Planos e Preços */}
          <Plans />

          {/* Perguntas e Respostas */}
          <Faqs />

          {/* Contato */}
          <ContactUS />

          <Footer />
        </main>
      </div>
    </div>
  )
}
