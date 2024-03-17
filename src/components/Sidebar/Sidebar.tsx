import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { PiArrowSquareIn } from "react-icons/pi";
import { getMenuItems, styles } from "./contants";
import { getUncheckedReservationsAction } from "@/store/reservations";

export const SidebarContext = createContext<boolean>(true);

const Sidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<boolean>(false);
  const reservations = useSelector((state: RootState) => state.reservations);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUncheckedReservationsAction());
  }, [dispatch]);

  const toggleExpanded = useCallback(() => {
    setExpanded((curr) => !curr);
  }, []);

  const reservationAlert = reservations.data.length > 0 ? true : false;

  const menuItems = useMemo(
    () => getMenuItems(reservationAlert),
    [reservationAlert]
  );

  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <div className={styles.navDiv}>
          <h3 className={`${styles.h3Default} ${expanded ? "w-32" : "w-0"}`}>
            MenuEASY
          </h3>

          <button onClick={toggleExpanded} className={styles.button}>
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.path}
                path={item.path}
                icon={item.icon}
                text={item.text}
                active={location.pathname === item.path}
                alert={item.alert}
              />
            ))}
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
