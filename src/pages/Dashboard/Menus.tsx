import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";

import { RiBookOpenLine } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

import { Button } from "keep-react";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import MenuTable from "./components/menu/MenuTable";
import Modal from "@/components/Modal";
import MenuForm from "./components/menu/MenuForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenus } from "@/store/menus/MenuReducer";
import Skeleton from "@/components/Skeleton";
import Alert from "@/components/Alert";

const Menus = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const menus = useSelector((state: RootState) => state.menus);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        await dispatch(getAllMenus());
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenus();
  }, [dispatch]);
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
        {menus.isLoading ? (
          <Skeleton />
        ) : menus.isError ? (
          <Alert
            title="Error fetching menus"
            description="An error ocurred when the data was being brought in!"
            mode="danger"
          />
        ) : (
          <MenuTable data={menus.data} />
        )}
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
