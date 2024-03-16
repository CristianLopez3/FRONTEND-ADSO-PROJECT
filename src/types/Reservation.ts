import { z } from "zod";

export interface Reservation {
  id?: number | string | null;
  name: string;
  phoneNumber: string;
  email: string;
  reservationDate: string;
  description: string;
  numberOfPeople: number;
}

export const reservationSchema = z.object({
  id: z.union([z.number(), z.string(), z.null()]),
  name: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
  reservationDate: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "Invalid date format",
  }),
  description: z.string(),
  numberOfPeople: z.string().transform(Number),
});

export type ReservationForm = z.infer<typeof reservationSchema>;

export interface ReservationReducer {
  isLoading: boolean;
  data: Reservation[];
  isError: boolean;
}
