// menuActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReservations, createReservation } from "./reservationService";

export const getReservationsAction = createAsyncThunk("reservations/getReservations", getReservations);

export const createReservationAction = createAsyncThunk("reservations/createReservation", createReservation);
