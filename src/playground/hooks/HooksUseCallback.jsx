import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseCallback() {

  const [contador, setContador] = useState(0);
  const navigate = useNavigate();

  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Hook useCallback
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Memoriza funciones para evitar recrearlas en cada render.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
            Contador: <span className="text-3xl font-bold">{contador}</span>
          </h2>
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={incrementar}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Incrementar
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
            ¿Por qué usar useCallback?
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• Evita recrear funciones en cada renderizado</li>
            <li>• Optimiza el rendimiento en componentes hijos</li>
            <li>• Previene renders innecesarios con React.memo</li>
            <li>• Útil cuando pasas funciones como props</li>
          </ul>
          <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded text-xs font-mono text-gray-800 dark:text-gray-200 mt-2">
            useCallback(() =&gt; setContador(c =&gt; c + 1), [])
          </div>
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

export default HooksUseCallback;