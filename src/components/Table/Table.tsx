import { type ReactNode } from "react";

type TableProps = {
  children: ReactNode;
};

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="w-full overflow-auto rounded-xl shadow-2xl hidden lg:block">
      <table className="w-full">
        <tbody className="py-4">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
