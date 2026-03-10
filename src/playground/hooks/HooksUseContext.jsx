import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UsuarioContext = createContext();

function ComponenteHijo() {

  const usuario = useContext(UsuarioContext);

  return <h2>Usuario: {usuario}</h2>;
}

function HooksUseContext() {

  const navigate = useNavigate();

  return (
    <UsuarioContext.Provider value="Juan Pérez">

      <h1>Hook useContext</h1>
      <p>Permite compartir datos globalmente entre componentes.</p>

      <ComponenteHijo />

      <br /><br />

      <button onClick={() => navigate("/")}>
        Volver al Home
      </button>

    </UsuarioContext.Provider>
  );
}

export default HooksUseContext;