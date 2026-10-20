import { useState } from "react";

function RegistroAprendiz(){
  const [nombre, setNombre] = useState("");

  return (
    <div>
        <h2>Registro de Aprendiz</h2>
        <label>Escribe tu nombre:</label>

      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Bienvenido, {nombre}!</p>
    </div>
  );
}

export default RegistroAprendiz;