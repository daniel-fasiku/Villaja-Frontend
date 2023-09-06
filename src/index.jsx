import React from "react";
import ReactDOMClient from "react-dom/client";
import { Hhomepage } from "./screens/Hhomepage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Hhomepage />);
