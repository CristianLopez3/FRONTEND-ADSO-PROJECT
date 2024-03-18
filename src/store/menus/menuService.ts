import { menus_service } from "@/api/menu";
import { MenuPost } from "@/types/Menu";
import { MenuStatePatch } from '../../types/Menu';

export const getMenus = async () => {
  const response = await menus_service.getMenus();
  return response.data;
};

export const getMenusByCategory = async (id: number) => {
  const response = await menus_service.getMenusByCategory(id);
  return response.data;
};

export const addMenu = async (menu: FormData) => {
  const response = await menus_service.addMenu(menu);
  return response.data;
};

export const updateMenu = async (menu: MenuPost) => {
  const response = await menus_service.updateMenu(menu);
  return response.data;
};

export const deleteMenu = async (id: number) => {
  const response = await menus_service.deleteMenu(id);
  return response.data;
};

export const changeState = async (menu: MenuStatePatch) => {
  const response = await menus_service.changeState(menu);
  return response.data;
}
