import BookingsCard from "../../components/Dashboard/BookingsCard";
import MenuCard from "../../components/Dashboard/MenuCard";
import UserCard from "../../components/Dashboard/UserCard";

const Dashboard = () => {
  return (
    <main className="px-2 md:px-20 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MenuCard />
        <UserCard />
        <BookingsCard />
      </div>
    </main>
  );
};

export default Dashboard;
