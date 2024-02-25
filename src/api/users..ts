import { instance } from "./base.api";

const endpoint = "users";

export const users = {
  getAll: function ({ page }: { page: number }) {
    return instance.get(endpoint, {
      params: {
        page,
      },
    });
  },
};
