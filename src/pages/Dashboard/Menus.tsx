import Table from "../../components/Dashboard/Table";
import { Menu } from "../../types/Menu";
import MenuMobileItem from "../../components/Dashboard/MobileItems/MenuMobileItem";
import MenuTableRow from "../../components/Dashboard/Rows/MenuTableRow";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import { RiBookOpenLine } from "react-icons/ri";
import { Button } from "keep-react";
import { RiAddFill } from "react-icons/ri";
import Modal from "../../components/ui/Modal";
import { useState } from "react";
import MenuFormModal from "../../components/Dashboard/Modals/MenuFormModal";

const dummyData: Array<Menu> = [
  {
    id: 13,
    title: "Hot Potatoes",
    description: "potatoes with sault and sauce to patner",
    price: 2000,
    quantity: 20,
  },
  {
    id: 12,
    title: "Hot Potatoes",
    description: "potatoes with sault and sauce to patner",
    price: 2000,
    quantity: 20,
  },
  {
    id: 33,
    title: "Hot Potatoes",
    description: "potatoes with sault and sauce to patner",
    price: 2000,
    quantity: 20,
  },
  {
    id: 44,
    title: "Hot Potatoes",
    description: "potatoes with sault and sauce to patner",
    price: 2000,
    quantity: 20,
  },
];

const Menus = () => {
  const [addModal, setAddModal] = useState<boolean>(false);


  
  return (
    <>
      <header>
      <DashboardNavbar> 
            <h2 className="flex items-center text-black font-bold  gap-2 text-2xl" onClick={() => setAddModal(!addModal)}>
              <RiBookOpenLine />
              Menus
              <Button size={28} color="success" className="p-2">
              <RiAddFill />
            </Button>
            </h2>  
         
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
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
      </main>
      <Modal open={addModal} onClose={() => setAddModal(!addModal)}>
        <MenuFormModal  mode="create"   handleCreateModal={() => setAddModal(!addModal)} description="" price={0} quantity={0} title=""   />
      </Modal>
    </>
  );
};

export default Menus;
