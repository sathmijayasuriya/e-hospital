import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Requests from "./pages/Requests";

export const router = createBrowserRouter([
    {
        path : "/signIn",
        element : <SignIn/>
    },
    {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
])