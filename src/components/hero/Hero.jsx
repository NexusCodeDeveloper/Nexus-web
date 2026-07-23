import AnimateOnView from '../AnimateOnView'
import TypewriterTitle from '../TypewriterTitle'

const Hero = ({ loadingComplete }) => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#050505]">
      
      {/* Luces ambientales de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/10 rounded-full blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-cyan-900/10 rounded-full blur-[80px] sm:blur-[120px]"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16">
          
          {/* Columna Izquierda: Textos y CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            <AnimateOnView delay={0}>
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-[#121212] border border-gray-800 shadow-sm mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
                <span className="text-[11px] sm:text-sm font-medium text-gray-200 whitespace-nowrap">Estudio de Desarrollo de Software</span>
              </div>
            </AnimateOnView>

            <TypewriterTitle ready={loadingComplete} />

            <AnimateOnView delay={2}>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white/90 mb-3 sm:mb-4 tracking-tight break-words">
                Software desarrollado a medida
              </h2>
            </AnimateOnView>

            <AnimateOnView delay={3}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-10 max-w-lg leading-relaxed">
                Creamos plataformas web, sistemas de gestión, APIs y aplicaciones escalables utilizando tecnologías modernas y las mejores prácticas de desarrollo.
              </p>
            </AnimateOnView>

            {/* CTA solitario */}
            <AnimateOnView delay={4}>
              <a 
                href="https://wa.me/5491122334455?text=Hola%20NexusCode%2C%20quiero%20cotizar%20mi%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transform hover:-translate-y-1 mt-6 sm:mt-10"
              >
                Cotizar mi proyecto
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </AnimateOnView>
          </div>

          {/* Columna Derecha: Elemento Visual */}
          <div className="w-full lg:w-1/2 relative z-10">
            {/* Resplandor detrás de la ventana */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            
            <AnimateOnView delay={2}>
            <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 motion-safe:animate-[float-slow_6s_ease-in-out_infinite]">
              
              {/* Barra superior estilo MacOS */}
              <div className="bg-[#1a1a1a] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">app.js — NexusCode</div>
              </div>

              {/* Cuerpo del Editor */}
              <div className="p-6 font-mono text-sm lg:text-base text-gray-300 h-[300px] flex flex-col gap-3">
                <p><span className="text-pink-500">import</span> <span className="text-white">Future</span> <span className="text-pink-500">from</span> <span className="text-green-400">'./innovation'</span>;</p>
                <p><span className="text-pink-500">const</span> <span className="text-blue-400">buildProject</span> = <span className="text-yellow-300">()</span> <span className="text-pink-500">=&gt;</span> {'{'}</p>
                <div className="pl-4 border-l border-gray-800 ml-2 space-y-2">
                  <p><span className="text-cyan-400">stack</span>: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Tailwind'</span>],</p>
                  <p><span className="text-cyan-400">design</span>: <span className="text-green-400">'Minimalist & Dark'</span>,</p>
                  <p><span className="text-cyan-400">performance</span>: <span className="text-orange-400">100</span>,</p>
                  <p><span className="text-pink-500">return</span> <span className="text-white">success</span>;</p>
                </div>
                <p>{'}'};</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="animate-pulse flex items-center gap-2 text-cyan-400">
                    <span>&gt;</span>
                    <span className="w-2 h-5 bg-cyan-400 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-2.5 py-1 rounded-lg">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[11px] font-medium text-cyan-100">Escalabilidad Garantizada</span>
                  </div>
                </div>
              </div>

            </div>
            </AnimateOnView>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
