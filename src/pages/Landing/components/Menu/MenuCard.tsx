import ImgMenu from "../../../../assets/bg-desktop.jpg";
import { type Menu } from "../../../../types/Menu";
// https://dribbble.com/shots/21617600-Restaurant-Landing-Page-Design-UI


type MenuCardProps = Menu;

export default function MenuCard({
  // id,
  title,
  description,
  price,
  // image,
  //category,
  quantity
}: MenuCardProps) {
  return (
    <>
      <div className="max-w-sm md:max-w-66 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
        <div className="flex items-center justify-between px-4 py-2 bg-primary">
          
          <h3 className="text-lg font-bold text-white">{price}</h3>
          
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            left: <span className="ml-2 px-2 py-1 rounded bg-secondary text-white">{quantity}</span>
          </button>
        </div>

        <img
          className="object-conver w-full h-44 mb-2"
          src={ImgMenu}
          alt="Hamburger"
        />

        <div className="px-4 py-2">
          <h3 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {description}.
          </p>
        </div>
      </div>
    </>
  );
}