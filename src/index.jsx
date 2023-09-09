import React from "react";
import ReactDOMClient from "react-dom/client";
import { CustomerSignUp } from "./screens/CustomerSignUp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CustomerSignUp />);
