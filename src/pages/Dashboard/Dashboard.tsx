import { Link } from "react-router-dom";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import { RiBookOpenLine } from "react-icons/ri";
import { cardElements } from "./components/dashboard/cardElements";
import Card from "./components/dashboard/Card";

const Dashboard = () => {
  return (
    <>
      <header>
        <DashboardNavbar>
          <Link to="/dashboard">
            <h2 className="flex items-center text-zinc-50 font-bold  gap-2 text-2xl">
              <RiBookOpenLine />
              Hi User!
            </h2>
          </Link>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardElements.map((card) => {
            return (
              <Card
                {...card}
                key={card.title}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
