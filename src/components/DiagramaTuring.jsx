import React, { useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone/umd/vis-network.min";
import "vis-network/styles/vis-network.css";

const DiagramaTuring = () => {
  useEffect(() => {
    // create an array with nodes
    const nodes = new DataSet([
      { id: 1, label: "q0" },
      { id: 2, label: "q1" },
    ]);

    // create an array with edges
    const edges = new DataSet([
      { from: 1, to: 1, arrows: "to", label: "1 ; 0, R \n 0 ; 1, R" },

      { from: 1, to: 2, arrows: "to", label: " β  ; β, R " },
    ]);

    // create a network
    const container = document.getElementById("mynetwork");
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
    const network = new Network(container, data, options);

    return () => {
      network.destroy();
    };
  }, []);

  return (
    <div
      id="mynetwork"
      style={{ width: "400px", height: "200px", border: "1px solid lightgray" }}
    />
  );
};

export default DiagramaTuring;
