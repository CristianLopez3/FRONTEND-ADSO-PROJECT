import Alert from "@/components/Alert";
import { TableSkeleton } from "@/components/Skeleton";
import Toggle from "@/components/Toggle";
import { changeStateAction, getAllMenusAction } from "@/service/store/menus";
import { AppDispatch, RootState } from "@/service/store/store";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const fetchMenus = async (dispatch: AppDispatch) => {
  try {
    await dispatch(getAllMenusAction(0));
  } catch (error) {
    console.log(error);
  }
};

const MiniTable: React.FC = () => {
  const menus = useSelector((state: RootState) => state.menus);
  const dispatch = useDispatch<AppDispatch>();
  const [menuState, setMenuState] = useState<boolean>(false);
  useEffect(() => {
    fetchMenus(dispatch);
  }, [dispatch]);

  const onStateChange = async (state: boolean, id: number | string) => {
    const newState = !state;
    try {
      const resultAction = await dispatch(
        changeStateAction({ id: +id!, state: newState })
      );

      if (changeStateAction.fulfilled.match(resultAction)) {
        setMenuState(newState);
      }
    } catch (error) {
      console.error("Failed to change menu state:", error);
    }
  };

  return (
    <>
      {menus.isLoading ? (
        <TableSkeleton />
      ) : menus.isError ? (
        <Alert
          title="Error fetching menus"
          description="An error ocurred when the data was being brought in!"
          mode="danger"
        />
      ) : (
        <Suspense  fallback={<TableSkeleton />}>
          <table className="w-full max-w-[800px]  overflow-auto rounded-xl shadow-2xl ">
            <thead>
              <tr className="border-b">  
                <th className="mini-row-table bg-zinc-800 text-start">State</th>
                <th className="mini-row-table bg-zinc-800 text-start">Dish</th>
                <th className="mini-row-table bg-zinc-800 text-start w-1/4">Price</th>
                <th className="mini-row-table bg-zinc-800 text-start pr-8 hidden sm:block">Category</th>
              </tr>
            </thead>
            <tbody>
              {menus.data.map((menu) => (
                <tr key={menu.id}>
                  <td className="mini-row-table w-1/2">
                    <Toggle
                      variant="dark"
                      enabled={menu.state}
                      setEnabled={() => onStateChange(menu.state, menu.id!)}
                    />
                  </td>
                  <td className="mini-row-table">{menu.title}</td>
                  <td className="mini-row-table">{menu.price}</td>
                  <td className="mini-row-table hidden sm:block">{menu.category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Suspense>
      )}
    </>
  );
};

export default MiniTable;
