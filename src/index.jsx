import React from "react";
import ReactDOMClient from "react-dom/client";
import { DeliveredOrderDash } from "./screens/DeliveredOrderDash";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DeliveredOrderDash />);
