import React, { useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone/umd/vis-network.min";
import "vis-network/styles/vis-network.css";

const DiagramaAPD = () => {
  useEffect(() => {
    // Crear un conjunto de datos para los nodos (estados) y las aristas (transiciones)
    const nodes = new DataSet([
      { id: 0, label: "q0" }, // Estado inicial
      { id: 1, label: "q1" }, // Estado final
    ]);

    const edges = new DataSet([
      // Transiciones desde el estado inicial q0
      { from: 0, to: 0, label: "a, $ → a$" }, // Empujar 'a' en la pila
      { from: 0, to: 0, label: "b, a → ε" }, // Sacar 'a' de la pila cuando se lee 'b'

      // Transiciones desde el estado final q1
      { from: 0, to: 1, label: "ε, $ → ε" }, // Transición a estado final
    ]);

    // Crear el objeto de datos para el diagrama
    const container = document.getElementById("automata-diagram");
    const data = {
      nodes: nodes,
      edges: edges,
    };
    const options = {
      edges: {
        arrows: {
          to: { enabled: true, scaleFactor: 1, type: "arrow" },
        },
      },
    };

    // Crear la red (diagrama) utilizando vis-network
    const network = new Network(container, data, options);

    return () => {
      // Limpiar la red al desmontar el componente
      network.destroy();
    };
  }, []);

  return (
    <div
      id="automata-diagram"
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default DiagramaAPD;
