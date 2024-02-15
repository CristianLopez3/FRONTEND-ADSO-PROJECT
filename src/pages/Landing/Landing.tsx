import Navbar from "../../components/layout/NavBar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Booking from "./components/Booking";
import MobileNav from "../../components/layout/MobileNav";

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
      </main>
      <MobileNav />
    </div>
  );
}
