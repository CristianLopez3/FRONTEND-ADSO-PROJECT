import { useState } from "react";
import MenuNav from "./MenuNav";
import MenuCard from "./MenuCard";
import { dataMenus } from "./Data";

export default function Menu() {
  const [menuActive, setMenuActive] = useState<string>("Lunches");

  function handleMenuActive(menu: string): void {
    setMenuActive(menu);
  }

  return (
    <section className="pt-2 dark:bg-secondary text-white mb-20">
      <div className="container mx-auto">
        <MenuNav menuActive={menuActive} handleMenuActive={handleMenuActive} />
        {/* With a map and a filter, I'm going to filter by category the data given by the API */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2 gap-5 mt-12">
          {dataMenus.map((item) => (
            <MenuCard
              key={item.title}
              description={item.description}
              price={30000}
              title={item.title}
              quantity={item.quantity}
            />
          ))}
        </article>
      </div>
    </section>
  );
}
