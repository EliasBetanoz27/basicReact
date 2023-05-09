import React, { useEffect, useRef, useState } from 'react'
import "../Css/PrimerComponente.css"
function Form({showed}){
    const [titulo,SetTitulo]=useState("");
    const [body,SetBody]=useState("");
const firstInput=useRef();
    useEffect(()=>{

        if(showed){
            firstInput.current.focus();  
        }
        //useEffect solo se ejecutara cuando showed cambie de false a true
    },[showed] )
    function SendForm(ev){
        ev.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/todos/1',{
            method:'POST',
            body: JSON.stringify(
                {
                    title:titulo,
                    body:body,
                    userId:1
                }),
            headers:{
                "Contet-type":"application/json; charset=UTF-8"
            }
             })
            .then(response => response.json())
            .then(json =>{ 

                SetTitulo("");
                SetBody("");
            console.log(json)
        } ) 
       
    }
    return(
        <form onSubmit={(ev)=> SendForm(ev)}>
            <div>
            <label htmlFor="titulo">Titulo</label> <br></br>
            <input type='text' ref={firstInput} value={titulo} id='titulo' onChange={(ev)=> SetTitulo(ev.target.value)}></input> <br></br>
            </div>
          <div>
            <label htmlFor="Body">Body</label><br></br>
            <input type="text" value={body}   onChange={(ev)=> SetBody(ev.target.value)} id='body' /> <br></br>
            <input type="submit"  value={"enviar"} />
            </div>
          
            
        </form>
       
    )
}

const Acordion =()=>{
const[Show, SetShow]=useState(false);

return(
    <div>
        <button onClick={()=> SetShow(true)}>
            Mostrar Formulario
        </button>
            
        <button onClick={()=> SetShow(false)}>Ocultar Formulario</button>
        {Show && <Form showed={Show}/>}
    </div>
)
}
const CuartoComponente = () => {
  return (
    <div className='PrimerComponente'>
     <Acordion/>
    </div>
  )
}

export default CuartoComponente
