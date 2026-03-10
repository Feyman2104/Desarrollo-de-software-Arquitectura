import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseCallback() {

  const [contador, setContador] = useState(0);
  const navigate = useNavigate();

  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);

  return (
    <div>

      <h1>Hook useCallback</h1>
      <p>Memoriza funciones para evitar recrearlas en cada render.</p>

      <h2>Contador: {contador}</h2>

      <button onClick={incrementar}>
        Incrementar
      </button>

      <br /><br />

      <button onClick={() => navigate("/")}>
        Volver al Home
      </button>

    </div>
  );
}

export default HooksUseCallback;