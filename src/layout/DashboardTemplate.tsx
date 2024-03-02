import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { LuUserCircle, LuBook } from "react-icons/lu";
import { PiBowlFood } from "react-icons/pi";
import SidebarItem from "../components/Sidebar/SidebarItem";


const DashboardTemplate = () => {


  return (
    <>
      <div className="relative md:static flex bg-black">
      <Sidebar>
        <SidebarItem path="/dashboard/users" icon={<LuUserCircle size={20} />} text='User' active={false} alert={false}  />
        <SidebarItem path="/dashboard/menus" icon={<PiBowlFood size={20} />} text='Menus' active alert={false}  />
        <SidebarItem path="/dashboard/reservations" icon={<LuBook size={20} />} text='Reservations' active={false} alert={false} />
      </Sidebar>
        <div className="w-full p-2 md:p-12 bg-black h-screen">
          <div className="w-full p-2 bg-white rounded-3xl h-full  overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
