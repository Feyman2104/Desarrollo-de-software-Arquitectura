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
    <div>

      <h1>Hook useMemo</h1>
      <p>Optimiza cálculos costosos memorizando resultados.</p>

      <h2>Resultado: {resultado}</h2>

      <button onClick={() => setNumero(numero + 1)}>
        Incrementar
      </button>

      <br /><br />

      <button onClick={() => navigate("/")}>
        Volver al Home
      </button>

    </div>
  );
}

export default HooksUseMemo;