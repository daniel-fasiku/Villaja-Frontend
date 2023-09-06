import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inventory } from "./screens/Inventory";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Inventory />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
