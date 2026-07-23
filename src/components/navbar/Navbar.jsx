import { useState, useEffect } from 'react'
import logo from '../../assets/LogoNexus.png'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [flipKey, setFlipKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setFlipKey(k => k + 1), 3000)
    return () => clearInterval(interval)
  }, [])

  const linkClass = "text-gray-200 hover:text-white text-sm font-medium transition-colors cursor-pointer"
  const mobileLinkClass = "text-gray-200 hover:text-white text-lg font-medium transition-colors cursor-pointer"

  const handleNav = (id) => {
    setIsOpen(false)
    scrollTo(id)
  }

  return (
    <>
      <div className="fixed top-4 sm:top-6 md:top-8 left-0 w-full z-50 flex justify-center px-3 sm:px-4 animate-[slide-down_0.6s_ease-out]">
        <nav className="w-full max-w-3xl bg-[#1a1a1a] px-3 sm:px-4 py-2 rounded-full flex items-center justify-between shadow-2xl border border-gray-800 gap-2 animate-[border-glow_4s_ease-in-out_infinite]">

          <div
            onClick={() => scrollTo('inicio')}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Inicio"
          >
            <img key={flipKey} src={logo} alt="NexusCode" className="w-full h-full object-contain animate-[flip-x_1s_ease-in-out]" />
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 px-4">
            <div onClick={() => scrollTo('inicio')} className={linkClass}>INICIO</div>
            <div onClick={() => scrollTo('servicios')} className={linkClass}>SERVICIOS</div>
            <div onClick={() => scrollTo('metodologia')} className={linkClass}>METODOLOGÍA</div>
            <div onClick={() => scrollTo('nosotros')} className={linkClass}>NOSOTROS</div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://wa.me/5493813905024?text=Hola%20NexusCode%2C%20quiero%20cotizar%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors shrink-0 whitespace-nowrap"
            >
              TRABAJA CON NOSOTROS
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-200 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </nav>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm md:hidden animate-[slide-down_0.4s_ease-out]">
            <nav className="bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-800 p-6 flex flex-col items-center gap-5">
              <div onClick={() => handleNav('inicio')} className={mobileLinkClass}>Inicio</div>
              <div onClick={() => handleNav('servicios')} className={mobileLinkClass}>Servicios</div>
              <div onClick={() => handleNav('metodologia')} className={mobileLinkClass}>Metodología</div>
              <div onClick={() => handleNav('nosotros')} className={mobileLinkClass}>Nosotros</div>
              <a
                href="https://wa.me/5493813905024?text=Hola%20NexusCode%2C%20quiero%20cotizar%20mi%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                Trabaja con nosotros
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
