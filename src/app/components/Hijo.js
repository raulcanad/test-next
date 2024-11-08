import React from 'react';
//const Hijo = (props) => {
function Hijo(props) {
  return <h2>¡Hola, {props.nombre}!</h2>;
}
// Definir el tipo de las props
    Hijo.propTypes = {
        nombre: PropTypes.string,  // Aseguramos que `nombre` sea un string
  };
  
  // Establecer un valor predeterminado
     Hijo.defaultProps = {
        nombre: 'Invitado', // Valor por defecto si no se pasa 'nombre'
  };

export default Hijo;
