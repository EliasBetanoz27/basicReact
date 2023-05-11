import { useState } from "react";
import "./App.css";
import CuartoComponente from "./componentes/CuartoComponente";
import PrimerComponente from "./componentes/PrimerComponente";
import SegundoComponente from "./componentes/SegundoComponente";
import TercerComponente from "./componentes/TercerComponente";
import Pruebas from "./componentes/Pruebas";

function App() {
  const [componente1, setComponente] = useState(true);
  const [botton1, setBotton1] = useState(true);
  const [componente2, setComponente2] = useState(true);
  const [botton2, setBotton2] = useState(true);
  const [componente3, setComponente3] = useState(true);
  const [botton3, setBotton3] = useState(true);

  return (
    <div className="App">
      <div className="contenedo-heder">
        <header className="header">
          <h1 className="titulo">Mi app</h1>
        </header>
      </div>
      <br />
      <div>
        {botton1 === true && (
          <button
            onClick={(ev) => {
              setComponente(false);
              setBotton1(false);
            }}
            className="pulse"
          >
            Ocultar componente1
          </button>
        )}
        {componente1 && <PrimerComponente />}
        {botton1 === false && (
          <button
            className="pulse"
            onClick={(ev) => {
              setComponente(true);
              setBotton1(true);
            }}
          >
            Ver componente1
          </button>
        )}

        {/* ------- */}
        {botton2 === true && (
          <button
            onClick={(ev) => {
              setComponente2(false);
              setBotton2(false);
            }}
            className=""
          >
            Ocultar uso de useState
          </button>
        )}

        <h1>Uso de los States</h1>
        {componente2 && <SegundoComponente />}
        {botton2 === false && (
          <button
            className=""
            onClick={(ev) => {
              setComponente2(true);
              setBotton2(true);
            }}
          >
            Ver uso de UseState
          </button>
        )}
        {/* ---- */}
        {botton3 === true && (
          <button
            onClick={(ev) => {
              setComponente3(false);
              setBotton3(false);
            }}
            className=""
          >
            Ocultar uso de useState en input
          </button>
        )}

        <h1>Uso de los States en input</h1>
        {componente3 && <TercerComponente />}
        {botton3 === false && (
          <button
            className=""
            onClick={(ev) => {
              setComponente3(true);
              setBotton3(true);
            }}
          >
            Ver uso de UseState en input
          </button>
        )}|

        <h1>----formulario------</h1>
        <CuartoComponente />
      </div>
      <Pruebas/>
    </div>
  );
}

export default App;
