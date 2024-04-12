import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Layout from "./layouts/Layout";
import AFD from "./components/AFD";
import MaquinaTuring from "./components/MaquinaTuring";
import APD from "./components/APD";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AFD />,
      },
      {
        path: "/turing",
        element: <MaquinaTuring />,
      },
      {
        path: "/APD",
        element: <APD />,
      },
    ],
  },
]);

export default router;
