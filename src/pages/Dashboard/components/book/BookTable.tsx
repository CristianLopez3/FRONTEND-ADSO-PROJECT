import { Booking } from "@/types/Booking";
// import BookMobileItem from "./BookMobileItem";
// import BookRow from "./BookRow";
import Table from "@/components/Table";

type BookTableProps = {
  data: Booking[];
};

const BookTable = ({ data }: BookTableProps) => {
  return (
    <>
      <Table
        columns={[
          { title: "ID", width: "10%" },
          { title: "Name", width: "30%" },
          { title: "Date", width: "30%" },
          { title: "Time", width: "20%" },
          { title: "Actions", width: "10%" },
        ]}
      >
        {data.map((item) => item.id)}
      </Table>
    </>
  );
};

export default BookTable;
