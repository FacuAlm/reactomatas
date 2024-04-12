import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="bg-blue-500 p-5">
        <h1 className="text-5xl text-center font-bold text-white">
          Reactomatas
        </h1>

        <nav className="flex justify-between w-1/2 text-white mt-5">
          <Link to={"/"}>Automata de estado Finito Deterministico</Link>
          <Link to={"turing"}>Automata Maquina de Turing</Link>
          <Link to={"apd"}>Automata de pila determinista</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
