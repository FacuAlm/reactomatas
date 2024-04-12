import React, { useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone/umd/vis-network.min";
import "vis-network/styles/vis-network.css";

const DiagramaAFD = () => {
  useEffect(() => {
    // create an array with nodes
    const nodes = new DataSet([
      { id: 0, label: "q0" },
      { id: 1, label: "q1" },
      { id: 2, label: "q2" },
      { id: 3, label: "q3" },
    ]);

    // create an array with edges
    const edges = new DataSet([
      { from: 0, to: 2, arrows: "to", label: "0" },
      { from: 0, to: 1, arrows: "to", label: "1" },
      { from: 0, to: 2, arrows: "to", label: "2" },
      { from: 1, to: 3, arrows: "to", label: "1" },
      { from: 1, to: 0, arrows: "to", label: "2" },
      { from: 2, to: 0, arrows: "to", label: "0" },
      { from: 2, to: 3, arrows: "to", label: "1" },
      { from: 2, to: 0, arrows: "to", label: "2" },
      { from: 3, to: 1, arrows: "to", label: "1" },
      { from: 3, to: 2, arrows: "to", label: "2" },
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

export default DiagramaAFD;
