import React, { Suspense, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

import { PiUsers } from "react-icons/pi";
import { RiAddFill } from "react-icons/ri";

import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import { Button } from "keep-react";
import Modal from "@/components/Modal/Modal";
import UserForm from "./components/user/UserForm";
const UserTable = React.lazy(() => import('./components/user/UserTable'));
import { getAllUsers } from "@/store/user/UserReducer";
import Alert from "@/components/Alert";
import Skeleton from "@/components/Skeleton";

// Move fetchAllUsers outside of the component
const fetchAllUsers = async (dispatch: AppDispatch) => {
  try {
    await dispatch(getAllUsers());
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
    setAddModal(prevState => !prevState);
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
          <h2 className="flex items-center text-black font-bold  gap-2 text-2xl">
            <PiUsers />
            Users
            <Button
              size={28}
              color="success"
              className="p-2"
              onClick={toggleAddModal}
            >
              <RiAddFill />
            </Button>
          </h2>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
        {users.isLoading ? (
          <Skeleton />
        ) : users.isError ? (
          <Alert
            title="Error fetching users"
            description="An error ocurred when the data was being brought in!"
            mode="danger"
          />
        ) : (
          <Suspense fallback={<Skeleton />}>
            <UserTable data={users.data} />
          </Suspense>
        )}
      </main>
      <Modal open={addModal} onClose={toggleAddModal}>
        <UserForm
          mode="create"
          handleCreateUser={handleCreateUser}
        />
      </Modal>
    </>
  );
};

export default Users;