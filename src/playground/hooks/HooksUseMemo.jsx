import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseMemo() {

  const [numero, setNumero] = useState(0);
  const navigate = useNavigate();

  const calculoCostoso = (num) => {
    console.log("Calculando...");
    return num * 2;
  };

  const resultado = useMemo(() => calculoCostoso(numero), [numero]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Hook useMemo
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Optimiza cálculos costosos memorizando resultados.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
            Resultado: <span className="text-3xl font-bold">{resultado}</span>
          </h2>
          <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
            Número actual: {numero}
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setNumero(numero + 1)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Incrementar
          </button>
          
          <button 
            onClick={() => setNumero(numero - 1)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Disminuir
          </button>
          
          <button 
            onClick={() => setNumero(0)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Reiniciar
          </button>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            ¿Cómo funciona useMemo?
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• Memoriza el resultado de cálculos costosos</li>
            <li>• Solo vuelve a calcular cuando las dependencias cambian</li>
            <li>• Abre la consola del navegador para ver cuándo se ejecuta el cálculo</li>
            <li>• Mejora el rendimiento evitando cálculos innecesarios</li>
          </ul>
          <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded text-xs font-mono text-gray-800 dark:text-gray-200 mt-2">
            useMemo(() =&gt; calculoCostoso(numero), [numero])
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

export default HooksUseMemo;