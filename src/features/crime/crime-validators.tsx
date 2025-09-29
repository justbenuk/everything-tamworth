import z from "zod";

export const stolenReportSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.string().min(1, 'Please provide your email'),
  contactNumber: z.string().min(1, 'Please provide your contact number'),
  item: z.string().min(1, 'What was stolen'),
  itemDesscription: z.string().min(1, 'Please provide a description of the item'),
  registration: z.string(),
  image: z.string(),
  published: z.boolean(),
  featured: z.boolean()
})
