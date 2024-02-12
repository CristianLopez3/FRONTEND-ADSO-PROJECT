import Navbar from "../../components/AppNavbar/Navbar";
import Hero from "./Hero";
import Menu from './Menu';

export default function Landing() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Menu />
      </main>
    </>
  );
}
