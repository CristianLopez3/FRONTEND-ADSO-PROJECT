import { Outlet } from "react-router";
import Sidebar from "../components/layout/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";

const DashboardLayout = () => {


  return (
    <>
      <div className="relative md:static flex bg-black">
        <Sidebar />
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
