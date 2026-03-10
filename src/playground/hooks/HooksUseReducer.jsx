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
    <div>

      <h1>Hook useReducer</h1>
      <p>Permite manejar estados complejos con una lógica tipo reducer.</p>

      <h2>Contador: {state.contador}</h2>

      <button onClick={() => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>

      <button onClick={() => dispatch({ type: "decrementar" })}>
        Disminuir
      </button>

      <br /><br />

      <button onClick={() => navigate("/")}>
        Volver al Home
      </button>

    </div>
  );
}

export default HooksUseReducer;