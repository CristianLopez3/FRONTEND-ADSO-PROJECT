import { ReactNode } from "react";
import TableHeader, { Column } from "./TableHeader";




type TableProps<T> = {
  data: T[];
  columns: Column[];
  renderRowItems: (item: T, index: number | string) => ReactNode;
  renderMobileItems: (item: T, index: number | string) => ReactNode;
};

const MyTable = <T,>({
  data,
  columns,
  renderRowItems,
  renderMobileItems,
}: TableProps<T>) => {
  return (
    <div>
      <div className="overflow-auto rounded-lg shadow hidden lg:block">
        <table className="w-full rounded-lg">
          <TableHeader columns={columns} />
          <tbody className="divide-y divide-gray-100 ">
            {data.map((item, index) => renderRowItems(item, index))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {data.map((item, index) => renderMobileItems(item, index))}
      </div>
    </div>
  );
};

export default MyTable;
