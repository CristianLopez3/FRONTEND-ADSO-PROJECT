import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";

import { Menu } from "../../../../types/Menu";
import { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import MenuForm from "./MenuForm";
import DeleteModal from "../../../../components/DeleteModal";

export type MenuMobileItemProps = { menu: Menu };

const MenuMobileItem: React.FC<MenuMobileItemProps> = ({ menu }) => {
  const { id, title, description, price, state } = menu;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const onDelete = () => {
    console.log(id);
  }
  return (
    <>
      <article key={id} className="bg-white p-4 rounded-lg shadow">
        <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
          <div>{title}</div>
          <div>{state}</div>
        </div>
        <div className="text-sm text-gray-600 py-2">{description}</div>
        <div className="text-sm text-gray-600 py-2">{price}</div>
        <div className="flex gap-2">
          <Button
            size={28}
            color="warning"
            className="p-2"
            onClick={ () => setOpenUpdateModal(!openUpdateModal)}
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
      </article>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(!openDeleteModal)}>
        <DeleteModal
          onDelete={onDelete}
          name={title}
        />
      </Modal>

      <Modal open={openUpdateModal} onClose={ () => setOpenUpdateModal(!openUpdateModal)}>
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

export default MenuMobileItem;
