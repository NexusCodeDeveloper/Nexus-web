import AnimateOnView from '../AnimateOnView'

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Análisis y Descubrimiento",
      description: "Nos reunimos para entender a fondo tu negocio. Definimos requerimientos, evaluamos la viabilidad técnica y trazamos la ruta del proyecto sin dejar cabos sueltos.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Arquitectura y Diseño UI",
      description: "Estructuramos la base de datos y la lógica del servidor (Backend). En paralelo, diseñamos interfaces de usuario (Frontend) modernas, intuitivas y centradas en la conversión.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Desarrollo Ágil",
      description: "Escribimos código limpio y escalable usando las últimas tecnologías. Trabajamos con entregas periódicas para que veas el progreso real de tu herramienta.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Testing y Despliegue",
      description: "Realizamos pruebas exhaustivas de seguridad y rendimiento. Una vez aprobado, desplegamos el sistema en servidores de alta disponibilidad y brindamos soporte continuo.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section id="metodologia" className="w-full py-16 md:py-20 lg:py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Luces de fondo decorativas */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none animate-[glow-intensity_7s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none animate-[glow-intensity_9s_ease-in-out_infinite_2s]"></div>

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
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Metodología</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl text-center">
            No dejamos nada al azar. Aplicamos un proceso de ingeniería de software estructurado para garantizar resultados seguros, escalables y a tiempo.
          </p>
        </AnimateOnView>

        {/* Grilla del Proceso */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <AnimateOnView key={index} delay={index + 1} className="flex">
            <div 
              className="group relative bg-[#0f0f11] rounded-3xl p-6 md:p-8 border border-gray-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full w-full"
            >
              {/* Número Gigante de Fondo (Watermark) */}
              <div className="absolute top-2 right-2 text-5xl md:text-7xl font-black text-gray-800/25 group-hover:text-cyan-900/25 transition-colors duration-500 select-none pointer-events-none tracking-tighter leading-none animate-[number-reveal_4s_ease-out_infinite]">
                {step.number}
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1c] border border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <div className="h-1 w-12 bg-gray-800 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-600 transition-all duration-500"></div>
                </div>
              </div>
            </div>
            </AnimateOnView>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;