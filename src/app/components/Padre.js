import React from 'react';
import Hijo from './Hijo';

function Padre() {
  const nombre = "Juan";
  
  return (
    <div>
      <h1>¡Hola desde el Componente Padre!</h1>
      <Hijo nombre={nombre} />
    </div>
  );
}

export default Padre;
