import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Booking } from "../../../types/Booking";

export type BookingMobileItemProps = Booking;

const BookingMobileItem: React.FC<BookingMobileItemProps> = ({
  id,
  name,
  date,
  time
}) => {
  return (
    <article key={id} className="bg-white p-4 rounded-lg shadow">
      <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <div className="text-sm text-gray-600 py-2">{name}</div>
      <div className="flex gap-2">
          <Button size={28} color="warning" className="p-2">
            <Pencil />
          </Button>
          <Button size={28} color="error" className="p-2">
            <Trash />
          </Button>
        </div>
    </article>
  );
};

export default BookingMobileItem;