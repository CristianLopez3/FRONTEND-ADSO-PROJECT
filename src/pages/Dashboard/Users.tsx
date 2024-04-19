import React, { Suspense, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getAllUsersAction } from "@/store/user";

import { RiAddFill } from "react-icons/ri";

import { TableSkeleton } from "@/components/Skeleton";
import { Modal } from "@/components/Modal";
import Alert from "@/components/Alert";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import UserForm from "./components/user/UserForm";
import Button from "@/components/Button";
const UserTable = React.lazy(() => import("./components/user/UserTable"));

import styles from "./styles.module.css";

// Move fetchAllUsers outside of the component
const fetchAllUsers = async (dispatch: AppDispatch) => {
  try {
    await dispatch(getAllUsersAction());
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
};

const Users = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);

  // Use useCallback to memoize event handlers
  const toggleAddModal = useCallback(() => {
    setAddModal((prevState) => !prevState);
  }, []);

  const handleCreateUser = useCallback(() => {
    setAddModal(false);
  }, []);

  useEffect(() => {
    fetchAllUsers(dispatch);
  }, [dispatch]);

  return (
    <>
      <header>
        <DashboardNavbar>
          <h2 className={styles.title}>
            <div className={styles.title_line} />
            Users
          </h2>
          <Button
            variant="success"
            className={styles.add_button}
            onClick={toggleAddModal}
          >
            <span>Add</span> <RiAddFill />
          </Button>
        </DashboardNavbar>
      </header>
      <main className={styles.main}>
        {users.isLoading ? (
          <TableSkeleton />
        ) : users.isError ? (
          <Alert
            title="Error fetching users"
            description="An error ocurred when the data was being brought in!"
            mode="danger"
          />
        ) : (
          <Suspense fallback={<TableSkeleton />}>
            <UserTable data={users.data} />
          </Suspense>
        )}
      </main>
      <Modal open={addModal} onClose={toggleAddModal}>
        <UserForm mode="create" handleCreateUser={handleCreateUser} />
      </Modal>
    </>
  );
};

export default Users;
