import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Booking } from "../../types/Booking";
import { useState } from "react";
import Modal from "../ui/Modal";
import InputField from "../ui/InputField";

type TableRowProps = Booking;

const TableRow = ({ date, id, name, time }: TableRowProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal);
  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td className="row-table">{id}</td>
        <td className="row-table">{name}</td>
        <td className="row-table">{date}</td>
        <td className="row-table">{time}</td>

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
        <div className="mx-auto my-4 w-48 text-center">
          <div className="flex justify-center items-center">
            <Trash size={52} color="red" />
          </div>
          <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
          <p className="text-sm text-gray-500">
            Are you sure want to delte this item?{" "}
          </p>
          <div className="flex gap-4 mt-8">
            <button className="btn btn-danger w-full">Delete</button>
            <button
              className="btn btn-light w-full"
              onClick={handleDeleteModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal open={openUpdateModal} onClose={handleUpdateModal}>
        <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
          <div className="flex justify-center items-center mb-8">
            <Pencil size={52} color="orange" />
          </div>
          <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
          <div className="text-left text-sm text-gray-500">
            <form>
              <InputField
                id="name"
                name="name"
                placeholder="Update the name..."
                value={name}
                type="text"
              />
              <InputField
                id="date"
                name="date"
                placeholder="Update the date..."
                value={date}
                type="date"
              />
              <InputField
                id="time"
                name="time"
                placeholder="Update the time..."
                value={time}
                type="time"
              />
            </form>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="btn btn-warning w-full">Update</button>
            <button
              className="btn btn-light w-full"
              onClick={handleUpdateModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TableRow;
