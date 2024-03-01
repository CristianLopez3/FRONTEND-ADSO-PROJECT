import { Pencil } from "phosphor-react";
import InputField from "../UI/InputField";

type BookFormProps = {
  handleUpdateModal: () => void;
  name: string;
  date: string;
  time: string;
}
const BookForm = ({handleUpdateModal, name, date, time}: BookFormProps) => {
  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
    <div className="flex justify-center items-center mb-8">
      <Pencil size={52} color="orange" />
    </div>
    <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
    <div className="text-left text-sm text-gray-500">
      <form>
        <InputField
          name="name"
          value={name}
          type="text"
        />
        <InputField
          name="date"
          value={date}
          type="date"
        />
        <InputField
          name="time"
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

export default BookForm;