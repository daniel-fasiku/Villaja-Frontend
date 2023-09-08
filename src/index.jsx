import React from "react";
import ReactDOMClient from "react-dom/client";
import { NewOrderDash } from "./screens/NewOrderDash";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<NewOrderDash />);
