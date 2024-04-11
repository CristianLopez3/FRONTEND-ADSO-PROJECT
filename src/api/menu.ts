import { instance } from "./base.api";
import { MenuPost, MenuStatePatch } from "@/types/Menu";

const endpoint = "menus";

export const menus_service = {
  getMenus:  () => {
    return instance.get(endpoint);
  },

  getMenuById:  (id: number | string) => {
    return instance.get(`${endpoint}/${id}`);
  },

  getMenusByCategory:  (id: number | string) =>  {
    return instance.get(`${endpoint}/category/${id}`);
  },

  addMenu:  (formData: FormData) =>  {
    return instance.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  deleteMenu: (id: number | string) => {
    return instance.delete(`${endpoint}/${id}`);
  },

  updateMenu:  (menu: MenuPost) =>  {
    return instance.put(`${endpoint}/${menu.id!}`, menu);
  },

  changeState:  ({ id, state }: MenuStatePatch ) => {
    return instance.patch(endpoint + `/state/` + id, { state });
  },


};
