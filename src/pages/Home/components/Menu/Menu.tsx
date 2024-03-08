import { useState, useEffect } from "react";
import MenuNav from "./MenuNav";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getAllMenusAction } from "@/store/menus";

const Menu = () => {
  const [menuActive, setMenuActive] = useState<string>("All");
  const menus = useSelector((state: RootState) => state.menus);
  const dispatch = useDispatch<AppDispatch>();

  function handleMenuActive(menu: string): void {
    setMenuActive(menu);
  }

  useEffect(() => {
    const fetchMenus = async () => {
      await dispatch(getAllMenusAction());
    }
    fetchMenus();
  }, [dispatch]);

  return (
    <section id="menu" className="mt-[100px] pt-2 dark:bg-secondary text-white mb-20">
      <div className="container mx-auto">
        <MenuNav menuActive={menuActive} handleMenuActive={handleMenuActive} />
        <article className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {menuActive === "All" ? (
            menus.data.map((item) => (
              <MenuCard
                state={item.state}
                id={item.id}
                key={item.title}
                description={item.description}
                price={item.price}
                title={item.title}
                category={item.category}
              />
            ))
          ) : (
            menus.data
              .filter((item) => item.category.name === menuActive)
              .map((item) => (
                <MenuCard
                  state={true}
                  id={item.id}
                  key={item.title}
                  description={item.description}
                  price={item.price}
                  title={item.title}
                  category={item.category}
                />
              ))
          )}
        </article>
      </div>
    </section>
  );
};

export default Menu;
