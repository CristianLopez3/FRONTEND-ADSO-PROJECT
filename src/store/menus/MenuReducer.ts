import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { menus_service } from "@/api/menu";
import { Menu } from "@/types/Menu";

interface MenuReducer {
  isLoading: boolean;
  data: Menu[];
  isError: boolean;
}
const initialState: MenuReducer = {
  isLoading: false,
  data: [],
  isError: false,
};

const menuSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {},
  extraReducers: (builder) => 
  builder.addCase(getAllMenus.pending, (state) => {
    state.isLoading = true;
    state.isError = false;
  })
  .addCase(getAllMenus.fulfilled, (state, action: PayloadAction<Menu[]>) => {
    state.isLoading = false;
    state.data = action.payload;
  })
  .addCase(getAllMenus.rejected, (state) => {
    state.isLoading = false;
    state.isError = true;
  })
});

const getAllMenus = createAsyncThunk("menus/getAllMenus", async () => {
  try {
    const response = await menus_service.getMenus();
    return response.data;
  } catch (error) {
    console.log(
      "goint to menu reducer to change the errorr please..." + error
    );
    throw error;
  }
});

export { getAllMenus };
export default menuSlice.reducer;
