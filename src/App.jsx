import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Orders } from "./screens/Orders";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Orders />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
