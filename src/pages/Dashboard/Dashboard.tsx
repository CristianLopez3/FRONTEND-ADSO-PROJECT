import { Link } from "react-router-dom";
import BookingsCard from "./components/dashboard/BookingsCard";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import MenuCard from "./components/dashboard/MenuCard";
import UserCard from "./components/dashboard/UserCard";
import { RiBookOpenLine } from "react-icons/ri";

const Dashboard = () => {
  return (
    <>
      <header>
        <DashboardNavbar>
          <Link to="/dashboard">
            <h2 className="flex items-center text-black font-bold  gap-2 text-2xl">
              <RiBookOpenLine />
              Hi User!
            </h2>
          </Link>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MenuCard />
          <UserCard />
          <BookingsCard />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
