import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";

import { Menu } from "../../../types/Menu";
import { useState } from "react";
import Modal from "../../ui/Modal";
import UpdateMenuContent from "../Modals/UpdateMenuContent";
import DeleteContent from "../Modals/DeleteContent";

export type MenuMobileItemProps = Menu;

const MenuMobileItem: React.FC<MenuMobileItemProps> = ({
  id,
  title,
  description,
  price,
  quantity,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal);
  return (
    <>
      <article key={id} className="bg-white p-4 rounded-lg shadow">
        <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
          <div>{title}</div>
          <div>{quantity}</div>
        </div>
        <div className="text-sm text-gray-600 py-2">{description}</div>
        <div className="text-sm text-gray-600 py-2">{price}</div>
        <div className="flex gap-2">
          <Button
            size={28}
            color="warning"
            className="p-2"
            onClick={handleUpdateModal}
          >
            <Pencil />
          </Button>
          <Button
            size={28}
            color="error"
            className="p-2"
            onClick={handleDeleteModal}
          >
            <Trash />
          </Button>
        </div>
      </article>
      <Modal open={openDeleteModal} onClose={handleDeleteModal}>
        <DeleteContent
          handleDeleteModal={handleDeleteModal}
          id={id}
          name={title}
        />
      </Modal>

      <Modal open={openUpdateModal} onClose={handleUpdateModal}>
        <UpdateMenuContent
          description={description}
          handleUpdateModal={handleUpdateModal}
          id={id}
          price={price}
          quantity={quantity}
          title={title}
        />
      </Modal>
    </>
  );
};

export default MenuMobileItem;
