import { type ReactNode } from "react";
import TableHeader, { Column } from "./TableHeader";

type TableProps = {
  columns: Column[];
  children: ReactNode;
};

const Table: React.FC<TableProps> = ({ columns, children }) => {
  return (
    <div className="w-full overflow-auto rounded-lg shadow hidden lg:block">
      <table className="w-full">
        <TableHeader columns={columns} />
        <tbody className="divide-y divide-gray-100 ">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
