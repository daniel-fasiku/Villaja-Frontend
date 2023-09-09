import React from "react";
import ReactDOMClient from "react-dom/client";
import { OrderPlaced } from "./screens/OrderPlaced";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OrderPlaced />);
