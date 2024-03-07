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

const getAllMenus = createAsyncThunk("menus/getAllMenus", async () => {
  const response = await menus_service.getMenus();
  return response.data;
});

const addMenu = createAsyncThunk("menus/createMenu", async (menu: Menu) => {
  const response = await menus_service.addMenu({ menu });
  return response.data;
});

const updateMenu = createAsyncThunk("menus/update", async (menu: Menu) => {
  const response = await menus_service.updateMenu({ menu });
  return response.data;
});

const deleteMenu = createAsyncThunk("menus/delete", async(id: number) => {
  const response = await menus_service.deleteMenu(id);
  return response.data;
})

const menuSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
    // * Add the getAllMenus reducer
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
      // * Add the addMenu reducer
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
      // * Add the updateMenu reducer
      .addCase(updateMenu.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateMenu.fulfilled, (state, action: PayloadAction<Menu[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateMenu.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // * Add the deleteMenu reducer
      .addCase(deleteMenu.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteMenu.fulfilled, (state, action: PayloadAction<Menu[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(deleteMenu.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
});

export { getAllMenus, addMenu, updateMenu, deleteMenu };
export default menuSlice.reducer;