import Button from "../../../../components/ui/Button";
import { button } from "../../../../theme";

const menuTypes = [
  {
    id: 1,
    type: "Lunches",
  },
  {
    id: 2,
    type: "Desserts",
  },
  {
    id: 3,
    type: "Drinks",
  },
  {
    id: 4,
    type: "Entries",
  },
];

type MenuNavProps = {
  menuActive: string;
  handleMenuActive: (value: string) => void;
};

const  MenuNav = ({
  menuActive,
  handleMenuActive,
}: MenuNavProps) => {
  return (
    <>
      <div className="flex flex-row w-full gap-2 overflow-x-scroll ">
        {menuTypes.map((item) => {
          return (
            <Button
              key={item.id}
              variant={
                menuActive === item.type ? button.active : button.inactive
              }
              content={item.type}
              onClick={() => handleMenuActive(item.type)}
            />
          );
        })}
      </div>
    </>
  );
}

export default MenuNav;