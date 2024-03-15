export interface Column {
  title: string;
  width: string;
}

type TableHeaderProps = {
  columns: Column[];
};

const TableHeader = ({ columns }: TableHeaderProps) => {
  console.log(columns);
  return (
    <thead className="bg-gray-300">
      <tr className="text-left w-[100%]">
        {columns.map((column) => (
          <th
            key={column.title}
            className={`w-[${column.width}] p-3 text-gray-900 text-sm font-semibold tracking-wide `}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
