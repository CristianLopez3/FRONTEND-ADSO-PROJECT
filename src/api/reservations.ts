import { instance } from "./base.api";
import { CheckReservation, type Reservation } from "@/types/Reservation";

const endpoint = "reservations";

export const reservationsService = {
  addReservation: function (reservation: Reservation) {
    return instance.post(endpoint, reservation);
  },

  getResevations: function () {
    return instance.get(endpoint);
  },

  getUnCheckedReservations: function () {
    return instance.get(endpoint + "/unchecked-in");
  },

  checkinReservation: function ({ id, checkedIn }: CheckReservation) {
    return instance.patch(endpoint + `/check/` + id, { checkedIn });
  },
};
