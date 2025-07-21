function AutoCard({ auto }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={auto.imagen} alt={auto.modelo} style={{ width: "100%" }} />
      <h3>{auto.marca} {auto.modelo}</h3>
      <p>Año: {auto.año}</p>
      <p>Tipo: {auto.tipo}</p>
      <p>Precio: ${auto.precio}</p>
    </div>
  );
}

export default AutoCard;
