import { z } from "zod";


export interface Menu {
  id? : number | string | null;
  title: string;
  description: string;
  price: number;
  state: boolean;
  idCategory: number | string;
}

export const menuSchema = z.object({
  id: z.union([z.string(), z.number(), z.null()]),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  state: z.string(),
  categoryId: z.union([z.string(), z.number()]),
});

export type MenuForm = z.infer<typeof menuSchema>;


export type Category = {
  id: number | string;
  name: string;
}