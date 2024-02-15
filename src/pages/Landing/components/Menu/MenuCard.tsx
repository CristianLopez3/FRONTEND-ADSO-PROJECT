import ImgMenu from "../../../../assets/bg-desktop.jpg";
import { type Menu } from "../../../../types/Menu";
// https://dribbble.com/shots/21617600-Restaurant-Landing-Page-Design-UI

type MenuCardProps = Menu;

const MenuCard = ({
  // id,
  title,
  description,
  price,
  // image,
  //category,
  quantity,
}: MenuCardProps) => {
  return (
    <>
      <div
        key={title}
        className="max-w-sm md:max-w-66 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"
      >
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

        <div className="flex items-center justify-between px-4 py-2 border-t ">
          <h3 className="text-lg font-bold text-black">{price}</h3>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
