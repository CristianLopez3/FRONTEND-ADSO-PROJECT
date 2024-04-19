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
import Profile from "@/pages/Dashboard/components/profile/Profile";
import Report from "@/pages/Dashboard/components/book/Reports/Report";

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
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "reservations",
        children: [
          {
            path: "",
            element: (
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            ),
          },
          {
            path: "report",
            element: (
              <ProtectedRoute>
                <Report />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "menus",
        element: (
          <ProtectedRoute>
            <Menus />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
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
