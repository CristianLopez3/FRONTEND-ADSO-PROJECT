import { reservationsService } from "@/api/reservations";
import { Reservation } from "@/types/Reservation";
import { CheckReservation } from "@/types/Reservation"; // Import the CheckReservation type

export const createReservation = async (reservation: Reservation) => {
  const response = await reservationsService.addReservation(reservation);
  return response.data;
};

export const getReservations = async () => {
  const response = await reservationsService.getResevations();
  return response.data;
};

export const getUncheckedReservations = async () => {
  const response = await reservationsService.getUnCheckedReservations();
  return response.data;
};

export const checkedInReservation = async ({
  id,
  checkedIn,
}: CheckReservation) => {
  const response = await reservationsService.checkinReservation({
    id,
    checkedIn,
  });
  return response.data;
};


export const countReservations = async () => {
  const response = await reservationsService.countReservations();
  return response.data;
}