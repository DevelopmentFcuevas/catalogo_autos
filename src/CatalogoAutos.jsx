import React from 'react';
import AutoCard from './AutoCard';  // Importamos el componente AutoCard.

const CatalogoAutos = ({ autos }) => { // Recibe la lista de autos como prop
    /* 
     * Este componente recibe un prop llamado 'autos', que es un array 
       de objetos de vehículos (la lista que vamos a filtrar y buscar).
     * Utiliza el método .map() para iterar sobre el array autos.
     * Para cada auto en el array, renderiza un componente AutoCard.
     * La propiedad key={auto.id} es crucial en React cuando 
       renderizamos la lista, ya que ayuda a React a identificar qué 
       elementos han cambiado, añadido o eliminado de la lista de 
       forma eficiente. 
    */
    return (
        <div className="catalogo-autos">
            {autos.map(auto => ( // Usamos .map() para iterar sobre la lista de autos.
                <AutoCard key={auto.id} auto={auto} /> // Renderizamos un AutoCard por cada auto.
            ))}
        </div>
    );
};

export default CatalogoAutos;