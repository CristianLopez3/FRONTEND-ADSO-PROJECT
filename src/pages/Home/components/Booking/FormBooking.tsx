// import { useState } from "react";
import Button from "@/components/Button";
import { InputField } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { createReservationAction } from "@/store/reservations";
import { AppDispatch } from "@/store/store";
import {
  Reservation,
  ReservationForm,
  reservationSchema,
} from "@/types/Reservation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const FormBooking = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // to manipulate modal when form is submitted
  const [isLoading ,setIsLoading ] = useState<boolean>(false); 

  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isLoading },
    reset,
  } = useForm<ReservationForm>({
    defaultValues: {
      id: null,
      name: "",
      email: "",
      phoneNumber: "",
      reservationDate: "",
      description: "",
      numberOfPeople: 0,
    },
    resolver: zodResolver(reservationSchema),
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isSubmitted) {
      setIsOpen(true);
      timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 2000); // close modal after 5 seconds
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSubmitted]);

  const onSubmit: SubmitHandler<ReservationForm> = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        console.log("Data received by onSubmit:", data); // Agregado

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

        // console.log("Reservation object to be dispatched:", reservation); // Agregado
        await dispatch(createReservationAction(reservation));
        reset();
      } catch (error) {
        console.error("Error in onSubmit:", error); // Agregado
        throw new Error("Error creating or updating menu");
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, reset]
  );

  const renderErrorMessage = (error: { message?: string }) => {
    return error && <p className="p-1 text-red-700">{error.message}</p>;
  };

  return (
    <div className="width-full mx-auto">
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:grid lg:grid-cols-2 gap-x-2">
          <InputField {...register("name")} placeholder="Write your name..." />
          {renderErrorMessage(errors.name!)}
          <InputField {...register("phoneNumber")} type="number" />
        </div>
        <InputField
          {...register("email")}
          type="email"
          placeholder="Write your email..."
        />
        {renderErrorMessage(errors.email!)}

        <div className="w-full grid grid-cols-1 items-center gap-4  md:grid-cols-2">
          <InputField {...register("reservationDate")} type="datetime-local" />
          {renderErrorMessage(errors.reservationDate!)}

          <InputField
            {...register("numberOfPeople")}
            placeholder="How many people?..."
            type="number"
          />
          {renderErrorMessage(errors.numberOfPeople!)}
        </div>
        <InputField
          {...register("description")}
          type="text"
          placeholder="Write your description..."
        />
        {renderErrorMessage(errors.description!)}

        <div className="pt-4">
          <Button
            content="Book Now"
            variant="dark"
            className="w-full mx-auto md:w-1/2 "
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>
      {isOpen && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <p>Haz reservado con exito</p>
        </Modal>
      )}
    </div>
  );
};

export default FormBooking;
