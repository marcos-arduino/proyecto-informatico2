import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import products from "./mocks/products.json"

function Llamar_json(props){
  console.log(props.id);
  
  return (
    <>
    {
      products.map(product=>{
        return(<>
        <a href={product.link}  target="_blank">
          <img src={product.imagen} className="logo" alt={product.nombre_juego}/>
        </a>
        </>)
      })
    }
    </>)
}

function App() {

  return(
  <>
     <div>
        <a href="https://futbol11.netlify.app/" target="_blank">
          <img src="https://i.ibb.co/qxLfBLX/f11logo.png" className="logo" alt="Futbol 11 parte 2" />
        </a>
      </div>
      <h1>Hola profe, esto es futbol once parte 2</h1>
      <div className='card'>
        <Llamar_json id="1"/>
      </div>
      <p className="read-the-docs">
        DALE PAPÁ TENES QUE HACER TODOS LOS JUEGUITOS
      </p>
    </>
  )
}

export default App
