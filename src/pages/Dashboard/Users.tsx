import { PiUsers } from "react-icons/pi";
import DashboardNavbar from "./components/Dashboard/DashboardNavbar";
import { Button } from "keep-react";
import { RiAddFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import UserForm from "./components/user/UserForm";
import UserTable from "./components/user/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getAllUsers } from "@/store/user/UserReducer";
import Alert from "@/components/Alert";

const Users = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        await dispatch(getAllUsers());
      } catch (error) {
        console.error("Error fetching all users:", error);
      }
    };
    fetchAllUsers();
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
              onClick={() => setAddModal(!addModal)}
            >
              <RiAddFill />
            </Button>
          </h2>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
        {users.isLoading ? (
          <p>
            Loading...
          </p>
        ) : users.isError ? (
          <>
            <Alert title="Error fetching users" description="An error ocurred when the data was being brought in!" mode="warning" />
          </>
        ) : (
          <UserTable data={users.data} />
        )}
      </main>
      <Modal open={addModal} onClose={() => setAddModal(!addModal)}>
        <UserForm
          mode="create"
          handleCreateUser={() => setAddModal(!addModal)}
        />
      </Modal>
    </>
  );
};

export default Users;
