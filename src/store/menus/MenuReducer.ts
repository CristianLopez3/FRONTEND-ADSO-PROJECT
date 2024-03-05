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
    builder
      .addCase(getAllMenus.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getAllMenus.fulfilled,
        (state, action: PayloadAction<Menu[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAllMenus.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addMenu.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addMenu.fulfilled, (state, action: PayloadAction<Menu>) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addMenu.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
});

const getAllMenus = createAsyncThunk("menus/getAllMenus", async () => {
  const response = await menus_service.getMenus();
  return response.data;
});

const addMenu = createAsyncThunk("menus/createMenu", async (menu: Menu) => {
  const response = await menus_service.addMenu({ menu });
  return response.data;
});

export { getAllMenus, addMenu };
export default menuSlice.reducer;
