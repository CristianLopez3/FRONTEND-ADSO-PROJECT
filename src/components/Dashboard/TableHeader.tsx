export interface Column {
  title: string;
  width: string;
}

type Props = {
  columns: Column[];
};

const TableHeader: React.FC<Props> = ({ columns }) => {
  return (
    <thead className="bg-grayLight border-b-2 border-grayDark">
      <tr className="text-left w-full">
        {columns.map((column, index) => (
          <th
            key={index}
            className={`p-3 text-sm font-semibold tracking-wide w-[${column.width}]`}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
