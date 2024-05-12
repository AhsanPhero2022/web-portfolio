import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./components/Dashboard/UserDashboard.jsx";

import AddSkill from "./components/Dashboard/AddSkill.jsx";
import AddProject from "./components/Dashboard/AddProject.jsx";

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        path: "addSkill",
        element: <AddSkill />,
      },
      {
        path: "addProject",
        element: <AddProject />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
