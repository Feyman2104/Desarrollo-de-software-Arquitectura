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
    <div style={{ padding: "30px" }}>

      <h1 style={{ textAlign: "center" }}>
        Ejemplos de Hooks en React
      </h1>

      <table border="1" width="100%" style={{ marginTop: "20px" }}>

        <thead style={{ background: "#1f2937", color: "white" }}>
          <tr>
            <th>Hook</th>
            <th>Ruta</th>
            <th>Descripción</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          {hooks.map((hook, index) => (
            <tr key={index}>

              <td><b>{hook.nombre}</b></td>

              <td>
                <Link to={hook.ruta}>
                  <button>Ir a ejemplo</button>
                </Link>
              </td>

              <td>{hook.descripcion}</td>

              <td>{hook.categoria}</td>

            </tr>
          ))}
        </tbody>

      </table>

      <div style={{ marginTop: "30px" }}>

        <h3>Categorías y Hooks oficiales (React 19)</h3>

        <ul>
          <li><b>Debug:</b> useDebugValue</li>
          <li><b>Estado:</b> useState, useReducer</li>
          <li><b>Referencias:</b> useRef, useImperativeHandle</li>
          <li><b>Performance:</b> useMemo, useCallback, useTransition</li>
          <li><b>Efectos / ciclo de vida:</b> useEffect, useLayoutEffect</li>
          <li><b>Contexto:</b> useContext</li>
        </ul>

        <p>
          En React existen varios hooks oficiales que permiten manejar estado,
          efectos, rendimiento y comunicación entre componentes.
        </p>

      </div>

    </div>
  );
}

export default HomeHooks;