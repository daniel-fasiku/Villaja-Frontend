import React from "react";
import ReactDOMClient from "react-dom/client";
import { Catalog } from "./screens/Catalog";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Catalog />);
