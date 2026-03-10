import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseState() {

  const [contador, setContador] = useState(0);
  const navigate = useNavigate();

  return (
    <div>

      <h1>Hook useState</h1>
      <p>Permite manejar estado en componentes funcionales.</p>

      <h2>Contador: {contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <br /><br />

      <button onClick={() => navigate("/")}>
        Volver al Home
      </button>

    </div>
  );
}

export default HooksUseState;