import { PiBowlFoodFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const MenuCard = () => {
  return (
    <article className="bg-gradient-to-r from-green-100 to-green-200 w-full p-2 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-8">
          <Link to="/dashboard/menus">Menus</Link>
          <PiBowlFoodFill />
      </div>
      <div className="flex items-end gap-8">
        <h4 className="text-black text-3xl font-bold">32</h4>
        <p className="text-gray-600">active dishes</p>
      </div>
    </article>
  )
}

export default MenuCard;