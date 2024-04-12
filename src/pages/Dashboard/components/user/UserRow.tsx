import { useState } from "react";
import { Modal, DeleteModal } from "@/components/Modal";
import UserForm from "./UserForm";
import { User } from "@/types/User";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { deleteUser, getAllUsers } from "@/store/user/UserReducer";
import { PiTrash, PiPencil } from "react-icons/pi";
import Button from "@/components/Button";

type UserRowProps = { user: User };

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const {
    id,
    name,
    lastName,
    username: email,
    password,
    identification,
    cellphone,
    role,
  } = user;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = async () => {
    await dispatch(deleteUser(id!));
    await dispatch(getAllUsers());
  };

  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td className="row-table flex flex-col text-lg w-full">
          {name} <span className="text-sm text-gray-600">{email}</span>
        </td>

        <td className="row-table">{cellphone}</td>
        <td className="row-table">{role}</td>

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
      {openDeleteModal && (
        <Modal
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(!openDeleteModal)}
        >
          <DeleteModal onDelete={onDelete} name={name} />
        </Modal>
      )}
      {openUpdateModal && (
        <Modal
          open={openUpdateModal}
          onClose={() => setOpenUpdateModal(!openUpdateModal)}
        >
          <UserForm
            mode="update"
            handleUpdateModal={() => setOpenUpdateModal(!openUpdateModal)}
            id={id!}
            name={name}
            lastName={lastName}
            username={email}
            password={password}
            cellphone={cellphone}
            identification={identification}
            role={role}
          />
        </Modal>
      )}
    </>
  );
};

export default UserRow;
