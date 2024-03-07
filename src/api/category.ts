import { instance } from "./base.api";

const endpoint = "category";

export const category_service = {
  getCategories: function () {
    return instance.get(endpoint);
  },
};
