'use client'

import React from 'react'
import Hero from '@/app/components/home'
import Contact from '@/app/components/contact'
import About from './components/about'
import Services from './components/services'
import OfficeHours from './components/office'
import FAQ from './components/faq'


export default function Home() {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }} scroll-smooth>
      <Hero />
      <About />
      <Services />
      <OfficeHours />
      <FAQ />
      <Contact />
    </div>
  )
}


