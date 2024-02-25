import Hero from "../../components/Home/Hero";
import Booking from "../../components/Home/Booking";
import MobileNav from "../../components/layout/MobileNav";
import KnowUs from "../../components/Home/KnowUs";


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
