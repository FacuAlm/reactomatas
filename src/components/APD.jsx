import React, { useState } from "react";
import DiagramaAPD from "./DiagramaPila";

const APD = () => {
  const [inputValue, setInputValue] = useState(""); // Estado para el valor ingresado por el usuario
  const [resultado, setResultado] = useState(""); // Estado para mostrar el resultado de la evaluación

  const automataDePila = (cadena) => {
    const pila = ["#"]; // Pila inicializada con '#' como tope
    let estado = "q0"; // Estado inicial
    let contadorA = 0; // Contador para 'a'
    let contadorB = 0; // Contador para 'b'

    // Recorremos la cadena de entrada
    for (let i = 0; i < cadena.length; i++) {
      const simbolo = cadena[i];

      // Transiciones basadas en el estado actual y el símbolo leído
      if (estado === "q0" && simbolo === "a") {
        contadorA++;
        pila.push("a"); // Empujar 'a' a la pila
      } else if (estado === "q0" && simbolo === "b") {
        contadorB++;
        pila.pop(); // Sacar elemento de la pila (equivalente a "emparejar" 'a' con 'b')
      } else {
        setResultado("La cadena no cumple con el patrón."); // Transición no válida, cadena rechazada
        return;
      }
    }

    // Verificar si la cantidad de 'a' es igual a la cantidad de 'b'
    if (contadorA === contadorB && pila.length === 1 && pila[0] === "#") {
      setResultado(
        "La cadena tiene la misma cantidad de 'a' y 'b' y está balanceada."
      );
    } else {
      setResultado("La cadena no cumple con el patrón.");
    }
  };

  const handleEvaluar = () => {
    automataDePila(inputValue.trim()); // Llamar a la función del autómata de pila
  };

  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-2xl font-bold text-center mt-8">
        Automata de pila determinista
      </h1>
      <div className="mt-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingrese la cadena a evaluar (solo 'a' y 'b')"
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={handleEvaluar}
      >
        Evaluar
      </button>
      <div className="mt-4">
        <p className="font-bold">{resultado}</p>
      </div>
      <h2 className="text-xl mt-5 font-bold">Diagrama de Transición</h2>
      <DiagramaAPD />
    </div>
  );
};

export default APD;
