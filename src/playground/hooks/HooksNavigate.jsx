import { useNavigate } from "react-router-dom";

function HooksNavigate() {

  const navigate = useNavigate();

  return (
    <div>

      <h1>Hook useNavigate</h1>
      <p>Permite navegar entre rutas de forma programática.</p>

      <button onClick={() => navigate("/")}>
        Ir al Home
      </button>

    </div>
  );
}

export default HooksNavigate;