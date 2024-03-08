import { useEffect } from "react";
import { Pencil } from "phosphor-react";
import InputField from "@/components/InputField";

import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  addMenuAction,
  getAllMenusAction,
  updateMenuAction,
} from "@/store/menus/menuActions";
import { getAllCategories } from "@/store/menus/CategoryReducer";
import { MenuPost } from "@/types/Menu";

import { MenuForm as MenuFormType, menuSchema } from "@/types/Menu";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@/components/Alert";

type MenuFormProps = {
  mode: "create" | "update";
  handleUpdateMenu?: () => void;
  handleCreateMenu?: () => void;
} & Partial<MenuFormType>;

const options = [
  { id: "1", name: "Choose an state" },
  { id: "2", name: "Active" },
  { id: "3", name: "Desactive" },
];

const fetchCategories = async (dispatch: AppDispatch) => {
  try {
    dispatch(getAllCategories());
  } catch (error) {
    console.log("Error in form menus" + error);
  }
};

const MenuForm = ({
  handleUpdateMenu,
  handleCreateMenu,
  id,
  title,
  description,
  price,
  state: formState,
  mode,
  categoryId
}: MenuFormProps) => {
  const categories = useSelector((state: RootState) => state.categories);
  const { register, handleSubmit } = useForm<MenuFormType>({
    defaultValues: {
      id,
      title,
      price,
      state: formState,
      description,
      categoryId
    },
    resolver: zodResolver(menuSchema),
  });
  const text = mode === "update" ? "Update Menu" : "Create Menu";
  const buttonText = mode === "update" ? "Update" : "Create";
  const dispatch = useDispatch<AppDispatch>();
  const handleAction = mode === "update" ? handleUpdateMenu : handleCreateMenu;

  const onSubmit: SubmitHandler<MenuFormType> = async (data) => {
    try {
      data.id = data.id === "" ? null : Number(data.id);
      const menu: MenuPost = {
        id: data.id,
        title: data.title,
        description: data.description,
        price: data.price,
        state: data.state === "2" ? true : false,
        idCategory: data.categoryId,
      };

      if (mode === "update" && menu.id !== null) {
        await dispatch(updateMenuAction(menu));
      } else {
        await dispatch(addMenuAction(menu));
      }
      console.log("Menu created" + menu);
      dispatch(getAllMenusAction());

      if (handleCreateMenu) {
        handleCreateMenu();
      } else if (handleUpdateMenu) {
        handleUpdateMenu();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories(dispatch);
  }, [dispatch]);

  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <div className="flex justify-center items-center mb-8">
        <Pencil size={52} color={mode === "update" ? "orange" : "green"} />
      </div>
      <h3 className="text-lg font-black text-gray-800">{text}</h3>
      <div className="text-left text-sm text-gray-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField {...register("id")} type="hidden" />
          <InputField {...register("title")} type="text" />
          <InputField {...register("description")} type="text" />
          <InputField {...register("price")} type="number" />

          <select {...register("state")}>
            {options.map((option) => (
              <option key={option.id.toString()} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          {categories.isLoading ? (
            <p>Loading...</p>
          ) : categories.isError ? (
            <Alert
              description="Error fetching categories"
              mode="danger"
              title="Failed getting categories"
            />
          ) : (
            <select
              {...register("categoryId")}
              defaultValue={categoryId}
            >
              <option value="">Select a category: </option>
              {categories.data.map((category) => (
                <option key={category.id.toString()} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          )}

          <div className="flex gap-4 mt-8">
            <button
              className={`${
                mode === "update" ? "btn btn-warning" : "btn btn-success"
              } w-full`}
              type="submit"
            >
              {buttonText}
            </button>
            <button className="btn btn-light w-full" onClick={handleAction}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuForm;
