import React from "react";

const Cabezal = ({ moverCabezal }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
        onClick={() => moverCabezal(-1)}
      >
        ← Izquierda
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => moverCabezal(1)}
      >
        Derecha →
      </button>
    </div>
  );
};

export default Cabezal;
