import { Link } from "react-router-dom";
import {
  RiAccountCircleFill,
  RiArrowDropDownLine,
  RiBookOpenLine,
} from "react-icons/ri";
import { type ReactNode } from "react";

type DashboardNavbarProps = {
  children: ReactNode;
};

const DashboardNavbar = ({ children }: DashboardNavbarProps) => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto px-2 md:px-20 py-6">
        <nav className="relative flex justify-between items-center font-bold text-white">
          {children}
          <button className="hidden sm:flex text-gray-800 bg-gray-200 px-4 py-2 md:py-4 md:px-6 rounded-2xl flex gap-4 items-center">
            <RiAccountCircleFill size={32} />
            <span className="hidden md:block">Navbar</span>
            <RiArrowDropDownLine size={32} className="hidden md:block" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavbar;