import { createBrowserRouter } from "react-router-dom";

import ProgramLayout from "../components/layout/ProgramLayout.tsx";

import NotFound from "../pages/404";
import Main from "../pages/Main";
import Login from "../pages/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (

        <ProgramLayout />
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
