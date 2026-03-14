import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseState() {

  const [contador, setContador] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Hook useState
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Permite manejar estado en componentes funcionales.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
            Contador: <span className="text-3xl font-bold">{contador}</span>
          </h2>
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setContador(contador + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Incrementar
          </button>
          
          <button 
            onClick={() => setContador(contador - 1)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Decrementar
          </button>
          
          <button 
            onClick={() => setContador(0)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Reiniciar
          </button>
        </div>

        <button 
          onClick={() => navigate("/")}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          Volver al Home
        </button>

      </div>

    </div>
  );
}

export default HooksUseState;