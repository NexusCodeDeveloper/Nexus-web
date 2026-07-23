import AnimateOnView from '../AnimateOnView'

const PHONE = "5491122334455"

const ServicesSection = () => {
  // Estructura de datos categorizada para las dos columnas principales
  const serviceCategories = [
    {
      id: "sistemas",
      mainTitle: "Ecosistemas de Gestión",
      mainSubtitle: "Soluciones Full-Stack a medida",
      mainIcon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      glowColor: "from-blue-600 to-cyan-500", // Color del ícono principal
      services: [
        {
          title: "Sistemas a Medida",
          subtitle: "Plataformas web robustas y escalables",
          icon: (
            <svg className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          title: "Desarrollo de APIs",
          subtitle: "Arquitecturas backend eficientes y seguras",
          icon: (
            <svg className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          title: "Bases de Datos",
          subtitle: "Modelado y gestión de datos en tiempo real",
          icon: (
            <svg className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          )
        }
      ]
    },
    {
      id: "presencia",
      mainTitle: "Presencia Digital",
      mainSubtitle: "Tu marca y producto en internet",
      mainIcon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      glowColor: "from-cyan-400 to-blue-500", // Color del ícono principal
      services: [
        {
          title: "Web Informativas",
          subtitle: "Sitios profesionales para presentar tu empresa",
          icon: (
            <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
          )
        },
        {
          title: "Interfaces UI/UX",
          subtitle: "Diseños estéticos, modernos y minimalistas",
          icon: (
            <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          )
        },
        {
          title: "Landing Pages",
          subtitle: "Páginas optimizadas para captar clientes",
          icon: (
            <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="servicios" className="w-full py-16 md:py-20 lg:py-24 bg-[#0a0a0a] relative">
      
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
        
        <AnimateOnView tag="div" className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight text-center">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Servicios</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl text-center">
            Desarrollamos herramientas digitales a medida, creadas según las necesidades y objetivos de cada cliente, orientadas a optimizar procesos y mejorar la experiencia de uso.
          </p>
        </AnimateOnView>

        {/* Grilla de 2 Columnas (Las cajas grandes) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {serviceCategories.map((category, i) => (
            <AnimateOnView key={category.id} delay={i * 2 + 1} className="flex">
            <div 
              className="bg-[#0f0f11] rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all hover:border-gray-700 relative overflow-hidden motion-safe:animate-[float-slow_8s_ease-in-out_infinite] w-full"
            >
              {/* Resplandor sutil en el fondo de la caja */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/5 rounded-full blur-[80px] pointer-events-none"></div>

              {/* Cabecera de la Categoría */}
              <div className="flex flex-col items-center text-center mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${category.glowColor} shadow-lg mb-4 animate-[float_6s_ease-in-out_infinite]`}>
                  {category.mainIcon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{category.mainTitle}</h3>
                  <p className="text-gray-300 text-sm mt-1">{category.mainSubtitle}</p>
                </div>
              </div>

              {/* Lista de Servicios Internos */}
              <div className="space-y-4 relative z-10">
                {category.services.map((item, index) => {
                  const msg = `Hola, me interesa el servicio de ${item.title} - ${item.subtitle}`
                  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`
                  return (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-3 sm:p-4 rounded-2xl border border-gray-800/60 bg-[#141416] hover:bg-[#1a1a1d] hover:border-cyan-500/40 transition-all cursor-pointer"
                  >
                    <div className="mr-2 sm:mr-4">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-base group-hover:text-cyan-100 transition-colors text-left">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-0.5 group-hover:text-gray-300 transition-colors text-left">{item.subtitle}</p>
                    </div>

                    <div className="ml-2 sm:ml-4 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                )})}
              </div>

            </div>
            </AnimateOnView>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;