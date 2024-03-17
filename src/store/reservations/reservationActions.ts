// menuActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getReservations,
  createReservation,
  getUncheckedReservations,
  checkedInReservation,
} from "./reservationService";

export const createReservationAction = createAsyncThunk(
  "reservations/createReservation",
  createReservation
);

export const getReservationsAction = createAsyncThunk(
  "reservations/getReservations",
  getReservations
);

export const getUncheckedReservationsAction = createAsyncThunk(
  "reservations/getUncheckedReservations",
  getUncheckedReservations
);

export const checkedInReservationAction = createAsyncThunk(
  "reservations/checkedInReservation",
  checkedInReservation
);
