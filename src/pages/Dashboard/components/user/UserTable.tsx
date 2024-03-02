import { User } from "@/types/User";
import UserMobileItem from "./UserMobileItem";
import Table from "@/components/Table";
import UserRow from "./UserRow";

type UserTableProps = {
  data: User[];
};

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  return (
    <Table
      columns={[
        { title: "ID", width: "10%" },
        { title: "Name", width: "20%" },
        { title: "Cellphone", width: "20%" },
        { title: "Role", width: "10%" },
        { title: "Actions", width: "10%" },
      ]}
      rows={
        data.length === 0 ? (
          <p> No data available </p>
        ) : (
          data.map((item, index) => <UserRow user={item} key={index} />)
        )
      }
      mobile={
        data.length === 0 ? (
          <p> No data available </p>
        ) : (
          data.map((item, index) => <UserMobileItem user={item} key={index} />)
        )
      }
    />
  );
};

export default UserTable;
