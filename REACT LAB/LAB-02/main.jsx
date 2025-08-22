import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greet1 from "./Components/Greet1.jsx";
import Greet2 from "./Components/Greet2.jsx";
import { Fun1, Fun2, Fun3 } from "./Components/Greet3";
import Greet4 from './Components/Greet4'
import { Greet5, name } from "./Components/Greet5.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Greet1 />
    <Greet2 />
    <Fun1 />
    <Fun2 />
    <Fun3 />
    <Greet4 />
    <Greet5 />
    // <h1>In h1 name = {name}</h1>
  </>
);
