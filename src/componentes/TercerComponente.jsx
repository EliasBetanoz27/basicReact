import React, { useState} from 'react'
import "../Css/PrimerComponente.css"

const Saludo =()=>{
    const [Name,setName]=useState("");
return(
  <div>
  {/* target.value permite acceder al lo que contiene el evento */}
    <input type='text' onChange={(ev)=> setName(ev.target.value)}></input><br></br>
    
    <p>Hola<strong className={Name.length > 5 ?'verde':'cafe'}> {Name}</strong></p>
  </div>
);
    
}
const TercerComponente = () => {
  return (
    <div className='PrimerComponente'>
      <Saludo/>
    </div>
  )
}

export default TercerComponente
