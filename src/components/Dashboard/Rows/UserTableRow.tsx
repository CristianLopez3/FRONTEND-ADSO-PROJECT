import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { useState } from "react";
import Modal from "../../UI/Modal";
import DeleteContent from "../Modals/DeleteContent";
import { User } from "../../../types/User";
import UserFormModal from "../Modals/UserFormModal";

type UserTableRowProps = User;

const UserTableRow = ({
  id,
  name,
  cellphone,
  email,
  role,
}: UserTableRowProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal);
  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td className="row-table">{id}</td>
        <td className="row-table flex flex-col text-lg">
          {name} <span className="text-sm text-gray-600">{email}</span>
        </td>

        <td className="row-table">{cellphone}</td>
        <td className="row-table">{role}</td>

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
          name={name}
        />
      </Modal>

      <Modal open={openUpdateModal} onClose={handleUpdateModal}>
        <UserFormModal
          mode="update"
          handleUpdateModal={handleUpdateModal}
          name={name}
          email={email}
          cellphone={cellphone}
          id={id}
          role={role}
        />
      </Modal>
    </>
  );
};

export default UserTableRow;
