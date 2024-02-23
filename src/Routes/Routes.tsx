import { createBrowserRouter } from "react-router-dom";
import Landing, { LandingLayout } from "../pages/Landing";
import Login from "../pages/Login";
import Menu from "../components/Landing/Menu";
import Booking from "../components/Landing/Booking";
import Dashboard from "../pages/Dashboard/Dashboard";
import Reservations from "../pages/Dashboard/Reservations";
import DashboardLayout from "../templatest/DashboardLayout";
import Menus from "../pages/Dashboard/Menus";
import Users from "../pages/Dashboard/Users";
import SSidebar from "../components/layout/Sidebar/Sidebar";
import Test from "./Test";
import Profile from "../pages/Dashboard/Profile";

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
      {path: "menus", element: <Menus />},
      {path: "profile", element: <Profile />}
    ]
  },
  {
    path: "test",
    element: <Test />
  }
]);
