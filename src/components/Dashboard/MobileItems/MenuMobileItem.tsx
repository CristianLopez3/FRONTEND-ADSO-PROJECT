import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";

import { Menu } from "../../../types/Menu";

export type MenuMobileItemProps = Menu;

const MenuMobileItem: React.FC<MenuMobileItemProps> = ({
  id,
  title,
  description,
  price,
  quantity,
}) => {
  return (
    <article key={id} className="bg-white p-4 rounded-lg shadow">
      <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
        <div>{title}</div>
        <div>{quantity}</div>
      </div>
      <div className="text-sm text-gray-600 py-2">{description}</div>
      <div className="text-sm text-gray-600 py-2">{price}</div>
      <div className="flex gap-2">
          <Button size={28} color="warning" className="p-2">
            <Pencil />
          </Button>
          <Button size={28} color="error" className="p-2">
            <Trash />
          </Button>
        </div>
    </article>
  );
};

export default MenuMobileItem;