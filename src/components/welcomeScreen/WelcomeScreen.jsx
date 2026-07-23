import { useState, useEffect } from 'react';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Iniciando entorno...");
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Textos que irán rotando simulando un inicio de sistema
    const texts = [
      "Compilando módulos base...",
      "Resolviendo dependencias...",
      "Inyectando estilos de UI...",
      "Estableciendo conexión segura...",
      "Renderizando NexusCode..."
    ];
    let currentText = 0;

    // Cambia el texto cada 600ms
    const textInterval = setInterval(() => {
      currentText = (currentText + 1) % texts.length;
      setLoadingText(texts[currentText]);
    }, 600);

    // Simula el avance de la barra de forma irregular
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          // Cuando llega a 100, espera medio segundo, inicia el fade-out y avisa a la App
          setTimeout(() => {
            setIsHiding(true);
            setTimeout(onLoadingComplete, 800); // 800ms es lo que dura la animación de opacidad
          }, 500);
          return 100;
        }
        // Avanza entre 5 y 20 puntos al azar para que parezca un proceso real
        return prev + Math.floor(Math.random() * 15) + 5; 
      });
    }, 250);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ease-in-out ${isHiding ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-900/20 blur-[100px] rounded-full"></div>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo de la empresa */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-12 animate-[pulse_2s_ease-in-out_infinite]">
          Nexus<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Code.</span>
        </h1>

        {/* Zona de Carga */}
        <div className="w-64 md:w-80 flex flex-col items-center">
          
          {/* Barra de progreso fina estilo "Láser" */}
          <div className="w-full h-[2px] bg-gray-800 rounded-full overflow-hidden relative shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Punto de luz brillante en la punta de la barra */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px] shadow-[0_0_10px_#fff]"></div>
            </div>
          </div>

          {/* Consola de estado inferior */}
          <div className="mt-6 flex flex-col items-center w-full">
            <div className="flex justify-between w-full text-xs font-mono text-cyan-500/70 mb-1">
              <span>{loadingText}</span>
              <span className="font-bold text-cyan-400">{progress}%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;