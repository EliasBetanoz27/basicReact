import React from "react";

const Pruebas = () => {
  let x = 11;
  // const P= new Promise((resolve, reject)=>{
  //     if(x===10){
  //         resolve("CORRECTO, ES MAYOR A 10")
  //     }else{
  //         reject("NO ES IGUAL")
  //     }
  // });
  // P.then(res=>{
  //     console.log(res)
  // })
  // .catch(erro=>{
  //     console.log(erro)
  // })
// ["A", "B", "C"].forEach((e,i) => console.log("i=", i, "list=", e));
const p1 = fetch("https://api.example.com/nonexistent");
const p2 = fetch("asd/index.csss");
const p3 = fetch("adsa/index.jss");

 Promise.all([p1, p2, p3])
  .then(responses => {
    responses.forEach(response => {
      console.log(response.status, response.url);
      console.log("Se completo la descarga")
        })
      
      
  })
 .catch(error =>{
console.log(" se ha encontrado un error",error)
 });

  return <div></div>;
};

export default Pruebas;
