import React from 'react';

const AutoCard = ({ auto }) => {
    /* 
     * Componente AutoCard para mostrar los detalles de un solo auto 
       de forma organizada. 
    * Este componente recibe un prop llamado 'auto', que es un objeto 
      con los detalles de un vehículo.
    * Muestra la imagen, marca, modelo, año, tipo y precio del auto.
    */
    return (
        <div className="auto-card">
            <h3>{auto.marca} {auto.modelo}</h3>
            <p>Año: {auto.anho}</p>
            <p>Tipo: {auto.tipo}</p>
            <p>Precio: ${auto.precio}</p>
        </div>
    );
};

export default AutoCard;