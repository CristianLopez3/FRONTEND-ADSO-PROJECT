import { Link } from "react-router-dom";
import { Users } from "phosphor-react";


type MenuLinksProps = {
  handleHamburgerMenu?: () => void;
  variant: "desktop" | "mobile";
};

const paths = {
  home: "/",
  login: "/login",
  menu: "/menu",
  book: "/book"
};  

const MenuLinks = ({ variant, handleHamburgerMenu }: MenuLinksProps) => {
  const links = [
    { path: paths.home, text: "Home" },
    { path: paths.menu, text: "Menu" },
    { path: paths.book, text: "Book" },
    { path: paths.login, text: "Login" }
  ];

  if (variant === "mobile") {
    return (
      <div onClick={handleHamburgerMenu} className="absolute z-50 top-0 left-0 flex flex-col w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
        {links.map((link, index) => (
          <Link key={index} to={link.path} className="hover:text-primary">
            {link.text}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden h-12 items-center md:flex md:space-x-8">
      {links.map((link, index) => (
        <div key={index} className="group">
          <Link to={link.path} className="hover:text-primary">
            {link.text === "Login" ? <Users size={24} /> : link.text}
            <div className="mx-2 group-hover:border-b group-hover:border-b-primary"></div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuLinks;