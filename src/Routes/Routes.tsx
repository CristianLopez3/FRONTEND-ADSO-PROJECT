import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Home/components/Menu";
import Booking from "../pages/Home/components/Booking";
import Dashboard from "../pages/dashboard/Dashboard";
import Reservations from "../pages/dashboard/Reservations";
import DashboardTemplate from "../layout/DashboardTemplate";
import Menus from "../pages/dashboard/Menus";
import Users from "../pages/dashboard/Users";
import Test from "./Test";
import Profile from "../pages/dashboard/Profile";
import HomeLayout from "../layout/HomeTemplate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> },
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
    element: <DashboardTemplate />,
    children: [
      {path: "", element: <Dashboard />, },
      {path: "users", element: <Users />},
      // {path: "reservations", element: <Reservations />},
      {path: "menus", element: <Menus />},
      // {path: "profile", element: <Profile />}
    ]
  },
  {
    path: "test",
    element: <Test />
  }
]);
