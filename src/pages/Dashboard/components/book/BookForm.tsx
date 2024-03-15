import { Pencil } from "phosphor-react";
import InputField from "@/components/Input/InputField";
import { useForm } from "react-hook-form";
import { BookingForm, bookSchema } from "@/types/Booking";
import { zodResolver } from "@hookform/resolvers/zod";

type BookFormProps = {
  handleUpdateBooking?: () => void;
  handleCreateBooking?: () => void;
  mode: string;
} & Partial<BookingForm>;

const BookForm = ({
  handleCreateBooking,
  handleUpdateBooking,
  mode,
  id,
  name,
  date,
  time,
  description,
}: BookFormProps) => {
  const { register } = useForm<BookingForm>({
    defaultValues: {
      id,
      name,
      description,
      date,
      time,
    },
    resolver: zodResolver(bookSchema),
    // * Select function to handle the form by the mode
  });
  const handleAction =
    mode === "create" ? handleCreateBooking : handleUpdateBooking;

  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <div className="flex justify-center items-center mb-8">
        <Pencil size={52} color="orange" />
      </div>
      <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
      <div className="text-left text-sm text-gray-500">
        <form>
          <InputField {...register("id")} type="hidden" />
          <InputField {...register("name")} />

          <InputField {...register("description")} />
          <InputField {...register("date")} />
          <InputField {...register("time")} />
        </form>
      </div>
      <div className="flex gap-4 mt-8">
        <button className="btn btn-warning w-full">Update</button>
        <button className="btn btn-light w-full" onClick={handleAction}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookForm;
