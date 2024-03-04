import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { LuUserCircle, LuBook } from "react-icons/lu";
import { PiBowlFood } from "react-icons/pi";
import { LuBell } from "react-icons/lu";
import SidebarItem from "../components/Sidebar/SidebarItem";

const DashboardTemplate = () => {
  return (
    <>
      <div className="relative md:static flex bg-black">
        <Sidebar>
          <SidebarItem
            path="/dashboard/users"
            icon={<LuUserCircle size={20} />}
            text="User"
            active={false}
            alert={false}
          />
          <SidebarItem
            path="/dashboard/menus"
            icon={<PiBowlFood size={20} />}
            text="Menus"
            active
            alert={false}
          />
          <SidebarItem
            path="/dashboard/reservations"
            icon={<LuBook size={20} />}
            text="Reservations"
            active={false}
            alert={false}
          />
        </Sidebar>
        <div className="w-full p-2 md:p-12 bg-black h-screen">
          <div className="flex justify-end items-center p-2">
            <h2 className="text-white font-bold text-base flex  items-center justify-between gap-1 relative">
              <div className="absolute -top-1 left-0 rounded-full h-3 w-3 bg-primary"></div>
              <LuBell size={28} />
            </h2>
          </div>
          <div className="w-full p-2 bg-white rounded-3xl h-full  overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
