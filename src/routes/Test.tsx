import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

interface IMenuData {
  title: string;
  description: string;
  price: string;
  state: string;
  idCategory: string;
}

const Test: React.FC = () => {
  const [menuData, setMenuData] = useState<IMenuData>({
    title: '',
    description: '',
    price: '',
    state: '',
    idCategory: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMenuData({
      ...menuData,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('menu', JSON.stringify(menuData));
    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    axios.post('http://localhost:9000/menus', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white text-black flex flex-col items-center justify-center'>
      <label>
        Title:
        <input className="border border-black my-2 ml-2" type="text" name="title" onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input className="border border-black my-2 ml-2" type="text" name="description" onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input className="border border-black my-2 ml-2" type="text" name="price" onChange={handleInputChange} />
      </label>
      <label>
        State:
        <input className="border border-black my-2 ml-2" type="text" name="state" onChange={handleInputChange} />
      </label>
      <label>
        Category ID:
        <input className="border border-black my-2 ml-2" type="text" name="idCategory" onChange={handleInputChange} />
      </label>
      <label>
        Image:
        <input className="border border-black my-2 ml-2" type="file" onChange={handleFileChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Test;

/**
 * import { ChangeEvent, useCallback, useEffect, useState } from "react";
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
          id: data.id,
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
        formData.append("menu", JSON.stringify(menu));
        formData.append("image", image!);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField {...register("id")} type="hidden" />
          {renderErrorMessage(errors.id!)}
          <InputField {...register("title")} type="text" />
          {renderErrorMessage(errors.title!)}
          <InputField {...register("description")} type="text" />
          {renderErrorMessage(errors.description!)}
          <InputField {...register("price")} type="number" />
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.files !== null ? e.target.files[0] : null)
            }
          />
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

 */