import Navbar from '../components/navbar/Navbar'
import DiscountBanner from '../components/discountBanner/DiscountBanner'
import Hero from '../components/hero/Hero'
import Service from '../components/services/Service'
import ProjectsSection from '../components/projectsSection/ProjectsSection'
import ProcessSection from '../components/processSection/ProcessSection'
import AboutSection from '../components/aboutSection/AboutSection'
import Footer from '../components/footer/Footer'
import WhatsAppButton from '../components/whatsappButton/WhatsAppButton'

const Home = ({ loadingComplete }) => {
  return (
    <div className="overflow-x-hidden">
        <DiscountBanner/>
        <Navbar/>
        <Hero loadingComplete={loadingComplete}/>
        <Service/>
        <ProjectsSection/>
        <ProcessSection/>
        <AboutSection/>
        <Footer/>
        <WhatsAppButton/>
    </div>
  )
}
export default Home
