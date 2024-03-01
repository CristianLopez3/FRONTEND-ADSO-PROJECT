import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";

import { User } from "../../../types/User";
import { useState } from "react";
import Modal from "../../UI/Modal";
import UserFormModal from "../Modals/UserFormModal";
import DeleteContent from "../Modals/DeleteContent";

export type UserMobileItemProps = User;

const UserMobileItem: React.FC<UserMobileItemProps> = ({
  id,
  cellphone,
  email,
  name,
  role,
  identification,
  lastName,
  password
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal);

  return (
    <>
      <article key={id} className="bg-white p-4 rounded-lg shadow">
        <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
          <div>{name}</div>
          <div>{role}</div>
        </div>
        <div className="text-sm text-gray-600 py-2">{cellphone}</div>
        <div className="text-sm text-gray-600 py-2">{email}</div>
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
          id={id!}
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
          identification={identification}
          lastName={lastName}
          password={password}
        />
      </Modal>
    </>
  );
};

export default UserMobileItem;
