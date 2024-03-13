import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch, RootState } from "@/store/store";
import { formStyles } from "./constants";

import {
  addMenuAction,
  getAllMenusAction,
  updateMenuAction,
} from "@/store/menus";
import { getAllCategories } from "@/store/menus/CategoryReducer";
import { MenuPost } from "@/types/Menu";

import { type MenuForm, menuSchema } from "@/types/Menu";

import { Pencil } from "phosphor-react";
import { InputField } from "@/components/Input";

type MenuFormProps = {
  mode: "create" | "update";
  handleUpdateMenu?: () => void;
  handleCreateMenu?: () => void;
} & Partial<MenuForm>;

const options = ["Choose an state", "Active", "Desactive"];

const fetchCategories = async (dispatch: AppDispatch) => {
  try {
    dispatch(getAllCategories());
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};

const MenuForm = ({
  handleUpdateMenu,
  handleCreateMenu,
  id,
  title,
  description,
  price,
  state,
  idCategory,
  mode,
}: MenuFormProps) => {
  const [image, setImage] = useState<File | null>(null);
  const categories = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MenuForm>({
    defaultValues: {
      id,
      title,
      price,
      state,
      description,
      idCategory,
    },
    resolver: zodResolver(menuSchema),
  });

  const text = mode === "update" ? "Update Menu" : "Create Menu";
  const buttonText = mode === "update" ? "Update" : "Create";
  const handleAction = mode === "update" ? handleUpdateMenu : handleCreateMenu;

  useEffect(() => {
    reset({
      id,
      title,
      price,
      state,
      description,
      idCategory,
    });
  }, [id, title, price, state, description, idCategory, reset]);

  const onSubmit: SubmitHandler<MenuForm> = useCallback(
    async (data) => {
      try {
        data.id = data.id === "" || data.id === null ? null : data.id;
        const menu: MenuPost = {
          // id: data.id,
          title: data.title,
          description: data.description,
          price:
            typeof data.price === "string"
              ? parseFloat(data.price)
              : data.price,
          state: data.state === "Active" ? true : false,
          idCategory:
            typeof data.idCategory === "string"
              ? parseInt(data.idCategory)
              : data.idCategory,
        };

        const formData = new FormData();
        formData.append("image", image!);
        formData.append("menu", JSON.stringify(menu));
        console.log(formData);
        if (mode === "update" && menu.id !== null) {
          await dispatch(updateMenuAction(menu));
          // console.log(menu);
        } else {
          await dispatch(addMenuAction(formData));
        }
        dispatch(getAllMenusAction());

        handleCreateMenu?.() || handleUpdateMenu?.();
      } catch (error) {
        throw new Error("Error creating or updating menu");
      }
    },
    [dispatch, handleCreateMenu, handleUpdateMenu, mode, image]
  );

  useEffect(() => {
    fetchCategories(dispatch);
  }, [dispatch]);

  const renderErrorMessage = (error: { message?: string }) => {
    return error && <p className="p-1 text-red-700">{error.message}</p>;
  };

  return (
    <div className={formStyles.container}>
      <div className={formStyles.pencil}>
        <Pencil size={52} color={mode === "update" ? "orange" : "green"} />
      </div>
      <h3 className={formStyles.title}>{text}</h3>
      <div className={formStyles.form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="mx-auto w-32 h-32 border mt-6"
            />
          )}
          <InputField
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.files![0] ? e.target.files![0] : null)
            }
          />

          <InputField {...register("id")} type="hidden" />
          {renderErrorMessage(errors.id!)}
          <InputField {...register("title")} type="text" />
          {renderErrorMessage(errors.title!)}
          <InputField {...register("description")} type="text" />
          {renderErrorMessage(errors.description!)}
          <InputField {...register("price")} type="number" />
          {renderErrorMessage(errors.price!)}
          <select {...register("state")}>
            {options.map((option) => (
              <option key={option.toString()} value={option}>
                {option}
              </option>
            ))}
          </select>
          {renderErrorMessage(errors.state!)}
          {categories.isLoading ? (
            <p>Loading...</p>
          ) : categories.isError ? (
            <p>Error fetching categories</p>
          ) : (
            <select {...register("idCategory")}>
              <option value="">Select a category: </option>
              {categories.data.map((category) => (
                <option key={category.id.toString()} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
          {renderErrorMessage(errors.idCategory!)}

          <div className={formStyles.buttons}>
            <button
              className={`${
                mode === "update" ? "btn btn-warning" : "btn btn-success"
              } w-full`}
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
