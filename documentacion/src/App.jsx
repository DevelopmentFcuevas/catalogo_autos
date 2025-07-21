import { useState } from "react";
import { autos as autosData } from "./data/autos";
import AutoCard from "./components/AutoCard";

function App() {
  const [autos, setAutos] = useState(autosData);

  return (
    <div>
      <h1>Catálogo de Autos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {autos.map(auto => (
          <AutoCard key={auto.id} auto={auto} />
        ))}
      </div>
    </div>
  );
}

export default App;
