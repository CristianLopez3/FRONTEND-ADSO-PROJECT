import { Pencil } from "phosphor-react";
import InputField from "../../ui/InputField";
import { User } from "../../../types/User";

type UpdateMenuContentProps = {
  handleUpdateModal: () => void;
} & User;

const UpdateMenuContent = ({
  handleUpdateModal,
  id,
  name,
  email,
  role,
  cellphone,
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
            id="name"
            name="name"
            placeholder="Update the name..."
            value={name}
            type="text"
          />
          <InputField
            id="email"
            name="email"
            placeholder="Update the email..."
            type="text"
            value={email}
          />
          <InputField
            id="cellphone"
            name="cellphone"
            placeholder="Update the cellphone..."
            value={cellphone}
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
