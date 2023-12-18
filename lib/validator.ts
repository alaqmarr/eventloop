import * as z from 'zod'
export const eventFormSchema = z.object({
    title: z.string().min(5, 'Title must be atleast 5 characters.'),
    description: z.string().min(5, 'Description must be atleast 5 characters.').max(400, 'Description should be less than 400 characters.'),
    location: z.string().min(5, 'Location must be atleast 5 characters.').max(150, 'Location must be less than 150 characters.'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    category: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
  })