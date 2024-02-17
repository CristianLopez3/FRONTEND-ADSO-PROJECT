import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Menu from "../components/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Landing /> },
      { path: "menu", element: <Menu /> },
      { path: "#book", element: <Menu /> },
    ],
  },
  {
    path: "/login",
    element: <Login />
  }
]);
