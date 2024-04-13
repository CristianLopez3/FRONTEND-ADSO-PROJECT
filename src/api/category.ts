import { getCookies } from "@/utils/cookies";
import { ENDPOINTS, instance } from "./base.api";
import { TOKEN_COOKIE } from "@/store/auth";

const ENDPOINT = ENDPOINTS.CATEGORY;

export const categoryService = {
  getCategories: function () {
    return instance.get(ENDPOINT, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookies(TOKEN_COOKIE)}`,
      },
    });
  },
};
