import React from 'react';

// Importa todas tus imágenes de autos aquí
import hiluxImage from './assets/imagenes/hilux.jpg'
import onixImage from './assets/imagenes/onix.jpg'
import ecosportImage from './assets/imagenes/ecosport.jpg'
import amarokImage from './assets/imagenes/amarok.jpg'
import cretaImage from './assets/imagenes/creta.jpg'
import versaImage from './assets/imagenes/versa.jpg'
import dusterImage from './assets/imagenes/duster.jpg'
import civicImage from './assets/imagenes/civic.jpg'
import stradaImage from './assets/imagenes/strada.jpg'
import sportageImage from './assets/imagenes/sportage.jpg'

// Un objeto para mapear los nombres de archivo a las imágenes importadas
const autoImages = {
  'hilux.jpg': hiluxImage,
  'onix.jpg': onixImage,
  'ecosport.jpg': ecosportImage,
  'amarok.jpg': amarokImage,
  'creta.jpg': cretaImage,
  'versa.jpg': versaImage,
  'duster.jpg': dusterImage,
  'civic.jpg': civicImage,
  'strada.jpg': stradaImage,
  'sportage.jpg': sportageImage,
};


const AutoCard = ({ auto }) => {

  // Obtener la URL de la imagen a partir del nombre del archivo
  const imageUrl = autoImages[auto.imagenNombre];

    /* 
     * Componente AutoCard para mostrar los detalles de un solo auto 
       de forma organizada. 
    * Este componente recibe un prop llamado 'auto', que es un objeto 
      con los detalles de un vehículo.
    * Muestra la imagen, marca, modelo, año, tipo y precio del auto.
    */
    return (
        <div className="auto-card">
            <img src={imageUrl} alt={`${auto.marca} ${auto.modelo}`} className="auto-imagen" />
            <h3>{auto.marca} {auto.modelo}</h3>
            <p>Año: {auto.anho}</p>
            <p>Tipo: {auto.tipo}</p>
            <p>Precio: ${auto.precio}</p>
        </div>
    );
};

export default AutoCard;