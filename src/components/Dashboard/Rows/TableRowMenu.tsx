import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Menu } from "../../../types/Menu";
import { useState } from "react";
import Modal from "../../ui/Modal";
import UpdateMenuContent from "../Modals/UpdateMenuContent";
import DeleteContent from "../Modals/DeleteContent";

type TableRowMenuProps = Menu;

const TableRowMenu = ({
  id,
  title,
  description,
  price,
  quantity,
}: TableRowMenuProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal);
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
        </td>
      </tr>

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

export default TableRowMenu;
