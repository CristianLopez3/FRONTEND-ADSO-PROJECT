import Navbar from "../components/layout/NavBar";
import Hero from "../components/Landing/Hero";
// import Menu from "../components/Menu";
import Booking from "../components/Landing/Booking";
import MobileNav from "../components/layout/MobileNav";
import KnowUs from "../components/Landing/KnowUs";
import Footer from "../components/layout/Footer/Footer";
import { Outlet } from "react-router";

const Landing = () => {

  return (
    <div className="relative pb-0">
      <header>
        {/* <Navbar /> */}
        <Hero />
      </header>
      <main>
        <Booking />
        <KnowUs />
      </main>
      <MobileNav />
    </div>
  );
};

export const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Landing;
