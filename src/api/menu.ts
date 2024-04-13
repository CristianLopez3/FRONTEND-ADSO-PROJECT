import { getCookies } from "@/utils/cookies";
import { ENDPOINTS, instance } from "./base.api";
import { MenuPost, MenuStatePatch } from "@/types/Menu";
import { TOKEN_COOKIE, USER_COOKIE } from "@/store/auth";


const ENDPOINT = ENDPOINTS.MENU;

export const menusService = {
  getMenus:  () => {
    console.log(getCookies(USER_COOKIE));
    return instance.get(ENDPOINT, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookies(TOKEN_COOKIE)}`,
      }
    });
  },

  getMenuById:  (id: number | string) => {
    return instance.get(`${ENDPOINT}/${id}`);
  },

  getMenusByCategory:  (id: number | string) =>  {
    return instance.get(`${ENDPOINT}/category/${id}`);
  },

  addMenu:  (formData: FormData) =>  {
    return instance.post(ENDPOINT, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  deleteMenu: (id: number | string) => {
    return instance.delete(`${ENDPOINT}/${id}`);
  },

  updateMenu:  (menu: MenuPost) =>  {
    return instance.put(`${ENDPOINT}/${menu.id!}`, menu);
  },

  changeState:  ({ id, state }: MenuStatePatch ) => {
    return instance.patch(ENDPOINT + `/state/` + id, { state });
  },

};
