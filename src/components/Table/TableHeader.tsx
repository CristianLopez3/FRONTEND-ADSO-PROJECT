export type Column = {
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
        {columns.map((column, index) => (
          <th
            key={index}
            className={`p-3 text-gray-900 text-sm font-semibold tracking-wide w-[${column.width}]`}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
