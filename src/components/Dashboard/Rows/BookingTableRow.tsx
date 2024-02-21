import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Booking } from "../../../types/Booking";
import { useState } from "react";
import Modal from "../../ui/Modal";
import BookingFormModal from "../Modals/BookingFormModal";
import DeleteContent from "../Modals/DeleteContent";

type BookingTableRowProps = Booking;

const BookingTableRow = ({ date, id, name, time }: BookingTableRowProps) => {
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
        <DeleteContent handleDeleteModal={handleDeleteModal}  id={id} name={name} />
      </Modal>

      <Modal open={openUpdateModal} onClose={handleUpdateModal}>
        <BookingFormModal  handleUpdateModal={handleUpdateModal} name={name} date={date} time={time} />
      </Modal>
    </>
  );
};

export default BookingTableRow;
