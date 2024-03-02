import { User } from "../../types/User";
import { PiUsers } from "react-icons/pi";
import DashboardNavbar from "./components/Dashboard/DashboardNavbar";
import { Button } from "keep-react";
import { RiAddFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import UserForm from "./components/user/UserForm";
import UserTable from "./components/user/UserTable";
import { users_service } from "../../api/users";

const dummyData: Array<User> = [
  {
    id: 1,
    cellphone: "313 312 64 32",
    email: "crisitan@mail.com",
    name: "Cristian",
    role: "ADMIN",
    identification: "1234567",
    lastName: "Lopez",
    password: "***********",
  },
  {
    id: 2,
    cellphone: "313 348 32 32",
    email: "daniel@mail.com",
    name: "Daniel",
    role: "ADMIN",
    identification: "1234567",
    lastName: "Lopez",
    password: "***********",
  },
  {
    id: 3,
    cellphone: "313 322 32 32",
    email: "Camilo@mail.com",
    name: "Camilo",
    role: "ADMIN",
    identification: "1234567",
    lastName: "Lopez",
    password: "***********",
  },
  {
    id: 4,
    cellphone: "313 318 32 32",
    email: "Persona@mail.com",
    name: "Persona",
    role: "WAITRESS",
    identification: "1234567",
    lastName: "Lopez",
    password: "***********",
  },
  {
    id: 5,
    cellphone: "313 312 32 32",
    email: "daniel@mail.com",
    name: "Cristian",
    role: "BARTENDER",
    identification: "1234567",
    lastName: "Lopez",
    password: "***********",
  },
];

const Users = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  useEffect(() => {
    const getAllUsers = async () => {
      await users_service.getAll().then((data) => console.log(data));
    };
    getAllUsers();
  }, []);
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
        <UserTable data={dummyData} />
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
