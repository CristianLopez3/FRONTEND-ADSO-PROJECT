// * Sidebar component
import { useLocation } from "react-router-dom";
import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
// * Icons imports
import { LuChevronFirst, LuChevronLast, LuHome } from "react-icons/lu";
import { LuUserCircle, LuBook } from "react-icons/lu";
import { PiArrowSquareIn } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
// * Styles imports
import { styles } from "./contants";
// * Routes imports
import { ROUTES } from "@/routes/constants";

export const SidebarContext = createContext<boolean>(true);

const Sidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <div className={styles.navDiv}>
          <h3 className={`${styles.h3Default} ${expanded ? "w-32" : "w-0"}`}>
            MenuEASY
          </h3>

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={styles.button}
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">
            <SidebarItem
              path={ROUTES.DASHBOARD.ROOT}
              icon={<LuHome size={20} />}
              text="Home"
              active={location.pathname === ROUTES.DASHBOARD.ROOT}
              alert={true}
            />
            <SidebarItem
              path={ROUTES.DASHBOARD.USERS}
              icon={<LuUserCircle size={20} />}
              text="User"
              active={location.pathname === ROUTES.DASHBOARD.USERS}
              alert={false}
            />
            <SidebarItem
              path={ROUTES.DASHBOARD.MENUS}
              icon={<PiBowlFood size={20} />}
              text="Menus"
              active={location.pathname === ROUTES.DASHBOARD.MENUS}
              alert={false}
            />
            <SidebarItem
              path={ROUTES.DASHBOARD.RESERVATIONS}
              icon={<LuBook size={20} />}
              text="Reservations"
              active={location.pathname === ROUTES.DASHBOARD.RESERVATIONS}
              alert={false}
            />
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=808080&color=000000&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div
            className={`
            flex justify-between items-center
            overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}

        `}
          >
            <Link to="/dashboard/profile">
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>

                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
            </Link>
            <Link to="/">
              <PiArrowSquareIn size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
