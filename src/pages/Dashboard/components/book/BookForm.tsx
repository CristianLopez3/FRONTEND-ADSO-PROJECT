import InputField from "@/components/Input/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiPencil } from "react-icons/pi";

import {
  Reservation,
  ReservationForm,
  reservationSchema,
} from "@/utils/types/Reservation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import React, { useCallback, useState } from "react";

import {
  createReservationAction,
  getReservationsAction,
  updateReservationAction,
} from "@/store/reservations";
import Button from "@/components/Button";

type BookFormProps = {
  handleModal: () => void;
  mode: string;
} & Partial<ReservationForm>;

const BookForm: React.FC<BookFormProps> = ({
  handleModal,
  mode,
  id,
  name,
  email,
  phoneNumber,
  reservationDate,
  description,
  numberOfPeople,
}) => {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationForm>({
    defaultValues: {
      id,
      name,
      phoneNumber,
      email,
      reservationDate: reservationDate ? reservationDate.split("T")[0] : "", // Divide la fecha
      reservationTime: reservationDate
        ? reservationDate.split("T")[1].substring(0, 5)
        : "", // Divide la hora
      description,
      numberOfPeople,
    },
    resolver: zodResolver(reservationSchema),
  });

  const text = mode === "update" ? "Update" : "Create";

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<ReservationForm> = useCallback(
    async (data) => {
      try {
        const reservationDateTime = `${data.reservationDate}T${data.reservationTime}:00`;
        const currentDate = new Date().toISOString().split("T")[0];
        if (
          reservationDate &&
          reservationDate < currentDate &&
          mode === "update"
        ) {
          console.log("error"); 
          setError("Cannot edit a reservation that has already passed.");
          return;
        }
        data.id = data.id === "" || data.id === null ? null : data.id;
        const reservation: Reservation = {
          id: data.id,
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          description: data.description,
          reservationDate: reservationDateTime,
          numberOfPeople: data.numberOfPeople,
        };

        console.log("Reservation object to be dispatched:", reservation);

        if (mode === "update" && reservation.id !== null) {
          reservation.checkedIn = true;
          await dispatch(updateReservationAction(reservation));
        } else {
          await dispatch(createReservationAction(reservation));
        }
        dispatch(getReservationsAction());
        handleModal();
      } catch (error) {
        console.error("Error in onSubmit:", error);
        throw new Error("Error creating or updating reservation");
      }
    },
    [dispatch, handleModal, mode]
  );

  const renderErrorMessage = (error: { message?: string }) => {
    return error && <p className="p-1 text-red-700">{error.message}</p>;
  };

  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <div className="flex justify-center items-center mb-8">
        <PiPencil size={52} color="orange" />
      </div>
      <h3 className="text-lg font-black text-gray-800">{text}</h3>
      {error && <p className="p-1 text-red-700 mt-4 bg-red-100 px-4 py-2 rounded-md">{error}</p>}
      <div className="text-left text-sm text-gray-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField {...register("id")} type="hidden" />
          {renderErrorMessage(errors.id!)}

          <InputField {...register("name")} />
          {renderErrorMessage(errors.name!)}

          <InputField {...register("phoneNumber")} placeholder="phone number" />
          {renderErrorMessage(errors.phoneNumber!)}

          <InputField {...register("email")} />
          {renderErrorMessage(errors.email!)}

          <InputField {...register("reservationDate")} type="date" />
          {renderErrorMessage(errors.reservationDate!)}

          <InputField {...register("reservationTime")} type="time" />
          {renderErrorMessage(errors.reservationTime!)}

          <InputField {...register("description")} />
          {renderErrorMessage(errors.description!)}

          <InputField
            {...register("numberOfPeople")}
            placeholder="number of people"
            type="number"
          />
          {renderErrorMessage(errors.numberOfPeople!)}

          <div className="flex gap-4 mt-8">
            <Button
              variant={`${mode === "update" ? "warning" : "success"}`}
              className="w-full"
              content={text}
            />
            <Button
              variant="light"
              className="w  -full"
              onClick={handleModal}
              content="cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
