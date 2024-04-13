import React from "react";

import { User } from "@/types/User";
import Table from "@/components/Table";

const UserRow = React.lazy(() => import("./UserRow"));
const UserMobileItem = React.lazy(() => import("./UserMobileItem"));

type UserTableProps = {
  data: User[];
};

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  return (
    <>
      <Table>
        {Array.isArray(data) && data.length > 0 ? (
          <React.Suspense
            fallback={
              <tr>
                <td colSpan={5}>Loading...</td>
              </tr>
            }
          >
            {data.map((item, index) => (
              <UserRow user={item} key={index} />
            ))}
          </React.Suspense>
        ) : (
          <tr>
            <td colSpan={5} className="text-left py-4 pl-4 bg-zinc-800 text-zinc-300">
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
