import React from "react";
import ReactDOMClient from "react-dom/client";
import { CustomerLogIn } from "./screens/CustomerLogIn";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CustomerLogIn />);
