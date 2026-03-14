import { Link } from "react-router-dom";
import "../App.css";

function HomeHooks() {

  const hooks = [
    {
      nombre: "useState",
      ruta: "/useState",
      descripcion: "Maneja el estado dentro de un componente funcional.",
      categoria: "Estado",
    },
    {
      nombre: "useEffect",
      ruta: "/useEffect",
      descripcion: "Permite ejecutar efectos secundarios.",
      categoria: "Ciclo de vida",
    },
    {
      nombre: "useRef",
      ruta: "/useRef",
      descripcion: "Permite referenciar elementos del DOM.",
      categoria: "Referencias",
    },
    {
      nombre: "useReducer",
      ruta: "/useReducer",
      descripcion: "Manejo avanzado del estado con reducer.",
      categoria: "Estado",
    },
    {
      nombre: "useMemo",
      ruta: "/useMemo",
      descripcion: "Optimiza cálculos costosos memorizando resultados.",
      categoria: "Performance",
    },
    {
      nombre: "useCallback",
      ruta: "/useCallback",
      descripcion: "Memoriza funciones para evitar recrearlas.",
      categoria: "Performance",
    },
    {
      nombre: "useContext",
      ruta: "/useContext",
      descripcion: "Permite compartir datos globalmente.",
      categoria: "Contexto",
    },
    {
      nombre: "useNavigate",
      ruta: "/navigate",
      descripcion: "Permite navegar entre rutas.",
      categoria: "Navegación",
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-black">
        Ejemplos de Hooks en React
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse bg-white dark:bg-gray-800">

          <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Hook</th>
              <th className="px-6 py-4 text-left font-semibold">Ruta</th>
              <th className="px-6 py-4 text-left font-semibold">Descripción</th>
              <th className="px-6 py-4 text-left font-semibold">Categoría</th>
            </tr>
          </thead>

          <tbody>
            {hooks.map((hook, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">

                <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{hook.nombre}</td>

                <td className="px-6 py-4">
                  <Link to={hook.ruta}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105">
                      Ir a ejemplo
                    </button>
                  </Link>
                </td>

                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{hook.descripcion}</td>

                <td className="px-6 py-4">
                  <span className="inline-block bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                    {hook.categoria}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>



    </div>
  );
}

export default HomeHooks;