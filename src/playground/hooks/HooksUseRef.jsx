import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function HooksUseRef() {

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>

      <h1>Hook useRef</h1>
      <p>Permite acceder directamente a elementos del DOM.</p>

      <input ref={inputRef} placeholder="Escribe algo..." />

      <br /><br />

      <button onClick={enfocarInput}>
        Enfocar Input
      </button>

      <br /><br />

      <button onClick={() => navigate("/")}>
        Volver al Home
      </button>

    </div>
  );
}

export default HooksUseRef;