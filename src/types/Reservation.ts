import {z} from 'zod'

export interface Reservation  {
  id?: number | string | null;
  name: string;
  phoneNumber: string; // Agregado
  email: string; // Agregado
  reservationDate: string; // Agregado
  description: string;
  numberOfPeople: number;
}

export const reservationSchema = z.object({
  id: z.union([z.number(), z.string(), z.null()]),
  name: z.string(),
  phoneNumber: z.string(), // Agregado
  email: z.string().email(), // Agregado
  reservationDate: z.string().refine(value => !isNaN(Date.parse(value)), { // Agregado
	message: "Invalid date format",
  }),
  description: z.string(),
  numberOfPeople: z.number()
});

export type ReservationForm = z.infer<typeof reservationSchema>;

