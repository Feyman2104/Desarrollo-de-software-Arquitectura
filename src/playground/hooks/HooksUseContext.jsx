import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UsuarioContext = createContext();

function ComponenteHijo() {

  const usuario = useContext(UsuarioContext);

  return (
    <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-300">
        Usuario: <span className="font-bold">{usuario}</span>
      </h2>
    </div>
  );
}

function HooksUseContext() {

  const navigate = useNavigate();

  return (
    <UsuarioContext.Provider value="Juan Pérez">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Hook useContext
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Permite compartir datos globalmente entre componentes.
          </p>

          <ComponenteHijo />

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-8">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
              ¿Cómo funciona el contexto?
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• createContext() crea un contexto</li>
              <li>• Provider envuelve componentes y provee el valor</li>
              <li>• useContext() accede al valor del contexto</li>
              <li>• Evita prop drilling (pasar props a través de múltiples niveles)</li>
            </ul>
            <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded text-xs font-mono text-gray-800 dark:text-gray-200 mt-2">
              const usuario = useContext(UsuarioContext)
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
    </UsuarioContext.Provider>
  );
}

export default HooksUseContext;