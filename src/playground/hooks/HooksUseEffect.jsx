import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseEffect() {

  const [contador, setContador] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Clicks: ${contador}`;
  }, [contador]);

  return (
    <div>

      <h1>Hook useEffect</h1>
      <p>Permite ejecutar efectos secundarios cuando cambia el estado.</p>

      <h2>Clicks: {contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>

      <br /><br />

      <button onClick={() => navigate("/")}>
        Volver al Home
      </button>

    </div>
  );
}

export default HooksUseEffect;