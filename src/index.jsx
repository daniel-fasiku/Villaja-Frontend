import React from "react";
import ReactDOMClient from "react-dom/client";
import { ReadyToShipOrder } from "./screens/ReadyToShipOrder";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ReadyToShipOrder />);
