import { type ReactNode } from "react";
import TableHeader, { Column } from "./TableHeader";

type TableProps = {
  columns: Column[];
  children: ReactNode;
  // mobile: ReactNode;
};

const Table: React.FC<TableProps> = ({ columns, children }) => {
  return (
    <div>
      <div className="overflow-auto rounded-lg shadow hidden lg:block">
        <table className="w-full rounded-lg">
          <TableHeader columns={columns} />
          <tbody className="divide-y divide-gray-100 ">{children}</tbody>
        </table>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {mobile}
      </div> */}
    </div>
  );
};

export default Table;
