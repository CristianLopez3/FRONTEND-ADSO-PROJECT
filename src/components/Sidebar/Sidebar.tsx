import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { PiArrowSquareIn } from "react-icons/pi";
import { getMenuItems, styles } from "./contants";
import { getUncheckedReservationsAction } from "@/store/reservations";
import { ROUTES } from "@/routes/constants";
import { getCookies, removeCookies } from "@/utils/cookies";
import { TOKEN_COOKIE, USER_COOKIE } from "@/store/auth";

export const SidebarContext = createContext<boolean>(true);

const Sidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<boolean>(false);
  const reservations = useSelector((state: RootState) => state.reservations);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = getCookies(USER_COOKIE);
  console.log(user);

  useEffect(() => {
    dispatch(getUncheckedReservationsAction());
  }, [dispatch]);

  const toggleExpanded = useCallback(() => {
    setExpanded((curr) => !curr);
  }, []);

  const hasUncheckedInReservation = reservations.data.some( 
    (reservation) => reservation.checkedIn === false
  );

  const menuItems = useMemo(
    () => getMenuItems(hasUncheckedInReservation),
    [hasUncheckedInReservation]
  );

  const handleLogout = () => {
    removeCookies(TOKEN_COOKIE);
    removeCookies(USER_COOKIE);
    navigate(ROUTES.LOGIN);
  };

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
            src={`https://ui-avatars.com/api/?name=${user.name}+${user.lastName}&background=808080&color=000000&bold=true`}
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
            <button onClick={handleLogout}>
              <PiArrowSquareIn size={20} />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
