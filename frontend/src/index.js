import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { ThemeProvider } from "@mui/material";
import ETheme from "./theme/ETheme";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {ETheme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);