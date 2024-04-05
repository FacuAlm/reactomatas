import React from 'react';

const Controles = ({ iniciar }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
        onClick={iniciar}
      >
        Iniciar
      </button>
    </div>
  );
};

export default Controles;
