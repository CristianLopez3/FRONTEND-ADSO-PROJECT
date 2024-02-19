import { User, ArrowLeft, Book, Alarm, DotsNine } from "phosphor-react";
import { type ReactNode, useState } from "react";

type MenuLink = {
  title: string;
  icon: ReactNode;
};

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const menus: MenuLink[] = [
    { title: "Dashboard", icon: <DotsNine /> },
    { title: "User", icon: <User /> },
    { title: "Booking", icon: <Book /> },
    { title: "Events", icon: <Alarm /> },
  ];

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <aside
        className={`${
          open ? "w-full md:w-72 p-5" : "w-16 p-4"
        } relative border-r h-screen  bg-white transition-all`}
      >
        <ArrowLeft
          className={`absolute rounded-full  cursor-pointer -right-3 top-12 w-7 h-7 bg-white ${
            !open && "rotate-180"
          }`}
          color="#000"
          onClick={handleOpen}
        />

        <div className="pt-10 flex justify-center font-bold  items-center gap-x-4">
          {open ? (
            <div className="flex gap-x-4 items-center origin-left">
              <DotsNine color="#000" />
              <h1>MenuEASY</h1>
            </div>
          ) : (
            <DotsNine color="#000" className="font-bold" />
          )}
        </div>

        <ul className="py-6">
          {menus.map((item, index) => (
            <li
              key={index}
              className={`text-grayDark text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-grayLight`}
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
    </>
  );
};

export default Sidebar;
