import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <nav className="bg-[#1a1a1a] p-2 rounded-full flex items-center justify-between shadow-2xl border border-gray-800">
        
        <Link 
          to="/" 
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105"
        >
          
        </Link>

        <div className="hidden md:flex items-center gap-8 px-4">
          <Link to="/" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Inicio
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Servicios
          </Link>
          <Link to="/playground" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Proyectos
          </Link>
          <Link to="/resource" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Nostros
          </Link>
        </div>

        <a 
          href="mailto:contacto@nexuscode.com" 
          className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors shrink-0"
        >
          NexusCodeSupport@gmail.com
        </a>

      </nav>
    </div>
  );
};

export default Navbar;