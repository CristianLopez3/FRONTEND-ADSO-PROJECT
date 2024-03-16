import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Reservation } from "@/types/Reservation";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import BookForm from "./BookForm";
import DeleteModal from "@/components/Modal/DeleteModal";
import { formatedDate, formatedHour } from "@/utils/dateFormater";

type BookRowProps = { book: Reservation };

const BookRow = ({ book }: BookRowProps) => {
  const {
    id,
    name,
    description,
    email,
    numberOfPeople,
    phoneNumber,
    reservationDate,
  } = book;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal);
  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td className="row-table">{name}</td>
        <td className="row-table flex flex-col">
          {email}
          <span className="text-sm text-gray-600 font-semibold italic">{phoneNumber}</span>
        </td>
        <td className="row-table text-wrap">{description}</td>
        <td className="row-table flex flex-col">
          {formatedDate(reservationDate)}
          <span className="text-sm text-gray-600 font-semibold italic">
            {formatedHour(reservationDate)}
          </span>
        </td>

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
        <DeleteModal onDelete={handleDeleteModal} name={name} />
      </Modal>

      <Modal open={openUpdateModal} onClose={handleUpdateModal}>
        <BookForm
          id={id}
          name={name}
          email={email}
          description={description}
          reservationDate={reservationDate}
          numberOfPeople={numberOfPeople}
          phoneNumber={phoneNumber}
          mode="update"
        />
      </Modal>
    </>
  );
};

export default BookRow;
