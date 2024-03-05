import React from "react";
import { User } from "@/types/User";
const UserMobileItem = React.lazy(() => import("./UserMobileItem"));
import Table from "@/components/Table";
const UserRow = React.lazy(() => import("./UserRow"));

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
          <React.Suspense fallback={<div>Loading...</div>}>
            {data.map((item, index) => (
              <UserRow user={item} key={index} />
            ))}
          </React.Suspense>
        ) : (
          <tr>
            <td colSpan={5} className="tex-left py-4 pl-4 bg-white">
              No data available yet!.
            </td>
          </tr>
        )}
      </Table>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {Array.isArray(data) && data.length > 0 ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            {data.map((item, index) => (
              <UserMobileItem user={item} key={index} />
            ))}
          </React.Suspense>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default UserTable;
