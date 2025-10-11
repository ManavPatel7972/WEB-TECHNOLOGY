import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Movi } from "./Pages/Movi";
import { Layout } from "./Layout/Layout";
import { getApiData } from "./Api/GetApiData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movi",
          element: <Movi />,
          loader: getApiData,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  // Most IMP
  return <RouterProvider router={router} />;
}

export default App;
