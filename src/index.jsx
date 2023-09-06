import React from "react";
import ReactDOMClient from "react-dom/client";
import { Cart } from "./screens/Cart";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Cart />);
