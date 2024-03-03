import { ReactNode, createContext, useContext, useState } from "react";
import { LuChevronFirst, LuChevronLast, LuMoreVertical } from "react-icons/lu";
import { PiArrowSquareIn } from "react-icons/pi";
import { Link } from "react-router-dom";

type SidebarProps = {
  children: ReactNode;
};

export const SidebarContext = createContext<boolean>(true);

const Sidebar = ({ children }: SidebarProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <aside className="h-screen py-4 pl-4">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm rounded-xl">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h3
            className={`overflow-hidden transition-all text-gray-700 font-extrabold ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            MenuEASY
          </h3>

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=808080&color=000000&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div
            className={`
            flex justify-between items-center
            overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}

        `}
          >
            <Link to="/dashboard/profile">
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>

                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
            </Link>
            <Link to="/">
              <PiArrowSquareIn size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
