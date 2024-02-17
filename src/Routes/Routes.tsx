import { createBrowserRouter } from "react-router-dom";
import Landing, { LandingLayout } from "../pages/Landing";
import Login from "../pages/Login";
import Menu from "../components/Menu";
import Booking from "../components/Booking";

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
  }
]);
