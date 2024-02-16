import Navbar from "../../components/layout/NavBar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Booking from "./components/Booking";
import MobileNav from "../../components/layout/MobileNav";
import KnowUs from "./components/KnowUs";

export default function Landing() {
  return (
    <div className="relative pb-24">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Menu />
        <Booking />
        <KnowUs />
      </main>
      <MobileNav />
    </div>
  );
}
