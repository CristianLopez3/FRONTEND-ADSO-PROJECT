import Hero from "./components/Hero";
import Booking from "./components/Booking";
import MobileNav from "@/components/MobileNav";
import KnowUs from "./components/KnowUs";


const Home = () => {

  return (
    <div className="relative pb-0">
      <header>
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


export default Home;
