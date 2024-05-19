import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEvent, updateEvent } from "./eventService";

export const getEventAction = createAsyncThunk("event/getEvent", getEvent);

export const updateEventAction = createAsyncThunk(
  "event/updateEvent",
  updateEvent
);
