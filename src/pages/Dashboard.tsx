import {
  Book,
  UsersThree,
  CalendarCheck,
  Hamburger,
  SignOut,
  X,
} from "phosphor-react";
import { RiDashboardLine, RiMenu3Fill } from "react-icons/ri";
// import ImgLogout from "../assets/logout.svg";
import { useState } from "react";


const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const handleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <div className="relative min-h-screen grid grid-col-1 lg:grid-cols-6 bg-white">
      {/* Sidebar */}
      <div
        className={`fixed xl:static w-[80%] md:w-[50%] lg:w-[23%] xl:w-full  top-0 bg-white z-50 ${
          openSidebar ? "left-0" : "-left-full"
        } w-full h-full overflow-y-scroll  col-span-1 border-r border-gray-500 p-8 transition-all`}
      >
        {/* Logotipo */}
        <div className="text-center p-8">
          <h3 className="uppercase font-semibold text-2xl tracking-[4px]">
            Menu EASY
          </h3>
        </div>

        <div className="flex flex-col justify-between h-[800px]">
          {/* Menu */}
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 font-semibold text-gray-500 p-4 rounded-lg hover:bg-grayDark hover:text-white transition-colors "
                >
                  <RiDashboardLine />
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-4  font-semibold text-gray-500 p-4 rounded-lg hover:bg-grayDark hover:text-white transition-colors "
                >
                  <Book />
                  Booking
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-4  font-semibold text-gray-500 p-4 rounded-lg hover:bg-grayDark hover:text-white transition-colors "
                >
                  <Hamburger />
                  Menus
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-4  font-semibold text-gray-500 p-4 rounded-lg hover:bg-grayDark hover:text-white transition-colors "
                >
                  <UsersThree />
                  Users
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-4  font-semibold text-gray-500 p-4 rounded-lg hover:bg-grayDark hover:text-white transition-colors "
                >
                  <CalendarCheck />
                  Event
                </a>
              </li>
            </ul>
          </nav>

          {/* Image and logout */}
          <div className="flex flex-col gap-4 pt-6">
  
            <a
              href="#"
              className="flex items-center gap-4 font-semibold text-gray-500 p-4 rounded-lg hover:bg-grayDark hover:text-white transition-colors "
            >
              <SignOut />
              Logout
            </a>
          </div>
        </div>
      </div>

      {/* Button Menu movil */}
      <button
        className="absolute lg:hidden bottom-4 right-4 bg-black rounded-full p-2"
        onClick={handleSidebar}
      >
        { openSidebar ? <X size={28} color="#fff" /> : <RiMenu3Fill size={28} color="#fff" /> }
      </button>

      {/* Tables and content */}
      <div className="col-span-5"></div>
    </div>
  );
};

export default Dashboard;
