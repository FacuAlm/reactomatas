import React, { useState } from "react";
import Cinta from "./Cinta";
import Cabezal from "./Cabezal";
import Controles from "./Controles";
import DiagramaTuring from "./DiagramaTuring";

const MaquinaTuring = () => {
  const [cinta, setCinta] = useState(["0", "1", "1", "0", "0", "1", "1", "0"]); // Contenido inicial de la cinta
  const [cabezal, setCabezal] = useState(0); // Posición inicial del cabezal
  const [palabraInicial, setPalabraInicial] = useState(""); // Estado para la palabra inicial
  const [palabraFinal, setPalabraFinal] = useState(""); // Estado para la palabra final
  const [terminado, setTerminado] = useState(false); // Estado para verificar si se ha terminado
  const [inputBinario, setInputBinario] = useState(""); // Estado para almacenar la entrada de binarios

  const moverCabezal = (direccion) => {
    const nuevaPosicion = cabezal + direccion;
    setCabezal(nuevaPosicion >= 0 ? nuevaPosicion : 0);
  };

  const iniciar = () => {
    if (terminado) return; // Si ya se ha terminado, no hacer nada

    const nuevaCinta = [...cinta];
    const palabra = nuevaCinta.join(""); // Unimos los símbolos de la cinta para obtener la palabra inicial
    setPalabraInicial(palabra); // Actualizamos la palabra inicial

    if (nuevaCinta[cabezal] === "0") {
      nuevaCinta[cabezal] = "1";
    } else if (nuevaCinta[cabezal] === "1") {
      nuevaCinta[cabezal] = "0";
    } else if (nuevaCinta[cabezal] === "#") {
      setTerminado(true); // Si se encuentra "#" se marca como terminado
      return;
    }

    setCinta(nuevaCinta);
    moverCabezal(1); // Mover el cabezal hacia la derecha automáticamente

    const palabraFinal = nuevaCinta.join(""); // Unimos los símbolos de la cinta para obtener la palabra final
    setPalabraFinal(palabraFinal); // Actualizamos la palabra final
  };

  const handleInputChange = (e) => {
    setInputBinario(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCinta = inputBinario.split(""); // Convertir la cadena de binarios en un array de caracteres
    setCinta(newCinta);
    setCabezal(0);
    setPalabraInicial("");
    setPalabraFinal("");
    setTerminado(false);
    setInputBinario(""); // Limpiar el input después de enviar el formulario
  };

  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-2xl font-bold text-center mt-8">Máquina de Turing</h1>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <label htmlFor="inputBinario" className="block font-bold">
          Ingrese una cadena de binarios:
        </label>
        <input
          type="text"
          id="inputBinario"
          name="inputBinario"
          value={inputBinario}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full mt-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
      <Cinta cinta={cinta} cabezal={cabezal} />
      <Cabezal moverCabezal={moverCabezal} />
      <Controles iniciar={iniciar} />
      <div className="mt-4">
        <p className="font-bold">Palabra Inicial: {palabraInicial}</p>
        <p className="font-bold">Palabra Final: {palabraFinal}</p>
        {terminado && (
          <p className="font-bold text-red-500">
            Se encontró un '#' y se terminó la ejecución.
          </p>
        )}
      </div>
      <h2 className="text-xl mt-5 font-bold">Diagrama de Transicion</h2>
      <DiagramaTuring />
    </div>
  );
};

export default MaquinaTuring;
