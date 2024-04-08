import React, { Suspense, useEffect, useState, useCallback } from "react";
import { AppDispatch, RootState } from "@/store/store";

import { RiBookOpenLine } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

import DashboardNavbar from "./components/dashboard/DashboardNavbar";
const MenuTable = React.lazy(() => import("./components/menu/MenuTable"));
import Modal from "@/components/Modal/Modal";
import MenuForm from "./components/menu/MenuForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenusAction } from "@/store/menus/menuActions";
import { TableSkeleton } from "@/components/Skeleton";
import Alert from "@/components/Alert";
import Button from "@/components/Button";

// Move fetchMenus outside of the component
const fetchMenus = async (dispatch: AppDispatch) => {
  try {
    await dispatch(getAllMenusAction());
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

  const handleModal = useCallback(() => {
    setAddModal(false);
  }, []);

  useEffect(() => {
    fetchMenus(dispatch);
  }, [dispatch]);

  return (
    <>
      <header>
        <DashboardNavbar>
          <h2
            className="flex items-center text-zinc-300 font-bold  gap-2 text-2xl"
            onClick={toggleAddModal}
          >
            <RiBookOpenLine />
            Menus
            <Button variant="success" className="p-2">
              <RiAddFill />
            </Button>
          </h2>
        </DashboardNavbar>
      </header>
      <main className="px-2 md:px-8 mx-auto">
        {menus.isLoading ? (
          <TableSkeleton />
        ) : menus.isError ? (
          <Alert
            title="Error fetching menus"
            description="An error ocurred when the data was being brought in!"
            mode="danger"
          />
        ) : (
          <Suspense fallback={<TableSkeleton />}>
            <MenuTable data={menus.data} />
          </Suspense>
        )}
      </main>

      <Modal open={addModal} onClose={toggleAddModal}>
        <MenuForm mode="create" handleModal={handleModal} />
      </Modal>
    </>
  );
};

export default Menus;
