import { Outlet } from "react-router";
import Sidebar from "../components/layout/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import { useState } from "react";
// import { User, Book, Alarm, DotsNine } from "phosphor-react";

const DashboardLayout = () => {

  const [hide, setHide] = useState<boolean>(false);

  return (
    <>
      <div className="relative md:static flex bg-black">
        <Sidebar />
        <div className="w-full p-2 md:p-12 bg-black h-screen">
          <div className="w-full p-2 bg-white rounded-3xl h-full  overflow-y-scroll">
            <header>
              <DashboardNavbar />
            </header>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
