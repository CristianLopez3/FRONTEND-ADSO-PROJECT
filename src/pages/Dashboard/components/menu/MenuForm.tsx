import { Pencil } from "phosphor-react";
// import InputField from "../../../../components/InputField";
import InputField from "@/components/InputField";
// import { Menu } from "../../../../types/Menu";
import { Menu } from "@/types/Menu";
type MenuFormProps = {
  mode: "create" | "update"
  handleUpdateModal?: () => void;
  handleCreateModal?: () => void;
} & Menu;

const MenuForm = ({
  handleUpdateModal,
  handleCreateModal,
  id,
  title,
  price,
  quantity,
  description,
  mode
}: MenuFormProps) => {
  const text = mode === "update" ? "Update Menu" : "Create Menu";
  const buttonText = mode === "update" ? "Update" : "Create";
  const handleAction = mode === "update" ? handleUpdateModal : handleCreateModal;
  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <div className="flex justify-center items-center mb-8">
        <Pencil size={52} color={mode === "update" ? "orange" : "green"} />
      </div>
      <h3 className="text-lg font-black text-gray-800">{text}</h3>
      <div className="text-left text-sm text-gray-500">
        <form>
          <input type="hidden" value={id} />
          <InputField
            name="title"
            value={title}
            type="text"
          />
          <InputField
            name="quantity"
            type="number"
            value={`${quantity}`}
          />
          <InputField
            name="description"
            value={description}
            type="text"
          />
        </form>
      </div>
      <div className="flex gap-4 mt-8">
        <button className={`${mode === "update" ? "btn btn-warning": "btn btn-success"} w-full`}>{buttonText}</button>
        <button className="btn btn-light w-full" onClick={handleAction}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MenuForm;
