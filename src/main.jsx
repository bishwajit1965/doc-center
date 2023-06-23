import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import router from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto">
    <React.StrictMode>
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </React.StrictMode>
  </div>
);
