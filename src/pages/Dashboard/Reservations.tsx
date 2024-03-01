import MyTable from "../../components/Dashboard/Table";
import BookingMobileItem from "../../components/Dashboard/MobileItems/BookingMobileItem";
import { Booking } from "../../types/Booking";
import BookingTableRow from "../../components/Dashboard/Rows/BookingTableRow";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import { Link } from "react-router-dom";
import { RiBookOpenLine } from "react-icons/ri";

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
        <MyTable
          data={dummyData}
          columns={[
            { title: "ID", width: "10%" },
            { title: "Name", width: "30%" },
            { title: "Date", width: "30%" },
            { title: "Time", width: "20%" },
            { title: "Actions", width: "10%" },
          ]}
          renderRowItems={(item: Booking, index) => (
            <BookingTableRow
              id={item.id}
              date={item.date}
              name={item.name}
              time={item.time}
              key={index}
            />
          )}
          renderMobileItems={(item: Booking, index) => (
            <BookingMobileItem
              key={index}
              id={item.id}
              name={item.name}
              date={item.date}
              time={item.time}
            />
          )}
        />
      </main>
    </>
  );
};

export default Reservations;
