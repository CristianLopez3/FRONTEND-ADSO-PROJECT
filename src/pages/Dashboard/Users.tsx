import Table from "../../components/Dashboard/Table";
import { User } from "../../types/User";
import MenuMobileItem from "../../components/Dashboard/MobileItems/MenuMobileItem";
import UserTableRow from "../../components/Dashboard/Rows/UserTableRow";
import UserMobileItem from "../../components/Dashboard/MobileItems/UserMobileItem";

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
  return (
    <main className="px-2 md:px-20 mx-auto">
      <Table
        data={dummyData}
        columns={[
          { title: "ID", width: "10%" },
          { title: "Title", width: "20%" },
          { title: "Description", width: "30%" },
          { title: "Price", width: "20%" },
          { title: "Quantity", width: "10%" },
          { title: "Actions", width: "10%" },
        ]}
        renderRowItems={(item: User, index) => (
          <UserTableRow
            cellphone={item.cellphone}
            email={item.email}
            id={item.id}
            name={item.name}
            role={item.role}
            key={item.id}
          />
        )}
        renderMobileItems={(item: User, index) => (
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
  );
};

export default Users;
