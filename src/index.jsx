import React from "react";
import ReactDOMClient from "react-dom/client";
import { AddedToCart } from "./screens/AddedToCart";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AddedToCart />);
