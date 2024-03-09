import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Menu } from "@/types/Menu";
import { useState } from "react";
import { Modal, DeleteModal } from "@/components/Modal";
import MenuForm from "./MenuForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { deleteMenuAction, getAllMenusAction } from "@/store/menus/menuActions";

type MenuRowProps = { menu: Menu };

const MenuRow: React.FC<MenuRowProps> = ({ menu }) => {
  // * This is the type of the data that we are going to send to the server
  const { id, title, description, price, state, category } = menu;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = async () => {
    await dispatch(deleteMenuAction(+id!));
    await dispatch(getAllMenusAction());
  };

  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td className="row-table">{id}</td>
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
