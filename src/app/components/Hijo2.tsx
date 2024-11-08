import React from 'react';

// Definimos el tipo de las props que recibirá el componente
interface SaludoProps {
  nombre: string;
}
//const Hijo2: React.FC<{ nombre?: string }> = ({ nombre = 'Invitado' }) => {
const Hijo2: React.FC<SaludoProps> = (props) => {
  return <h2>¡Hola, {props.nombre}!</h2>;
}

export default Hijo2;
