import { useNavigate } from "react-router-dom";

function HooksNavigate() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Hook useNavigate
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Permite navegar entre rutas de forma programática.
        </p>

        <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-4">
            Navegación Programática
          </h3>
          <p className="text-sm text-teal-600 dark:text-teal-400">
            useNavigate te permite controlar la navegación desde tu lógica JavaScript,
            ideal para redirecciones después de acciones del usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => navigate("/")}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Ir al Home
          </button>
          
          <button 
            onClick={() => navigate("/useState")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Ver useState
          </button>
          
          <button 
            onClick={() => navigate("/useEffect")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Ver useEffect
          </button>
          
          <button 
            onClick={() => navigate(-1)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Página Anterior
          </button>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            Métodos de navegación
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• navigate("/") - Navega a una ruta específica</li>
            <li>• navigate(-1) - Va a la página anterior en el historial</li>
            <li>• navigate(1) - Va a la página siguiente en el historial</li>
            <li>• navigate("/ruta", {'{'} replace: true {'}'}) - Reemplaza la entrada actual</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default HooksNavigate;