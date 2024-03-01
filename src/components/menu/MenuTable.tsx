import { Menu } from "../../types/Menu";
import Table from "../UI/Table";
import MenuMobileItem from "./MenuMobileItem";
import MenuRow from "./MenuRow";
type MenuTableProps = {
  data: Menu[]
}

const MenuTable = ({data}: MenuTableProps) => {
  return (
    <Table
          data={data}
          columns={[
            { title: "ID", width: "10%" },
            { title: "Title", width: "20%" },
            { title: "Description", width: "30%" },
            { title: "Price", width: "20%" },
            { title: "Quantity", width: "10%" },
            { title: "Actions", width: "10%" },
          ]}
          renderRowItems={(item: Menu, index) => (
            <MenuRow
              id={item.id}
              description={item.description}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              key={index}
            />
          )}
          renderMobileItems={(item: Menu, index) => (
            <MenuMobileItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
            />
          )}
        />
  )
}

export default MenuTable;