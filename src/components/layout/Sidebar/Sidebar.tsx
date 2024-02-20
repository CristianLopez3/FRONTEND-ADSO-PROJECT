import { User, ArrowFatLineRight, Book, Alarm, DotsNine } from "phosphor-react";
import { PiArrowFatRightFill } from "react-icons/pi";
import { type ReactNode, useState } from "react";

type MenuLink = {
  title: string;
  icon: ReactNode;
};

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menus: MenuLink[] = [
    { title: "Dashboard", icon: <DotsNine size={20} /> },
    { title: "User", icon: <User size={20} /> },
    { title: "Booking", icon: <Book size={20} /> },
    { title: "Events", icon: <Alarm size={20} /> },
  ];

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className={`${open ? "absolute top-0 left-0 w-[80%] md:w-72 md:static z-50" : "static"}`}>
        <aside
          className={`${
            open ? "w-full md:w-72 p-5" : "w-12 md:w-16 p-4"
          } relative border-r h-screen border-none  bg-black text-gray-100 transition-all`}
        >
          <PiArrowFatRightFill 
            className={`absolute rounded-full  cursor-pointer right-[1%] top-[50%] w-7 h-7 bg-gray-400 md:hover:bg-gray-100 md:hover:scale-105 transition-all ${
              open && "rotate-180"
            }`}
            color="#000"
            onClick={handleOpen}
            
          />

          <div className="pt-10 pb-12 md:pt-10 flex justify-center font-bold  items-center gap-x-4">
            {open ? (
              <div className="flex gap-x-4 items-center origin-left">
                <DotsNine color="#fff" className="font-bold" size={24} />
                <h1>MenuEASY</h1>
              </div>
            ) : (
              <DotsNine color="#fff" className="text-4xl font-bold" size={24} />
            )}
          </div>

          <ul className="py-6 flex space-y-8 flex-col md:pl-2">
            {menus.map((item, index) => (
              <li
                key={index}
                className={`text-gray-200 font-semibold text-sm flex items-center gap-x-4 cursor-pointer  rounded-md hover:bg-grayDark`}
              >
                {open ? (
                  <div className="flex items-center justify-center gap-4">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                ) : (
                  <span>{item.icon}</span>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
