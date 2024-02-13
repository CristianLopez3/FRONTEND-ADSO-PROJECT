import { useState } from "react";
import Button from "../../../components/Button";

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

export default function MenuNav({
  menuActive,
  handleMenuActive,
}: MenuNavProps) {
  return (
    <>
      <div className="flex  w-full">
        {menuTypes.map((item) => {
          return (
            <Button
              key={item.id}
              variant={menuActive === item.type ? "black" : "empty"}
              content={item.type}
              onClick={() => handleMenuActive(item.type)}
            />
          );
        })}
      </div>
    </>
  );
}
