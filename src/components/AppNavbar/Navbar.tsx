import Logo from "../../assets/food-logo.png";
import { MdMenuBook } from "react-icons/md";
import DarkMode from "./DarkMode";

export default function Navbar() {
  return (
    <nav className="shadow-2xl bg-white dark:bg-gray-800 dark:text-white duration-200">
      <div className="container py-3 sm:py-1 ">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold"
            >
              <img src={Logo} alt="MenuEASY" className="w-10" />
              MenuEASY
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <DarkMode />
            </div>

            <ul className=" hidden sm:flex gap-4">
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="flex gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 sm:hidden">
              Book
              <MdMenuBook className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
