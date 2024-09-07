import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MouseFollower } from "react-mouse-follower";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Formulario from "./Formulario.jsx"
import Blogs from "./components/Blogs/Blogs.jsx";

// Define as rotas
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/blog", element: <Blogs /> },
]);

// Renderiza o aplicativo
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <MouseFollower />
  </React.StrictMode>
);
