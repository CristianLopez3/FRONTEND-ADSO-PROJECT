import { useState } from "react";
import MenuNav from "./MenuNav";
import MenuCard from "./MenuCard";
import { dataMenus } from "./Data";

const Menu = () => {
  const [menuActive, setMenuActive] = useState<string>("Lunches");

  function handleMenuActive(menu: string): void {
    setMenuActive(menu);
  }

  return (
    <section id="menu" className="mt-[100px] pt-2 dark:bg-secondary text-white mb-20">
      <div className="container mx-auto">
        <MenuNav menuActive={menuActive} handleMenuActive={handleMenuActive} />
        {/* With a map and a filter, I'm going to filter by category the data given by the API */}
        <article className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-12">
          {dataMenus.map((item) => (
            <MenuCard
              state={true}
              id={item.id}
              key={item.title}
              description={item.description}
              price={30000}
              title={item.title}
            />
          ))}
        </article>
      </div>
    </section>
  );
};

export default Menu;
