import React from "react";
import ReactDOMClient from "react-dom/client";
import { ShippedOrderDash } from "./screens/ShippedOrderDash";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ShippedOrderDash />);
