import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import SignIn from '../pages/sign-in';
import SignUp from "../pages/sign-up";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landing";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

export default router;