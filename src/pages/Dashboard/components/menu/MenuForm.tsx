import { Pencil } from "phosphor-react";
import InputField from "@/components/InputField";
import { Menu } from "@/types/Menu";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

const schema = z.object({
  id: z.union([z.string(), z.number(), z.null()]),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  state: z.boolean(),
});

type Inputs = z.infer<typeof schema>;

type MenuFormProps = {
  mode: "create" | "update";
  handleUpdateModal?: () => void;
  handleCreateModal?: () => void;
} & Partial<Inputs>;

const MenuForm = ({
  handleUpdateModal,
  handleCreateModal,
  id,
  title,
  price,
  state,
  description,
  mode,
}: MenuFormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const text = mode === "update" ? "Update Menu" : "Create Menu";
  const buttonText = mode === "update" ? "Update" : "Create";

  const handleAction =
    mode === "update" ? handleUpdateModal : handleCreateModal;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };
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
          <InputField {...register("state")} type="number" />
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
