type TableHeaderProps = {
  titles: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({titles}) => {
  return (
    <thead className="bg-gray-300">
      <tr className="text-left w-[100%]">
        {titles.map((title) => (
          <th
            key={title}
            className={` p-3 text-gray-900 text-sm font-semibold tracking-wide `}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
