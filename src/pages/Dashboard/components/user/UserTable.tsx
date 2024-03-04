import { User } from "@/types/User";
import UserMobileItem from "./UserMobileItem";
import Table from "@/components/Table";
import UserRow from "./UserRow";

type UserTableProps = {
  data: User[];
};

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  return (
    <>
      <Table
        columns={[
          { title: "ID", width: "10%" },
          { title: "Name", width: "20%" },
          { title: "Cellphone", width: "20%" },
          { title: "Role", width: "10%" },
          { title: "Actions", width: "10%" },
        ]}
      >
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => <UserRow user={item} key={index} />)
        ) : (
          <tr>
          <td colSpan={5} className="tex-left py-4 pl-4 bg-white">No data available yet!.</td>
        </tr>
        )}
      </Table>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => <UserMobileItem user={item} key={index} />)
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default UserTable;
