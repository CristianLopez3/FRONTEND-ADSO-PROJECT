import { useState } from "react";

const buttonStyles = {
  active:
    "inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-third bg-transparent border-b-2 border-third sm:text-base dark:border-third dark:third whitespace-nowrap focus:outline-none duration-200 uppercase",
  desactive:
    "inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-black bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 duration-200",
};

const menuTypes = [
  {
    id: 1,
    type: "Lunchs",
  },
  {
    id: 2,
    type: "Desserts",
  },
  {
    id: 3,
    type: "Drinks",
  },
  {
    id: 4,
    type: "Entries",
  },
];

export default function MenuNav() {
  const [menuActive, setMenuActive] = useState("Lunchs");

  return (
    <>
      <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
        {menuTypes.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => setMenuActive(item.type)}
              className={
                menuActive === item.type
                  ? buttonStyles.active
                  : buttonStyles.desactive
              }
            >
              {item.type}
            </button>
          );
        })}
      </div>
    </>
  );
}
