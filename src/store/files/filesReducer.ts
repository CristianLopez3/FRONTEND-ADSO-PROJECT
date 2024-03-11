import { filesService } from "@/api/files";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type StateImage = {
  isLoading: boolean;
  url: string;
  isError: boolean;
};

const initialState: StateImage = {
  isLoading: false,
  url: "",
  isError: false,
};

const imagesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getImageAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getImageAction.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.url = action.payload;
        }
      )
      .addCase(getImageAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

const getImageAction = createAsyncThunk(
  "files/getImage",
  async (url: string) => {
    const response = await filesService.getImage(url);
    return response.data;
  }
);

export { getImageAction };
export default imagesSlice.reducer;
