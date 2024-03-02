import { Booking } from "@/types/Booking";
import BookMobileItem from "./BookMobileItem";
import BookRow from "./BookRow";
import Table from "@/components/Table";


type BookTableProps = {
  data: Booking[]
}

const BookTable = ({data}: BookTableProps) => {
  return (
    <>
        <Table
          data={data}
          columns={[
            { title: "ID", width: "10%" },
            { title: "Name", width: "30%" },
            { title: "Date", width: "30%" },
            { title: "Time", width: "20%" },
            { title: "Actions", width: "10%" },
          ]}
          renderRowItems={(item: Booking, index) => (
            <BookRow
              id={item.id}
              date={item.date}
              name={item.name}
              time={item.time}
              key={index}
            />
          )}
          renderMobileItems={(item: Booking, index) => (
            <BookMobileItem
              key={index}
              id={item.id}
              name={item.name}
              date={item.date}
              time={item.time}
            />
          )}
        />
    </>
  );
};

export default BookTable;
