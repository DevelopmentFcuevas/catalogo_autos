import React, { useState } from 'react'
import './App.css'
import autosData from './autos'
import CatalogoAutos from './CatalogoAutos'

function App() {
  /*
   * Importa useState de React para manejar el estado.
   * Importa autosData desde el archivo autos.js.
   * Define un estado 'autos' usando 'useState' y lo inicializa con todos 
     los autosData. Este estado 'autos' será el que se actualice cuando 
     se realicen búsquedas o filtros.
   * Renderiza el componente CatalogoAutos y le pasa el estado autos como prop. 
  */
  const [autos, setAutos] = useState(autosData); // Estado para la lista de autos a mostrar
  
  return (
    <div className="App">
      <h1>Catálogo de Autos</h1>
      <CatalogoAutos autos={autos} />
    </div>
  )
}

export default App
