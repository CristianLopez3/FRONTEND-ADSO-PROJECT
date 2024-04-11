import { z } from "zod";

export interface User {
  id?: string | number | null;
  name: string;
  lastName: string;
  username: string;
  password: string;
  identification: string;
  cellphone: string;
  role: string;
}

export const userSchema = z.object({
  id: z.union([z.string(), z.number(), z.null()]),
  name: z.string().min(3, "Name is required"),
  lastName: z.string().min(3, "Lastname is required"),
  username: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password needs at least 8 characteres"),
  identification: z.string().min(7, "Identification have at least 7 characters"),
  cellphone: z.string().min(7, "Cellphone is required"),
  role: z.string().min(4, "Role is required"),
});

export type UserFormTypes = z.infer<typeof userSchema>;

