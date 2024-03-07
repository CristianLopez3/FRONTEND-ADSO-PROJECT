import React, { Suspense, useEffect, useState, useCallback } from "react";
import { AppDispatch, RootState } from "@/store/store";

import { RiBookOpenLine } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

import { Button } from "keep-react";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
const MenuTable = React.lazy(() => import("./components/menu/MenuTable"));
import Modal from "@/components/Modal/Modal";
import MenuForm from "./components/menu/MenuForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenus } from "@/store/menus/MenuReducer";
import Skeleton from "@/components/Skeleton";
import Alert from "@/components/Alert";

// Move fetchMenus outside of the component
const fetchMenus = async (dispatch: AppDispatch) => {
  try {
    await dispatch(getAllMenus());
  } catch (error) {
    console.log(error);
  }
};

const Menus = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const menus = useSelector((state: RootState) => state.menus);

  // Use useCallback to memoize event handlers
  const toggleAddModal = useCallback(() => {
    setAddModal((prevState) => !prevState);
  }, []);

  const handleCreateMenu = useCallback(() => {
    setAddModal(false);
  }, []);

  useEffect(() => {
    fetchMenus(dispatch);
  }, [dispatch]);
  
  console.log(menus.data)
  return (
    <>
      <header>
        <DashboardNavbar>
          <h2
            className="flex items-center text-black font-bold  gap-2 text-2xl"
            onClick={toggleAddModal}
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
          <Suspense fallback={<Skeleton />}>
            <MenuTable data={menus.data} />
          </Suspense>
        )}
      </main>

      <Modal open={addModal} onClose={toggleAddModal}>
        <MenuForm mode="create" handleCreateMenu={handleCreateMenu} />
      </Modal>
    </>
  );
};

export default Menus;
