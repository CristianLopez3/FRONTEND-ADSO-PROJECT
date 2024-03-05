import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Menu } from "../../../../types/Menu";
import { useState } from "react";
import Modal from "../../../../components/Modal";
import MenuForm from "./MenuForm";
import DeleteContent from "../../../../components/DeleteModal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { deleteMenu, getAllMenus } from "@/store/menus/MenuReducer";

type MenuRowProps = { menu: Menu };

const MenuRow: React.FC<MenuRowProps> = ({ menu }) => {
  const { id, title, description, price } = menu;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = async () => {
    await dispatch(deleteMenu(+id!));
    await dispatch(getAllMenus());
  };

  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td className="row-table">{id}</td>
        <td className="row-table">{title}</td>
        <td className="row-table">{description}</td>
        <td className="row-table">{price}</td>

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
        <DeleteContent onDelete={onDelete} name={title} />
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
        />
      </Modal>
    </>
  );
};

export default MenuRow;
