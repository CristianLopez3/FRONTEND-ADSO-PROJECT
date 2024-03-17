import React from "react";
import { Reservation } from "@/types/Reservation";
const BookMobileItem = React.lazy(() => import("./BookMobileItem"));
import Table from "@/components/Table";
import BookRow from "./BookRow";

type BookTableProps = {
  data: Reservation[];
};

const BookTable = ({ data }: BookTableProps) => {
  return (
    <>
      <Table titles={["Check", "Name", "Contact", "Description", "Date", "Actions"]}>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {Array.isArray(data) && data.length > 0 ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            {data.map((item, index) => (
              <BookMobileItem book={item} key={index} />
            ))}
          </React.Suspense>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default BookTable;
