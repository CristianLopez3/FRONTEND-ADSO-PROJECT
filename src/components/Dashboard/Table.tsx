import { Button } from "keep-react";
import { Trash, Pencil } from "phosphor-react";

const Table = () => {
  return (
    <div>
      <div className="overflow-auto rounded-lg shadow hidden lg:block">
        <table className="w-full rounded-lg">
          <thead className="bg-grayLight border-b-2 border-grayDark">
            <tr className="text-left">
              <th className="p-3 text-sm font-semibold tracking-wide w-20">
                No.
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide ">Name</th>
              <th className="p-3 text-sm font-semibold tracking-wide w-32">
                Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide w-24">
                Time
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide w-24">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 ">
            <tr className="bg-white hover:bg-grayLight transition-all">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                1000
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, cupiditate.
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                28-09-2024
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                08:30 pm
              </td>
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
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        <article className="bg-white p-4 rounded-lg shadow">
          <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
            <div>10-20-2024</div>
            <div>21:30</div>
          </div>
          <div className="text-sm text-gray-600 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, repudiandae? </div>
          <div className="flex gap-2">
            <Button size={28} color="warning" className="p-2">
              <Pencil />
            </Button>
            <Button size={28} color="error" className="p-2">
              <Trash />
            </Button>
          </div>
        </article>
        <article className="bg-white p-4 rounded-lg shadow">
          <div className="text-xs flex items-center justify-between space-x-2 md:text-sm gap-x-4">
            <div>10-20-2024</div>
            <div>21:30</div>
          </div>
          <div className="text-sm text-gray-600 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, repudiandae? </div>
          <div className="flex gap-2">
            <Button size={28} color="warning" className="p-2">
              <Pencil />
            </Button>
            <Button size={28} color="error" className="p-2">
              <Trash />
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Table;
