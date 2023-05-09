import React,{useState}from 'react'
import "../Css/PrimerComponente.css"

const Button =()=>{
    //counter valor actual del estado
    //setCounter se utliza para actualizar el valor
    const [Counter,setCounter]=useState(0);
    

 
    return(
        
        <div>
          
            <p>Precionado {Counter}</p>
            <center>
            <button className='click' onClick={()=> setCounter(Counter+1)}> Click Me </button> {""}
             <button  className='rei' onClick={()=> setCounter(0)}> Reiniciar </button>
            </center>
        </div>
    )
}

const SegundoComponente = () => {
  return (
    
    <div className='PrimerComponente'>
        <div className='Titulo'>
      
        </div>
   <Button/>
    </div>
  )
}

export default SegundoComponente
