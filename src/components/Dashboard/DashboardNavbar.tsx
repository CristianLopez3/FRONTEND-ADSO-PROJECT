import { MdOutlineFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  RiAccountCircleFill,
  RiArrowDropDownLine,
  RiBookOpenLine,
} from "react-icons/ri";

type DashboardNavbarProps = {};

const DashboardNavbar = ({}: DashboardNavbarProps) => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto px-2 md:px-20 py-6">
        <nav className="relative flex justify-between items-center font-bold text-white">
          <Link to="/dashboard">
            <h2 className="flex items-center text-black font-bold  gap-2 text-2xl">
              <RiBookOpenLine />
              Booking
            </h2>
          </Link>

          <button className="text-gray-800 bg-gray-200 px-4 py-2 md:py-4 md:px-6 rounded-2xl flex gap-4 items-center">
            <RiAccountCircleFill size={32} className="hidden md:block" />
            Cristian
            <RiArrowDropDownLine size={32} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavbar;
