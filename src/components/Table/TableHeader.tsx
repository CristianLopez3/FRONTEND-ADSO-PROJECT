export interface Column {
  title: string;
  width: string;
}

type TableHeaderProps = {
  columns: Column[];
};

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead className="bg-gray-300">
      <tr className="text-left w-full">
        {columns.map((column) => (
          <th
            key={column.title}
            className={`p-3 text-gray-900 text-sm font-semibold tracking-wide ${column.width}`}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;