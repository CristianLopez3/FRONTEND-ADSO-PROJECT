import { EventReducerState } from "@/utils/types/Event";
import { createSlice } from "@reduxjs/toolkit";
import { getEventAction, updateEventAction } from "./eventActions";

const initialState: EventReducerState = {
  isLoading: false,
  data: {
    title: "",
    description: "",
    discount: 0,
    url: "",
  },
  isError: false,
};

const startLoading = (state: EventReducerState) => {
  state.isLoading = true;
  state.isError = false;
};

const loadingFailed = (state: EventReducerState) => {
  state.isLoading = false;
  state.isError = true;
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getEventAction.pending, startLoading)
      .addCase(getEventAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getEventAction.rejected, loadingFailed)

      .addCase(updateEventAction.pending, startLoading)
      .addCase(updateEventAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(updateEventAction.rejected, loadingFailed);
  },
});

export default eventSlice.reducer;
