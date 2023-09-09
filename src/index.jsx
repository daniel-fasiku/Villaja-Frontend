import React from "react";
import ReactDOMClient from "react-dom/client";
import { Dashboard } from "./screens/Dashboard";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Dashboard />);
