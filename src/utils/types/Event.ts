import { z } from "zod";


export interface Event {
    title: string;
    description: string;
    image: string;
}

export const eventSchema = z.object({
    title: z.string(),
    description: z.string(),
    Image: z.string()
})

export type EventForm = z.infer<typeof eventSchema>;