type MenuLinksProps = {
  variant: "desktop" | "mobile";
};

const menuLinks = ["Events", "Contact", "Menu", "Book"];

export default function MenuLinks({ variant }: MenuLinksProps) {
  if (variant === "mobile") {
    return (
      <div
        id="menu"
        className="absolute z-[45] top-0 bottom-0 left-0 flex flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
      >
        {menuLinks.map((item) => (
          <a
            href="#"
            key={item.length * Math.random() * 100}
            className="hover:text-primary"
          >
            {item}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden h-12 items-center md:flex md:space-x-8">
      {menuLinks.map((item) => {
        return (
          <div className="group" key={item.length * Math.random() * 100}>
            <a href="#">{item}</a>
            <div className="mx-2 group-hover:border-b group-hover:border-b-primary"></div>
          </div>
        );
      })}
    </div>
  );
}
