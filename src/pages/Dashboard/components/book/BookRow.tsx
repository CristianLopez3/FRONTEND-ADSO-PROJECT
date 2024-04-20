import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { Reservation } from "@/types/Reservation";
import { useCallback, useState } from "react";
import Modal from "@/components/Modal/Modal";
import BookForm from "./BookForm";
import DeleteModal from "@/components/Modal/DeleteModal";
import { formatedDate, formatedHour } from "@/utils/dateFormater";
import { InputCheck } from "@/components/Input";
import { checkedInReservationAction } from "@/store/reservations/reservationActions";
import { PiTrash, PiPencil } from "react-icons/pi";
import Button from "@/components/Button";

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
    checkedIn,
  } = book;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(checkedIn!);
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteModal = useCallback(
    () => setOpenDeleteModal((prev) => !prev),
    []
  );
  const handleModal = useCallback(
    () => setOpenUpdateModal((prev) => !prev),
    []
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    if (isChecked) {
      dispatch(checkedInReservationAction({ id: id!, checkedIn: isChecked }));
    }
  };

  return (
    <>
      <tr className="transition-all">
        <td className="row-table">
          <form className="flex items-center justify-left pl-4">
            <InputCheck
              checked={checked}
              onChange={handleCheckboxChange}
              variant="success"
              disabled={checked}
            />
          </form>
        </td>
        <td className="row-table max-w-[100px] text-balance">{name}</td>

        <td className="row-table w-fit">
          {email}
          <span className="block text-sm bg-zinc-800 font-semibold italic">
            {phoneNumber}
          </span>
        </td>
        <td className="row-table max-w-[300px] text-balance">{description}</td>
        <td className="row-table bg-zinc-800 w-fit">
          {formatedDate(reservationDate)}
          <span className="block text-sm  text-zinc-400 font-semibold italic">
            {formatedHour(reservationDate)}
          </span>
        </td>
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

      <Modal width="1/4" open={openDeleteModal} onClose={handleDeleteModal}>
        <DeleteModal onDelete={handleDeleteModal} name={name} />
      </Modal>

      <Modal open={openUpdateModal} onClose={handleModal}>
        <BookForm
          id={id}
          name={name}
          email={email}
          description={description}
          reservationDate={reservationDate}
          numberOfPeople={numberOfPeople}
          phoneNumber={phoneNumber}
          mode="update"
          handleModal={handleModal}
        />
      </Modal>
    </>
  );
};

export default BookRow;
