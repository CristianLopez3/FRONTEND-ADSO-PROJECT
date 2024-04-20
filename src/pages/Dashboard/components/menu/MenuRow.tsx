import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { changeStateAction, deleteMenuAction } from "@/store/menus/menuActions";

import { Menu } from "@/types/Menu";
import { Modal, DeleteModal } from "@/components/Modal";
import MenuForm from "./MenuForm";

import Toggle from "@/components/Toggle";
import { PiTrash, PiPencil } from "react-icons/pi";
import Button from "@/components/Button";

type MenuRowProps = { menu: Menu };

const MenuRow: React.FC<MenuRowProps> = ({ menu }) => {
  const { id, title, description, price, state, category } = menu;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [menuState, setMenuState] = useState(state);
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = async () => {
    try {
      await dispatch(deleteMenuAction(+id!));
    } catch (error) {
      console.error("Failed to delete menu:", error);
    }
  };

  const onStateChange = async () => {
    const newState = !menuState;
    try {
      const resultAction = await dispatch(
        changeStateAction({ id: +id!, state: newState })
      );

      if (changeStateAction.fulfilled.match(resultAction)) {
        setMenuState(newState);
      }
      // Update only the changed menu in the state
    } catch (error) {
      console.error("Failed to change menu state:", error);
    }
  };

  return (
    <>
      <tr className="hover:bg-zinc-700 transition-all">
        <td className="row-table">
          <Toggle
            variant="success"
            enabled={menuState}
            setEnabled={onStateChange}
          />
        </td>
        <td className="row-table">
          {title}
          <span className="block text-[11px]">{category.name}</span>
        </td>
        <td className="row-table">{description}</td>
        <td className="row-table">${price}</td>

        <td className="row-table">
          <div className="flex gap-2">
            <Button
              variant="warning"
              className="p-2 hover:opacity-105 hover:scale-105 transition-all duration-100"
              onClick={() => setOpenUpdateModal(!openUpdateModal)}
            >
              <PiPencil />
            </Button>
            <Button
              variant="danger"
              className="p-2 hover:opacity-105 hover:scale-105 transition-all duration-100"
              onClick={() => setOpenDeleteModal(!openDeleteModal)}
            >
              <PiTrash />
            </Button>
          </div>
        </td>
      </tr>

      <Modal
        width="1/4"
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(!openDeleteModal)}
      >
        <DeleteModal onDelete={onDelete} name={title} />
      </Modal>

      <Modal
        open={openUpdateModal}
        onClose={() => setOpenUpdateModal(!openUpdateModal)}
      >
        <MenuForm
          mode="update"
          handleModal={() => setOpenUpdateModal(!openUpdateModal)}
          description={description}
          id={id}
          price={price}
          title={title}
          state={state ? "Active" : "Inactive"}
          idCategory={category.id}
        />
      </Modal>
    </>
  );
};

export default MenuRow;
