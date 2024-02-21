import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Booking } from "../../../types/Booking";
import { useState } from "react";
import Modal from "../../ui/Modal";
import UpdateBookingContent from "../Modals/UpdateBookingContent";
import DeleteContent from "../Modals/DeleteContent";

export type BookingMobileItemProps = Booking;

const BookingMobileItem: React.FC<BookingMobileItemProps> = ({
  id,
  name,
  date,
  time,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal);
  return (
    <>
      <article key={id} className="bg-white p-4 rounded-lg shadow">
        <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
          <div>{date}</div>
          <div>{time}</div>
        </div>
        <div className="text-sm text-gray-600 py-2">{name}</div>
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
          name={name}
        />
      </Modal>

      <Modal open={openUpdateModal} onClose={handleUpdateModal}>
        <UpdateBookingContent
          handleUpdateModal={handleUpdateModal}
          name={name}
          date={date}
          time={time}
        />
      </Modal>
    </>
  );
};

export default BookingMobileItem;
