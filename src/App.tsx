import { Outlet } from "react-router";
import "./index.css";
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

// import Booking from "./pages/Landing/components/Booking";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
