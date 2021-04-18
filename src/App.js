import './App.css';
import React, { useState } from  'react';

function App() {
  const conjuntoUno = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
  const conjuntoDos = ["lunes", "martes", "miercoles"];
  const conjuntoTres = [1,2,3,4,5,6];

  const conjuntoCuatro = () => {
    const nuevoArray = []
    var numero = 1
    do {
      nuevoArray.push(
        <span>{numero}</span>
      )
      numero = numero + 1
    } while (numero <= 6)
    return nuevoArray.map((item, index) =>
      <li> {index + 1} - {item} </li>
    )
  }

  const conjuntoCinco = () => {
    const nuevoArray = []
    var numero = 1
    do {
      nuevoArray.push(
        <span>{numero}</span>
      )
      numero = numero + 1
    } while (numero <= 3)
    return nuevoArray.map((item, index) =>
      <li> {index + 1} - {item} </li>
    )
  }

  const c4 = conjuntoCuatro().length;
  const c5 = conjuntoCinco().length;
  
  
  const diferencia = () => {
    if (c4 == c5) {
      return <p>si</p>
    } else {
      return <p>no</p>
    }
      
  }

  const conjuntoPares = () => {
    const nuevoArray = []
    var numero = 2
    do {
      nuevoArray.push(
        <span>{numero}</span>
      )
      numero = numero + 2
    } while (numero <= 24)
    return nuevoArray.map((item, index) =>
      <li> {index + 1} - {item} </li>
    )
  }
  const conjuntoParesRapido = () => [...Array(12)].map((item, index) =>
    <li> {index + 1} - <span>{2 + index * 2}</span> </li>
  )  /*funcion rapida: primero creas un array vacio con la cantidad de espacios, que al ser pares va a ser la mitad de lo que defini en numero.
  y en vez de escribir return, ya lo mapeao. , */ 

  const conjuntoImpares = () => [...Array(12)].map((item, index) =>
    <li> {index + 1} - <span>{1 + index*2}</span> </li>
  )

  var x = [1,2,3,4];
  var y = [2,4,6,8];
  var interseccion = x.filter(function(e){
    return  y.indexOf(e) != -1
  })

  var unionArrays = x.concat(y);

  var union = unionArrays.filter((item,index)=>{
    return unionArrays.indexOf(item) === index;
  })


  /*

/*
  const conjuntoCinco = []
  let lloroBastanete = 1
  while (lloroBastanete < 10) {
      soyUnaEnojadita.push(<p class="atrevidita">
        Pantera: {lloroBastanete}
      </p>)
      lloroBastanete++
  }*/

  return (
    <div>
      <h1 className="App">Conjuntos</h1>
      <div className="conjuntos">
        <div>
          <h3>ConjuntoUno</h3>
            <ul>
              {
                conjuntoUno.map((item, index) =>
                  <li>{index + 1} - {item} </li>
                )

              }
              
            </ul>
        </div>
        <div>
          <h3>ConjuntoDos</h3>
            <ul>
              {
                conjuntoDos.map((item, index) =>
                  <li> {index + 1} - {item} </li>
                )

              }
            </ul>
            
        </div>
        <div>
          <h3>ConjuntoTres</h3>
            <ul>
              {
                conjuntoTres.map((item, index) =>
                  <li> {index + 1} - {item} </li>
                )

              }
            
            </ul>
        </div>
      </div>
      
      <div className="conjuntos">
        <p>|C1| =
              {
            conjuntoUno.length
          }
        </p>
        <p>|C2| =
                {
            conjuntoDos.length
          }
        </p>
        <p>|C3| =
                {
            conjuntoTres.length
          }
        </p>

      </div>
      <div className="conjuntos">
        <div>
          <h3>ConjuntoCuatro</h3>
            <ul>
              {conjuntoCuatro()} {/*Si lo que llamo es una funcion, tengo que llamarla con () , y si lo que llamo es una constante no hace falta*/}
              
            </ul>
        </div>
        <div>
          <h3>ConjuntoCinco</h3>
          <ul>
            {conjuntoCinco()} {/*Si lo que llamo es una funcion, tengo que llamarla con () , y si lo que llamo es una constante no hace falta*/}

          </ul>
        </div>
      </div>
      <div className="conjuntos">
        <p>|C4| = {c4}
        </p>
        {
          diferencia()
        }

        <p>|C5| = {c5}
        </p>
      </div>
      <div className="conjuntos">
        <div>
          <h3>ConjuntoPares</h3>
          <ul>
            {conjuntoParesRapido()}
          </ul>
        </div>
        <div>
          <h3>ConjuntoImpares</h3>
          <ul>
            {conjuntoImpares()}
          </ul>
        </div>
      </div>
      <div className="conjuntos">
        <p><b>Array x</b> = {x.join("-")}</p>
        <p><b>Array Y</b> = {y.join("-")}</p>
        <p>La <b>interseccion</b> del array <b>X</b> e <b>Y</b> es {interseccion.join("-")}</p>
        <p>La <b>union</b> del array <b>X</b> e <b>Y</b> es {union.join("-")}</p>

      </div>
    </div>

  );
}

export default App;
