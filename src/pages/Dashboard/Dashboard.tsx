import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiBookOpenLine } from "react-icons/ri";
import { PiBook } from "react-icons/pi";
import { AppDispatch, RootState } from "@/store/store";

import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import Card from "./components/dashboard/Card";
import Chart from "./components/dashboard/Chart";
import { useContext, useEffect } from "react";
import { countMenuAction } from "@/store/menus";
import { countUsersAction } from "@/store/user";
import { countReservationsAction } from "@/store/reservations";
import Profile from "./components/profile/Profile";
import { UserContext } from "@/components/Auth/ProtectedRoute";


const Dashboard = () => {
  const user = useContext(UserContext);  
  const menus = useSelector((state: RootState) => state.menus.count);
  const reservations = useSelector(
    (state: RootState) => state.reservations.count
  );
  const users = useSelector((state: RootState) => state.users.count);
  const dispatch = useDispatch<AppDispatch>();

  
  
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        await dispatch(countMenuAction());
        await dispatch(countUsersAction());
        await dispatch(countReservationsAction());
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    };
    fetchCounts();
  }, [dispatch]);

  
  if(!user) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <header>
        <DashboardNavbar>
          <Link to="/dashboard">
            <h2 className="flex items-center text-zinc-50 font-bold  gap-2 text-2xl">
              <RiBookOpenLine />
              Hi {user.name}
            </h2>
          </Link>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Profile />

          <article className="gap-2 grid lg:grid-cols-2">
            <Card
              title="Menus"
              count={menus!}
              variant="r-right"
              icon={<PiBook />}
            />
            <Card
              title="Users"
              count={users!}
              variant="r-left"
              icon={<PiBook />}
            />
            <Card
              title="Reservations"
              count={reservations!}
              variant="r-right"
              icon={<PiBook />}
            />
          </article>
        </div>
        <div className="hidden py-4 w-full overflow-x-scroll lg:block lg:w-1/2">
          <Chart />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
