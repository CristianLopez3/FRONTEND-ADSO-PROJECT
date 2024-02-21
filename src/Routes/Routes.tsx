import { createBrowserRouter } from "react-router-dom";
import Landing, { LandingLayout } from "../pages/Landing";
import Login from "../pages/Login";
import Menu from "../components/Landing/Menu";
import Booking from "../components/Landing/Booking";
import Dashboard from "../pages/Dashboard/Dashboard";
import Reservations from "../pages/Dashboard/Reservations";
import DashboardLayout from "../layouts/DashboardLayout";
import Menus from "../pages/Dashboard/Menus";
import Users from "../pages/Dashboard/Users";

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
    element: <DashboardLayout />,
    children: [
      {path: "", element: <Dashboard />},
      {path: "users", element: <Users />},
      {path: "reservations", element: <Reservations />},
      {path: "menus", element: <Menus />}
    ]
  }
]);
