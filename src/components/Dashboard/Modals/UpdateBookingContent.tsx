import { Pencil } from "phosphor-react";
import InputField from "../../ui/InputField";

type UpdateBookingContentProps = {
  handleUpdateModal: () => void;
  name: string;
  date: string;
  time: string;
}
const UpdateBookingContent = ({handleUpdateModal, name, date, time}: UpdateBookingContentProps) => {
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
          id="date"
          name="date"
          placeholder="Update the date..."
          value={date}
          type="date"
        />
        <InputField
          id="time"
          name="time"
          placeholder="Update the time..."
          value={time}
          type="time"
        />
      </form>
    </div>
    <div className="flex gap-4 mt-8">
      <button className="btn btn-warning w-full">Update</button>
      <button
        className="btn btn-light w-full"
        onClick={handleUpdateModal}
      >
        Cancel
      </button>
    </div>
  </div>
    )
}

export default UpdateBookingContent