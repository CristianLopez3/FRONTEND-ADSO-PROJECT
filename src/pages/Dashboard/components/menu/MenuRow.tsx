import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  changeStateAction,
  deleteMenuAction,
} from "@/store/menus/menuActions";
import { Trash, Pencil } from "phosphor-react";
import { Menu } from "@/types/Menu";
import { Modal, DeleteModal } from "@/components/Modal";
import MenuForm from "./MenuForm";
import { Button } from "keep-react";
import Toggle from "@/components/Toggle";

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
      // Update only the deleted menu in the state
    } catch (error) {
      console.error('Failed to delete menu:', error);
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
      console.error('Failed to change menu state:', error);
    }
  };

  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td className="row-table">
          <Toggle
            variant="success"
            enabled={menuState}
            setEnabled={onStateChange}
          />
        </td>
        <td className="row-table">{title}</td>
        <td className="row-table">{description}</td>
        <td className="row-table">{price}</td>
        <td className="row-table">{category.name}</td>

        <td className="row-table">
          <div className="flex gap-2">
            <Button
              size={28}
              color="warning"
              className="p-2"
              onClick={() => setOpenUpdateModal(!openUpdateModal)}
            >
              <Pencil />
            </Button>
            <Button
              size={28}
              color="error"
              className="p-2"
              onClick={() => setOpenDeleteModal(!openDeleteModal)}
            >
              <Trash />
            </Button>
          </div>
        </td>
      </tr>

      <Modal
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