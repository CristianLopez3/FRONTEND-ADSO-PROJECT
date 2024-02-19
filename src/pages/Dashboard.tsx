// Dashboard.tsx
import MyTable from "../components/Dashboard/MyTable";
import MobileItem from "../components/Dashboard/MobileItem";
import { Booking } from "../types/Booking";
import TableRow from "../components/Dashboard/TableRow";

const dummyData: Array<Booking> = [
  { id: 1, name: "John Doe", date: "01-02-2002", time: "09:30" },
  { id: 2, name: "Jane Smith", date: "01-02-2002", time: "10:15" },
  { id: 3, name: "Michael Johnson", date: "01-02-2002", time: "20:00" },
];



const Dashboard = () => {
  return (
    <main className="container mx-auto">
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
          <TableRow item={item} key={index} />
        )}

        renderMobileItems={(item: Booking, index) => (
          <MobileItem
            key={index}
            id={item.id}
            name={item.name}
            date={item.date}
            time={item.time}
          />
        )}

      />

    </main>
  );
};

export default Dashboard;
