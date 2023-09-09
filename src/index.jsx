import React from "react";
import ReactDOMClient from "react-dom/client";
import { SellerCentre } from "./screens/SellerCentre";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SellerCentre />);
