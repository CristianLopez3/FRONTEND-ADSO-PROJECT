import Navbar from "../../components/layout/NavBar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Booking from "./components/Booking";
import MobileNav from "../../components/layout/MobileNav";
import KnowUs from "./components/KnowUs";
import Footer from "../../components/layout/Footer/Footer";

export default function Landing() {
  return (
    <div className="relative pb-0">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Menu />
        <Booking />
        <KnowUs />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
