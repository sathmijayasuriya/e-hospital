import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Requests from "./pages/Requests";
import Settings from "./pages/Settings";
import Feedbacks from "./pages/Feedbacks";
import Reports from "./pages/Reports";
import Patient from "./pages/Patient";

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
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/feedbacks",
        element: <Feedbacks />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/patient",
        element: <Patient />,
      },
])