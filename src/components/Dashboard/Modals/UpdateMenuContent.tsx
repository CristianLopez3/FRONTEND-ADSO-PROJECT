import { Pencil } from "phosphor-react";
import InputField from "../../ui/InputField";
import { Menu } from "../../../types/Menu";

type UpdateMenuContentProps = {
  handleUpdateModal: () => void;
} & Menu;

const UpdateMenuContent = ({
  handleUpdateModal,
  id,
  title,
  price,
  quantity,
  description,
}: UpdateMenuContentProps) => {
  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <div className="flex justify-center items-center mb-8">
        <Pencil size={52} color="orange" />
      </div>
      <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
      <div className="text-left text-sm text-gray-500">
        <form>
          <InputField
            id="title"
            name="title"
            placeholder="Update the title..."
            value={title}
            type="text"
          />
          <InputField
            id="quantity"
            name="quantity"
            placeholder="Update the quantity..."
            type="number"
            value={`${quantity}`}
          />
          <InputField
            id="description"
            name="description"
            placeholder="Update the description..."
            value={description}
            type="text"
          />
        </form>
      </div>
      <div className="flex gap-4 mt-8">
        <button className="btn btn-warning w-full">Update</button>
        <button className="btn btn-light w-full" onClick={handleUpdateModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateMenuContent;
