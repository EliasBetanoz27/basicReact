import React from 'react'
import ReactDOMServer from "react-dom/server";
import "../Css/PrimerComponente.css";
const Hola = () => {
  return (
      <p>Hola mundo</p>
    
  );
};

const nombres = ["elias", "juan", "miguel", "jose"];
//puedo iterar el array para despues mostrarlo
// function getNombres() {
//   const elementosLista = [];
//   for (var i = 0; i < nombres.length; i++) {
//     elementosLista.push(<li>{nombres[i]}</li>);
//   }
//   return elementosLista;
// }

function Nombres() {
  // return <ul>{getNombres()}</ul>;
  return (
    <ul>
      {
        //puedo utilizar la funcion map para iterar el array y me devuelva un nuevo array
        nombres.map((nombre, index) => (
          <li key={index}>
            <span>
              <b>{nombre}</b>
            </span>
          </li>
        ))
      }
    </ul>
  );
}

//componente principal
const PrimerComponente = () => {
  return (
<div className='PrimerComponente' >
<div className="array">
  <ul >{Nombres()}</ul>
</div>

<div className="contendor-botton">
  {/* ReactDOMServer.renderToString(<Hola />)  CONVIERTE UN OBJETO REACT A UN STRING*/}
  <button
    className="botton"
    onClick={() => alert(ReactDOMServer.renderToString(Hola()))}
  >
    Enviar
  </button>
</div>
</div>
 
    
  )
}

export default PrimerComponente
