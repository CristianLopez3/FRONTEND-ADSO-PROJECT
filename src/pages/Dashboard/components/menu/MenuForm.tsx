import { useCallback, useState } from "react";
import { Pencil } from "phosphor-react";
import InputField from "@/components/InputField";
import { Menu } from "@/types/Menu";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addMenu, getAllMenus, updateMenu } from "@/store/menus/MenuReducer";
import Select from "@/components/Select";

const schema = z.object({
  id: z.union([z.string(), z.number(), z.null()]),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  state: z.string(),
});

type Inputs = z.infer<typeof schema>;

type MenuFormProps = {
  mode: "create" | "update";
  handleUpdateMenu?: () => void;
  handleCreateMenu?: () => void;
} & Partial<Inputs>;

const options = [
  { id: "1", name: "Choose an state" },
  { id: "2", name: "Active" },
  { id: "3", name: "Desactive" },
];
const MenuForm = ({
  handleUpdateMenu,
  handleCreateMenu,
  id,
  title,
  price,
  state,
  description,
  mode,
}: MenuFormProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      id,
      title,
      price,
      state,
      description,
    },
  });
  const text = mode === "update" ? "Update Menu" : "Create Menu";
  const buttonText = mode === "update" ? "Update" : "Create";
  const dispatch = useDispatch<AppDispatch>();
  const handleAction = mode === "update" ? handleUpdateMenu : handleCreateMenu;

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    async (data) => {
      try {
        data.id = data.id === "" || data.id === null ? null : data.id;
        const menu: Menu = {
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,
          state: data.state === "true" ? true : false,
        };

        if (mode === "update" && menu.id !== null) {
          await dispatch(updateMenu(menu));
        } else {
          await dispatch(addMenu(menu));
        }

        dispatch(getAllMenus());

        handleCreateMenu?.() || handleUpdateMenu?.();
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, handleCreateMenu, handleUpdateMenu, mode]
  );
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
          <Select
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
          />

          <div className="flex gap-4 mt-8">
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
