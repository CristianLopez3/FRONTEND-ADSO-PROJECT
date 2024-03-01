import { Booking } from "../../types/Booking";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import { Link } from "react-router-dom";
import { RiBookOpenLine } from "react-icons/ri";
import BookTable from "../../components/book/BookTable";

const dummyData: Array<Booking> = [
  { id: 1, name: "John Doe", date: "2002-01-02", time: "09:30" },
  { id: 2, name: "Jane Smith", date: "2002-04-02", time: "10:15" },
  { id: 3, name: "Michael Johnson", date: "2002-08-02", time: "20:00" },
];

const Reservations = () => {
  return (
    <>
      <header>
        <DashboardNavbar>
          <Link to="/dashboard">
            <h2 className="flex items-center text-black font-bold  gap-2 text-2xl">
              <RiBookOpenLine />
              Reservations
            </h2>
          </Link>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
        <BookTable data={dummyData} />
      </main>
    </>
  );
};

export default Reservations;
