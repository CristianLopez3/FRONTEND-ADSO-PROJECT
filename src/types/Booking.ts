import {z} from 'zod'

export interface Booking  {
  id?: number;
  name: string;
  description: string;
  date: string;
  time: string;
}

export const bookSchema = z.object({
  id: z.union([z.number(), z.string(), z.null()]),
  name: z.string(),
  description: z.string(),
  date: z.string().refine(value => !isNaN(Date.parse(value)), {
    message: "Invalid date format",
  }),
  time: z.string().refine(value => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value), {
    message: "Invalid time format",
  }),
});

export type BookingForm = z.infer<typeof bookSchema>;