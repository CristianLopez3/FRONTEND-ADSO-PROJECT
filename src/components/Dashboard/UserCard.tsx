import { PiUsers } from "react-icons/pi";
import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <article className="bg-gradient-to-r from-yellow-100 to-yellow-200 w-full p-2 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-8">
          <Link to="/dashboard/users">Users</Link>
          <PiUsers />
      </div>
      <div className="flex items-end gap-8">
        <h4 className="text-black text-3xl font-bold">57</h4>
        <p className="text-gray-600">active users</p>
      </div>
    </article>
  )
}

export default UserCard;