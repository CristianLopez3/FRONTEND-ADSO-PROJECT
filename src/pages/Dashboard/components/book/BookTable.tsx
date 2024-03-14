import React from "react";
import { Booking } from "@/types/Booking";
const BookMobileItem = React.lazy(() => import("./BookMobileItem"));
// import BookRow from "./BookRow";
import Table from "@/components/Table";
import BookRow from "./BookRow";

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
        {Array.isArray(data) && data.length > 0 ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            {data.map((item, index) => (
              <BookRow book={item} key={index} />
            ))}
          </React.Suspense>
        ) : (
          <tr>
            <td colSpan={5} className="tex-left py-4 pl-4 bg-white">
              No data available yet!.
            </td>
          </tr>
        )}
      </Table>
      {Array.isArray(data) && data.length > 0 ? (
        <React.Suspense fallback={<div>Loading...</div>}>
          {data.map((item, index) => (
            <BookMobileItem book={item} key={index} />
          ))}
        </React.Suspense>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default BookTable;
