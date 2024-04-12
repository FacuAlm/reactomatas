import React, { useState, useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone/umd/vis-network.min";
import "vis-network/styles/vis-network.css";

const DiagramaAPD = () => {
  const [nodes, setNodes] = useState(
    new DataSet([
      { id: 0, label: "q0" }, // Estado inicial
      { id: 1, label: "q1" }, // Estado final
    ])
  ); // Estado para los nodos
  const [edges, setEdges] = useState(
    new DataSet([
      { from: 0, to: 0, label: "(a, ε / a) \n (b, ε / b) \n (a, - / #) \n (b, - / #)" }, // Empujar 'a' en la pila
     
      { from: 0, to: 1, label: "ε, $ → ε" }, // Transición a estado final
    ])
  ); // Estado para las aristas
  const [network, setNetwork] = useState(null); // Estado para la red

  useEffect(() => {
    // Crear la red (diagrama) utilizando vis-network
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

    const newNetwork = new Network(container, data, options);
    setNetwork(newNetwork);

    return () => {
      // Limpiar la red al desmontar el componente
      newNetwork.destroy();
    };
  }, [nodes, edges]);

  return (
    <div>
      <div id="automata-diagram" style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default DiagramaAPD;
