import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuReducer } from "@/types/Menu";
import {
  getAllMenusAction,
  addMenuAction,
  updateMenuAction,
  deleteMenuAction,
  getMenusByCategoryAction,
  changeStateAction,
} from "./menuActions";
import { Menu } from "@/types/Menu";

const initialState: MenuReducer = {
  isLoading: false,
  data: [],
  isError: false,
};

const startLoading = (state: MenuReducer) => {
  state.isLoading = true;
  state.isError = false;
};

const loadingFailed = (state: MenuReducer) => {
  state.isLoading = false;
  state.isError = true;
};

const menuSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMenusAction.pending, startLoading)
      .addCase(
        getAllMenusAction.fulfilled,
        (state, action: PayloadAction<Menu[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAllMenusAction.rejected, loadingFailed)
      .addCase(addMenuAction.pending, startLoading)
      .addCase(
        addMenuAction.fulfilled,
        (state, action: PayloadAction<Menu>) => {
          state.isLoading = false;
          state.data.push(action.payload);
        }
      )
      .addCase(addMenuAction.rejected, loadingFailed)

      .addCase(updateMenuAction.pending, startLoading)
      .addCase(
        updateMenuAction.fulfilled,
        (state, action: PayloadAction<Menu[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(updateMenuAction.rejected, loadingFailed)
      // * DELETE MENU * //
      .addCase(deleteMenuAction.pending, startLoading)
      
      .addCase(deleteMenuAction.fulfilled, (state, action) => {
        // Obtener el ID del menú eliminado del payload de la acción
        state.isLoading = false;
        const deletedMenuId = action.meta.arg; // Obtiene el ID del menú eliminado de action.meta.arg
        state.data = state.data.filter(menu => menu.id !== deletedMenuId);
      })
      .addCase(deleteMenuAction.rejected, loadingFailed)

      .addCase(getMenusByCategoryAction.pending, startLoading)
      .addCase(
        getMenusByCategoryAction.fulfilled,
        (state, action: PayloadAction<Menu[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getMenusByCategoryAction.rejected, loadingFailed)
      .addCase(changeStateAction.pending, startLoading)
      .addCase(changeStateAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.map((menu) =>
          /**
           * If the id of the menu is the same as the id of the payload, then return the payload
           * the payload in this case is the menu with the updated state
           */
          menu.id === action.payload.id ? action.payload : menu
        );
      })
      .addCase(changeStateAction.rejected, loadingFailed);
  },
});

export default menuSlice.reducer;
