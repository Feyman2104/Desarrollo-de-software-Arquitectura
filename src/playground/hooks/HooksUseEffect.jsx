import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseEffect() {

  const [contador, setContador] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Clicks: ${contador}`;
  }, [contador]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Hook useEffect
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Permite ejecutar efectos secundarios cuando cambia el estado.
        </p>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-300 mb-2">
            Clicks: <span className="text-3xl font-bold">{contador}</span>
          </h2>
          <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">
            Observa el título del navegador - se actualiza con cada clic
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setContador(contador + 1)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Aumentar
          </button>
          
          <button 
            onClick={() => setContador(contador - 1)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Disminuir
          </button>
          
          <button 
            onClick={() => setContador(0)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Reiniciar
          </button>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            ¿Cómo funciona?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            useEffect se ejecuta cada vez que el contador cambia, actualizando el título del documento.
            Revisa la pestaña del navegador para ver el efecto en acción.
          </p>
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

export default HooksUseEffect;