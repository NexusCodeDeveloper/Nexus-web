import AnimateOnView from '../AnimateOnView'
import TomasImg from '../../assets/TomasGomezIMG.jpeg'
import PabloImg from '../../assets/PabloBassoIMG.jpeg'

const AboutSection = () => {
  const team = [
    {
      id: 1,
      name: "Tomas Gomez", 
      role: "Co-Founder & Full-Stack Developer",
      bio: "Enfocado en la intersección entre el diseño funcional y la lógica de negocio. Aplico una sólida base de ingeniería para transformar requerimientos complejos en ecosistemas digitales estéticos, intuitivos y altamente optimizados para la experiencia del usuario final",
      socials: {
        github: "https://github.com/NexusCodeDeveloper",
        linkedin: "https://www.linkedin.com/in/tomas-gomez-15a613383/"
      },
      gradient: "from-cyan-400 to-blue-500",
      img: TomasImg,
      imgPos: "center 35%"
    },
    {
      id: 2,
      name: "Pablo Basso", 
      role: "Co-Founder & Full-Stack Developer",
      bio: "Orientado al diseño de arquitecturas escalables y la estructuración de sistemas robustos. Mi objetivo es construir los cimientos lógicos de cada plataforma, garantizando que el producto sea seguro, eficiente y esté preparado para soportar el crecimiento sostenido de la empresa",
      socials: {
        github: "https://github.com/NexusCodeDeveloper",
        linkedin: "https://www.linkedin.com/in/pablobasso-dev/"
      },
      gradient: "from-blue-500 to-purple-500",
      img: PabloImg,
      imgPos: "center center"
    }
  ];

  return (
    <section id="nosotros" className="w-full py-16 md:py-20 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">
    
      
      {/* Estrellas fugaces de fondo */}
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

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de la sección */}
        
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            
          <div className="lg:w-1/2">
          
            <AnimateOnView className="block" delay={0}>
                
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-gray-800 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-[10px] sm:text-xs font-medium text-gray-200 uppercase tracking-wider">Conoce un poco más de nosotros</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Construimos software{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  que impulsa negocios.
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
               En NexusCode desarrollamos software pensando en el impacto que tendrá en tu negocio. Cada proyecto es diseñado desde cero, priorizando rendimiento, escalabilidad y una experiencia de usuario de calidad.
              Trabajamos directamente con nuestros clientes, sin intermediarios, para comprender cada necesidad y construir soluciones que acompañen el crecimiento de sus empresas.
              </p>
            </AnimateOnView>
          </div>
          
          {/* Bloque de estadísticas o badges */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <AnimateOnView className="bg-[#111111] border border-gray-800 rounded-2xl p-4 sm:p-6 text-center shadow-lg" delay={1}>
              <h3 className="text-lg sm:text-xl md:text-3xl font-black text-white mb-1 break-words">Desarrollo a Medida</h3>
              <p className="text-sm text-gray-400">Cada proyecto se diseña según los objetivos de tu negocio, sin utilizar soluciones genéricas.</p>
            </AnimateOnView>
            <AnimateOnView className="bg-[#111111] border border-gray-800 rounded-2xl p-4 sm:p-6 text-center shadow-lg" delay={2}>
              <h3 className="text-lg sm:text-xl md:text-3xl font-black text-white mb-1 break-words">Comunicación Directa</h3>
              <p className="text-sm text-gray-400">Trabajás directamente con quienes desarrollan tu proyecto durante todo el proceso.</p>
            </AnimateOnView>
            <AnimateOnView className="bg-[#111111] border border-gray-800 rounded-2xl p-4 sm:p-6 text-center shadow-lg col-span-1 sm:col-span-2" delay={3}>
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-1">Calidad y Escalabilidad</h3>
              <p className="text-sm text-gray-400">Aplicamos buenas prácticas de ingeniería para crear software seguro, mantenible y preparado para crecer.</p>
            </AnimateOnView>
          </div>
        </div>

        {/* Tarjetas de los Fundadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <AnimateOnView
              key={member.id}
              delay={4 + idx}
              className="group relative bg-[#0f0f11] border border-gray-800/80 rounded-3xl p-8 hover:border-gray-600 transition-all duration-300 overflow-hidden"
            >
              {/* Iluminación de fondo en hover */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-[50px] transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                
                {/* Espacio para la Foto (Avatar) */}
                <div className="shrink-0 relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${member.gradient} rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative w-24 h-24 rounded-2xl bg-[#1a1a1c] border border-gray-700 flex items-center justify-center overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: member.imgPos }} />
                  </div>
                </div>

                {/* Info del Perfil */}
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-50 transition-colors">{member.name}</h3>
                  <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} mb-4`}>
                    {member.role}
                  </p>
                  <p className="hidden sm:block text-gray-300 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Redes Sociales */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
                    <a href={member.socials.github} className="w-10 h-10 rounded-full bg-[#1a1a1c] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-[#1a1a1c] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
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

export default AboutSection;