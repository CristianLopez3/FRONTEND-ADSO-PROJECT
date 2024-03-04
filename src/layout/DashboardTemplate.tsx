import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { LuBell } from "react-icons/lu";

const DashboardTemplate = () => {
  return (
    <>
      <div className="relative md:static flex bg-black">
        <Sidebar />
        <div className="w-full p-2 md:p-12 bg-black h-screen rounded-tl-lg rounded-bl-lg">

          <div className="flex justify-end items-center p-2">
            <h2 className="font-bold text-base flex  items-center justify-between gap-1 relative">
              <div className="absolute -top-1 left-0 rounded-full h-3 w-3 bg-primary"></div>
              <LuBell size={28} color="white" />
            </h2>
          </div>
          
          <div className="w-full p-2 bg-gray-200 rounded-3xl h-full  overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
