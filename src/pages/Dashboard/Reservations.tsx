import React, { Suspense, useCallback, useEffect, useState } from "react";
import { RiAddFill, RiPencilLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import DashboardNavbar from "./components/dashboard/DashboardNavbar";
const BookTable = React.lazy(() => import("./components/book/BookTable"));
import { Modal } from "@/components/Modal";
import BookForm from "./components/book/BookForm";
import { AppDispatch, RootState } from "@/store/store";
import { getReservationsAction } from "@/store/reservations";
import { TableSkeleton } from "@/components/Skeleton";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/constants";

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

  const handleModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    fetchReservations(dispatch);
  }, [dispatch]);

  return (
    <>
      <header>
        <DashboardNavbar>
          <h2 className={styles.title}>
            <div className={styles.title_line} />
            Reservations
          </h2>
          <div className="flex justify-around gap-2">
            <Button
              variant="success"
              className={styles.add_button}
              onClick={toggleAddModal}
            >
              <span>Add</span> <RiAddFill />
            </Button>
            <Link
              to={ROUTES.DASHBOARD.RESERVATIONS.REPORT}
              className="px-2 flex items-center gap-x-2 bg-zinc-300 text-zinc-900 rounded-md"
            >
              Generate Report <RiPencilLine />
            </Link>
          </div>
        </DashboardNavbar>
      </header>
      <main className={styles.main}>
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
        <BookForm mode="create" handleModal={handleModal} />
      </Modal>
    </>
  );
};

export default Reservations;
