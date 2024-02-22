import { Outlet } from "react-router";
// import Sidebar from "../components/layout/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import Sidebar, { SidebarItem } from "../components/layout/Sidebar/Sidebar";
import { LuUserCircle } from "react-icons/lu";

const DashboardLayout = () => {


  return (
    <>
      <div className="relative md:static flex bg-black">
      <Sidebar>
        <SidebarItem path="/dashboard/users" icon={<LuUserCircle size={20} />} text='User' active={false} alert={false}  />
        <SidebarItem path="/dashboard/menus" icon={<LuUserCircle size={20} />} text='Menus' active alert={false}  />
        <SidebarItem path="/dashboard/reservations" icon={<LuUserCircle size={20} />} text='Reservations' active={false} alert={false} />
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

export default DashboardLayout;
