import "./index.css";
import Booking from "./pages/Landing/components/Booking";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="relative">
      <Landing />
      <div className="mt-10 ml-10">
        <Booking />
      </div>
    </div>
  );
}

export default App;
