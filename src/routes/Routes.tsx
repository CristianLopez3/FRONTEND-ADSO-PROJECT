import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login/Login";
import Menu from "@/pages/Home/components/Menu";
import Booking from "@/pages/Home/components/Booking";
import Dashboard from "@/pages/Dashboard/Dashboard";
import DashboardTemplate from "@/layout/DashboardTemplate";
import Menus from "@/pages/Dashboard/Menus";
import Users from "@/pages/Dashboard/Users";
import Test from "./Test";
// import Profile from "@/pages/dashboard/Profile";
import HomeLayout from "../layout/HomeTemplate";
import Page404 from "@/pages/Page404";

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
  }, 
 {
  path: "*",
  element: <Page404 />
 }
]);
