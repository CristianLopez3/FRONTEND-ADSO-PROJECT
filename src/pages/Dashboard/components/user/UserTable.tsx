import { User } from "@/src/types/User";
import UserMobileItem from "./UserMobileItem";
import Table from "../Dashboard/Table";
import UserRow from "./UserRow";

type UserTableProps = {
  data: User[];
};

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  return (
    <Table
      data={data}
      columns={[
        { title: "ID", width: "10%" },
        { title: "Name", width: "20%" },
        { title: "Cellphone", width: "20%" },
        { title: "Role", width: "10%" },
        { title: "Actions", width: "10%" },
      ]}
      renderRowItems={({
        id,
        cellphone,
        email,
        identification,
        lastName,
        name,
        password,
        role,
      }: User) => (
        <UserRow
          cellphone={cellphone}
          email={email}
          id={id}
          name={name}
          role={role}
          key={id}
          identification={identification}
          password={password}
          lastName={lastName}
        />
      )}
      renderMobileItems={({
        id,
        cellphone,
        email,
        identification,
        lastName,
        name,
        password,
        role,
      }: User) => (
        <UserMobileItem
          key={id}
          cellphone={cellphone}
          email={email}
          id={id}
          name={name}
          role={role}
          identification={identification}
          lastName={lastName}
          password={password}
        />
      )}
    />
  );
};

export default UserTable;