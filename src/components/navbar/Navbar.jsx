import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = "text-gray-300 hover:text-white text-sm font-medium transition-colors"
  const mobileLinkClass = "text-gray-300 hover:text-white text-lg font-medium transition-colors"

  return (
    <>
      <div className="fixed top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-3 sm:px-4">
        <nav className="bg-[#1a1a1a] px-3 sm:px-4 py-2 rounded-full flex items-center justify-between shadow-2xl border border-gray-800 gap-2">

          <Link
            to="/"
            className="bg-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105"
            aria-label="Inicio"
          >
            <span className="text-black font-bold text-xs sm:text-sm leading-none">NC</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 px-4">
            <Link to="/" className={linkClass}>Inicio</Link>
            <Link to="/about" className={linkClass}>Servicios</Link>
            <Link to="/playground" className={linkClass}>Proyectos</Link>
            <Link to="/resource" className={linkClass}>Nosotros</Link>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href="mailto:NexusCodeSupport@gmail.com"
              className="bg-white text-black px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors shrink-0 whitespace-nowrap"
            >
              NexusCodeSupport@gmail.com
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
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
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm md:hidden">
            <nav className="bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-800 p-6 flex flex-col items-center gap-5">
              <Link to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Inicio</Link>
              <Link to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Servicios</Link>
              <Link to="/playground" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Proyectos</Link>
              <Link to="/resource" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Nosotros</Link>
              <a
                href="mailto:NexusCodeSupport@gmail.com"
                className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                NexusCodeSupport@gmail.com
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
