import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Booking } from "../../types/Booking";
import { useState } from "react";
import Modal from "../ui/Modal";

type TableRowProps = Booking;

const TableRow = ({ date, id, name, time }: TableRowProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenModal = () => setOpen(!open);
  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td  className="row-table">
          {id}
        </td>
        <td  className="row-table">
          {name}
        </td>
        <td  className="row-table">
          {date}
        </td>
        <td  className="row-table">
          {time}
        </td>

        <td className="row-table">
          <div className="flex gap-2">
            <Button size={28} color="warning" className="p-2">
              <Pencil />
            </Button>
            <Button
              size={28}
              color="error"
              className="p-2"
              onClick={handleOpenModal}
            >
              <Trash />
            </Button>
          </div>
        </td>
      </tr>

      <Modal open={open} onClose={handleOpenModal}>
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
            <button className="btn btn-light w-full" onClick={handleOpenModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TableRow;
