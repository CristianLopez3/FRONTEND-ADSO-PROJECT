import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import MobileNav from "./components/MobileNav";

export default function Landing() {
  return (
    <div className="relative">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Menu />
      </main>
      <MobileNav />
    </div>
  );
}
