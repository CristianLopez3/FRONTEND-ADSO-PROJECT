import { Pencil } from "phosphor-react";
import InputField from "@/components/Input/InputField";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Reservation,
  ReservationForm,
  reservationSchema,
} from "@/types/Reservation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useCallback } from "react";

import {
  createReservationAction,
  getReservationsAction,
} from "@/store/reservations";

type BookFormProps = {
  handleUpdateReservation?: () => void;
  handleCreateReservation?: () => void;
  mode: string;
} & Partial<ReservationForm>;

const BookForm = ({
  handleCreateReservation,
  handleUpdateReservation,
  mode,
  id,
  name,
  email,
  phoneNumber,
  reservationDate,
  description,
  numberOfPeople,
}: BookFormProps) => {
  const { register, handleSubmit } = useForm<ReservationForm>({
    defaultValues: {
      id,
      name,
      phoneNumber, // Agregado
      email, // Agregado
      reservationDate, // Agregado
      description,
      numberOfPeople,
    },
    resolver: zodResolver(reservationSchema),
  });

  const handleAction =
    mode === "create" ? handleCreateReservation : handleUpdateReservation;
  const text = mode === "update" ? "Update Menu" : "Create Menu";

  // const reservations = useSelector((state: RootState) => state.reservations);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<ReservationForm> = useCallback(
    async (data) => {
      try {
        data.id = data.id === "" || data.id === null ? null : data.id;
        const reservation: Reservation = {
          id: data.id,
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          description: data.description,
          reservationDate: data.reservationDate,
          numberOfPeople: data.numberOfPeople,
        };

        if (mode === "update" && reservation.id !== null) {
          // todo
        } else {
          await dispatch(createReservationAction(reservation));
        }
        dispatch(getReservationsAction());

        handleCreateReservation?.() || handleUpdateReservation?.();
      } catch (error) {
        throw new Error("Error creating or updating menu");
      }
    },
    [dispatch, handleCreateReservation, handleUpdateReservation, mode]
  );

  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <div className="flex justify-center items-center mb-8">
        <Pencil size={52} color="orange" />
      </div>
      <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
      <div className="text-left text-sm text-gray-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField {...register("id")} type="hidden" />
          <InputField {...register("name")} />
          <InputField {...register("phoneNumber")} /> 
          <InputField {...register("email")} /> 
          <InputField
            {...register("reservationDate")}
            type="datetime-local"
          />
          <InputField {...register("description")} />
          <InputField {...register("numberOfPeople")} />
          <div className="flex gap-4 mt-8">
            <button
              className={`${
                mode === "update" ? "btn btn-warning" : "btn btn-success"
              } w-full`}
              type="submit"
            >
              {text}
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

export default BookForm;
