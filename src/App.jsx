import React, { useState, useEffect } from 'react'
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
  //const [autos, setAutos] = useState(autosData); // Estado para la lista de autos a mostrar
  
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [filteredAutos, setFilteredAutos] = useState(autosData); // Estado para los autos filtrados

  useEffect(() => {
    let currentAutos = autosData;

    // Aplicar búsqueda por marca o modelo
    if (searchTerm) {
      currentAutos = currentAutos.filter(auto =>
        auto.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
        auto.modelo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Aplicar filtro por tipo de vehículo
    /* if (filterType !== 'Todos') {
      currentAutos = currentAutos.filter(auto => auto.tipo === filterType);
    } */

    // Aplicar filtro por año
    /* if (filterYear !== 'Todos') {
      currentAutos = currentAutos.filter(auto => auto.año.toString() === filterYear);
    } */

    setFilteredAutos(currentAutos);
  }, [searchTerm/* , filterType, filterYear */]); // Dependencias: se ejecuta cuando cambian estos estados


  return (
    <div className="App">
      <h1>Catálogo de Autos</h1>

      <div className="controles-filtro">
        <input
          type="text"
          placeholder="Buscar por marca o modelo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* <CatalogoAutos autos={autos} /> */}
      <CatalogoAutos autos={filteredAutos} />
    </div>
  )
}

export default App
