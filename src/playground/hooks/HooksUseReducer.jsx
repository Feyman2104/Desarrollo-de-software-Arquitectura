import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

function reducer(state, action) {

  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };

    case "decrementar":
      return { contador: state.contador - 1 };

    default:
      return state;
  }
}

function HooksUseReducer() {

  const [state, dispatch] = useReducer(reducer, { contador: 0 });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Hook useReducer
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Permite manejar estados complejos con una lógica tipo reducer.
        </p>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-orange-800 dark:text-orange-300 mb-2">
            Contador: <span className="text-3xl font-bold">{state.contador}</span>
          </h2>
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => dispatch({ type: "incrementar" })}
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Incrementar
          </button>

          <button 
            onClick={() => dispatch({ type: "decrementar" })}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Disminuir
          </button>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            Patrón Reducer
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            useReducer es ideal para manejar estados complejos con múltiples acciones y transiciones predecibles.
          </p>
          <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded text-xs font-mono text-gray-800 dark:text-gray-200">
            dispatch({{ type: "incrementar" }})
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

export default HooksUseReducer;