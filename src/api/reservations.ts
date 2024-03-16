import { instance } from "./base.api";
import { type Reservation } from "@/types/Reservation";

const endpoint = "reservations";

export const reservationsService = {
  getResevations: function () {
    return instance.get(endpoint);
  },

  addReservation: function ( reservation: Reservation) {
    return instance.post(endpoint, reservation);
  },

};
