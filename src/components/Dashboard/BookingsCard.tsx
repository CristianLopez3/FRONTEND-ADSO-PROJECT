import { PiAddressBookFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const BookingsCard = () => {
  return (
    <article className="bg-gradient-to-r from-orange-100 to-orange-200 w-full p-2 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-8">
          <Link to="/dashboard/reservations">Reservations</Link>
          <PiAddressBookFill />
      </div>
      <div className="flex items-end gap-8">
        <h4 className="text-black text-3xl font-bold">8</h4>
        <p className="text-gray-600 text-pretty">active reservations</p>
      </div>
    </article>
  )
}

export default BookingsCard;