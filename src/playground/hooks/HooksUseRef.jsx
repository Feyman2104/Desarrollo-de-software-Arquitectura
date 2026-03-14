import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseRef() {

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Hook useRef
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Permite acceder directamente a elementos del DOM.
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-green-800 dark:text-green-300 mb-4">
            Campo de entrada con referencia
          </h3>
          <input 
            ref={inputRef} 
            placeholder="Escribe algo aquí..." 
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
          />
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={enfocarInput}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Enfocar Input
          </button>
          
          <button 
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = '';
                inputRef.current.focus();
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Limpiar y Enfocar
          </button>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            ¿Qué está pasando?
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• useRef crea una referencia mutable que persiste entre renderizados</li>
            <li>• La referencia se mantiene incluso si el componente se vuelve a renderizar</li>
            <li>• No causa un nuevo renderizado cuando cambia su valor</li>
            <li>• Útil para acceder a elementos del DOM directamente</li>
          </ul>
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

export default HooksUseRef;