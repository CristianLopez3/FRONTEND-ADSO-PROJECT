import { Button } from "keep-react";

interface Column {
    title: string;
    width: string;
}

const TableHeader: React.FC<{ columns: Column[] }> = ({ columns }) => {
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

interface Action {
  icon: JSX.Element;
  color: string;
  onClick: () => void;
}

interface TableRowProps {
  rowData: string[];
  actions: Action[];
}

const TableRow: React.FC<TableRowProps> = ({ rowData, actions }) => {
  return (
    <tr className="bg-white hover:bg-grayLight transition-all">
      {rowData.map((data, index) => (
        <td key={index} className="p-3 text-sm text-gray-700 whitespace-nowrap">
          {data}
        </td>
      ))}
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <div className="flex gap-2">
          {actions.map((action, index) => (
            <Button
              key={index}
              size={28}
              color={action.color}
              className="p-2"
              onClick={action.onClick}
            >
              {action.icon}
            </Button>
          ))}
        </div>
      </td>
    </tr>
  );
};

interface MobileItemProps {
    date: string;
    time: string;
    description: string;
    actions: Action[];
}

const MobileItem: React.FC<MobileItemProps> = ({
  date,
  time,
  description,
  actions,
}) => {
  return (
    <article className="bg-white p-4 rounded-lg shadow">
      <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <div className="text-sm text-gray-600 py-2">{description}</div>
      <div className="flex gap-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            size={28}
            color={action.color}
            className="p-2"
            onClick={action.onClick}
          >
            {action.icon}
          </Button>
        ))}
      </div>
    </article>
  );
};




interface TableProps {
    data: string[][];
    columns: Column[];
    mobileItems: MobileItemProps[];
}


const Table: React.FC<TableProps> = ({ data, columns, mobileItems }) => {
  return (
    <div>
      <div className="overflow-auto rounded-lg shadow hidden lg:block">
        <table className="w-full rounded-lg">
          <TableHeader columns={columns} />
          <tbody className="divide-y divide-gray-100 ">
            {data.map((rowData, index) => (
              <TableRow
                key={index}
                rowData={rowData}
                actions={columns[columns.length - 1].actions}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {mobileItems.map((item, index) => (
          <MobileItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Table;
