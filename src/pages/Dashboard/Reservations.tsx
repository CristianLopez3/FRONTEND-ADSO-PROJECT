import { useCallback, useEffect, useState } from "react";
import { Reservation } from "@/types/Reservation";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import { RiAddFill, RiBookOpenLine } from "react-icons/ri";
import BookTable from "./components/book/BookTable";
import { Modal } from "@/components/Modal";
import BookForm from "./components/book/BookForm";
import { AppDispatch } from "@/store/store";
import { getReservationsAction } from "@/store/reservations";
import { useDispatch } from "react-redux";
import { Button } from "keep-react";

const dummyData: Array<Reservation> = [];

// Move fetchMenus outside of the component
const fetchReservations = async (dispatch: AppDispatch) => {
  try {
    await dispatch(getReservationsAction());
  } catch (error) {
    console.log(error);
  }
};

const Reservations = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  // Use useCallback to memoize event handlers
  const toggleAddModal = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleCreateReservation = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    fetchReservations(dispatch);
  }, [dispatch]);

  return (
    <>
      <header>
        <DashboardNavbar>
          <h2
            className="flex items-center text-black font-bold  gap-2 text-2xl"
            onClick={toggleAddModal}
          >
            <RiBookOpenLine />
            Reservations
            <Button size={28} color="success" className="p-2">
              <RiAddFill />
            </Button>
          </h2>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
        <BookTable data={dummyData} />
      </main>
      <Modal open={isOpen} onClose={toggleAddModal}>
        <BookForm
          mode="create"
          handleCreateReservation={handleCreateReservation}
        />
      </Modal>
    </>
  );
};

export default Reservations;
