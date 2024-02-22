import { ReactNode, createContext, useContext, useState } from "react";
import { LuChevronFirst, LuChevronLast, LuMoreVertical } from "react-icons/lu";
import { Link } from "react-router-dom";

type SidebarProps = {
  children: ReactNode;
};

const SidebarContext = createContext<boolean>(true);

const Sidebar = ({ children }: SidebarProps) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h3
            className={`overflow-hidden transition-all text-gray-700 font-extrabold ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            MenuEASY{" "}
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
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>

              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>

            <LuMoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  active: boolean;
  alert: boolean;
  path: string;
};

export function SidebarItem({
  icon,
  text,
  active = false,
  alert = false,
  path,
}: SidebarItemProps) {
  const expanded = useContext(SidebarContext);

  return (
    <Link to={path}>
      <li
        className={`
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group
      ${
        active
          ? "bg-gradient-to-tr from-gray-200 to-gray-100 text-gray-600"
          : "hover:bg-gray-200 text-gray-600"
      }

  `}
      >
        {icon}

        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>

        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-green-500 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-gray-300 text-gray-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
