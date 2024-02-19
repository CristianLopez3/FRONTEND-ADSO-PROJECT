import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";

type TableRowProps<T extends object> = {
  item: T;
};

const TableRow = <T extends object>({ item }: TableRowProps<T>) => {
  const keys = Object.keys(item);

  return (
    <tr className="bg-white hover:bg-grayLight transition-all">

      {keys.map((key, index) => (
        <td key={index} className="p-3 text-sm text-gray-700 whitespace-nowrap">
          {(item as any)[key]}
        </td>
      ))}
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <div className="flex gap-2">
          <Button size={28} color="warning" className="p-2">
            <Pencil />
          </Button>
          <Button size={28} color="error" className="p-2">
            <Trash />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
