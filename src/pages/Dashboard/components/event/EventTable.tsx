import React from "react";
import { Event } from "@/types/Event";
const EventMobileItem = React.lazy(() => import("./EventMobileItem"));
import Table from "@/components/Table";
import EventRow from "./EventRow";

type BookTableProps = {
  data: Event[];
};

const BookTable = ({ data }: BookTableProps) => {
  return (
    <>
      <Table>
        {Array.isArray(data) && data.length > 0 ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            {data.map((item, index) => (
              <EventRow event={item} key={index} />
            ))}
          </React.Suspense>
        ) : (
          <tr>
            <td colSpan={6} className="text-left py-4 pl-4 bg-zinc-800">
              No data available yet!.
            </td>
          </tr>
        )}
      </Table>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {Array.isArray(data) && data.length > 0 ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            {data.map((item, index) => (
              <EventMobileItem event={item} key={index} />
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
