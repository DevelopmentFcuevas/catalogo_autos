import React, { useState, useEffect } from 'react'
import './App.css'
import autosData from './autos'
import CatalogoAutos from './CatalogoAutos'
import AutoCard from './AutoCard';

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
  
  const [filterType, setFilterType] = useState('Todos'); // Estado para el filtro por tipo
  const [filterYear, setFilterYear] = useState('Todos'); // Estado para el filtro por año
  
  const [filteredAutos, setFilteredAutos] = useState(autosData); // Estado para los autos filtrados

  const [autoSorteado, setAutoSorteado] = useState(null); // Nuevo estado para el auto sorteado


  // Obtener años y tipos únicos para los filtros
  const uniqueYears = ['Todos', ...new Set(autosData.map(auto => auto.anho).sort((a, b) => b - a))];
  const uniqueTypes = ['Todos', ...new Set(autosData.map(auto => auto.tipo))];

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
    if (filterType !== 'Todos') {
      currentAutos = currentAutos.filter(auto => auto.tipo === filterType);
    }

    // Aplicar filtro por año
    if (filterYear !== 'Todos') {
      currentAutos = currentAutos.filter(auto => auto.anho.toString() === filterYear);
    }

    setFilteredAutos(currentAutos);
  }, [searchTerm, 
      filterType, 
      filterYear
    ]); // Dependencias: se ejecuta cuando cambian estos estados

  // NUEVA FUNCIÓN PARA EL SORTEO
  const sortearAuto = () => {
    const indiceAleatorio = Math.floor(Math.random() * autosData.length);
    const autoSeleccionado = autosData[indiceAleatorio];
    setAutoSorteado(autoSeleccionado);
  };

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

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="filter-select"
        >
          {uniqueTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          className="filter-select"
        >
          {uniqueYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        {/* BOTÓN PARA SORTEAR */}
        <button onClick={sortearAuto} className="sortear-button">Sortear Auto</button>

      </div>

      {/* SECCIÓN PARA MOSTRAR EL AUTO SORTEADO */}
      {autoSorteado && (
        <div className="auto-sorteado-container">
          <h2>Auto Destacado</h2>
          <AutoCard auto={autoSorteado} />
        </div>
      )}

      {/* <CatalogoAutos autos={autos} /> */}
      <CatalogoAutos autos={filteredAutos} />
    </div>
  )
}

export default App
