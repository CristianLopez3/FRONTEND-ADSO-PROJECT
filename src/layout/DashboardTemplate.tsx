import { Outlet, useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import { LuBell } from "react-icons/lu";
import { currentFormatedDate } from "@/utils/dateFormater";
import { getCookies } from "@/utils/cookies";
import { USER_COOKIE } from "@/store/auth";
import { useEffect } from "react";

const DashboardTemplate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userCookie = getCookies(USER_COOKIE);
    if (!userCookie) {
      navigate("/login");
    }
  
  })
  
  return (
    <>
      <div className="relative md:static flex bg-zinc-900">
        <Sidebar />
        <div className="w-full p-2 md:px-12 md:py-6 h-screen rounded-tl-lg rounded-bl-lg">
          <div className="flex justify-end items-center p-2">
            <p className="text-white mr-2">{currentFormatedDate(Date.now())}</p>
            <h2 className="font-bold text-base flex  items-center justify-between gap-1 relative">
              <span className="absolute -top-1 left-0 rounded-full h-3 w-3 bg-primary"></span>
              <LuBell size={28} color="white" />
            </h2>
          </div>

          <div className="w-full h-full overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
