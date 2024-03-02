import { Outlet } from "react-router";
// import Footer from "../components/UI/Footer/Footer";
import Footer from "../components/Footer";
// import Navbar from "../components/UI/NavBar";
import Navbar from "../components/NavBar/Navbar";
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
