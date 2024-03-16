import { reservationsService } from "@/api/reservations"; 
import { Reservation } from "@/types/Reservation";

export const getReservations = async () => {
  const response = await reservationsService.getResevations();
  return response.data;
};

export const createReservation = async (reservation: Reservation) => {
  const response = await reservationsService.addReservation(reservation);
  return response.data;
};

