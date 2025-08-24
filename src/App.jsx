import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
