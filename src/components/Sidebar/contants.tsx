// menuItems.ts
import { ROUTES } from "@/routes/constants";
import { PiBowlFood } from "react-icons/pi";
import {
  LuHome,
  LuUserCircle,
  LuBook,
} from "react-icons/lu";

type MenuItem = {
  path: string;
  icon: JSX.Element;
  text: string;
  alert: boolean;
};


export const styles = {
  aside: "h-screen py-4 pl-4",
  nav: "h-full flex flex-col bg-white border-r shadow-sm rounded-xl",
  navDiv: "p-4 pb-2 flex justify-between items-center",
  h3Default: "overflow-hidden transition-all text-gray-700 font-extrabold",
  button: "p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100",
};

/**
** getMenuItems it's a function that returns an array of objects with the properties path, icon, text and alert
** that will be rendering in the SidebarItem component
*/

export function getMenuItems(reservationAlert: boolean): MenuItem[] {
  return [
    {
      path: ROUTES.DASHBOARD.ROOT,
      icon: <LuHome size={20} />,
      text: "Home",
      alert: true,
    },
    {
      path: ROUTES.DASHBOARD.USERS,
      icon: <LuUserCircle size={20} />,
      text: "User",
      alert: false,
    },
    {
      path: ROUTES.DASHBOARD.MENUS,
      icon: <PiBowlFood size={20} />,
      text: "Menus",
      alert: false,
    },
    {
      path: ROUTES.DASHBOARD.RESERVATIONS.ROOT,
      icon: <LuBook size={20} />,
      text: "Reservations",
      alert: reservationAlert,
    },
  ];
}


