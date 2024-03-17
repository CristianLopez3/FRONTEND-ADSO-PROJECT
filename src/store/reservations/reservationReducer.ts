import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getReservationsAction,
  createReservationAction,
  checkedInReservationAction,
} from "./reservationActions";
import { Reservation, ReservationReducer } from "@/types/Reservation";
import { getUncheckedReservationsAction } from './reservationActions';

const initialState: ReservationReducer = {
  isLoading: false,
  data: [],
  isError: false,
};

const reservationSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * Add the getAllMenusAction reducer
      .addCase(getReservationsAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getReservationsAction.fulfilled,
        (state, action: PayloadAction<Reservation[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getReservationsAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // * Add the addMenu reducer
      .addCase(createReservationAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        createReservationAction.fulfilled,
        (state, action: PayloadAction<Reservation>) => {
          state.isLoading = false;
          state.data.push(action.payload);
        }
      )
      .addCase(createReservationAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUncheckedReservationsAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUncheckedReservationsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getUncheckedReservationsAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(checkedInReservationAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(checkedInReservationAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.map((reservation) =>
          reservation.id === action.payload.id ? action.payload : reservation
        );
      })
      .addCase(checkedInReservationAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

  },
});

export default reservationSlice.reducer;
