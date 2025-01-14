import React from 'react'
const HeroSection = React.lazy(() => import('./components/HeroSection'))
const AboutUs = React.lazy(() => import('./components/AboutUs'))
const Services = React.lazy(() => import('./components/Services'))
import WhyChooseUS from './components/WhyChooseUS'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import './App.css'


function App () {
  return (
    <div>
    
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUS />
      <ContactForm />
     
      <Footer />
    </div>
  )
}

export default App
