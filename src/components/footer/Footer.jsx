import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const brandRef = useRef(null)
  const [flipKey, setFlipKey] = useState(0)

  useEffect(() => {
    const el = brandRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlipKey(k => k + 1)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <footer className="w-full bg-[#050505] relative pt-16 pb-8 border-t border-gray-800/60 overflow-hidden">
      
      {/* Resplandor decorativo en la parte superior del footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-900/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Columna 1: Marca */}
          <div className="lg:col-span-1 text-center flex items-center justify-center [perspective:300px]">
            <Link
              ref={brandRef}
              to="/"
              key={flipKey}
              className="text-3xl font-bold tracking-tighter text-white inline-block mb-4 animate-[flip-x_0.8s_ease-in-out]"
            >
              Nexus<span className="text-cyan-400">Code.</span>
            </Link>
          </div>

          {/* Columna 2: Navegación */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Inicio</Link></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Servicios</a></li>
              <li><a href="#metodologia" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Metodología</a></li>
              <li><a href="#nosotros" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Nosotros</a></li>
            </ul>
          </div>

          {/* Columna 3: Soluciones */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-6">Soluciones</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">Desarrollo Frontend</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">Arquitectura Backend</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">Sistemas de Gestión</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">Bases de Datos Escalables</span></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-5">
              <li className="flex flex-col items-center md:items-start gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-cyan-400/60 font-semibold">Ubicación</span>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Tucumán, Argentina</span>
                </div>
                <span className="text-[11px] text-gray-400 ml-6">Trabajamos remoto para todo el mundo</span>
              </li>
              <li className="flex flex-col items-center md:items-start gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-cyan-400/60 font-semibold">Email</span>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:NexusCodeSupport@gmail.com" className="hover:text-white transition-colors">NexusCodeSupport@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria y Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} NexusCode. Todos los derechos reservados.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;