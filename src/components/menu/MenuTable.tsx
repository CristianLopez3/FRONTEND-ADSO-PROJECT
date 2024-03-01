
const MenuTableProps = {
  data: Menu[]
}

const MenuTable = ({data}: MenuTableProps) => {
  return (
    <Table
          data={dummyData}
          columns={[
            { title: "ID", width: "10%" },
            { title: "Title", width: "20%" },
            { title: "Description", width: "30%" },
            { title: "Price", width: "20%" },
            { title: "Quantity", width: "10%" },
            { title: "Actions", width: "10%" },
          ]}
          renderRowItems={(item: Menu, index) => (
            <MenuTableRow
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