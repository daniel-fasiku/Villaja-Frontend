import React from "react";
import ReactDOMClient from "react-dom/client";
import { OrderSummary } from "./screens/OrderSummary";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OrderSummary />);
