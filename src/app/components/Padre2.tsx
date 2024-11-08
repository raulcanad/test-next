import React from 'react';
import Hijo2 from './Hijo2';

const Padre2: React.FC = () => {
  const nombre: string = "Juan";
  
  return (
    <div>
      <h1>¡Hola desde el Componente Padre!</h1>
      <Hijo2 nombre={nombre} />
    </div>
  );
}

export default Padre2;
