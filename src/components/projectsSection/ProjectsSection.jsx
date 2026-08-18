import AnimateOnView from '../AnimateOnView'

const ProjectsSection = () => {
  // TODO: completar con tus proyectos reales (nombre, descripción, badge y link)
  const projects = [
    {
      id: 1,
      name: "Bossa Nova - Indumentaria",
      description: "Sistema de stock diseñado para optimizar la gestión diaria del negocio: control de inventario, cierres de caja por turno, emisión de tickets y administración de usuarios con permisos personalizados.",
      badge: "Sistema de Stock",
      location: "Concepción - Tucumán",
      link: "#"
    },
    {
      id: 2,
      name: "Molca construtora y desarrolladora",
      description: "Página institucional que posiciona a la constructora y desarrolladora, mostrando su catálogo de propiedades en venta para que cada cliente encuentre su próximo hogar",
      badge: "Web institucional",
      location: "Salta",
      link: "https://molca.netlify.app/"
    },
    {
      id: 3,
      name: "Trebol - Carrocería",
      description: "Página que muestra el negocio de acoplados con su catálogo de productos, pensada para que los clientes vean la oferta y se contacten fácilmente.",
      badge: "Web Personalizada",
      location: "Salta - San Lorenzo",
      link: "#"
    },
    {
      id: 4,
      name: "Nexus Gym",
      description: "Plataforma integral para gimnasios que centraliza la gestión de empleados, rutinas, asistencias y turnos, ayudando a cada cliente a cumplir sus objetivos con seguimiento personalizado.",
      badge: "App web para gimnasios",
      location: "Tucuamán",
      link: "#"
    }
  ]

  const [featured, ...rest] = projects

  const renderCard = (project, index, wrapperClassName = '') => {
    const isFeatured = project.id === featured.id
    return (
      <AnimateOnView key={project.id} delay={index + 1} className={`flex ${wrapperClassName}`}>
        <div className="group relative bg-[#0f0f11] rounded-3xl p-6 sm:p-8 border border-gray-800/80 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col h-full w-full hover:-translate-y-2">
          {/* Glow de gradiente en hover */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 rounded-full blur-[70px] transition-opacity duration-500 pointer-events-none"></div>

          {/* Número Gigante de Fondo (Watermark) */}
          <div className="absolute top-2 right-4 text-5xl md:text-7xl font-black text-gray-800/25 group-hover:text-cyan-900/30 transition-colors duration-500 select-none pointer-events-none tracking-tighter leading-none animate-[number-reveal_4s_ease-out_infinite]">
            {String(project.id).padStart(2, '0')}
          </div>

          <div className="relative z-10 flex-1 flex flex-col">
            <div className={`inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1c] border border-cyan-500/30 mb-6 ${isFeatured ? 'text-sm' : 'text-xs'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-cyan-300 font-medium uppercase tracking-wider">{project.badge}</span>
            </div>

            <h3 className={`font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              {project.name}
            </h3>

            <div className="inline-flex items-center gap-1.5 text-gray-400 mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{project.location}</span>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mt-auto">
              <a
                href={project.link}
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/20 hover:text-cyan-100 transition-colors"
              >
                Ver proyecto
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </AnimateOnView>
    )
  }

  return (
    <section id="proyectos" className="w-full py-16 md:py-20 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">

      {/* Luces de fondo decorativas */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none animate-[glow-intensity_7s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none animate-[glow-intensity_9s_ease-in-out_infinite_2s]"></div>

      {/* Líneas fugaces tipo fuegos artificiales */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'paint' }}>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <AnimateOnView tag="div" className="flex flex-col items-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight text-center">
            Proyectos que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              impulsan resultados
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl text-center">
            Una muestra del trabajo que llevamos adelante: soluciones reales construidas para resolver necesidades concretas de cada cliente.
          </p>
        </AnimateOnView>

        {/* Grilla combinada: destacada + espacio reservado (lg) + tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {renderCard(featured, 0, 'md:col-span-2 lg:col-span-2 order-1')}

          {rest.map((project, i) => renderCard(project, i + 1, 'md:col-span-1 lg:col-span-1 order-[2] lg:order-[3]'))}

          {/* Espacio reservado: último en mobile/md, acompaña a la destacada en desktop */}
          <AnimateOnView delay={2} className="flex md:col-span-2 lg:col-span-1 order-[3] lg:order-[2]">
            <div className="relative bg-[#0f0f11] rounded-3xl p-6 sm:p-8 border border-dashed border-gray-800/60 flex items-center justify-center h-full w-full">
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1c] border border-gray-800 flex items-center justify-center">
                  <svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm max-w-xs">
                  Espacio reservado para tu próximo proyecto destacado.
                </p>
              </div>
            </div>
          </AnimateOnView>
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection
