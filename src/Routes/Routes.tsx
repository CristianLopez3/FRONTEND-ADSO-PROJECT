import { createBrowserRouter } from "react-router-dom";
import Landing, { LandingLayout } from "../pages/Landing";
import Login from "../pages/Login";
import Menu from "../components/Landing/Menu";
import Booking from "../components/Landing/Booking";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { path: "", element: <Landing /> },
      { path: "menu", element: <Menu /> },
      { path: "book", element: <Booking /> },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);
