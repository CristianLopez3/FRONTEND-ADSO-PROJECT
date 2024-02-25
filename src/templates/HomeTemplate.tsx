import { Outlet } from "react-router";
import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/NavBar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
