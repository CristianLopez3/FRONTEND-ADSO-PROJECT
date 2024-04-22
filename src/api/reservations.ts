import { instance } from "./base.api";
import { CheckReservation, type Reservation } from "@/types/Reservation";

const ENDPOINT = "reservations";

export const reservationsService = {
  addReservation: function (reservation: Reservation) {
    return instance.post(ENDPOINT, reservation);
  },

  getResevations: function () {
    return instance.get(ENDPOINT);
  },

  getUnCheckedReservations: function () {
    return instance.get(ENDPOINT + "/unchecked-in");
  },

  checkinReservation: function ({ id, checkedIn }: CheckReservation) {
    return instance.patch(ENDPOINT + `/check/` + id, { checkedIn });
  },

  countReservations: () => {
    return instance.get(ENDPOINT + "/count");
  },

  getMonthlyReservations: () => {
    return instance.get(ENDPOINT + "/mes");
  },

  getReservationsBetweenDates: (start: string, end: string) => {
    return instance.get(ENDPOINT + `/between-dates?start=${start}&end=${end}`);
  },

  getReservationsForGivenMonths: (start: string, end: string) => {
    return instance.get(ENDPOINT + `/compare-months?start=${start}&end=${end}`);
  },

  getReservationsForCurrentMonth: () => {
    return instance.get(ENDPOINT + "/current-month");
  },

  getReservationsForPreviousMonth: () => {
    return instance.get(ENDPOINT + "/previous-month");
  },

  getUncheckedInReserations: () => {
    return instance.get(ENDPOINT + "/unchecked-in-count");
  }

};
