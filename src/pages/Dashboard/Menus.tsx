import { RiBookOpenLine } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";
import { Button } from "keep-react";
import DashboardNavbar from "./components/Dashboard/DashboardNavbar";
import MenuTable from "./components/menu/MenuTable";
import Modal from "@/components/Modal";
import { Menu } from "@/types/Menu";
import { useState } from "react";
import MenuForm from "./components/menu/MenuForm";

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
          <h2
            className="flex items-center text-black font-bold  gap-2 text-2xl"
            onClick={() => setAddModal(!addModal)}
          >
            <RiBookOpenLine />
            Menus
            <Button size={28} color="success" className="p-2">
              <RiAddFill />
            </Button>
          </h2>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-20 mx-auto">
        <MenuTable data={dummyData} />
      </main>

      <Modal open={addModal} onClose={() => setAddModal(!addModal)}>
        <MenuForm
          mode="create"
          handleCreateModal={() => setAddModal(!addModal)}
          description=""
          price={0}
          quantity={0}
          title=""
        />
      </Modal>
    </>
  );
};

export default Menus;
