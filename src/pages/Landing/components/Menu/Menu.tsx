import { useState } from "react";
import MenuNav from "./MenuNav";

export default function Menu() {
  const [menuActive, setMenuActive] = useState<string>("Lunches");
  // const [actualCategory, setActualCategory] = useState<string>("Lunches");

  function handleMenuActive(menu: string): void {
    setMenuActive(menu);
  }

  return (
    <section className="pt-2 dark:bg-secondary text-white mb-20">
      <div className="container mx-auto">
        <MenuNav menuActive={menuActive} handleMenuActive={handleMenuActive} />
        {/* With a map and a filter, I'm going to filter by category the data given by the API */}
      </div>
    </section>
  );
}
