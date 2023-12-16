import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="top-right" autoClose={5000} />
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
