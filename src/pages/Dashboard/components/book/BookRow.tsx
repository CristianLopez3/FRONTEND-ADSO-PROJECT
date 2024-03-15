import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";
import { Booking } from "@/types/Booking";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import BookForm from "./BookForm";
import DeleteModal from "@/components/Modal/DeleteModal";

type BookRowProps = { book: Booking };

const BookRow = ({ book }: BookRowProps) => {
  const { id, name, description, date, time } = book;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal);
  return (
    <>
      <tr className="bg-white hover:bg-grayLight transition-all">
        <td className="row-table">{name}</td>
        <td className="row-table flex flex-col text-sm">
          {time}
          <span className="text-sm text-gray-600">{date}</span>
        </td>
        <td className="row-table text-wrap">{description}</td>

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
          description={description}
          date={date}
          time={time}
          mode="update"
        />
      </Modal>
    </>
  );
};

export default BookRow;
