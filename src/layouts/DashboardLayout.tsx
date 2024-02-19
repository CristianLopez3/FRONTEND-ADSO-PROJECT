import { Outlet } from "react-router";
import Sidebar from "../components/layout/Sidebar";
// import { User, Book, Alarm, DotsNine } from "phosphor-react";

const DashboardLayout = () => {
  return (
    <main className="flex bg-white">
      <Sidebar />
        <Outlet />
    </main>
  );
};

export default DashboardLayout;
