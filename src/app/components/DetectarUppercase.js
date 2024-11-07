// app/componente3/DetectarUppercase.js
"use client"; // Importante para habilitar interactividad en Next.js 13

import { useState } from "react";

export default function DetectarUppercase() {
  const [inputText, setInputText] = useState("");
  const [hasUppercase, setHasUppercase] = useState(false);

  // Función para manejar el cambio en el campo de entrada
  const handleChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    // Verificar si el texto contiene alguna letra mayúscula
    const containsUppercase = /[A-Z]/.test(text);
    setHasUppercase(containsUppercase);
  };

  return (
    <div>
      <h2>Detector de Mayúsculas</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Escribe algo..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
      {hasUppercase && (
        <p style={{ color: "red", marginTop: "8px" }}>
          ¡El texto contiene letras mayúsculas!
        </p>
      )}
      {!hasUppercase && inputText && (
        <p style={{ color: "green", marginTop: "8px" }}>
          El texto no contiene letras mayúsculas.
        </p>
      )}
    </div>
  );
}
