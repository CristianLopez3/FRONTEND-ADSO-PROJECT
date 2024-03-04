import { Menu } from "@/types/Menu";
import Table from "@/components/Table";
import MenuMobileItem from "./MenuMobileItem";
import MenuRow from "./MenuRow";

type MenuTableProps = {
  data: Menu[];
};

const MenuTable: React.FC<MenuTableProps> = ({ data }) => {
  return (
    <>
      <Table
        columns={[
          { title: "ID", width: "10%" },
          { title: "Title", width: "20%" },
          { title: "Description", width: "30%" },
          { title: "Price", width: "20%" },
          { title: "Quantity", width: "10%" },
          { title: "Actions", width: "10%" },
        ]}
      >
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => <MenuRow menu={item} key={index} />)
        ) : (
          <tr>
            <td colSpan={6} className="tex-left py-4 pl-4 bg-white">No data available yet!.</td>
          </tr>
        )}
      </Table>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => <MenuMobileItem menu={item} key={index} />)
        ) : (
          <p>No data available yet</p>
        )}
      </div>
    </>
  );
};

export default MenuTable;
