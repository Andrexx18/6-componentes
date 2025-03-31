import { useState } from "react";
import "./App.css";
import Booleano from "./Booleano";
import Clase from "./Clase";
import Estado from "./Estado";
import Lista from "./Lista";
import Objeto from "./Objeto";
import String from "./String";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Actividad 6 componentes</h2>
      <Booleano />
      <Clase />
      <Estado />
      <Lista />
      <Objeto />
      <String />
    </div>
  );
}

export default App;
