import Table from "../../components/Dashboard/Table";
import { User } from "../../types/User";
import { PiUsers } from "react-icons/pi";
import UserTableRow from "../../components/Dashboard/Rows/UserTableRow";
import UserMobileItem from "../../components/Dashboard/MobileItems/UserMobileItem";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import { Button } from "keep-react";
import { RiAddFill } from "react-icons/ri";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import UserFormModal from "../../components/Dashboard/Modals/UserFormModal";

const dummyData: Array<User> = [
  {
    id: 1,
    cellphone: "313 312 32 32",
    email: "crisitan@mail.com",
    name: "Cristian",
    role: "ADMIN",
  },
  {
    id: 2,
    cellphone: "313 312 32 32",
    email: "daniel@mail.com",
    name: "Daniel",
    role: "ADMIN",
  },
  {
    id: 3,
    cellphone: "313 312 32 32",
    email: "Camilo@mail.com",
    name: "Camilo",
    role: "ADMIN",
  },
  {
    id: 4,
    cellphone: "313 312 32 32",
    email: "Persona@mail.com",
    name: "Persona",
    role: "WAITRESS",
  },
  {
    id: 5,
    cellphone: "313 312 32 32",
    email: "daniel@mail.com",
    name: "Cristian",
    role: "BARTENDER",
  },
];

const Users = () => {
  const [addModal, setAddModal] = useState<boolean>(false);

  return (
    <>
      <header>
        <DashboardNavbar>
          <h2 className="flex items-center text-black font-bold  gap-2 text-2xl">
            <PiUsers />
            Users
            <Button size={28} color="success" className="p-2" onClick={() => setAddModal(!addModal)}>
              <RiAddFill />
            </Button>
          </h2>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
        <Table
          data={dummyData}
          columns={[
            { title: "ID", width: "10%" },
            { title: "Name", width: "20%" },
            { title: "Email", width: "30%" },
            { title: "Cellphone", width: "20%" },
            { title: "Role", width: "10%" },
            { title: "Actions", width: "10%" },
          ]}
          renderRowItems={(item: User) => (
            <UserTableRow
              cellphone={item.cellphone}
              email={item.email}
              id={item.id}
              name={item.name}
              role={item.role}
              key={item.id}
            />
          )}
          renderMobileItems={(item: User) => (
            <UserMobileItem
              cellphone={item.cellphone}
              email={item.email}
              id={item.id}
              name={item.name}
              role={item.role}
            />
          )}
        />
      </main>
      <Modal open={addModal} onClose={() => setAddModal(!addModal)}>
        <UserFormModal mode="create" cellphone="" email="" handleCreateUser={() => setAddModal(!addModal)}  />
      </Modal>
    </>
  );
};

export default Users;
