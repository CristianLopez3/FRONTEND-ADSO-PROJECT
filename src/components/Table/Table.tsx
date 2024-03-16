import { type ReactNode } from "react";
import TableHeader from "./TableHeader";

type TableProps = {
  titles: string[];
  children: ReactNode;
};

const Table: React.FC<TableProps> = ({ titles, children }) => {
  return (
    <div className="w-full overflow-auto rounded-lg shadow hidden lg:block">
      <table className="w-full">
        <TableHeader titles={titles} />
        <tbody className="divide-y divide-gray-100 ">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
