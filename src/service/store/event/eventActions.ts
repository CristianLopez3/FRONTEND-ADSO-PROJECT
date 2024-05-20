import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEvent, updateEvent, updateEventPicture } from "./eventService";

export const getEventAction = createAsyncThunk("event/getEvent", getEvent);

export const updateEventAction = createAsyncThunk(
  "event/updateEvent",
  updateEvent
);

export const updateEventPictureAction = createAsyncThunk(
  "event/updateEventPicture",
  updateEventPicture
);