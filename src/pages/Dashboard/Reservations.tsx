import React, { Suspense, useCallback, useEffect, useState } from "react";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import { RiAddFill, RiBookOpenLine } from "react-icons/ri";
const BookTable = React.lazy(() => import("./components/book/BookTable"));
import { Modal } from "@/components/Modal";
import BookForm from "./components/book/BookForm";
import { AppDispatch, RootState } from "@/store/store";
import { getReservationsAction } from "@/store/reservations";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "keep-react";
import { TableSkeleton } from "@/components/Skeleton";
import Alert from "@/components/Alert";

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
  const reservations = useSelector((state: RootState) => state.reservations);
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
      {reservations.isLoading ? (
          <TableSkeleton />
        ) : reservations.isError ? (
          <Alert
            title="Error fetching reservations"
            description="An error ocurred when the data was being brought in!"
            mode="danger"
          />
        ) : (
          <Suspense fallback={<TableSkeleton />}>
            <BookTable data={reservations.data} />
          </Suspense>
        )}
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
