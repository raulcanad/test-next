"use client"; // Necesitamos agregar esta directiva al principio de cualquier archivo que use hooks
// components/Contador.js
import { useState, useEffect } from 'react';

const Contador = () => {
  // Usamos el hook useState para gestionar el estado del contador
  const [contador, setContador] = useState(0);

  // Usamos useEffect para ejecutar una función cada vez que el contador cambia
  useEffect(() => {
    // Este efecto se ejecuta cada vez que el contador cambia
    document.title = `Contador: ${contador}`; // Cambia el título del documento al valor actual del contador
    
    // alert(`El contador ha cambiado a: ${contador}`);
  }, [contador]); // Solo se ejecuta si `contador` cambia

  // Función para aumentar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Función para disminuir el contador
  const decrementar = () => {
    setContador(contador - 1);
  };

  // Función para reiniciar el contador
  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar} style={{ marginLeft: '10px' }}>
        Decrementar
      </button>
      <button onClick={reiniciar} style={{ marginLeft: '10px' }}>
        Reiniciar
      </button>
    </div>
  );
};

export default Contador;
