import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Menu from "../components/home/Menu";
import Booking from "../components/home/Booking";
import Dashboard from "../pages/Dashboard/Dashboard";
import Reservations from "../pages/Dashboard/Reservations";
import DashboardTemplate from "../templates/DashboardTemplate";
import Menus from "../pages/Dashboard/Menus";
import Users from "../pages/Dashboard/Users";
import Test from "./Test";
import Profile from "../pages/Dashboard/Profile";
import HomeLayout from "../templates/HomeTemplate";

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
