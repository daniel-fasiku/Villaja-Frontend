import React from "react";
import ReactDOMClient from "react-dom/client";
import { SellerSignUp } from "./screens/SellerSignUp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SellerSignUp />);
