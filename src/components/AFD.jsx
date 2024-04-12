import React, { useState } from "react";
import DiagramaAFD from "./DiagramaAFD";

const AFD = () => {
  const [inputValue, setInputValue] = useState(""); // Estado para el valor ingresado por el usuario
  const [resultado, setResultado] = useState(""); // Estado para mostrar el resultado de la validación

  const regex = new RegExp("10");

  // Función que realiza las transiciones del autómata
  function transicion(cadena) {
    let estado_actual = "q0";
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
      if (estado_actual === "q0") {
        if (caracter === "1") {
          estado_actual = "q1";
        } else if (["0", "2"].includes(caracter)) {
          estado_actual = "q2";
        } else {
          return false;
        }
      } else if (estado_actual === "q1") {
        if (caracter === "1") {
          estado_actual = "q3";
        } else if (caracter === "2") {
          estado_actual = "q0";
        } else {
          return false;
        }
      } else if (estado_actual === "q2") {
        if (caracter === "1") {
          estado_actual = "q3";
        } else if (["0", "2"].includes(caracter)) {
          estado_actual = "q0";
        } else {
          return false;
        }
      } else if (estado_actual === "q3") {
        if (caracter === "1") {
          estado_actual = "q1";
        } else if (caracter === "2") {
          estado_actual = "q2";
        } else {
          return false;
        }
      }
    }
    return estado_actual === "q1" || estado_actual === "q2";
  }

  // Función que valida la cadena ingresada
  function validacion(cadena) {
    if (regex.test(cadena)) {
      return "La cadena no puede contener '10'.";
    }

    if (cadena.length % 2 === 0) {
      return "La cadena debe tener una cantidad impar de caracteres.";
    }

    return transicion(cadena)
      ? "La cadena es válida según el autómata."
      : "La cadena no es válida según el autómata.";
  }

  const handleEvaluar = () => {
    const resultadoValidacion = validacion(inputValue);
    setResultado(resultadoValidacion);
  };

  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-2xl font-bold text-center mt-8">
        Automata de estado Finito Deterministico
      </h1>
      <div className="mt-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingrese la cadena a evaluar"
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
      <DiagramaAFD />
    </div>
  );
};

export default AFD;
