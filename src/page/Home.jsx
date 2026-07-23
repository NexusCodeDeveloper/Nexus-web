import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Service from '../components/services/Service'
import ProcessSection from '../components/processSection/ProcessSection'
import AboutSection from '../components/aboutSection/AboutSection'
import Footer from '../components/footer/Footer'
import WhatsAppButton from '../components/whatsappButton/WhatsAppButton'

const Home = ({ loadingComplete }) => {
  return (
    <div className="overflow-x-hidden">
        <Navbar/>
        <Hero loadingComplete={loadingComplete}/>
        <Service/>
        <ProcessSection/>
        <AboutSection/>
        <Footer/>
        <WhatsAppButton/>
    </div>
  )
}
export default Home
