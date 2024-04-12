import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "@/layout/HomeTemplate";

import Test from "./Test";

import Home from "@/pages/Home";
import Login from "@/pages/Login/Login";
import Menu from "@/pages/Home/components/Menu";
import Booking from "@/pages/Home/components/Booking";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Menus from "@/pages/Dashboard/Menus";
import Users from "@/pages/Dashboard/Users";
import Page404 from "@/pages/Page404";
import Reservations from "@/pages/Dashboard/Reservations";
import DashboardTemplate from "@/layout/DashboardTemplate";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";

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
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardTemplate />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "reservations", element: <Reservations /> },
      { path: "menus", element: <Menus /> },
    ],
  },
  {
    path: "test",
    element: <Test />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
