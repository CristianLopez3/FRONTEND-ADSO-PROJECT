import Hero from "../../components/home/Hero";
import Booking from "../../components/home/Booking";
import MobileNav from "../../components/layout/MobileNav";
import KnowUs from "../../components/home/KnowUs";


const Home = () => {

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


export default Home;
