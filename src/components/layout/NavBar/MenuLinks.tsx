import { Link } from "react-router-dom";

type MenuLinksProps = {
  variant: "desktop" | "mobile";
};

const paths = {
  home: "/",
  login: "/login",
  menu: "/menu",
};

export default function MenuLinks({ variant }: MenuLinksProps) {

  

  if (variant === "mobile") {
    return (
      <div
        id="menu"
        className="absolute z-[45] top-0 bottom-0 left-0 flex flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
      >
        <Link to={paths.home} className="hover:text-primary">
          Home
        </Link>
        <Link to={paths.login} className="hover:text-primary">
          Login
        </Link>
        <Link to={paths.menu} className="hover:text-primary">
          Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden h-12 items-center md:flex md:space-x-8">
      <div className="group">
        <Link to={paths.home} className="hover:text-primary">
          Home
          <div className="mx-2 group-hover:border-b group-hover:border-b-primary"></div>
        </Link>
      </div>
      <div className="group">
        <Link to={paths.login} className="hover:text-primary">
          Login
          <div className="mx-2 group-hover:border-b group-hover:border-b-primary"></div>
        </Link>
      </div>
      <div className="group">
        <Link to={paths.menu} className="hover:text-primary">
          Menu
          <div className="mx-2 group-hover:border-b group-hover:border-b-primary"></div>
        </Link>
      </div>
    </div>
  );
}
